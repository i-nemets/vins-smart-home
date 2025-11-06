import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Умный дом для квартиры: под ключ от 150 000 ₽",
  description: "Готовое решение: освещение, климат, безопасность для квартиры. Сценарии, монтаж, настройка.",
  alternates: { canonical: "/resheniya/kvartira" },
};

export default function KvartiraPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Умный дом для квартиры
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Готовое решение под ключ: освещение, климат, безопасность
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Что входит</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Освещение</CardTitle>
              <CardDescription>Сценарии, датчики движения, управление с телефона</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Климат</CardTitle>
              <CardDescription>Контроль температуры, влажности, автоматизация</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Безопасность</CardTitle>
              <CardDescription>Датчики протечки/дыма, видеонаблюдение</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Управление</CardTitle>
              <CardDescription>Приложение, голосовые ассистенты</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Стоимость</h2>
        <p className="mt-2 text-muted-foreground">
          От 150 000 ₽ за квартиру до 80 м² (базовый пакет). Точная смета — после аудита.
        </p>
      </section>

      <div className="mt-10 flex gap-3">
        <Button asChild size="lg"><a href="/brif">Получить предложение</a></Button>
        <Button asChild variant="outline"><a href="/kejsy/umnyj-dom-kvartira-80">Смотреть кейс</a></Button>
      </div>
    </main>
  );
}

