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
  title: "Умный дом под ключ: проектирование, монтаж и интеграция",
  description:
    "Освещение, климат, безопасность и мультирум. Проектирование, монтаж и настройка под ключ. Гарантия и сервис.",
  alternates: { canonical: "/uslugi/umnyj-dom" },
};

export default function SmartHomePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
        Умный дом под ключ
      </h1>
      <p className="mt-4 text-black/70 dark:text-white/70">
        Разрабатываем сценарии освещения, климат-контроль, безопасность и
        мультимедиа. Работы «под ключ»: проект, поставка, монтаж, настройка и
        сервис.
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

      <section className="mt-14">
        <h2 className="text-xl font-semibold">Примеры сценариев</h2>
        <ul className="mt-4 grid gap-2 list-disc pl-5 text-sm text-muted-foreground">
          <li>
            Режим &ldquo;Уход&rdquo;: выключить все светильники, закрыть шторы,
            включить охрану.
          </li>
          <li>
            Утренний режим: мягкое включение света и климата по расписанию.
          </li>
          <li>Ночник: автовключение приглушённого света при движении ночью.</li>
          <li>
            Сценарий &ldquo;Кино&rdquo;: выключить свет, опустить шторы,
            включить проектор.
          </li>
          <li>
            Имитация присутствия в отпуске (свет, жалюзи по случайному
            расписанию).
          </li>
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-semibold">Как мы работаем</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>1. Аудит</CardTitle>
              <CardDescription>Сценарии и ТЗ</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>2. Проект</CardTitle>
              <CardDescription>Смета и спецификация</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>3. Монтаж</CardTitle>
              <CardDescription>Поставка и инсталляция</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>4. Пуск/сервис</CardTitle>
              <CardDescription>Настройка, обучение, SLA</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-semibold">Пакеты и стоимость</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Базовый</CardTitle>
              <CardDescription>
                Освещение + базовая безопасность
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">от 2 500 ₽/м²</p>
              <ul className="mt-3 text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Сценарии света</li>
                <li>Датчики движения/протечки</li>
                <li>Базовая стойка/сеть</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href="/brif">Запросить смету</a>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Комфорт</CardTitle>
              <CardDescription>Свет + климат + безопасность</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">от 4 000 ₽/м²</p>
              <ul className="mt-3 text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Климат по зонам</li>
                <li>Видеонаблюдение/СКУД</li>
                <li>Резервирование питания</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href="/brif">Запросить смету</a>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Премиум</CardTitle>
              <CardDescription>Полный комплект + мультимедиа</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">индивидуально</p>
              <ul className="mt-3 text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Мультирум/кинотеатр</li>
                <li>Сложные интеграции</li>
                <li>Расширенный SLA</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href="/brif">Запросить смету</a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-semibold">FAQ</h2>
        <div className="mt-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger>Сколько длится проект?</AccordionTrigger>
              <AccordionContent>
                Обычно 2–6 недель, зависит от площади и набора подсистем.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>
                Можно ли интегрировать уже купленное оборудование?
              </AccordionTrigger>
              <AccordionContent>
                Да, поддерживаем популярные протоколы и бренды, оценим
                совместимость на аудите.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>Как формируется смета?</AccordionTrigger>
              <AccordionContent>
                По проекту и сценариям: оборудование, работы, пуск и сервис.
                Предоставляем развернутую смету.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger>Какие гарантии и сервис?</AccordionTrigger>
              <AccordionContent>
                Гарантия производителя + наша гарантия на работы. Возможен SLA с
                регламентом реакции.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <div className="mt-12 flex gap-3">
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
              {
                "@type": "ListItem",
                position: 1,
                name: "Услуги",
                item: "/uslugi",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Умный дом",
                item: "/uslugi/umnyj-dom",
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
              name: "Умный дом — Базовый",
              description: "Освещение + базовая безопасность",
              offers: {
                "@type": "Offer",
                price: "2500",
                priceCurrency: "RUB",
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: "2500",
                  priceCurrency: "RUB",
                  referenceQuantity: {
                    "@type": "QuantitativeValue",
                    value: "1",
                    unitCode: "MTK",
                  },
                },
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Умный дом — Комфорт",
              description: "Свет + климат + безопасность",
              offers: {
                "@type": "Offer",
                price: "4000",
                priceCurrency: "RUB",
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: "4000",
                  priceCurrency: "RUB",
                  referenceQuantity: {
                    "@type": "QuantitativeValue",
                    value: "1",
                    unitCode: "MTK",
                  },
                },
              },
            },
          ]),
        }}
      />
    </main>
  );
}
