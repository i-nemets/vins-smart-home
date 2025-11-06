import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: "Политика обработки персональных данных и конфиденциальности.",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Политика конфиденциальности</h1>
      <p className="mt-4 text-black/70 dark:text-white/70">Содержимое политики будет добавлено.</p>
    </main>
  );
}


