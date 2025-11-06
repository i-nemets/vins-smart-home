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
  title: "IoT решения: прототипирование, датчики, интеграции и мониторинг",
  description:
    "Датчики, телеметрия, шлюзы, облако и API. От прототипа до серийного внедрения. Поддержка и безопасность.",
  alternates: { canonical: "/uslugi/iot" },
};

export default function IotPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">IoT решения под ключ</h1>
      <p className="mt-6 text-xl text-white/80 leading-relaxed max-w-3xl">
        Проектируем и внедряем IoT: датчики, шлюзы, телеметрию и облачную инфраструктуру. 
        От прототипа до промышленной эксплуатации с безопасностью и SLA.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Технологический стек</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="p-5 rounded-xl border-2 border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent">
            <h3 className="font-semibold text-purple-400">Протоколы</h3>
            <p className="mt-2 text-sm text-muted-foreground">MQTT, HTTP/REST, CoAP, LoRaWAN, NB‑IoT, Sigfox</p>
          </div>
          <div className="p-5 rounded-xl border-2 border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-transparent">
            <h3 className="font-semibold text-blue-400">Датчики</h3>
            <p className="mt-2 text-sm text-muted-foreground">Температура, влажность, движение, протечка, GPS, вибрация, CO₂, освещённость</p>
          </div>
          <div className="p-5 rounded-xl border-2 border-green-500/20 bg-gradient-to-br from-green-500/5 to-transparent">
            <h3 className="font-semibold text-green-400">Хранение</h3>
            <p className="mt-2 text-sm text-muted-foreground">InfluxDB, TimescaleDB, PostgreSQL, MongoDB, облачные решения (AWS IoT/Azure)</p>
          </div>
          <div className="p-5 rounded-xl border-2 border-pink-500/20 bg-gradient-to-br from-pink-500/5 to-transparent">
            <h3 className="font-semibold text-pink-400">Визуализация</h3>
            <p className="mt-2 text-sm text-muted-foreground">Grafana, custom дашборды (React/Vue), мобильные приложения, Telegram/email алерты</p>
          </div>
        </div>
      </section>
      <div className="mt-8 flex gap-3">
        <Button asChild>
          <a href="/brif">Обсудить проект</a>
        </Button>
        <Button variant="outline" asChild>
          <a href="/kejsy">Смотреть кейсы</a>
        </Button>
      </div>

      <section className="mt-14">
        <h2 className="text-xl font-semibold">Примеры применения</h2>
        <ul className="mt-4 grid gap-2 list-disc pl-5 text-sm text-muted-foreground">
          <li>Мониторинг склада: температура/влажность, оповещения при отклонениях.</li>
          <li>Умное здание: счётчики, климат, занятость помещений.</li>
          <li>Сельское хозяйство: датчики почвы, метео, полив.</li>
          <li>Логистика: GPS-трекеры, датчики ударов/вибрации.</li>
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-semibold">Процесс внедрения</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card><CardHeader><CardTitle>1. PoC</CardTitle><CardDescription>Гипотеза и стенд</CardDescription></CardHeader></Card>
          <Card><CardHeader><CardTitle>2. Прототип</CardTitle><CardDescription>Датчики и шлюз</CardDescription></CardHeader></Card>
          <Card><CardHeader><CardTitle>3. Пилот</CardTitle><CardDescription>Объект/цех</CardDescription></CardHeader></Card>
          <Card><CardHeader><CardTitle>4. Прод</CardTitle><CardDescription>Масштабирование и SLA</CardDescription></CardHeader></Card>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-semibold">Пакеты</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Прототип</CardTitle>
              <CardDescription>Стенд + 1–2 датчика</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">фиксированная цена</p>
              <ul className="mt-3 text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Брокер/MQTT</li>
                <li>Панель мониторинга</li>
                <li>Документация</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full"><a href="/brif">Начать</a></Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Пилот</CardTitle>
              <CardDescription>Объект/цех</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">от 300 000 $</p>
              <ul className="mt-3 text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Набор датчиков/шлюзы</li>
                <li>Сбор/хранение данных</li>
                <li>Алерты и роли</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full"><a href="/brif">Запросить КП</a></Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Прод</CardTitle>
              <CardDescription>Масштабирование и SLA</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">индивидуально</p>
              <ul className="mt-3 text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Кластер и отказоустойчивость</li>
                <li>Резервирование и безопасность</li>
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
              <AccordionTrigger>Какой протокол выбрать?</AccordionTrigger>
              <AccordionContent>Зависит от условий и энергоэффективности: Zigbee/Wi‑Fi/LoRaWAN/NB‑IoT — под задачу.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>Что с безопасностью?</AccordionTrigger>
              <AccordionContent>ACL/ролевая модель, сегментация сети, TLS, аудит. Следуем best‑practice.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>Можно ли интегрироваться с ERP/CRM?</AccordionTrigger>
              <AccordionContent>Да, через API/вебхуки. Оценим на этапе прототипа/пилота.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <div className="mt-12 flex gap-3">
        <Button asChild><a href="/brif">Обсудить проект</a></Button>
        <Button variant="outline" asChild><a href="/kejsy">Смотреть кейсы</a></Button>
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


