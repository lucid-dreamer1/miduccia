// ─── Menu ───
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "antipasti" | "primi" | "secondi" | "dolci";
  available: boolean;
  created_at?: string;
}

export type MenuCategory = MenuItem["category"];

// ─── Reservation Status (Simplified to 3 states) ───
export type ReservationStatus = "pending" | "completed" | "cancelled";

export type ReservationSource = "website" | "phone" | "walk_in";

// ─── Table ───
export type TableZone = "sala" | "esterno" | "privata";

export interface Table {
  id: string;
  number: number;
  seats: number;
  zone: TableZone;
  active: boolean;
  position_x?: number; // 0 - 100 percentage on floor plan
  position_y?: number; // 0 - 100 percentage on floor plan
  created_at?: string;
}

// ─── Reservation ───
export interface Reservation {
  id: string;
  name: string;
  guests: number;
  date: string;
  time: string;
  phone: string;
  notes: string | null;
  handled: boolean;
  status: ReservationStatus;
  source: ReservationSource;
  table_id: string | null;
  created_at: string;
  table?: Table;
}

// ─── Form States ───
export interface BookingFormState {
  success: boolean;
  error: string | null;
  message: string | null;
}

export interface QuickBookingFormState {
  success: boolean;
  error: string | null;
  message: string | null;
}

// ─── Status configuration ───
export const STATUS_CONFIG: Record<
  ReservationStatus,
  { label: string; color: string; bgColor: string; borderColor: string; icon: string }
> = {
  pending: {
    label: "In attesa",
    color: "text-amber-800",
    bgColor: "bg-amber-100",
    borderColor: "border-amber-300",
    icon: "⏳",
  },
  completed: {
    label: "Completata",
    color: "text-green-800",
    bgColor: "bg-green-100",
    borderColor: "border-green-300",
    icon: "✔️",
  },
  cancelled: {
    label: "Annullata",
    color: "text-gray-600",
    bgColor: "bg-gray-100",
    borderColor: "border-gray-300",
    icon: "✕",
  },
};

export const SOURCE_CONFIG: Record<
  ReservationSource,
  { label: string; icon: string }
> = {
  website: { label: "Sito Web", icon: "🌐" },
  phone: { label: "Telefono", icon: "📞" },
  walk_in: { label: "Passaggio", icon: "🚶" },
};

// ─── Constants ───
export const RESERVATION_DURATION_HOURS = 2;
export const TABLE_ZONES: { key: TableZone; label: string }[] = [
  { key: "sala", label: "Sala Principale" },
  { key: "esterno", label: "Dehors Esterno" },
  { key: "privata", label: "Sala Riservata" },
];
