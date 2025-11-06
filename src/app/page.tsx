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
import {
  ShieldCheck,
  Workflow,
  PlugZap,
  Home as HomeIcon,
  Cpu,
  Factory,
  TrendingUp,
  Users,
  Award,
} from "lucide-react";
import { CountUpStat } from "@/components/CountUpStat";
import { FadeInUp } from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <main
        id="main-content"
        className="px-6 py-16 sm:py-24 md:py-28 lg:py-32 max-w-6xl mx-auto relative"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-0 left-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-2000"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="max-w-4xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-blue-500/40 text-sm mb-6 backdrop-blur-sm shadow-lg shadow-blue-500/10">
            <span className="text-blue-300">🚀</span> 7 лет на рынке IoT/IIoT
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight">
            <span className="bg-gradient-to-br from-white via-blue-100 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl">
              Умный дом, IoT и IIoT
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              под ключ
            </span>
          </h1>
          <p className="mt-8 text-xl sm:text-2xl text-white/80 leading-relaxed max-w-2xl">
            Проектируем и внедряем: аудит, оборудование, интеграция и поддержка.
            Работаем под ключ для частных домов и производства.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-5">
            <Button
              asChild
              size="lg"
              className="shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all text-lg px-8 py-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500"
            >
              <a href="/brif">Получить предложение</a>
            </Button>
            <Button
              variant="outline"
              asChild
              size="lg"
              className="border-2 hover:bg-white/10 hover:scale-105 transition-all text-lg px-8 py-6 rounded-xl backdrop-blur-sm"
            >
              <a href="/kejsy">Смотреть кейсы</a>
            </Button>
          </div>
        </div>
        <div className="mt-8 relative w-full h-48 sm:h-64 rounded-xl overflow-hidden border bg-muted">
          <Image
            src="https://images.unsplash.com/photo-1519558260268-cde7e03a0152?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2340"
            alt="IoT illustration"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            className="object-cover object-center"
            priority
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          />
        </div>
        <FadeInUp>
          <section className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/20 transition-all border-2 border-blue-500/30 hover:border-blue-400/60 bg-gradient-to-br from-blue-500/5 to-transparent backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full -mr-16 -mt-16 blur-2xl group-hover:blur-3xl transition-all" />
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <HomeIcon className="w-6 h-6" />
                  </div>
                  <CardTitle>Умный дом</CardTitle>
                </div>
                <CardDescription>
                  Освещение, климат, безопасность, мультимедиа
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Проектирование, поставка и монтаж «под ключ». Сценарии,
                  надёжность и сервис.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild size="sm" className="group-hover:shadow-md">
                  <a href="/uslugi/umnyj-dom">Подробнее</a>
                </Button>
              </CardFooter>
            </Card>
            <Card className="relative overflow-hidden group hover:shadow-2xl hover:shadow-purple-500/20 transition-all border-2 border-purple-500/30 hover:border-purple-400/60 bg-gradient-to-br from-purple-500/5 to-transparent backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full -mr-16 -mt-16 blur-2xl group-hover:blur-3xl transition-all" />
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <CardTitle>IoT</CardTitle>
                </div>
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
                <Button asChild size="sm" className="group-hover:shadow-md">
                  <a href="/uslugi/iot">Подробнее</a>
                </Button>
              </CardFooter>
            </Card>
            <Card className="relative overflow-hidden group hover:shadow-2xl hover:shadow-green-500/20 transition-all border-2 border-green-500/30 hover:border-green-400/60 bg-gradient-to-br from-green-500/5 to-transparent backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/20 to-transparent rounded-full -mr-16 -mt-16 blur-2xl group-hover:blur-3xl transition-all" />
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-500/10 text-green-400">
                    <Factory className="w-6 h-6" />
                  </div>
                  <CardTitle>IIoT</CardTitle>
                </div>
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
                <Button asChild size="sm" className="group-hover:shadow-md">
                  <a href="/uslugi/iiot">Подробнее</a>
                </Button>
              </CardFooter>
            </Card>
          </section>
        </FadeInUp>

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

        <FadeInUp delay={0.2}>
          <section className="mt-14 p-8 rounded-2xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-green-500/5 border border-white/10">
            <h2 className="text-2xl font-semibold">Цифры и факты</h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-3">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Award className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <CountUpStat
                    end={50}
                    suffix="+"
                    className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                  />
                  <div className="text-sm text-muted-foreground mt-1">
                    реализованных проектов
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <Users className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <CountUpStat
                    end={7}
                    suffix=" лет"
                    className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent"
                  />
                  <div className="text-sm text-muted-foreground mt-1">
                    опыта в IoT/IIoT/Smart Home
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-green-500/10">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <CountUpStat
                    end={12}
                    suffix="%"
                    className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
                  />
                  <div className="text-sm text-muted-foreground mt-1">
                    средний прирост OEE в пилотах
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInUp>

        <FadeInUp delay={0.3}>
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
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent inline-block">
              Отзывы
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <Card className="backdrop-blur-sm bg-gradient-to-br from-blue-500/10 to-purple-500/5 border-2 border-blue-500/20 hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-500/10 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="text-yellow-400">★★★★★</div>
                  </div>
                  <CardTitle>Андрей К.</CardTitle>
                  <CardDescription>Частный дом, 240 м²</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">
                    &ldquo;Сценарии света и климат сделали дом комфортнее.
                    Понравилась чёткая смета и сроки.&rdquo;
                  </p>
                </CardContent>
              </Card>
              <Card className="backdrop-blur-sm bg-gradient-to-br from-purple-500/10 to-green-500/5 border-2 border-purple-500/20 hover:border-purple-400/40 hover:shadow-xl hover:shadow-purple-500/10 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="text-yellow-400">★★★★★</div>
                  </div>
                  <CardTitle>Елена М.</CardTitle>
                  <CardDescription>Производство (пилот IIoT)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">
                    &ldquo;За месяц подключили 4 станка, получили панель и
                    базовый OEE. Планируем масштабирование.&rdquo;
                  </p>
                </CardContent>
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
                  <AccordionTrigger>
                    Сколько занимает внедрение?
                  </AccordionTrigger>
                  <AccordionContent>
                    Обычно 2–6 недель в зависимости от объёма и готовности
                    объекта.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2">
                  <AccordionTrigger>
                    Как формируется стоимость?
                  </AccordionTrigger>
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
          <div className="text-center py-12 px-6 rounded-2xl bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-transparent border border-blue-500/20">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Готовы начать проект?
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Заполните бриф или позвоните — проведём аудит и подготовим смету
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="shadow-lg shadow-primary/30">
                <a href="/brif">Получить предложение</a>
              </Button>
              <Button variant="outline" asChild size="lg">
                <a href="/kejsy">Смотреть кейсы</a>
              </Button>
            </div>
          </div>
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
                    name: "Главная",
                    item: "/",
                  },
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
        </FadeInUp>
      </main>
    </>
  );
}
