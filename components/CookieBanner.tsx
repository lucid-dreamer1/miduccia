"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type CookieConsent = "all" | "necessary" | null;

export function getCookieConsent(): CookieConsent {
  if (typeof window === "undefined") return null;
  const consent = localStorage.getItem("cookie_consent");
  if (consent === "all" || consent === "necessary") return consent;
  return null;
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();
    if (!consent) {
      // Small delay so the page loads first
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept(level: "all" | "necessary") {
    localStorage.setItem("cookie_consent", level);
    setVisible(false);
    // Dispatch a custom event so other components (GA, Maps) can react
    window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: level }));
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6 animate-slide-up"
      role="dialog"
      aria-label="Banner cookie"
    >
      <div className="max-w-4xl mx-auto glass-dark rounded-2xl border border-cream-100/10 p-5 sm:p-7 shadow-2xl shadow-black/30">
        <div className="flex flex-col gap-4">
          {/* Text */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-cream-50 mb-2">
              🍪 Questo sito utilizza i cookie
            </h3>
            <p className="text-cream-200/70 text-sm leading-relaxed">
              Utilizziamo cookie tecnici necessari al funzionamento del sito e,
              con il tuo consenso, cookie analitici (Google Analytics) e di terze
              parti (Google Maps) per migliorare la tua esperienza. Puoi
              scegliere di accettare tutti i cookie o solo quelli necessari.{" "}
              <Link
                href="/cookie-policy"
                className="text-terra-400 hover:text-terra-300 underline transition-colors"
              >
                Cookie Policy
              </Link>{" "}
              ·{" "}
              <Link
                href="/privacy-policy"
                className="text-terra-400 hover:text-terra-300 underline transition-colors"
              >
                Privacy Policy
              </Link>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-end">
            <button
              onClick={() => accept("necessary")}
              className="text-cream-200 hover:text-cream-50 text-sm font-medium px-5 py-2.5 rounded-full border border-cream-100/20 hover:border-cream-100/40 transition-all duration-300"
            >
              Solo Necessari
            </button>
            <button
              onClick={() => accept("all")}
              className="bg-terra-500 hover:bg-terra-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-terra-500/25"
            >
              Accetta Tutti
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
