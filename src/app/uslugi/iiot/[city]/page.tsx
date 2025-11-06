import type { Metadata } from "next";

type Props = { params: { city: string } };

export function generateMetadata({ params }: Props): Metadata {
  const city = decodeURIComponent(params.city);
  return {
    title: `IIoT в ${city}: подключение оборудования и OEE`,
    description: `Подключение станков и линий, сбор данных и OEE в ${city}. Интеграции SCADA/MES/ERP.`,
    alternates: { canonical: `/uslugi/iiot/${params.city}` },
  };
}

export default function IIoTCityPage({ params }: Props) {
  const city = decodeURIComponent(params.city);
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">IIoT в {city}</h1>
      <p className="mt-4 text-black/70 dark:text-white/70">
        Подключение оборудования, сбор телеметрии, панели мониторинга и расчёт OEE. Интеграции со SCADA/MES/ERP.
      </p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `IIoT в ${city}`,
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
              { "@type": "ListItem", position: 2, name: "IIoT", item: "/uslugi/iiot" },
              { "@type": "ListItem", position: 3, name: city, item: `/uslugi/iiot/${params.city}` },
            ],
          }),
        }}
      />
    </main>
  );
}


