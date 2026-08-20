import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy | Osteria da Miduccia",
  description:
    "Informativa sui cookie utilizzati dal sito dell'Osteria da Miduccia, ai sensi della Direttiva ePrivacy e delle Linee Guida del Garante Privacy.",
};

export default function CookiePolicyPage() {
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
              Cookie Policy
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
                1. Cosa Sono i Cookie
              </h2>
              <p>
                I cookie sono piccoli file di testo che vengono memorizzati sul
                tuo dispositivo (computer, smartphone, tablet) quando visiti un
                sito web. Servono a migliorare la tua esperienza di navigazione e
                a fornire informazioni al proprietario del sito.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-olive-900 mb-3">
                2. Cookie Utilizzati
              </h2>
              <p className="mb-4">
                Il nostro sito utilizza le seguenti tipologie di cookie:
              </p>

              {/* Cookie table */}
              <div className="overflow-x-auto rounded-2xl border border-olive-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-olive-100">
                      <th className="text-left py-3 px-4 font-semibold text-olive-900">Cookie</th>
                      <th className="text-left py-3 px-4 font-semibold text-olive-900">Tipo</th>
                      <th className="text-left py-3 px-4 font-semibold text-olive-900">Fornitore</th>
                      <th className="text-left py-3 px-4 font-semibold text-olive-900">Durata</th>
                      <th className="text-left py-3 px-4 font-semibold text-olive-900">Finalità</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-olive-100">
                    <tr>
                      <td className="py-3 px-4 font-mono text-xs">cookie_consent</td>
                      <td className="py-3 px-4">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">
                          Tecnico
                        </span>
                      </td>
                      <td className="py-3 px-4">Proprio</td>
                      <td className="py-3 px-4">12 mesi</td>
                      <td className="py-3 px-4">Memorizza le preferenze cookie dell&apos;utente</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-xs">_ga, _ga_*</td>
                      <td className="py-3 px-4">
                        <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-0.5 rounded-full">
                          Analitico
                        </span>
                      </td>
                      <td className="py-3 px-4">Google LLC</td>
                      <td className="py-3 px-4">14 mesi</td>
                      <td className="py-3 px-4">
                        Analisi statistica anonima delle visite tramite Google Analytics 4
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-xs">NID, CONSENT, 1P_JAR</td>
                      <td className="py-3 px-4">
                        <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded-full">
                          Terze parti
                        </span>
                      </td>
                      <td className="py-3 px-4">Google Maps</td>
                      <td className="py-3 px-4">6–24 mesi</td>
                      <td className="py-3 px-4">
                        Impostati dall&apos;embed di Google Maps per visualizzare la mappa nel footer
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-olive-900 mb-3">
                3. Cookie Tecnici (Necessari)
              </h2>
              <p>
                Questi cookie sono essenziali per il funzionamento del sito e non
                possono essere disattivati. Includono il cookie che memorizza le
                tue preferenze sui cookie stessi. Non raccolgono dati personali
                identificabili.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-olive-900 mb-3">
                4. Cookie Analitici
              </h2>
              <p>
                Utilizziamo <strong>Google Analytics 4</strong> per raccogliere
                informazioni anonime su come i visitatori utilizzano il sito.
                Questi cookie vengono attivati{" "}
                <strong>solo dopo il tuo consenso esplicito</strong>. I dati sono
                raccolti in forma aggregata e anonima, con anonimizzazione
                dell&apos;indirizzo IP attiva.
              </p>
              <p className="mt-2">
                Per maggiori informazioni:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terra-600 hover:text-terra-700 underline"
                >
                  Privacy Policy di Google
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-olive-900 mb-3">
                5. Cookie di Terze Parti
              </h2>
              <p>
                La mappa presente nel footer del sito è fornita da{" "}
                <strong>Google Maps</strong>. Google potrebbe impostare cookie
                propri quando la mappa viene caricata. La mappa viene caricata{" "}
                <strong>solo dopo il tuo consenso</strong>; in caso contrario,
                viene mostrato un link diretto a Google Maps.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-olive-900 mb-3">
                6. Come Gestire i Cookie
              </h2>
              <p>
                Puoi modificare le tue preferenze sui cookie in qualsiasi momento
                cliccando sul link &quot;Gestisci Cookie&quot; nel footer del sito.
              </p>
              <p className="mt-2">
                Puoi inoltre gestire i cookie direttamente dal tuo browser:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-terra-600 hover:text-terra-700 underline">
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-terra-600 hover:text-terra-700 underline">
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-terra-600 hover:text-terra-700 underline">
                    Safari
                  </a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-terra-600 hover:text-terra-700 underline">
                    Microsoft Edge
                  </a>
                </li>
              </ul>
              <p className="mt-3 text-sm text-olive-500 italic">
                Nota: la disabilitazione dei cookie potrebbe compromettere alcune
                funzionalità del sito.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-olive-900 mb-3">
                7. Riferimenti Normativi
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Regolamento UE 2016/679 (GDPR)
                </li>
                <li>
                  Direttiva 2002/58/CE (ePrivacy)
                </li>
                <li>
                  D.Lgs. 196/2003 (Codice Privacy italiano)
                </li>
                <li>
                  Linee Guida del Garante Privacy del 10 giugno 2021 in materia
                  di cookie
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-olive-900 mb-3">
                8. Contatti
              </h2>
              <p>
                Per domande sulla presente Cookie Policy, contattaci a{" "}
                <a href="mailto:info@osteriadamiduccia.it" className="text-terra-600 hover:text-terra-700 underline">
                  info@osteriadamiduccia.it
                </a>
                .
              </p>
              <p className="mt-2">
                Per la gestione dei dati personali, consulta la nostra{" "}
                <Link href="/privacy-policy" className="text-terra-600 hover:text-terra-700 underline">
                  Privacy Policy
                </Link>
                .
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
