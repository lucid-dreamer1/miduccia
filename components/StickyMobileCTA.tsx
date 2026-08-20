"use client";

import { useState, useEffect } from "react";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      // Show after scrolling past the hero (roughly viewport height)
      setVisible(window.scrollY > window.innerHeight * 0.8);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-olive-900/95 backdrop-blur-md border-t border-olive-700/50 px-4 py-3 safe-area-bottom">
        <a
          href="#prenota"
          className="block bg-terra-500 hover:bg-terra-600 text-white text-center font-semibold py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-terra-500/20 text-base"
        >
          Prenota un Tavolo
        </a>
      </div>
    </div>
  );
}
