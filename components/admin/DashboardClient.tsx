"use client";

import { useState } from "react";
import { useRealtime } from "./RealtimeProvider";
import ReservationsTable from "../ReservationsTable";
import QuickBookingForm from "./QuickBookingForm";
import TableMap from "./TableMap";

type AdminTab = "reservations" | "quick_booking" | "tables";

interface DashboardClientProps {
  onLogout: () => Promise<void>;
}

export default function DashboardClient({ onLogout }: DashboardClientProps) {
  const { reservations, tables, isConnected, refreshAll } = useRealtime();
  const [activeTab, setActiveTab] = useState<AdminTab>("reservations");

  const todayStr = new Date().toISOString().split("T")[0];

  // Stats calculation
  const pendingCount = reservations.filter((r) => r.status === "pending").length;
  const completedCount = reservations.filter((r) => r.status === "completed").length;
  const todayCount = reservations.filter((r) => r.date === todayStr).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-cream-100 to-olive-50">
      {/* Top Header */}
      <header className="bg-white border-b border-olive-100 shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🫒</span>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-[family-name:var(--font-display)] text-xl font-bold text-olive-900">
                  Pannello dell&apos;Oste
                </h1>
                {/* Realtime Live Sync Indicator */}
                <span
                  title={
                    isConnected
                      ? "Sincronizzazione Realtime Attiva"
                      : "Connessione in corso..."
                  }
                  className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    isConnected
                      ? "bg-green-100 text-green-800 border border-green-300"
                      : "bg-amber-100 text-amber-800 border border-amber-300 animate-pulse"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isConnected ? "bg-green-500 animate-ping" : "bg-amber-500"
                    }`}
                  />
                  {isConnected ? "Live Sync" : "Syncing"}
                </span>
              </div>
              <p className="text-olive-500 text-xs">
                Osteria da Miduccia · Caserta
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => refreshAll()}
              title="Aggiorna dati manuale"
              className="text-xs bg-olive-50 hover:bg-olive-100 text-olive-700 px-3 py-2 rounded-xl border border-olive-200 font-semibold transition-all"
            >
              🔄 Ricarica
            </button>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="text-olive-600 hover:text-terra-600 text-xs font-semibold px-3 py-2 rounded-xl hover:bg-olive-50 transition-colors hidden sm:block"
            >
              🌐 Vedi Sito
            </a>
            <form action={onLogout}>
              <button
                type="submit"
                className="bg-olive-800 hover:bg-olive-900 text-cream-50 text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-sm"
              >
                Esci
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* KPI Stat Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white rounded-3xl border border-olive-100 p-5 shadow-sm">
            <p className="text-olive-500 text-xs uppercase tracking-wider font-bold">
              ⏳ In Attesa (In Alto)
            </p>
            <p className="text-3xl font-black text-amber-600 mt-1 font-[family-name:var(--font-display)]">
              {pendingCount}
            </p>
            <p className="text-[11px] text-olive-400 mt-0.5">Da gestire e assegnare</p>
          </div>

          <div className="bg-white rounded-3xl border border-olive-100 p-5 shadow-sm">
            <p className="text-olive-500 text-xs uppercase tracking-wider font-bold">
              📅 Oggi ({todayStr})
            </p>
            <p className="text-3xl font-black text-terra-600 mt-1 font-[family-name:var(--font-display)]">
              {todayCount}
            </p>
            <p className="text-[11px] text-olive-400 mt-0.5">Prenotazioni totali per oggi</p>
          </div>

          <div className="bg-white rounded-3xl border border-olive-100 p-5 shadow-sm">
            <p className="text-olive-500 text-xs uppercase tracking-wider font-bold">
              ✔️ Completate (In Basso)
            </p>
            <p className="text-3xl font-black text-green-700 mt-1 font-[family-name:var(--font-display)]">
              {completedCount}
            </p>
            <p className="text-[11px] text-olive-400 mt-0.5">Tavoli già liberati</p>
          </div>

          <div className="bg-white rounded-3xl border border-olive-100 p-5 shadow-sm">
            <p className="text-olive-500 text-xs uppercase tracking-wider font-bold">
              🪑 Tavoli nel Locale
            </p>
            <p className="text-3xl font-black text-olive-900 mt-1 font-[family-name:var(--font-display)]">
              {tables.length}
            </p>
            <p className="text-[11px] text-olive-400 mt-0.5">Gestibili dalla mappa grafica</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex bg-white p-1.5 rounded-3xl border border-olive-100 shadow-sm gap-2 max-w-xl">
          <button
            onClick={() => setActiveTab("reservations")}
            className={`flex-1 py-3 px-4 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
              activeTab === "reservations"
                ? "bg-olive-800 text-cream-50 shadow-md"
                : "text-olive-600 hover:bg-olive-50"
            }`}
          >
            <span>📋</span> Prenotazioni
            {pendingCount > 0 && (
              <span className="bg-amber-500 text-white text-[10px] px-2 py-0.5 rounded-full font-black">
                {pendingCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("quick_booking")}
            className={`flex-1 py-3 px-4 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
              activeTab === "quick_booking"
                ? "bg-terra-500 text-white shadow-md"
                : "text-olive-600 hover:bg-olive-50"
            }`}
          >
            <span>⚡</span> Inserimento Rapido
          </button>

          <button
            onClick={() => setActiveTab("tables")}
            className={`flex-1 py-3 px-4 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
              activeTab === "tables"
                ? "bg-olive-800 text-cream-50 shadow-md"
                : "text-olive-600 hover:bg-olive-50"
            }`}
          >
            <span>🪑</span> Mappa & Gestione Tavoli
          </button>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === "reservations" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-olive-900">
                    Registro Prenotazioni
                  </h2>
                  <p className="text-olive-500 text-xs mt-0.5">
                    Le prenotazioni in attesa appaiono in alto, quelle completate in basso
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab("quick_booking")}
                  className="bg-terra-500 hover:bg-terra-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm transition-all flex items-center gap-1.5"
                >
                  <span>⚡</span> Nuova Prenotazione
                </button>
              </div>
              <ReservationsTable reservations={reservations} tables={tables} />
            </div>
          )}

          {activeTab === "quick_booking" && (
            <QuickBookingForm
              tables={tables}
              reservations={reservations}
              onSuccess={() => setActiveTab("reservations")}
            />
          )}

          {activeTab === "tables" && (
            <div className="space-y-4">
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-olive-900">
                  Mappa & Gestione Grafica Tavoli
                </h2>
                <p className="text-olive-500 text-xs mt-0.5">
                  Trascina i tavoli per posizionarli graficamente nella sala, aggiungi nuovi tavoli o modificali con un click
                </p>
              </div>
              <TableMap
                tables={tables}
                reservations={reservations}
                onOpenQuickBookingForTable={() => {
                  setActiveTab("quick_booking");
                }}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
