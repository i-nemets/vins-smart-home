import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "IIoT/Промышленный IoT: OEE, SCADA, MES, мониторинг",
  description:
    "Подключение оборудования, сбор данных, визуализация, OEE. Интеграции со SCADA/MES/ERP. SLA и безопасность.",
  alternates: { canonical: "/uslugi/iiot" },
};

export default function IIotPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
        IIoT: подключение оборудования и аналитика
      </h1>
      <p className="mt-4 text-black/70 dark:text-white/70">
        Подключаем станки и линии, собираем и обогащаем данные, строим панели
        мониторинга и рассчитываем OEE. Работаем с OPC UA/Modbus и интегрируемся
        со SCADA/MES.
      </p>
      <ul className="mt-6 grid gap-2 list-disc pl-5 text-sm text-muted-foreground">
        <li>OPC UA/Modbus/TCP, ретрофит оборудования</li>
        <li>Сбор телеметрии, хранение и очистка данных</li>
        <li>OEE, дашборды, алерты и роли</li>
        <li>Интеграции SCADA/MES/ERP и безопасность</li>
      </ul>
      <div className="mt-8 flex gap-3">
        <Button asChild>
          <a href="/brif">Запросить демонстрацию</a>
        </Button>
        <Button variant="outline" asChild>
          <a href="/kejsy">Смотреть кейсы</a>
        </Button>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "IIoT / Промышленный IoT",
            areaServed: "RU",
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
              {
                "@type": "ListItem",
                position: 1,
                name: "Услуги",
                item: "/uslugi",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "IIoT",
                item: "/uslugi/iiot",
              },
            ],
          }),
        }}
      />
    </main>
  );
}
