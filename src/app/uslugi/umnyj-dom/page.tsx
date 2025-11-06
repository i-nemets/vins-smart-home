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
      <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Умный дом под ключ
      </h1>
      <p className="mt-6 text-xl text-white/80 leading-relaxed max-w-3xl">
        Проектируем и внедряем комплексные системы автоматизации для квартир,
        коттеджей и офисов. Освещение, климат, безопасность, мультимедиа — с
        гарантией и сервисом.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Подсистемы умного дома</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-5 rounded-xl border-2 border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-transparent hover:border-blue-400/50 transition-all">
            <h3 className="font-semibold text-blue-400">Освещение</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Сценарии, диммирование, датчики движения/присутствия, цветные
              лампы (RGB), автоматизация по расписанию и геозонам.
            </p>
          </div>
          <div className="p-5 rounded-xl border-2 border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent hover:border-purple-400/50 transition-all">
            <h3 className="font-semibold text-purple-400">Климат</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Зональный контроль температуры, влажности, вентиляция, интеграции
              с котлами/кондиционерами, датчики CO₂.
            </p>
          </div>
          <div className="p-5 rounded-xl border-2 border-green-500/20 bg-gradient-to-br from-green-500/5 to-transparent hover:border-green-400/50 transition-all">
            <h3 className="font-semibold text-green-400">Безопасность</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Видеонаблюдение, СКУД, датчики протечки/дыма/открытия, оповещения
              на телефон, интеграции с охраной.
            </p>
          </div>
          <div className="p-5 rounded-xl border-2 border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-transparent hover:border-orange-400/50 transition-all">
            <h3 className="font-semibold text-orange-400">Мультимедиа</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Мультирум-аудио, домашний кинотеатр, управление AV-матрицами,
              интеграция с ТВ/проекторами.
            </p>
          </div>
          <div className="p-5 rounded-xl border-2 border-pink-500/20 bg-gradient-to-br from-pink-500/5 to-transparent hover:border-pink-400/50 transition-all">
            <h3 className="font-semibold text-pink-400">Шторы/жалюзи</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Автоматические шторы/жалюзи, сценарии утро/вечер, интеграция с
              датчиками освещённости.
            </p>
          </div>
          <div className="p-5 rounded-xl border-2 border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent hover:border-cyan-400/50 transition-all">
            <h3 className="font-semibold text-cyan-400">Управление</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Приложение (iOS/Android), голосовые ассистенты
              (Siri/Alexa/Google), сенсорные панели, кнопки.
            </p>
          </div>
        </div>
      </section>
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
              <p className="text-2xl font-semibold">от $30/м²</p>
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
              <p className="text-2xl font-semibold">от $50/м²</p>
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
