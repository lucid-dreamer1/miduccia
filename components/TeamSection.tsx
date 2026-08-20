import Image from "next/image";

export default function TeamSection() {
  return (
    <section id="chi-siamo" className="py-20 sm:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-terra-500 text-sm uppercase tracking-[0.25em] font-medium">
            La Nostra Storia
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-bold text-olive-900 mt-3 mb-4">
            Chi Siamo
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-terra-400 to-terra-600 mx-auto rounded-full" />
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Photo */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-olive-200/50 shadow-xl shadow-olive-900/5">
              <Image
                src="/team-photo.jpg"
                alt="Il team dell'Osteria da Miduccia in cucina"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative badge */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-terra-500 text-white rounded-2xl px-5 py-3 shadow-lg shadow-terra-500/25">
              <span className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold">
                Dal 1987
              </span>
            </div>
          </div>

          {/* Text */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-olive-900 mb-4">
              La Famiglia dietro
              <br />
              <span className="italic text-terra-600">i Fornelli</span>
            </h3>
            <div className="space-y-4 text-olive-600 text-base leading-relaxed">
              <p>
                Tutto è cominciato nel 1987, quando nonna Miduccia ha aperto le
                porte della sua cucina a chiunque cercasse un piatto che sapesse
                di casa. Da allora, quella piccola osteria è diventata un punto
                di riferimento per chi ama la tradizione campana.
              </p>
              <p>
                Oggi, la terza generazione porta avanti la stessa filosofia:
                ingredienti freschi dal mercato di Caserta, ricette tramandate
                di madre in figlio, e quella cura per ogni dettaglio che
                trasforma un pranzo in un ricordo.
              </p>
              <p>
                Ogni giorno in cucina lavoriamo con passione, selezionando le
                migliori materie prime locali e preparando ogni piatto con
                l&apos;attenzione che merita. Non troverai la perfezione da
                stella Michelin, ma il sapore autentico di chi cucina con il
                cuore.
              </p>
            </div>
            {/* Signature-like element */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-px bg-terra-400" />
              <span className="font-[family-name:var(--font-display)] text-lg italic text-terra-600">
                La Famiglia Miduccia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
