import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты и консультация — свяжитесь с нами",
  description:
    "Свяжитесь для консультации: телефон, e‑mail и форма. Быстрый ответ и бриф для проекта.",
};

export default function ContactsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
        Контакты
      </h1>
      <p className="mt-4 text-black/70 dark:text-white/70">
        Свяжитесь удобным способом или заполните бриф для получения предложения.
      </p>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="text-lg font-medium">Связь</h2>
          <div className="mt-4 space-y-3 text-sm">
            <div>
              <div className="text-muted-foreground">Телефон</div>
              <a href="tel:+375291234567" className="hover:underline">
                +375 (29) 123-45-67
              </a>
            </div>
            <div>
              <div className="text-muted-foreground">Email</div>
              <a href="mailto:info@vins.example" className="hover:underline">
                info@vins.example
              </a>
            </div>
            <div>
              <div className="text-muted-foreground">Часы работы</div>
              <div>Пн–Пт 9:00–18:00 (UTC+3)</div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium">Офис</h2>
          <div className="mt-4 text-sm text-muted-foreground">
            <p>Минск, ул. Примерная 1, офис 101</p>
            <p className="mt-2 text-xs opacity-70">
              (Карта будет добавлена при наличии точного адреса)
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-medium">Быстрая форма</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Или заполните{" "}
          <a href="/brif" className="underline">
            бриф
          </a>{" "}
          для детального КП.
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "VINS IoT / Smart Home",
            url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
            telephone: "+375291234567",
            email: "info@vins.example",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Минск",
              addressCountry: "BY",
            },
            areaServed: ["Минск", "BY"],
          }),
        }}
      />
    </main>
  );
}
