import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Умный дом под ключ: проектирование, монтаж и интеграция",
  description:
    "Освещение, климат, безопасность и мультирум. Проектирование, монтаж и настройка под ключ. Гарантия и сервис.",
  alternates: { canonical: "/uslugi/umnyj-dom" },
};

export default function SmartHomePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Умный дом под ключ</h1>
      <p className="mt-4 text-black/70 dark:text-white/70">
        Разрабатываем сценарии освещения, климат-контроль, безопасность и мультимедиа. Работы «под ключ»: проект,
        поставка, монтаж, настройка и сервис.
      </p>
      <ul className="mt-6 grid gap-2 list-disc pl-5 text-sm text-muted-foreground">
        <li>Проект и ТЗ на основе сценариев</li>
        <li>Сети, стойка, ИБП и резервирование</li>
        <li>Интеграции: KNX, Zigbee/Z‑Wave, HomeKit и др.</li>
        <li>Пусконаладка и пост-гарантийный сервис</li>
      </ul>
      <div className="mt-8 flex gap-3">
        <Button asChild>
          <a href="/brif">Получить предложение</a>
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
            name: "Умный дом под ключ",
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
              { "@type": "ListItem", position: 2, name: "Умный дом", item: "/uslugi/umnyj-dom" },
            ],
          }),
        }}
      />
    </main>
  );
}


