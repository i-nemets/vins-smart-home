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
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { ShieldCheck, Workflow, PlugZap } from "lucide-react";

export default function Home() {
  return (
    <main className="px-6 py-16 sm:py-24 md:py-28 lg:py-32 max-w-6xl mx-auto">
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
          Умный дом, IoT и IIoT под ключ
        </h1>
        <p className="mt-5 text-base sm:text-lg text-black/70 dark:text-white/70">
          Проектируем и внедряем: аудит, оборудование, интеграция и поддержка.
          Работаем под ключ для частных домов и производства. Фокус на
          результат, безопасность и SLA.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Button asChild>
            <a href="/brif">Получить предложение</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/kejsy">Смотреть кейсы</a>
          </Button>
        </div>
      </div>
      <div className="mt-8 relative w-full h-48 sm:h-64 rounded-xl overflow-hidden border">
        <Image
          src="https://images.unsplash.com/photo-1519558260268-cde7e03a0152?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2340"
          alt="IoT illustration"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </div>
      <section className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Умный дом</CardTitle>
            <CardDescription>
              Освещение, климат, безопасность, мультимедиа
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Проектирование, поставка и монтаж «под ключ». Сценарии, надёжность
              и сервис.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild size="sm">
              <a href="/uslugi/umnyj-dom">Подробнее</a>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>IoT</CardTitle>
            <CardDescription>
              Датчики, шлюзы, телеметрия, облако
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              От прототипа к промышленной эксплуатации. Интеграции и
              безопасность.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild size="sm">
              <a href="/uslugi/iot">Подробнее</a>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>IIoT</CardTitle>
            <CardDescription>
              Подключение станков, OEE, SCADA/MES
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Сбор данных, панели мониторинга, интеграции с MES/ERP. SLA.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild size="sm">
              <a href="/uslugi/iiot">Подробнее</a>
            </Button>
          </CardFooter>
        </Card>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-semibold">Почему мы</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Workflow className="w-4 h-4" />
                <CardTitle>Под ключ</CardTitle>
              </div>
              <CardDescription>
                Проект → Поставка → Монтаж → Сервис
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <CardTitle>Надёжность и безопасность</CardTitle>
              </div>
              <CardDescription>
                Сети, резервирование, доступы, аудит
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <PlugZap className="w-4 h-4" />
                <CardTitle>Интеграции</CardTitle>
              </div>
              <CardDescription>
                KNX, Zigbee/Z‑Wave, OPC UA/Modbus, API
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-semibold">Как мы работаем</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>1. Аудит</CardTitle>
              <CardDescription>Сценарии и цели</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>2. Проект</CardTitle>
              <CardDescription>Спецификация и смета</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>3. Внедрение</CardTitle>
              <CardDescription>Поставка и монтаж</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>4. Пуск и сервис</CardTitle>
              <CardDescription>Настройка, обучение, SLA</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-semibold">Партнёры и бренды</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-sm text-muted-foreground">
          <div className="border rounded-md h-14 flex items-center justify-center">
            Brand 1
          </div>
          <div className="border rounded-md h-14 flex items-center justify-center">
            Brand 2
          </div>
          <div className="border rounded-md h-14 flex items-center justify-center">
            Brand 3
          </div>
          <div className="border rounded-md h-14 flex items-center justify-center">
            Brand 4
          </div>
          <div className="border rounded-md h-14 flex items-center justify-center">
            Brand 5
          </div>
          <div className="border rounded-md h-14 flex items-center justify-center">
            Brand 6
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-semibold">FAQ</h2>
        <div className="mt-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger>Сколько занимает внедрение?</AccordionTrigger>
              <AccordionContent>
                Обычно 2–6 недель в зависимости от объёма и готовности объекта.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>Как формируется стоимость?</AccordionTrigger>
              <AccordionContent>
                По проекту и смете: оборудование, работы, пуск и сервис.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>
                Работаете с существующими системами?
              </AccordionTrigger>
              <AccordionContent>
                Да, интегрируемся через стандартные протоколы и API.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Separator className="my-14" />
      <div className="flex flex-col sm:flex-row gap-3">
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
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Главная", item: "/" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Сколько занимает внедрение?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Обычно 2–6 недель в зависимости от объёма и готовности объекта.",
                },
              },
              {
                "@type": "Question",
                name: "Как формируется стоимость?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "По проекту и смете: оборудование, работы, пуск и сервис.",
                },
              },
              {
                "@type": "Question",
                name: "Работаете с существующими системами?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Да, интегрируемся через стандартные протоколы и API.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
