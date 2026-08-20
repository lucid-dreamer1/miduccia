import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-olive-900 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-terra-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-olive-400 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-lg">
        {/* 404 number */}
        <div className="relative mb-6">
          <span className="text-[10rem] sm:text-[12rem] font-[family-name:var(--font-display)] font-bold text-cream-100/5 leading-none select-none">
            404
          </span>
          <span className="absolute inset-0 flex items-center justify-center text-6xl">
            🫒
          </span>
        </div>

        {/* Title */}
        <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-cream-50 mb-4">
          Questo piatto non è
          <br />
          <span className="italic text-terra-400">nel nostro menu!</span>
        </h1>

        {/* Description */}
        <p className="text-cream-200/60 text-base sm:text-lg mb-8 max-w-md mx-auto leading-relaxed">
          La pagina che stai cercando non esiste o è stata spostata.
          Ma non preoccuparti, il nostro menu è pieno di sorprese!
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="group bg-terra-500 hover:bg-terra-600 text-white text-base font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-terra-500/30 hover:-translate-y-1 flex items-center gap-2"
          >
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Torna alla Homepage
          </Link>
          <Link
            href="/#prenota"
            className="text-cream-100 hover:text-terra-400 text-base font-medium px-8 py-3.5 rounded-full border border-cream-100/30 hover:border-terra-400/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            Prenota un Tavolo
          </Link>
        </div>
      </div>
    </div>
  );
}
