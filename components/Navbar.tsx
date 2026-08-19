"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#prenota", label: "Prenota" },
  { href: "#contatti", label: "Contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-olive-200/50 shadow-lg shadow-olive-900/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl sm:text-3xl" aria-hidden="true">🫒</span>
            <div className="flex flex-col">
              <span
                className={`font-[family-name:var(--font-display)] text-lg sm:text-xl font-bold tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-olive-800" : "text-cream-50"
                }`}
              >
                da Miduccia
              </span>
              <span
                className={`text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                  scrolled ? "text-terra-600" : "text-cream-200"
                }`}
              >
                Osteria · Caserta
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-terra-500 ${
                  scrolled ? "text-olive-700" : "text-cream-100"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#prenota"
              className="bg-terra-500 hover:bg-terra-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-terra-500/25 hover:-translate-y-0.5"
            >
              Prenota un Tavolo
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              } ${scrolled ? "bg-olive-800" : "bg-cream-50"}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              } ${scrolled ? "bg-olive-800" : "bg-cream-50"}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              } ${scrolled ? "bg-olive-800" : "bg-cream-50"}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            mobileOpen ? "max-h-80 pb-6" : "max-h-0"
          }`}
        >
          <div className="glass-dark rounded-2xl p-6 mt-2 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-cream-100 hover:text-terra-400 text-lg font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#prenota"
              onClick={() => setMobileOpen(false)}
              className="bg-terra-500 hover:bg-terra-600 text-white text-center font-semibold py-3 rounded-full transition-all"
            >
              Prenota un Tavolo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
