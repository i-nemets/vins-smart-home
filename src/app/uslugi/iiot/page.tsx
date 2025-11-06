import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

      <section className="mt-14">
        <h2 className="text-xl font-semibold">Примеры применения</h2>
        <ul className="mt-4 grid gap-2 list-disc pl-5 text-sm text-muted-foreground">
          <li>Мониторинг станков ЧПУ: OEE, температура/вибрация, панели по ролям.</li>
          <li>Конвейерные линии: скорость, счётчики, интеграции с MES/ERP.</li>
          <li>Энергопотребление: учёт по цехам, оптимизация режимов.</li>
          <li>Предиктив: датчики вибрации/температуры, ML-модели для предсказания поломок.</li>
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-semibold">Процесс</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card><CardHeader><CardTitle>1. Аудит</CardTitle><CardDescription>Оборудование/протоколы</CardDescription></CardHeader></Card>
          <Card><CardHeader><CardTitle>2. Подключение</CardTitle><CardDescription>OPC UA/Modbus</CardDescription></CardHeader></Card>
          <Card><CardHeader><CardTitle>3. OEE/панели</CardTitle><CardDescription>Данные и визуализация</CardDescription></CardHeader></Card>
          <Card><CardHeader><CardTitle>4. Интеграции</CardTitle><CardDescription>SCADA/MES/ERP</CardDescription></CardHeader></Card>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-semibold">Пакеты</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Пилот</CardTitle>
              <CardDescription>1–2 станка</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">от 600 000 ₽</p>
              <ul className="mt-3 text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Подключение/сбор данных</li>
                <li>Базовые панели</li>
                <li>Документация</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full"><a href="/brif">Запросить КП</a></Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Цех</CardTitle>
              <CardDescription>5–10 станков</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">от 1,5 млн ₽</p>
              <ul className="mt-3 text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Панели по ролям, OEE</li>
                <li>Алерты и роли</li>
                <li>Интеграции</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full"><a href="/brif">Запросить КП</a></Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Предприятие</CardTitle>
              <CardDescription>Масштабирование и SLA</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">индивидуально</p>
              <ul className="mt-3 text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Кластера/резервирование</li>
                <li>Безопасность/аудит</li>
                <li>Сопровождение</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full"><a href="/brif">Связаться</a></Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-semibold">FAQ</h2>
        <div className="mt-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger>Можно ли подключить старые станки?</AccordionTrigger>
              <AccordionContent>Да, используем ретрофит и датчики, протоколы OPC UA/Modbus/TCP.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>Как рассчитываете OEE?</AccordionTrigger>
              <AccordionContent>Собираем статусы/сигналы, нормируем, считаем доступность/производительность/качество.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>Безопасность и роли?</AccordionTrigger>
              <AccordionContent>Сегментация сети, VPN, RBAC, логирование. Следуем корпоративным политикам.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <div className="mt-12 flex gap-3">
        <Button asChild><a href="/brif">Запросить демонстрацию</a></Button>
        <Button variant="outline" asChild><a href="/kejsy">Смотреть кейсы</a></Button>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Product",
              name: "IIoT — Пилот",
              description: "Подключение 1–2 станков, базовые панели",
              offers: {
                "@type": "Offer",
                price: "600000",
                priceCurrency: "RUB",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "Product",
              name: "IIoT — Цех",
              description: "5–10 станков, OEE, панели по ролям",
              offers: {
                "@type": "Offer",
                price: "1500000",
                priceCurrency: "RUB",
              },
            },
          ]),
        }}
      />
    </main>
  );
}
