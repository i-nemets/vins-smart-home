import type { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Warehouse, Factory } from "lucide-react";

export const metadata: Metadata = {
  title: "Решения по отраслям: умный дом, IoT, IIoT",
  description: "Готовые решения для квартир, коттеджей, офисов, складов и производства",
  alternates: { canonical: "/resheniya" },
};

export default function SolutionsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Решения по отраслям
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Готовые пакеты и кейсы под каждый тип объекта
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="backdrop-blur-sm bg-gradient-to-br from-blue-500/5 to-transparent border-2 border-blue-500/20 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Home className="w-6 h-6 text-blue-400" />
              <CardTitle>Квартира</CardTitle>
            </div>
            <CardDescription>Автоматизация квартиры: свет, климат, безопасность</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild size="sm"><a href="/resheniya/kvartira">Подробнее</a></Button>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-sm bg-gradient-to-br from-purple-500/5 to-transparent border-2 border-purple-500/20 hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-purple-400" />
              <CardTitle>Коттедж</CardTitle>
            </div>
            <CardDescription>Полный комплект для загородного дома</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild size="sm"><a href="/resheniya/kottedzh">Подробнее</a></Button>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-sm bg-gradient-to-br from-green-500/5 to-transparent border-2 border-green-500/20 hover:border-green-400/50 hover:shadow-xl hover:shadow-green-500/10 transition-all">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-green-400" />
              <CardTitle>Офис</CardTitle>
            </div>
            <CardDescription>СКУД, климат, учёт рабочего времени</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild size="sm"><a href="/resheniya/ofis">Подробнее</a></Button>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-sm bg-gradient-to-br from-orange-500/5 to-transparent border-2 border-orange-500/20 hover:border-orange-400/50 hover:shadow-xl hover:shadow-orange-500/10 transition-all">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Warehouse className="w-6 h-6 text-orange-400" />
              <CardTitle>Склад</CardTitle>
            </div>
            <CardDescription>IoT-мониторинг, учёт, алерты</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild size="sm"><a href="/resheniya/sklad">Подробнее</a></Button>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-sm bg-gradient-to-br from-red-500/5 to-transparent border-2 border-red-500/20 hover:border-red-400/50 hover:shadow-xl hover:shadow-red-500/10 transition-all">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Factory className="w-6 h-6 text-red-400" />
              <CardTitle>Производство</CardTitle>
            </div>
            <CardDescription>IIoT: OEE, SCADA/MES, предиктив</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild size="sm"><a href="/resheniya/proizvodstvo">Подробнее</a></Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

