"use client";

import { useState } from "react";
import { MenuItem, MenuCategory } from "@/lib/types";

const categories: { key: MenuCategory; label: string; icon: string }[] = [
  { key: "antipasti", label: "Antipasti", icon: "🫒" },
  { key: "primi", label: "Primi", icon: "🍝" },
  { key: "secondi", label: "Secondi", icon: "🐟" },
  { key: "dolci", label: "Dolci", icon: "🍰" },
];

interface MenuSectionProps {
  items: MenuItem[];
}

export default function MenuSection({ items }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("antipasti");

  const filteredItems = items.filter(
    (item) => item.category === activeCategory && item.available
  );

  return (
    <section id="menu" className="py-20 sm:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-terra-500 text-sm uppercase tracking-[0.25em] font-medium">
            I Nostri Piatti
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-bold text-olive-900 mt-3 mb-4">
            Il Menu
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-terra-400 to-terra-600 mx-auto rounded-full" />
          <p className="text-olive-600 mt-6 max-w-xl mx-auto text-base sm:text-lg">
            Piatti della tradizione campana, preparati con amore e ingredienti
            freschi del territorio.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`group flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-olive-800 text-cream-50 shadow-lg shadow-olive-800/20"
                  : "bg-white text-olive-700 hover:bg-olive-100 border border-olive-200/60"
              }`}
            >
              <span
                className={`text-lg transition-transform duration-300 ${
                  activeCategory === cat.key ? "scale-110" : "group-hover:scale-110"
                }`}
              >
                {cat.icon}
              </span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl p-5 sm:p-7 border border-olive-100/80 hover:border-terra-300/50 hover:shadow-xl hover:shadow-terra-500/5 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="font-[family-name:var(--font-display)] text-lg sm:text-xl font-semibold text-olive-900 group-hover:text-terra-700 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-olive-500 text-sm sm:text-base mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-terra-600">
                    €{item.price.toFixed(0)}
                  </span>
                </div>
              </div>
              {/* Decorative line */}
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-olive-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-olive-400 text-xs sm:text-sm mt-10 sm:mt-14 italic">
          Coperto €2,00 · I prezzi possono variare in base alla stagionalità
          degli ingredienti
        </p>
      </div>
    </section>
  );
}
