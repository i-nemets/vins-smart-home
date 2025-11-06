import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Калькулятор стоимости: умный дом / IoT / IIoT",
  description:
    "Приблизительная оценка стоимости внедрения умного дома, IoT и IIoT. Быстрый расчёт.",
};

export default function CalculatorPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Калькулятор стоимости</h1>
      <p className="mt-4 text-black/70 dark:text-white/70">MVP калькулятора будет добавлен на следующем шаге.</p>
    </main>
  );
}


