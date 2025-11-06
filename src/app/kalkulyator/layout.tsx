import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Калькулятор стоимости: умный дом / IIoT",
  description: "Приблизительная оценка стоимости внедрения умного дома и IIoT. Быстрый расчёт.",
  alternates: { canonical: "/kalkulyator" },
};

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return children;
}


