"use server";

import { BookingFormState, Table } from "@/lib/types";

function timeToMinutes(timeStr: string): number {
  const [h, m] = timeStr.split(":").map(Number);
  return h * 60 + (m || 0);
}

export async function submitBooking(
  prevState: BookingFormState,
  formData: FormData
): Promise<BookingFormState> {
  const name = formData.get("name") as string;
  const guests = parseInt(formData.get("guests") as string);
  const date = formData.get("date") as string;
  const time = formData.get("time") as string;
  const phone = formData.get("phone") as string;
  const notes = (formData.get("notes") as string) || null;

  // Validation
  if (!name || name.trim().length < 2) {
    return { success: false, error: "Inserisci un nome valido.", message: null };
  }
  if (!guests || guests < 1 || guests > 12) {
    return { success: false, error: "Numero di persone non valido (max 12).", message: null };
  }
  if (!date) {
    return { success: false, error: "Seleziona una data.", message: null };
  }
  if (!time) {
    return { success: false, error: "Seleziona un orario.", message: null };
  }
  if (!phone || phone.trim().length < 6) {
    return { success: false, error: "Inserisci un numero di telefono valido.", message: null };
  }

  // Check if date is not in the past
  const bookingDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (bookingDate < today) {
    return { success: false, error: "Non puoi prenotare per una data passata.", message: null };
  }

  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey && !supabaseUrl.includes("your-project")) {
      const { createClient } = await import("@/lib/supabase/server");
      const supabase = await createClient();

      // Check table availability (if tables table exists)
      const { data: allTables } = await supabase
        .from("tables")
        .select("*")
        .eq("active", true)
        .gte("seats", guests)
        .order("seats", { ascending: true });

      let assignedTableId: string | null = null;

      if (allTables && allTables.length > 0) {
        const { data: dayReservations } = await supabase
          .from("reservations")
          .select("table_id, time, status")
          .eq("date", date)
          .eq("status", "pending")
          .not("table_id", "is", null);

        const reqMinutes = timeToMinutes(time);

        const occupiedTableIds = new Set<string>();
        if (dayReservations) {
          for (const res of dayReservations) {
            const resMinutes = timeToMinutes(res.time);
            if (Math.abs(reqMinutes - resMinutes) < 120 && res.table_id) {
              occupiedTableIds.add(res.table_id);
            }
          }
        }

        const availableTable = (allTables as Table[]).find(
          (t) => !occupiedTableIds.has(t.id)
        );

        if (!availableTable) {
          return {
            success: false,
            error: `Nessuna disponibilità di tavoli per ${guests} persone il ${new Date(date).toLocaleDateString("it-IT", { day: "numeric", month: "long" })} alle ${time}. Ti invitiamo a provare un altro orario o a chiamarci al +39 0823 456 789.`,
            message: null,
          };
        }

        assignedTableId = availableTable.id;
      }

      // Insert reservation
      const { error: insertErr } = await supabase.from("reservations").insert({
        name: name.trim(),
        guests,
        date,
        time,
        phone: phone.trim(),
        notes: notes?.trim() || null,
        handled: false,
        status: "pending",
        source: "website",
        table_id: assignedTableId,
      });

      if (insertErr) {
        console.error("Supabase insert error:", insertErr);
        return {
          success: false,
          error: "Errore nel salvataggio. Riprova o chiamaci direttamente.",
          message: null,
        };
      }
    } else {
      console.log("📋 Prenotazione (mock):", { name, guests, date, time, phone, notes });
      await new Promise((resolve) => setTimeout(resolve, 800));
    }

    return {
      success: true,
      error: null,
      message: `Grazie ${name.trim().split(" ")[0]}! Ti aspettiamo il ${new Date(date).toLocaleDateString("it-IT", { weekday: "long", day: "numeric", month: "long" })} alle ${time}. Riceverai una conferma al più presto.`,
    };
  } catch (err) {
    console.error("Booking error:", err);
    return {
      success: false,
      error: "Si è verificato un errore. Riprova tra qualche istante.",
      message: null,
    };
  }
}
