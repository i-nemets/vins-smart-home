import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CookieBanner } from "@/components/CookieBanner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Умный дом, IoT и IIoT под ключ — проектирование и внедрение",
  description:
    "Проектируем и внедряем умный дом, IoT и IIoT: аудит, оборудование, интеграция и поддержка. Работаем под ключ.",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: "Умный дом, IoT и IIoT под ключ — проектирование и внедрение",
    description:
      "Проектируем и внедряем умный дом, IoT и IIoT: аудит, оборудование, интеграция и поддержка. Работаем под ключ.",
    siteName: "VINS IoT / Smart Home",
  },
  alternates: {
    canonical: "/",
    languages: {
      "ru-RU": "/",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="border-b border-black/10 dark:border-white/10">
          <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
            <a href="/" className="font-medium">VINS</a>
            <nav className="flex items-center gap-5 text-sm">
              <a href="/uslugi" className="hover:opacity-80">Услуги</a>
              <a href="/kejsy" className="hover:opacity-80">Кейсы</a>
              <a href="/blog" className="hover:opacity-80">Блог</a>
              <a href="/o-kompanii" className="hover:opacity-80">О компании</a>
              <a href="/kontakty" className="hover:opacity-80">Контакты</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="mt-16 border-t border-black/10 dark:border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-black/70 dark:text-white/70 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} VINS. Все права защищены.</p>
            <div className="flex gap-5">
              <a href="/privacy" className="hover:opacity-80">Политика конфиденциальности</a>
              <a href="/terms" className="hover:opacity-80">Условия использования</a>
            </div>
          </div>
        </footer>
        <Analytics />
        <SpeedInsights />
        <CookieBanner />
      </body>
    </html>
  );
}
