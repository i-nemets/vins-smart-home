import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Блог об умном доме, IoT и IIoT — гайды и практики",
  description:
    "Образовательные статьи: умный дом, IoT и IIoT. Практики, гайды, протоколы и безопасность.",
};

export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Блог</h1>
      <p className="mt-4 text-black/70 dark:text-white/70">Статьи и руководства по умному дому, IoT и IIoT.</p>
      <ul className="mt-8 list-disc pl-6 space-y-2">
        <li>
          <Link href="/blog/umnyj-dom-oshibki" className="hover:underline">
            Умный дом: частые ошибки и как их избежать
          </Link>
        </li>
      </ul>
    </main>
  );
}


