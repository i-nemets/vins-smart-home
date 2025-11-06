import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Кейсы: умный дом, IoT и IIoT — результаты клиентов",
  description:
    "Реализованные проекты: задачи, решения и измеримые результаты по умному дому, IoT и IIoT.",
};

export default function CasesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Кейсы</h1>
      <p className="mt-4 text-black/70 dark:text-white/70">Истории внедрений и достигнутые результаты.</p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Кейсы", item: "/kejsy" },
            ],
          }),
        }}
      />
    </main>
  );
}


