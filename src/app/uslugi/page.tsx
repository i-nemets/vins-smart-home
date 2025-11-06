import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Услуги: умный дом, IoT и IIoT — под ключ",
  description:
    "Комплексные услуги: умный дом, IoT и IIoT. Проектирование, монтаж, интеграции и поддержка.",
};

export default function ServicesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Услуги</h1>
      <p className="mt-4 text-black/70 dark:text-white/70">
        Выберите направление: умный дом (B2C), IoT (прототипы и интеграции) или IIoT (подключение оборудования,
        мониторинг OEE и интеграции со SCADA/MES).
      </p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Услуги", item: "/uslugi" },
            ],
          }),
        }}
      />
    </main>
  );
}


