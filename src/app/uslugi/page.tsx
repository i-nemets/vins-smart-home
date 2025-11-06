import type { Metadata } from "next";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Cpu, Factory, ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Услуги: умный дом, IoT и IIoT — под ключ",
  description:
    "Комплексные услуги: умный дом, IoT и IIoT. Проектирование, монтаж, интеграции и поддержка.",
};

export default function ServicesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Услуги
      </h1>
      <p className="mt-6 text-xl text-white/80 leading-relaxed max-w-3xl">
        Проектируем и внедряем комплексные решения для дома, бизнеса и производства. 
        Работаем под ключ: от аудита до поддержки.
      </p>

      {/* Hero image */}
      <div className="mt-10 relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border-2 border-white/10">
        <Image
          src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2340&auto=format&fit=crop"
          alt="Technology services"
          fill
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover object-center"
          priority
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        />
      </div>

      {/* Main services */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold">Наши направления</h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          
          <Card className="relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/20 transition-all border-2 border-blue-500/30 hover:border-blue-400/60 bg-gradient-to-br from-blue-500/5 to-transparent backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full -mr-16 -mt-16 blur-2xl group-hover:blur-3xl transition-all" />
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                  <Home className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl">Умный дом</CardTitle>
              </div>
              <CardDescription className="text-base mt-2">
                Комплексная автоматизация для квартир, коттеджей и офисов
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Освещение, климат, безопасность, мультимедиа. Сценарии под ваш образ жизни, 
                интеграции с голосовыми ассистентами, управление с телефона.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs">KNX</span>
                <span className="px-2 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs">Zigbee</span>
                <span className="px-2 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs">Z-Wave</span>
                <span className="px-2 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs">HomeKit</span>
              </div>
              <div className="mt-4 text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                от $30/м²
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button asChild size="sm" className="flex-1">
                <a href="/uslugi/umnyj-dom">
                  Подробнее <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
              <Button asChild size="sm" variant="outline">
                <a href="/kejsy/umnyj-dom-kottedzh-250">Кейс</a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="relative overflow-hidden group hover:shadow-2xl hover:shadow-purple-500/20 transition-all border-2 border-purple-500/30 hover:border-purple-400/60 bg-gradient-to-br from-purple-500/5 to-transparent backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full -mr-16 -mt-16 blur-2xl group-hover:blur-3xl transition-all" />
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                  <Cpu className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl">IoT</CardTitle>
              </div>
              <CardDescription className="text-base mt-2">
                Интернет вещей: датчики, шлюзы, мониторинг и аналитика
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Прототипирование, датчики температуры/влажности/движения, LoRaWAN/NB‑IoT, 
                облачные и on-premise решения, панели мониторинга.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded-md bg-purple-500/10 text-purple-400 text-xs">MQTT</span>
                <span className="px-2 py-1 rounded-md bg-purple-500/10 text-purple-400 text-xs">LoRaWAN</span>
                <span className="px-2 py-1 rounded-md bg-purple-500/10 text-purple-400 text-xs">Grafana</span>
                <span className="px-2 py-1 rounded-md bg-purple-500/10 text-purple-400 text-xs">InfluxDB</span>
              </div>
              <div className="mt-4 text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                от $3,500
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button asChild size="sm" className="flex-1">
                <a href="/uslugi/iot">
                  Подробнее <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
              <Button asChild size="sm" variant="outline">
                <a href="/kejsy/iot-sklad-monitoring">Кейс</a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="relative overflow-hidden group hover:shadow-2xl hover:shadow-green-500/20 transition-all border-2 border-green-500/30 hover:border-green-400/60 bg-gradient-to-br from-green-500/5 to-transparent backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/20 to-transparent rounded-full -mr-16 -mt-16 blur-2xl group-hover:blur-3xl transition-all" />
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-green-500/10 text-green-400">
                  <Factory className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl">IIoT</CardTitle>
              </div>
              <CardDescription className="text-base mt-2">
                Промышленный IoT: подключение оборудования, OEE, SCADA
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Подключение станков и линий, сбор телеметрии, расчёт OEE, панели по ролям, 
                интеграции со SCADA/MES/ERP, предиктивная аналитика.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded-md bg-green-500/10 text-green-400 text-xs">OPC UA</span>
                <span className="px-2 py-1 rounded-md bg-green-500/10 text-green-400 text-xs">Modbus</span>
                <span className="px-2 py-1 rounded-md bg-green-500/10 text-green-400 text-xs">TimescaleDB</span>
                <span className="px-2 py-1 rounded-md bg-green-500/10 text-green-400 text-xs">OEE</span>
              </div>
              <div className="mt-4 text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                от $7,000
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button asChild size="sm" className="flex-1">
                <a href="/uslugi/iiot">
                  Подробнее <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
              <Button asChild size="sm" variant="outline">
                <a href="/kejsy/iiot-zavod-oee-12">Кейс</a>
              </Button>
            </CardFooter>
          </Card>

        </div>
      </section>

      {/* Additional info */}
      <section className="mt-14 p-8 rounded-2xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-green-500/5 border border-white/10">
        <h2 className="text-xl font-semibold">Почему выбирают нас</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <div>
            <div className="text-3xl font-bold text-blue-400">7 лет</div>
            <div className="text-sm text-muted-foreground mt-1">опыта в IoT/IIoT/Smart Home</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400">50+</div>
            <div className="text-sm text-muted-foreground mt-1">реализованных проектов</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400">Минск</div>
            <div className="text-sm text-muted-foreground mt-1">локальная поддержка и выезды</div>
          </div>
        </div>
      </section>

      <div className="mt-10 text-center">
        <Button asChild size="lg" className="shadow-lg shadow-primary/30">
          <a href="/brif">Получить предложение</a>
        </Button>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Услуги", item: "/uslugi" },
            ],
          }),
        }}
      />
    </main>
  );
}
