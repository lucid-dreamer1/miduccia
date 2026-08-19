import Link from "next/link";
import LoginForm from "@/components/LoginForm";

export const metadata = {
  title: "Accesso Pannello | Osteria da Miduccia",
  description: "Area riservata per la gestione delle prenotazioni.",
};

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-cream-100 to-olive-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-olive-500 hover:text-terra-600 text-sm font-medium mb-8 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Torna al sito
        </Link>

        {/* Login Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-olive-900/5 border border-olive-100 p-8 sm:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <span className="text-3xl mb-3 block">🫒</span>
            <h1 className="font-[family-name:var(--font-display)] text-2xl font-bold text-olive-900">
              Pannello dell&apos;Oste
            </h1>
            <p className="text-olive-500 text-sm mt-2">
              Accedi per gestire le prenotazioni
            </p>
          </div>

          <LoginForm />
        </div>

        <p className="text-center text-olive-400 text-xs mt-6">
          © {new Date().getFullYear()} Osteria da Miduccia
        </p>
      </div>
    </div>
  );
}
