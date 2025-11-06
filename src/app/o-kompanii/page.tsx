import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О компании: экспертиза в умном доме, IoT и IIoT",
  description:
    "Опыт внедрения умного дома, IoT и IIoT. Команда, компетенции, партнерства и лицензии.",
};

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">О компании</h1>
      <p className="mt-4 text-black/70 dark:text-white/70">
        VINS — команда инженеров и проектировщиков с опытом внедрения умного дома, IoT и IIoT. Работаем «под ключ»: от аудита до поддержки.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Наш подход</h2>
        <ul className="mt-4 grid gap-3 list-disc pl-5 text-sm text-muted-foreground">
          <li>Проект на основе сценариев и целей, а не просто набор оборудования.</li>
          <li>Безопасность и резервирование на этапе проектирования, не постфактум.</li>
          <li>Открытые протоколы и стандарты — минимум vendor lock‑in.</li>
          <li>Документация, обучение и SLA — для спокойной эксплуатации.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Компетенции</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm">
          <div className="border rounded-md p-4">
            <h3 className="font-medium">Умный дом</h3>
            <p className="mt-1 text-muted-foreground">KNX, Zigbee, Z‑Wave, HomeKit, сценарии, интеграции</p>
          </div>
          <div className="border rounded-md p-4">
            <h3 className="font-medium">IoT</h3>
            <p className="mt-1 text-muted-foreground">MQTT, LoRaWAN, NB‑IoT, датчики, шлюзы, облако</p>
          </div>
          <div className="border rounded-md p-4">
            <h3 className="font-medium">IIoT</h3>
            <p className="mt-1 text-muted-foreground">OPC UA, Modbus, SCADA/MES, OEE, панели по ролям</p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Партнёры и бренды</h2>
        <p className="mt-2 text-sm text-muted-foreground">Работаем с ведущими производителями оборудования и ПО:</p>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs text-muted-foreground">
          <div className="border rounded-md h-12 flex items-center justify-center">KNX</div>
          <div className="border rounded-md h-12 flex items-center justify-center">Schneider</div>
          <div className="border rounded-md h-12 flex items-center justify-center">ABB</div>
          <div className="border rounded-md h-12 flex items-center justify-center">Siemens</div>
          <div className="border rounded-md h-12 flex items-center justify-center">Philips</div>
          <div className="border rounded-md h-12 flex items-center justify-center">Xiaomi</div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Опыт и статистика</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3 text-sm">
          <div>
            <div className="text-2xl font-semibold">7 лет</div>
            <div className="text-muted-foreground">на рынке IoT/IIoT/Smart Home</div>
          </div>
          <div>
            <div className="text-2xl font-semibold">50+</div>
            <div className="text-muted-foreground">реализованных проектов</div>
          </div>
          <div>
            <div className="text-2xl font-semibold">12%</div>
            <div className="text-muted-foreground">средний прирост OEE в пилотах</div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "О компании", item: "/o-kompanii" },
            ],
          }),
        }}
      />
    </main>
  );
}


