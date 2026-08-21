"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getCookieConsent } from "./CookieBanner";

export default function Footer() {
  const [mapsConsent, setMapsConsent] = useState(false);

  useEffect(() => {
    setMapsConsent(getCookieConsent() === "all");

    function onConsentChange(e: Event) {
      const detail = (e as CustomEvent).detail;
      setMapsConsent(detail === "all");
    }

    window.addEventListener("cookie-consent-change", onConsentChange);
    return () => window.removeEventListener("cookie-consent-change", onConsentChange);
  }, []);

  return (
    <footer id="contatti" className="bg-olive-900 border-t border-olive-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-cream-50 tracking-tight">
                da Miduccia
              </span>
            </div>
            <p className="text-cream-200/60 text-xs sm:text-sm leading-relaxed">
              La tradizione campana in tavola dal 1987. Cucina autentica con
              ingredienti freschi e locali, nel cuore di Caserta.
            </p>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-cream-50 mb-5 uppercase tracking-wider text-xs">
              Contatti
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-cream-200/70">
                <span className="text-terra-400 font-semibold text-xs mt-0.5">Indirizzo:</span>
                <span>
                  Via Roma, 42
                  <br />
                  81100 Caserta (CE)
                </span>
              </li>
              <li>
                <a
                  href="tel:+390823456789"
                  className="flex items-center gap-3 text-cream-200/70 hover:text-terra-400 transition-colors font-mono"
                >
                  <span className="text-terra-400 font-semibold text-xs font-sans">Tel:</span>
                  +39 0823 456 789
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@osteriadamiduccia.it"
                  className="flex items-center gap-3 text-cream-200/70 hover:text-terra-400 transition-colors text-xs sm:text-sm"
                >
                  <span className="text-terra-400 font-semibold text-xs">Email:</span>
                  info@osteriadamiduccia.it
                </a>
              </li>
            </ul>
          </div>

          {/* Orari */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-cream-50 mb-5 uppercase tracking-wider text-xs">
              Orari di Apertura
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-cream-200/70">
              <li className="flex justify-between">
                <span>Lun – Ven</span>
                <span className="text-cream-100 font-mono">12:00 – 15:00</span>
              </li>
              <li className="flex justify-between">
                <span></span>
                <span className="text-cream-100 font-mono">19:00 – 23:00</span>
              </li>
              <li className="flex justify-between mt-2">
                <span>Sabato</span>
                <span className="text-cream-100 font-mono">12:00 – 23:00</span>
              </li>
              <li className="flex justify-between mt-2">
                <span>Domenica</span>
                <span className="text-cream-100 font-mono">12:00 – 16:00</span>
              </li>
              <li className="mt-3 text-terra-400/80 text-xs italic">
                Chiuso il martedì per riposo settimanale
              </li>
            </ul>
          </div>

          {/* WhatsApp + Map */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-cream-50 mb-5 uppercase tracking-wider text-xs">
              Canali Diretti
            </h3>
            <a
              href="https://wa.me/390823456789?text=Ciao!%20Vorrei%20prenotare%20un%20tavolo."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-green-700 hover:bg-green-800 text-white font-medium px-5 py-2.5 rounded-full transition-all duration-300 shadow-md text-xs tracking-wide uppercase"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contatto WhatsApp
            </a>
            {/* Google Maps — conditional on cookie consent */}
            <div className="mt-5 rounded-xl overflow-hidden border border-olive-700/50 aspect-[4/3]">
              {mapsConsent ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.7758103872193!2d14.33436947653126!3d41.07389291538118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133a544c6d174613%3A0x400583db6b980e2a!2sOsteria%20da%20Miduccia!5e0!3m2!1sit!2sit!4v1787134851976!5m2!1sit!2sit"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa Osteria da Miduccia, Caserta"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                />
              ) : (
                <a
                  href="https://maps.google.com/?cid=4612735539875700266"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex flex-col items-center justify-center bg-olive-800/50 text-cream-200/60 hover:text-terra-400 transition-colors group"
                >
                  <svg
                    className="w-8 h-8 mb-2 text-cream-200/30 group-hover:text-terra-400/60 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-xs font-semibold uppercase tracking-wider">Apri su Google Maps</span>
                  <span className="text-[10px] mt-1 text-cream-300/40">
                    Cookie di terze parti non autorizzati
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-olive-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream-200/40 text-xs">
            © {new Date().getFullYear()} Osteria da Miduccia — Tutti i diritti
            riservati
          </p>
          <div className="flex items-center gap-4 text-cream-200/40 text-xs">
            <Link
              href="/privacy-policy"
              className="hover:text-terra-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <span>·</span>
            <Link
              href="/cookie-policy"
              className="hover:text-terra-400 transition-colors"
            >
              Cookie Policy
            </Link>
            <span>·</span>
            <span>P.IVA 00000000000</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
