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
      <ul className="mt-8 list-disc pl-6 space-y-2">
        <li>
          <a href="/kejsy/umnyj-dom-kottedzh-250" className="hover:underline">
            Кейс: умный дом в коттедже 250 м² — сценарии и безопасность
          </a>
        </li>
        <li>
          <a href="/kejsy/iiot-zavod-oee-12" className="hover:underline">
            Кейс: IIoT на заводе — повышение OEE с 68% до 81%
          </a>
        </li>
      </ul>
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


