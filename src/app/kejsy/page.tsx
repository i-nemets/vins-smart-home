import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Кейсы: умный дом, IoT и IIoT — результаты клиентов",
  description:
    "Реализованные проекты: задачи, решения и измеримые результаты по умному дому, IoT и IIoT.",
};

export default function CasesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Кейсы</h1>
      <p className="mt-4 text-lg text-muted-foreground">Истории внедрений и достигнутые результаты с цифрами.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <h3 className="font-medium">Умный дом</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <a href="/kejsy/umnyj-dom-kottedzh-250" className="hover:underline">
                Коттедж 250 м² — сценарии и безопасность
              </a>
            </li>
            <li>
              <a href="/kejsy/umnyj-dom-kvartira-80" className="hover:underline">
                Квартира 80 м² — свет, климат, безопасность
              </a>
            </li>
            <li>
              <a href="/kejsy/umnyj-dom-ofis-200" className="hover:underline">
                Офис 200 м² — свет, СКУД, климат
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">IoT / IIoT</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <a href="/kejsy/iiot-zavod-oee-12" className="hover:underline">
                IIoT завод — OEE с 68% до 81%
              </a>
            </li>
            <li>
              <a href="/kejsy/iot-sklad-monitoring" className="hover:underline">
                IoT мониторинг склада — температура 24/7
              </a>
            </li>
          </ul>
        </div>
      </div>
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


