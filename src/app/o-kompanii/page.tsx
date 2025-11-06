import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О компании: экспертиза в умном доме, IoT и IIoT",
  description:
    "Опыт внедрения умного дома, IoT и IIoT. Команда, компетенции, партнерства и лицензии.",
};

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">О компании</h1>
      <p className="mt-4 text-black/70 dark:text-white/70">Информация о команде, подходе и компетенциях.</p>
    </main>
  );
}


