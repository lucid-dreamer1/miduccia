"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitBooking } from "@/app/actions/booking";
import { BookingFormState } from "@/lib/types";
import Link from "next/link";

const initialState: BookingFormState = {
  success: false,
  error: null,
  message: null,
};

export default function BookingForm() {
  const [state, formAction, isPending] = useActionState(submitBooking, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  // Generate time slots (12:00 - 14:30, 19:00 - 22:30)
  const timeSlots: string[] = [];
  for (let h = 12; h <= 14; h++) {
    timeSlots.push(`${h.toString().padStart(2, "0")}:00`);
    if (h < 14 || h === 14) timeSlots.push(`${h.toString().padStart(2, "0")}:30`);
  }
  for (let h = 19; h <= 22; h++) {
    timeSlots.push(`${h.toString().padStart(2, "0")}:00`);
    if (h < 22 || h === 22) timeSlots.push(`${h.toString().padStart(2, "0")}:30`);
  }

  // Min date: today
  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="prenota" className="py-20 sm:py-28 bg-olive-900 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-terra-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-olive-400 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-terra-400 text-sm uppercase tracking-[0.25em] font-medium">
            Ti Aspettiamo
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-bold text-cream-50 mt-3 mb-4">
            Prenota un Tavolo
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-terra-400 to-terra-600 mx-auto rounded-full" />
          <p className="text-cream-200/70 mt-6 max-w-md mx-auto">
            Compila il modulo e ti confermeremo la prenotazione al più presto.
          </p>
        </div>

        {/* Success/Error Messages */}
        {state.success && (
          <div className="mb-8 bg-green-500/10 border border-green-500/30 rounded-2xl p-5 text-center">
            <p className="text-green-400 font-medium text-lg">✓ Prenotazione inviata!</p>
            <p className="text-green-400/70 text-sm mt-1">{state.message}</p>
          </div>
        )}
        {state.error && (
          <div className="mb-8 bg-red-500/10 border border-red-500/30 rounded-2xl p-5 text-center">
            <p className="text-red-400 font-medium">✗ {state.error}</p>
          </div>
        )}

        {/* Form */}
        <form
          ref={formRef}
          action={formAction}
          className="bg-white/5 backdrop-blur-sm border border-cream-100/10 rounded-3xl p-6 sm:p-10 space-y-6"
        >
          {/* Name */}
          <div>
            <label htmlFor="booking-name" className="block text-cream-200 text-sm font-medium mb-2">
              Nome e Cognome *
            </label>
            <input
              id="booking-name"
              name="name"
              type="text"
              required
              placeholder="Mario Rossi"
              className="w-full bg-white/10 border border-cream-100/15 rounded-xl px-4 py-3.5 text-cream-50 placeholder:text-cream-300/30 focus:outline-none focus:ring-2 focus:ring-terra-500/50 focus:border-terra-500/50 transition-all duration-300"
            />
          </div>

          {/* Guests + Date row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="booking-guests" className="block text-cream-200 text-sm font-medium mb-2">
                Numero Persone *
              </label>
              <select
                id="booking-guests"
                name="guests"
                required
                className="w-full bg-white/10 border border-cream-100/15 rounded-xl px-4 py-3.5 text-cream-50 focus:outline-none focus:ring-2 focus:ring-terra-500/50 focus:border-terra-500/50 transition-all duration-300 appearance-none"
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n} className="bg-olive-800 text-cream-50">
                    {n} {n === 1 ? "persona" : "persone"}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="booking-date" className="block text-cream-200 text-sm font-medium mb-2">
                Data *
              </label>
              <input
                id="booking-date"
                name="date"
                type="date"
                required
                min={today}
                className="w-full bg-white/10 border border-cream-100/15 rounded-xl px-4 py-3.5 text-cream-50 focus:outline-none focus:ring-2 focus:ring-terra-500/50 focus:border-terra-500/50 transition-all duration-300"
              />
            </div>
          </div>

          {/* Time + Phone row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="booking-time" className="block text-cream-200 text-sm font-medium mb-2">
                Ora *
              </label>
              <select
                id="booking-time"
                name="time"
                required
                className="w-full bg-white/10 border border-cream-100/15 rounded-xl px-4 py-3.5 text-cream-50 focus:outline-none focus:ring-2 focus:ring-terra-500/50 focus:border-terra-500/50 transition-all duration-300 appearance-none"
              >
                <option value="" className="bg-olive-800">Seleziona orario</option>
                <optgroup label="Pranzo" className="bg-olive-800">
                  {timeSlots.filter((t) => parseInt(t) < 15).map((t) => (
                    <option key={t} value={t} className="bg-olive-800 text-cream-50">
                      {t}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Cena" className="bg-olive-800">
                  {timeSlots.filter((t) => parseInt(t) >= 19).map((t) => (
                    <option key={t} value={t} className="bg-olive-800 text-cream-50">
                      {t}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>
            <div>
              <label htmlFor="booking-phone" className="block text-cream-200 text-sm font-medium mb-2">
                Telefono *
              </label>
              <input
                id="booking-phone"
                name="phone"
                type="tel"
                required
                placeholder="+39 333 123 4567"
                className="w-full bg-white/10 border border-cream-100/15 rounded-xl px-4 py-3.5 text-cream-50 placeholder:text-cream-300/30 focus:outline-none focus:ring-2 focus:ring-terra-500/50 focus:border-terra-500/50 transition-all duration-300"
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label htmlFor="booking-notes" className="block text-cream-200 text-sm font-medium mb-2">
              Note <span className="text-cream-400/50">(allergie, seggiolone, ecc.)</span>
            </label>
            <textarea
              id="booking-notes"
              name="notes"
              rows={3}
              placeholder="Es: tavolo all'aperto, intolleranze..."
              className="w-full bg-white/10 border border-cream-100/15 rounded-xl px-4 py-3.5 text-cream-50 placeholder:text-cream-300/30 focus:outline-none focus:ring-2 focus:ring-terra-500/50 focus:border-terra-500/50 transition-all duration-300 resize-none"
            />
          </div>

          {/* Privacy checkbox */}
          <div className="flex items-start gap-3">
            <input
              id="booking-privacy"
              name="privacy"
              type="checkbox"
              required
              className="mt-1 w-4 h-4 rounded border-cream-100/30 bg-white/10 text-terra-500 focus:ring-terra-500/50 focus:ring-2 cursor-pointer"
            />
            <label htmlFor="booking-privacy" className="text-cream-200/70 text-sm leading-relaxed cursor-pointer">
              Ho letto e accetto la{" "}
              <Link
                href="/privacy-policy"
                target="_blank"
                className="text-terra-400 hover:text-terra-300 underline transition-colors"
              >
                Privacy Policy
              </Link>{" "}
              *
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-terra-500 hover:bg-terra-600 disabled:bg-terra-500/50 disabled:cursor-not-allowed text-white text-lg font-semibold py-4 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-terra-500/25 hover:-translate-y-0.5 flex items-center justify-center gap-3"
          >
            {isPending ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Invio in corso...
              </>
            ) : (
              <>
                Conferma Prenotazione
                <span aria-hidden="true">→</span>
              </>
            )}
          </button>

          {/* Response time promise */}
          <div className="text-center pt-2">
            <p className="text-cream-200/60 text-sm flex items-center justify-center gap-2">
              <span>⏱</span>
              Ti confermiamo la prenotazione entro <strong className="text-cream-100/80">2 ore</strong>
            </p>
            <p className="text-cream-300/40 text-xs mt-1">
              Se preferisci, chiamaci al{" "}
              <a href="tel:+390823456789" className="text-terra-400/70 hover:text-terra-400 transition-colors">
                +39 0823 456 789
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
