import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Блог об умном доме, IoT и IIoT — гайды и практики",
  description:
    "Образовательные статьи: умный дом, IoT и IIoT. Практики, гайды, протоколы и безопасность.",
};

export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Блог</h1>
      <p className="mt-4 text-black/70 dark:text-white/70">Статьи и руководства по умному дому, IoT и IIoT.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-2">
          <h3 className="font-medium">Умный дом</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li><Link href="/blog/umnyj-dom-oshibki" className="hover:underline">Умный дом: частые ошибки</Link></li>
            <li><Link href="/blog/scenarii-umnogo-doma-12-idey" className="hover:underline">12 сценариев умного дома</Link></li>
            <li><Link href="/blog/zigbee-zwave-wifi" className="hover:underline">Zigbee vs Z-Wave vs Wi‑Fi</Link></li>
            <li><Link href="/blog/knx-vs-zigbee" className="hover:underline">KNX vs Zigbee</Link></li>
            <li><Link href="/blog/homekit-google-alexa" className="hover:underline">HomeKit vs Google vs Alexa</Link></li>
            <li><Link href="/blog/multiroom-sistemy" className="hover:underline">Мультирум-системы</Link></li>
            <li><Link href="/blog/klimat-kontrola" className="hover:underline">Климат-контроль</Link></li>
            <li><Link href="/blog/setevaya-infrastruktura-umnogo-doma" className="hover:underline">Сетевая инфраструктура</Link></li>
            <li><Link href="/blog/energoeffektivnost-umnogo-doma" className="hover:underline">Энергоэффективность</Link></li>
            <li><Link href="/blog/umnyj-dom-bezopasnost" className="hover:underline">Безопасность умного дома</Link></li>
            <li><Link href="/blog/roi-umnogo-doma" className="hover:underline">ROI умного дома</Link></li>
            <li><Link href="/blog/home-assistant-homebridge" className="hover:underline">Home Assistant vs Homebridge</Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">IoT</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li><Link href="/blog/mqtt-iot-basis" className="hover:underline">MQTT: основы и best‑practice</Link></li>
            <li><Link href="/blog/lorawan-nb-iot" className="hover:underline">LoRaWAN vs NB‑IoT</Link></li>
            <li><Link href="/blog/datчики-iot-vybor" className="hover:underline">Датчики для IoT: выбор</Link></li>
            <li><Link href="/blog/iot-oblako-onpremise" className="hover:underline">IoT: облако или on‑premise</Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">IIoT</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li><Link href="/blog/iiot-oee" className="hover:underline">IIoT и OEE</Link></li>
            <li><Link href="/blog/opc-ua-modbus" className="hover:underline">OPC UA и Modbus</Link></li>
            <li><Link href="/blog/podkluchit-stanok-iiot" className="hover:underline">Как подключить станок</Link></li>
            <li><Link href="/blog/iiot-scada-integracii" className="hover:underline">IIoT и SCADA</Link></li>
            <li><Link href="/blog/iiot-prediktiv" className="hover:underline">Предиктивная аналитика</Link></li>
            <li><Link href="/blog/roi-iiot" className="hover:underline">ROI IIoT</Link></li>
            <li><Link href="/blog/iot-iiot-bezopasnost" className="hover:underline">Безопасность IoT/IIoT</Link></li>
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
              { "@type": "ListItem", position: 1, name: "Блог", item: "/blog" },
            ],
          }),
        }}
      />
    </main>
  );
}


