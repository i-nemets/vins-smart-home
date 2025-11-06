import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props): Metadata {
  const title = `Кейс: ${params.slug.replace(/-/g, " ")}`;
  return {
    title,
    description: "Задача → Решение → Результат",
  };
}

export default function CasePage({ params }: Props) {
  if (!params?.slug) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Кейс: {params.slug.replace(/-/g, " ")}</h1>
      <section className="mt-8 space-y-4 text-sm text-muted-foreground">
        <h2 className="text-base font-medium text-foreground">Задача</h2>
        <p>Кратко опишите исходные условия и цели проекта.</p>
        <h2 className="text-base font-medium text-foreground mt-6">Решение</h2>
        <p>Опишите стек, архитектуру и ключевые интеграции.</p>
        <h2 className="text-base font-medium text-foreground mt-6">Результат</h2>
        <p>Цифры и эффект: скорость, надёжность, экономия, OEE и т.д.</p>
      </section>
    </main>
  );
}


