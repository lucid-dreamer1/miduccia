import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt="Interno dell'Osteria da Miduccia"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-olive-900/30 to-terra-900/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Decorative element */}
        <div className="animate-fade-in opacity-0 stagger-1">
          <span className="inline-block text-terra-400 text-sm sm:text-base uppercase tracking-[0.3em] font-medium mb-4 sm:mb-6">
            ✦ Trattoria Tradizionale ✦
          </span>
        </div>

        {/* Main Title */}
        <h1 className="animate-fade-in opacity-0 stagger-2 font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cream-50 leading-[0.95] mb-4 sm:mb-6">
          Osteria
          <br />
          <span className="italic text-terra-400">da Miduccia</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in opacity-0 stagger-3 text-cream-200/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
          Dove la tradizione campana incontra l&apos;amore per la buona cucina.
          <br className="hidden sm:block" />
          Ogni piatto racconta la storia della nostra terra.
        </p>

        {/* Location */}
        <p className="animate-fade-in opacity-0 stagger-4 text-cream-300/60 text-xs sm:text-sm uppercase tracking-[0.2em] mb-8 sm:mb-10">
          📍 Caserta, Campania
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in opacity-0 stagger-5 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#prenota"
            className="group bg-terra-500 hover:bg-terra-600 text-white text-base sm:text-lg font-semibold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-terra-500/30 hover:-translate-y-1 flex items-center gap-2"
          >
            Prenota un Tavolo
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#menu"
            className="text-cream-100 hover:text-terra-400 text-base sm:text-lg font-medium px-8 py-3.5 rounded-full border border-cream-100/30 hover:border-terra-400/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            Scopri il Menu
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#menu" aria-label="Scorri verso il basso">
          <svg
            className="w-6 h-6 text-cream-200/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
