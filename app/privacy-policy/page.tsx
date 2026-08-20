import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Osteria da Miduccia",
  description:
    "Informativa sulla privacy dell'Osteria da Miduccia ai sensi del Regolamento UE 2016/679 (GDPR). Scopri come trattiamo i tuoi dati personali.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-cream-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <span className="text-terra-500 text-sm uppercase tracking-[0.25em] font-medium">
              Informativa Legale
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-olive-900 mt-3 mb-4">
              Privacy Policy
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-terra-400 to-terra-600 rounded-full" />
            <p className="text-olive-500 mt-4 text-sm">
              Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>

          {/* Content */}
          <div className="prose-custom space-y-8 text-olive-700 text-[15px] leading-relaxed">
            <section>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-olive-900 mb-3">
                1. Titolare del Trattamento
              </h2>
              <p>
                Il Titolare del trattamento dei dati personali è{" "}
                <strong>Osteria da Miduccia</strong>, con sede in Via Roma 42,
                81100 Caserta (CE), Italia.
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>
                  Email:{" "}
                  <a href="mailto:info@osteriadamiduccia.it" className="text-terra-600 hover:text-terra-700 underline">
                    info@osteriadamiduccia.it
                  </a>
                </li>
                <li>Telefono: +39 0823 456 789</li>
                <li>P.IVA: 00000000000</li>
              </ul>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-olive-900 mb-3">
                2. Tipologie di Dati Raccolti
              </h2>
              <p>
                Attraverso il sito web e il modulo di prenotazione, raccogliamo
                i seguenti dati personali forniti volontariamente dall&apos;utente:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Nome e cognome</li>
                <li>Numero di telefono</li>
                <li>Numero di persone e data/ora della prenotazione</li>
                <li>Note aggiuntive (es. allergie, preferenze)</li>
              </ul>
              <p className="mt-3">
                Raccogliamo inoltre dati di navigazione in forma anonima tramite
                Google Analytics (se l&apos;utente ha prestato il consenso), tra cui:
                indirizzo IP anonimizzato, pagine visitate, durata della visita,
                tipo di dispositivo e browser.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-olive-900 mb-3">
                3. Finalità del Trattamento
              </h2>
              <p>I dati personali sono trattati per le seguenti finalità:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>
                  <strong>Gestione delle prenotazioni:</strong> per confermare,
                  modificare o annullare la prenotazione del tavolo.
                </li>
                <li>
                  <strong>Comunicazione:</strong> per contattare l&apos;utente in
                  relazione alla prenotazione effettuata.
                </li>
                <li>
                  <strong>Analisi statistica:</strong> per migliorare
                  l&apos;esperienza di navigazione sul sito (solo previo consenso).
                </li>
                <li>
                  <strong>Adempimenti legali:</strong> per adempiere a obblighi
                  previsti dalla legge.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-olive-900 mb-3">
                4. Base Giuridica del Trattamento
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Esecuzione di un contratto</strong> (Art. 6.1.b GDPR):
                  per la gestione della prenotazione.
                </li>
                <li>
                  <strong>Consenso</strong> (Art. 6.1.a GDPR): per l&apos;utilizzo
                  di cookie analitici e di profilazione.
                </li>
                <li>
                  <strong>Obbligo legale</strong> (Art. 6.1.c GDPR): per
                  adempimenti fiscali e normativi.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-olive-900 mb-3">
                5. Periodo di Conservazione
              </h2>
              <p>
                I dati relativi alle prenotazioni sono conservati per un periodo
                massimo di <strong>12 mesi</strong> dalla data della
                prenotazione, dopodiché vengono cancellati in modo sicuro.
              </p>
              <p className="mt-2">
                I dati di navigazione raccolti tramite Google Analytics sono
                conservati per un massimo di <strong>14 mesi</strong>, come da
                impostazione predefinita di GA4.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-olive-900 mb-3">
                6. Condivisione dei Dati
              </h2>
              <p>
                I dati personali non vengono venduti né ceduti a terzi. Possono
                essere condivisi esclusivamente con:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>
                  <strong>Google LLC</strong> — per il servizio Google Analytics
                  (solo previo consenso). Google agisce come responsabile del
                  trattamento ai sensi dell&apos;Art. 28 GDPR.
                </li>
                <li>
                  <strong>Supabase Inc.</strong> — per l&apos;hosting del database
                  delle prenotazioni.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-olive-900 mb-3">
                7. Diritti dell&apos;Interessato
              </h2>
              <p>
                Ai sensi degli articoli 15-22 del GDPR, l&apos;utente ha diritto di:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>
                  <strong>Accesso:</strong> ottenere conferma dell&apos;esistenza dei
                  propri dati e riceverne copia.
                </li>
                <li>
                  <strong>Rettifica:</strong> correggere dati inesatti o
                  incompleti.
                </li>
                <li>
                  <strong>Cancellazione:</strong> richiedere la cancellazione dei
                  propri dati (&quot;diritto all&apos;oblio&quot;).
                </li>
                <li>
                  <strong>Limitazione:</strong> limitare il trattamento in
                  determinati casi.
                </li>
                <li>
                  <strong>Portabilità:</strong> ricevere i propri dati in formato
                  strutturato e leggibile.
                </li>
                <li>
                  <strong>Opposizione:</strong> opporsi al trattamento per
                  motivi legittimi.
                </li>
                <li>
                  <strong>Revoca del consenso:</strong> revocare in qualsiasi
                  momento il consenso prestato.
                </li>
              </ul>
              <p className="mt-3">
                Per esercitare questi diritti, contattaci a{" "}
                <a href="mailto:info@osteriadamiduccia.it" className="text-terra-600 hover:text-terra-700 underline">
                  info@osteriadamiduccia.it
                </a>
                .
              </p>
              <p className="mt-2">
                L&apos;utente ha inoltre il diritto di proporre reclamo al{" "}
                <strong>Garante per la Protezione dei Dati Personali</strong>{" "}
                (
                <a
                  href="https://www.garanteprivacy.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terra-600 hover:text-terra-700 underline"
                >
                  www.garanteprivacy.it
                </a>
                ).
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-olive-900 mb-3">
                8. Cookie
              </h2>
              <p>
                Per informazioni dettagliate sui cookie utilizzati da questo
                sito, consulta la nostra{" "}
                <Link href="/cookie-policy" className="text-terra-600 hover:text-terra-700 underline">
                  Cookie Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-olive-900 mb-3">
                9. Modifiche alla Privacy Policy
              </h2>
              <p>
                Il Titolare si riserva il diritto di apportare modifiche alla
                presente informativa in qualsiasi momento. Le modifiche saranno
                pubblicate su questa pagina con indicazione della data di ultimo
                aggiornamento.
              </p>
            </section>
          </div>

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-olive-200">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-terra-600 hover:text-terra-700 font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Torna alla Homepage
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
