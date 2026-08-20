"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Accettate prenotazioni per gruppi numerosi?",
    answer:
      "Sì, accogliamo gruppi fino a 30 persone nella nostra Sala Riservata. Per gruppi superiori a 8 persone, ti consigliamo di prenotare con almeno 3 giorni di anticipo chiamandoci direttamente al +39 0823 456 789 per organizzare al meglio il servizio.",
  },
  {
    question: "Avete opzioni per intolleranze alimentari o allergie?",
    answer:
      "Assolutamente sì. Il nostro menu include opzioni senza glutine e possiamo adattare molti piatti per allergie e intolleranze specifiche. Ti chiediamo di segnalare eventuali esigenze al momento della prenotazione nelle note, così la cucina potrà prepararsi al meglio.",
  },
  {
    question: "C'è un parcheggio nelle vicinanze?",
    answer:
      "A 50 metri dall'osteria si trova il parcheggio pubblico di Piazza Carlo III, con tariffe orarie accessibili. In alternativa, la sera dopo le 20:00 è disponibile parcheggio gratuito lungo Via Roma e nelle vie adiacenti.",
  },
  {
    question: "Accettate animali domestici?",
    answer:
      "I cani di piccola e media taglia sono benvenuti nel nostro dehors esterno. Ti chiediamo solo di tenerli al guinzaglio e di segnalare la loro presenza al momento della prenotazione, così potremo assegnarti il tavolo più comodo.",
  },
  {
    question: "Qual è il dress code?",
    answer:
      "Da Miduccia l'atmosfera è informale e accogliente, come a casa. Non c'è un dress code specifico: vieni come preferisci, l'importante è sentirti a tuo agio. L'unica regola è portare appetito!",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  // FAQ Schema JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-terra-500 text-sm uppercase tracking-[0.25em] font-medium">
            Domande Frequenti
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-bold text-olive-900 mt-3 mb-4">
            FAQ
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-terra-400 to-terra-600 mx-auto rounded-full" />
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === index
                  ? "border-terra-300/50 bg-terra-50/30 shadow-md shadow-terra-500/5"
                  : "border-olive-200/60 bg-white hover:border-olive-300/80"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span
                  className={`font-[family-name:var(--font-display)] text-base sm:text-lg font-semibold transition-colors duration-300 ${
                    openIndex === index ? "text-terra-700" : "text-olive-800"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-terra-500 text-white rotate-180"
                      : "bg-olive-100 text-olive-600"
                  }`}
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-96 pb-5" : "max-h-0"
                }`}
              >
                <p className="px-6 text-olive-600 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
