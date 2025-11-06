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
  const cityLower = params.city.toLowerCase();
  const isMinsk = cityLower === "minsk";
  const isMoskva = cityLower === "moskva";

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">IIoT в {city}</h1>
      <p className="mt-4 text-black/70 dark:text-white/70">
        Подключаем станки и линии в {city}: сбор телеметрии, OEE, панели мониторинга, интеграции SCADA/MES/ERP. SLA и безопасность на уровне предприятия.
      </p>
      {isMinsk && (
        <p className="mt-3 text-sm text-muted-foreground">
          Работаем с производствами в Минске и области: металлообработка, пищевая, логистика. Реализовали пилоты на 3 заводах.
        </p>
      )}
      {isMoskva && (
        <p className="mt-3 text-sm text-muted-foreground">
          Реализуем проекты в Москве и МО: от пилотов до промышленного масштаба. Готовы работать с legacy-оборудованием.
        </p>
      )}
      <ul className="mt-6 grid gap-2 list-disc pl-5 text-sm text-muted-foreground">
        <li>OPC UA/Modbus/TCP, ретрофит без остановки процесса</li>
        <li>Хранилище и очистка данных, роли и доступы</li>
        <li>Панели по ролям (оператор/мастер/директор), оповещения</li>
        <li>Интеграции: SCADA/MES/ERP</li>
      </ul>
      <section className="mt-10">
        <h2 className="text-lg font-medium">FAQ ({city})</h2>
        <div className="mt-4 space-y-3 text-sm text-muted-foreground">
          <p><strong>Сроки:</strong> пилот — 2–4 недели, промвнедрение — от 1 мес.</p>
          <p><strong>Безопасность:</strong> сегментация сети, VPN, RBAC, аудит.</p>
          <p><strong>Интеграции:</strong> работа с существующей SCADA/MES или внедрение новой.</p>
          {isMinsk && <p><strong>Локальная поддержка:</strong> выездные визиты и обучение в пределах Минска и области.</p>}
          {isMoskva && <p><strong>Удалённая поддержка:</strong> большую часть работ можем делать удалённо, критичные этапы — выезд.</p>}
        </div>
      </section>
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


