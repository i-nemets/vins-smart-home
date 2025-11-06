import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты и консультация — свяжитесь с нами",
  description:
    "Свяжитесь для консультации: телефон, e‑mail и форма. Быстрый ответ и бриф для проекта.",
};

export default function ContactsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Контакты</h1>
      <p className="mt-4 text-black/70 dark:text-white/70">Заполните форму или свяжитесь удобным способом.</p>
    </main>
  );
}


