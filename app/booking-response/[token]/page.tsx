export const dynamic = "force-dynamic";

interface BookingResponsePageProps {
  params: Promise<{ token: string }>;
  searchParams: Promise<{ result?: string; status?: string }>;
}

export default async function BookingResponsePage({
  params,
  searchParams,
}: BookingResponsePageProps) {
  const { token } = await params;
  const { result, status } = await searchParams;

  const isInvalid = token === "invalid";
  const isError = result === "error";
  const isAlreadyHandled = result === "already_handled";
  const isConfirmed = result === "confirmed";
  const isRejected = result === "rejected";

  let title = "Stato Prenotazione";
  let message = "Operazione completata.";
  let color = "olive";

  if (isConfirmed) {
    title = "Prenotazione Confermata";
    message = "La prenotazione è stata accettata. Il cliente ha ricevuto l'email di conferma.";
    color = "emerald";
  } else if (isRejected) {
    title = "Prenotazione Rifiutata";
    message = "La prenotazione è stata rifiutata. Il cliente è stato informato via email.";
    color = "red";
  } else if (isAlreadyHandled) {
    title = "Richiesta Già Gestita";
    message = `Questa richiesta è già stata elaborata (stato attuale: ${status || "completata"}).`;
    color = "amber";
  } else if (isInvalid) {
    title = "Collegamento Non Valido";
    message = "Il link utilizzato non è valido oppure la prenotazione non è presente a sistema.";
    color = "red";
  } else if (isError) {
    title = "Errore di Elaborazione";
    message = "Si è verificato un errore durante l'aggiornamento. Riprova dal Pannello dell'Oste.";
    color = "red";
  }

  const bgColors: Record<string, string> = {
    emerald: "from-emerald-50 to-green-50",
    red: "from-red-50 to-orange-50",
    amber: "from-amber-50 to-yellow-50",
    olive: "from-cream-50 to-olive-50",
  };

  const borderColors: Record<string, string> = {
    emerald: "border-emerald-200",
    red: "border-red-200",
    amber: "border-amber-200",
    olive: "border-olive-200",
  };

  const titleColors: Record<string, string> = {
    emerald: "text-emerald-800",
    red: "text-red-800",
    amber: "text-amber-800",
    olive: "text-olive-800",
  };

  const badgeColors: Record<string, string> = {
    emerald: "bg-emerald-100 text-emerald-800 border-emerald-300",
    red: "bg-red-100 text-red-800 border-red-300",
    amber: "bg-amber-100 text-amber-800 border-amber-300",
    olive: "bg-olive-100 text-olive-800 border-olive-300",
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${bgColors[color]} flex items-center justify-center p-4`}>
      <div className={`bg-white rounded-3xl border ${borderColors[color]} shadow-xl max-w-md w-full p-8 sm:p-10 text-center`}>
        {/* Brand Header */}
        <div className="mb-6 pb-5 border-b border-olive-100/60">
          <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-olive-900 tracking-tight">
            Osteria da Miduccia
          </h2>
          <p className="text-olive-500 text-xs mt-0.5 uppercase tracking-wider font-semibold">
            Gestione Prenotazioni
          </p>
        </div>

        {/* Status Indicator */}
        <div className="mb-8">
          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl border ${badgeColors[color]} mb-4 font-bold text-lg`}>
            {isConfirmed ? (
              <svg className="w-7 h-7 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ) : isRejected || isInvalid || isError ? (
              <svg className="w-7 h-7 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            )}
          </div>
          <h1 className={`font-[family-name:var(--font-display)] text-2xl font-bold ${titleColors[color]} mb-2`}>
            {title}
          </h1>
          <p className="text-olive-600 text-sm leading-relaxed max-w-xs mx-auto">
            {message}
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-3 pt-2">
          <a
            href="/admin/dashboard"
            className="block bg-olive-800 hover:bg-olive-900 text-cream-50 text-xs uppercase tracking-wider font-bold py-3.5 rounded-xl transition-all shadow-sm"
          >
            Apri Pannello dell&apos;Oste
          </a>
          <a
            href="/"
            className="block text-olive-500 hover:text-olive-700 text-xs font-semibold py-2 transition-colors"
          >
            Torna al Sito Web
          </a>
        </div>
      </div>
    </div>
  );
}
