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
  const cityLower = params.city.toLowerCase();
  const isMinsk = cityLower === "minsk";

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Умный дом в {city}</h1>
      <p className="mt-4 text-black/70 dark:text-white/70">
        Проектирование и монтаж умного дома в {city}. Освещение, климат, безопасность и мультимедиа — с гарантией и сервисом.
      </p>
      {isMinsk && (
        <p className="mt-3 text-sm text-muted-foreground">
          Работаем в Минске с 2017 года. Реализовали более 20 проектов (квартиры, коттеджи, офисы). Выезд на аудит — бесплатно.
        </p>
      )}
      <ul className="mt-6 grid gap-2 list-disc pl-5 text-sm text-muted-foreground">
        <li>Аудит объекта и сценарии под ваш образ жизни</li>
        <li>Сети, стойка, ИБП, резервирование критичных узлов</li>
        <li>Интеграции: KNX, Zigbee/Z‑Wave, HomeKit и др.</li>
        <li>Пусконаладка и поддержка по SLA</li>
      </ul>
      <section className="mt-10">
        <h2 className="text-lg font-medium">FAQ ({city})</h2>
        <div className="mt-4 space-y-3 text-sm text-muted-foreground">
          <p><strong>Сроки:</strong> от 2 до 6 недель в зависимости от объёма и готовности объекта.</p>
          <p><strong>Бренды:</strong> подбираем под бюджет и сценарии (KNX/DMX/Zigbee).</p>
          <p><strong>Гарантия:</strong> на оборудование и работы, сервисные визиты.</p>
          {isMinsk && <p><strong>Бесплатный аудит:</strong> в пределах Минска и области.</p>}
        </div>
      </section>
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


