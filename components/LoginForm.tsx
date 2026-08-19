"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

      if (!supabaseUrl || supabaseUrl.includes("your-project")) {
        // Mock login for development
        setError(
          "Supabase non configurato. Aggiungi le variabili d'ambiente in .env.local"
        );
        setLoading(false);
        return;
      }

      const supabase = createClient();
      const { error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        if (authError.message.includes("Invalid login")) {
          setError("Email o password non validi.");
        } else {
          setError(authError.message);
        }
        setLoading(false);
        return;
      }

      router.push("/admin/dashboard");
      router.refresh();
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err instanceof Error
          ? `Errore: ${err.message}`
          : "Si è verificato un errore. Riprova."
      );
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
          {error}
        </div>
      )}

      <div>
        <label
          htmlFor="login-email"
          className="block text-olive-700 text-sm font-medium mb-2"
        >
          Email
        </label>
        <input
          id="login-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="oste@osteriadamiduccia.it"
          className="w-full bg-cream-50 border border-olive-200 rounded-xl px-4 py-3.5 text-olive-900 placeholder:text-olive-300 focus:outline-none focus:ring-2 focus:ring-terra-500/40 focus:border-terra-500/40 transition-all duration-300"
        />
      </div>

      <div>
        <label
          htmlFor="login-password"
          className="block text-olive-700 text-sm font-medium mb-2"
        >
          Password
        </label>
        <input
          id="login-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="••••••••"
          className="w-full bg-cream-50 border border-olive-200 rounded-xl px-4 py-3.5 text-olive-900 placeholder:text-olive-300 focus:outline-none focus:ring-2 focus:ring-terra-500/40 focus:border-terra-500/40 transition-all duration-300"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-olive-800 hover:bg-olive-900 disabled:bg-olive-400 disabled:cursor-not-allowed text-cream-50 font-semibold py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-olive-800/20 flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <svg
              className="animate-spin w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Accesso in corso...
          </>
        ) : (
          "Accedi al Pannello"
        )}
      </button>
    </form>
  );
}
