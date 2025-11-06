import type { Metadata } from "next";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Home, Warehouse } from "lucide-react";

export const metadata: Metadata = {
  title: "Кейсы: умный дом, IoT и IIoT — результаты клиентов",
  description:
    "Реализованные проекты: задачи, решения и измеримые результаты по умному дому, IoT и IIoT.",
};

export default function CasesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Кейсы</h1>
      <p className="mt-4 text-lg text-muted-foreground">Истории внедрений с реальными цифрами и результатами.</p>
      
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="backdrop-blur-sm bg-gradient-to-br from-blue-500/5 to-transparent border-2 border-blue-500/20 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all group">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5 text-blue-400" />
              <Badge variant="outline" className="text-blue-400 border-blue-400/50">Умный дом</Badge>
            </div>
            <CardTitle className="mt-2 group-hover:text-blue-400 transition-colors">Коттедж 250 м²</CardTitle>
            <CardDescription>Сценарии и безопасность</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-400">−12%</div>
            <div className="text-xs text-muted-foreground">энергопотребление</div>
          </CardContent>
          <CardFooter>
            <Button asChild size="sm" className="w-full"><a href="/kejsy/umnyj-dom-kottedzh-250">Читать кейс</a></Button>
          </CardFooter>
        </Card>

        <Card className="backdrop-blur-sm bg-gradient-to-br from-purple-500/5 to-transparent border-2 border-purple-500/20 hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all group">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5 text-purple-400" />
              <Badge variant="outline" className="text-purple-400 border-purple-400/50">Умный дом</Badge>
            </div>
            <CardTitle className="mt-2 group-hover:text-purple-400 transition-colors">Квартира 80 м²</CardTitle>
            <CardDescription>Свет, климат, безопасность</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-400">−10%</div>
            <div className="text-xs text-muted-foreground">снижение счетов</div>
          </CardContent>
          <CardFooter>
            <Button asChild size="sm" className="w-full"><a href="/kejsy/umnyj-dom-kvartira-80">Читать кейс</a></Button>
          </CardFooter>
        </Card>

        <Card className="backdrop-blur-sm bg-gradient-to-br from-green-500/5 to-transparent border-2 border-green-500/20 hover:border-green-400/50 hover:shadow-xl hover:shadow-green-500/10 transition-all group">
          <CardHeader>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <Badge variant="outline" className="text-green-400 border-green-400/50">IIoT</Badge>
            </div>
            <CardTitle className="mt-2 group-hover:text-green-400 transition-colors">Завод: OEE +13 п.п.</CardTitle>
            <CardDescription>10 станков, мониторинг 24/7</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">68%→81%</div>
            <div className="text-xs text-muted-foreground">OEE за 3 месяца</div>
          </CardContent>
          <CardFooter>
            <Button asChild size="sm" className="w-full"><a href="/kejsy/iiot-zavod-oee-12">Читать кейс</a></Button>
          </CardFooter>
        </Card>

        <Card className="backdrop-blur-sm bg-gradient-to-br from-orange-500/5 to-transparent border-2 border-orange-500/20 hover:border-orange-400/50 hover:shadow-xl hover:shadow-orange-500/10 transition-all group">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Warehouse className="w-5 h-5 text-orange-400" />
              <Badge variant="outline" className="text-orange-400 border-orange-400/50">IoT</Badge>
            </div>
            <CardTitle className="mt-2 group-hover:text-orange-400 transition-colors">Склад: мониторинг 24/7</CardTitle>
            <CardDescription>Температура и влажность</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-400">−8%</div>
            <div className="text-xs text-muted-foreground">потери товара</div>
          </CardContent>
          <CardFooter>
            <Button asChild size="sm" className="w-full"><a href="/kejsy/iot-sklad-monitoring">Читать кейс</a></Button>
          </CardFooter>
        </Card>

        <Card className="backdrop-blur-sm bg-gradient-to-br from-pink-500/5 to-transparent border-2 border-pink-500/20 hover:border-pink-400/50 hover:shadow-xl hover:shadow-pink-500/10 transition-all group">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5 text-pink-400" />
              <Badge variant="outline" className="text-pink-400 border-pink-400/50">Умный дом</Badge>
            </div>
            <CardTitle className="mt-2 group-hover:text-pink-400 transition-colors">Офис 200 м²</CardTitle>
            <CardDescription>СКУД, климат, учёт</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-pink-400">−12%</div>
            <div className="text-xs text-muted-foreground">энергия</div>
          </CardContent>
          <CardFooter>
            <Button asChild size="sm" className="w-full"><a href="/kejsy/umnyj-dom-ofis-200">Читать кейс</a></Button>
          </CardFooter>
        </Card>
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


