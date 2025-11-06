import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "IoT решения: прототипирование, датчики, интеграции и мониторинг",
  description:
    "Датчики, телеметрия, шлюзы, облако и API. От прототипа до серийного внедрения. Поддержка и безопасность.",
  alternates: { canonical: "/uslugi/iot" },
};

export default function IotPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">IoT решения под ключ</h1>
      <p className="mt-4 text-black/70 dark:text-white/70">
        Проектируем и внедряем IoT: датчики, шлюзы, телеметрию и облачную инфраструктуру. Интеграции с существующими
        системами и API.
      </p>
      <ul className="mt-6 grid gap-2 list-disc pl-5 text-sm text-muted-foreground">
        <li>Быстрое прототипирование и PoC</li>
        <li>MQTT/HTTP, LoRaWAN/NB‑IoT, шлюзы и облако</li>
        <li>Дашборды и алерты, роли и доступы</li>
        <li>Документация и сопровождение</li>
      </ul>
      <div className="mt-8 flex gap-3">
        <Button asChild>
          <a href="/brif">Обсудить проект</a>
        </Button>
        <Button variant="outline" asChild>
          <a href="/kejsy">Смотреть кейсы</a>
        </Button>
      </div>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "IoT решения",
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
              { "@type": "ListItem", position: 1, name: "Услуги", item: "/uslugi" },
              { "@type": "ListItem", position: 2, name: "IoT", item: "/uslugi/iot" },
            ],
          }),
        }}
      />
    </main>
  );
}


