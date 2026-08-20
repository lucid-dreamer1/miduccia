export default function LocalSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Osteria da Miduccia",
    description:
      "Osteria da Miduccia: la trattoria dove la tradizione campana incontra l'amore per la buona cucina. Piatti tipici casertani, ingredienti freschi e un'atmosfera che sa di casa.",
    url: "https://osteriadamiduccia.it",
    telephone: "+390823456789",
    email: "info@osteriadamiduccia.it",
    servesCuisine: ["Italiana", "Campana", "Casertana"],
    priceRange: "€€",
    image: "https://osteriadamiduccia.it/opengraph-image",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Roma, 42",
      addressLocality: "Caserta",
      addressRegion: "CE",
      postalCode: "81100",
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.07389,
      longitude: 14.33437,
    },
    hasMap: "https://maps.google.com/?cid=4612735539875700266",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Wednesday", "Thursday", "Friday"],
        opens: "12:00",
        closes: "15:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Wednesday", "Thursday", "Friday"],
        opens: "19:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "12:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "12:00",
        closes: "16:00",
      },
    ],
    acceptsReservations: "True",
    menu: "https://osteriadamiduccia.it/#menu",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
