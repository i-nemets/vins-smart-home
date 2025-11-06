import type { Metadata } from "next";

type Props = { params: { city: string } };

export function generateMetadata({ params }: Props): Metadata {
  const city = decodeURIComponent(params.city);
  return {
    title: `Умный дом в ${city}: проектирование и монтаж под ключ`,
    description: `Проектирование, монтаж и настройка умного дома в ${city}. Освещение, климат, безопасность, мультимедиа.`,
    alternates: { canonical: `/uslugi/umnyj-dom/${params.city}` },
  };
}

export default function SmartHomeCityPage({ params }: Props) {
  const city = decodeURIComponent(params.city);
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Умный дом в {city}</h1>
      <p className="mt-4 text-black/70 dark:text-white/70">
        Полный цикл работ «под ключ»: проект, поставка, монтаж, настройка и сервис.
      </p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Умный дом в ${city}`,
            areaServed: city,
            provider: { "@type": "Organization", name: "VINS" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Услуги", item: "/uslugi" },
              { "@type": "ListItem", position: 2, name: "Умный дом", item: "/uslugi/umnyj-dom" },
              { "@type": "ListItem", position: 3, name: city, item: `/uslugi/umnyj-dom/${params.city}` },
            ],
          }),
        }}
      />
    </main>
  );
}


