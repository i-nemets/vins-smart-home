import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Вопросы и ответы: умный дом, IoT, IIoT",
  description:
    "Популярные вопросы по умному дому, IoT и IIoT: сроки, стоимость, поддержка и безопасность.",
};

export default function FaqPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Вопросы и ответы</h1>
      <p className="mt-4 text-black/70 dark:text-white/70">Соберём FAQ после первых интервью с клиентами.</p>
    </main>
  );
}


