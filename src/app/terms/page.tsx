import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Условия использования",
  description: "Правила и условия использования сайта и услуг.",
};

export default function TermsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Условия использования</h1>
      <p className="mt-4 text-black/70 dark:text-white/70">Содержимое условий будет добавлено.</p>
    </main>
  );
}


