import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CookieBanner } from "@/components/CookieBanner";
import { ChatWidget } from "@/components/ChatWidget";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
  preload: true,
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  preload: true,
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md">Перейти к основному содержимому</a>
        <header className="sticky top-0 z-50 border-b border-black/10 dark:border-white/10 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
            <a href="/" className="font-medium">VINS</a>
            <nav className="hidden sm:flex items-center gap-5 text-sm">
              <a href="/uslugi" className="hover:opacity-80">Услуги</a>
              <a href="/kejsy" className="hover:opacity-80">Кейсы</a>
              <a href="/blog" className="hover:opacity-80">Блог</a>
              <a href="/o-kompanii" className="hover:opacity-80">О компании</a>
              <a href="/kontakty" className="hover:opacity-80">Контакты</a>
            </nav>
            <div className="sm:hidden">
              <Sheet>
                <SheetTrigger aria-label="Открыть меню" className="rounded-md border px-3 py-1.5 text-sm">Меню</SheetTrigger>
                <SheetContent side="right" className="w-64">
                  <nav className="mt-8 grid gap-4 text-sm">
                    <a href="/uslugi" className="hover:opacity-80">Услуги</a>
                    <a href="/kejsy" className="hover:opacity-80">Кейсы</a>
                    <a href="/blog" className="hover:opacity-80">Блог</a>
                    <a href="/o-kompanii" className="hover:opacity-80">О компании</a>
                    <a href="/kontakty" className="hover:opacity-80">Контакты</a>
                    <a href="/brif" className="hover:opacity-80">Бриф</a>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
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
        <div className="fixed bottom-20 right-4 sm:hidden z-40">
          <a href="/brif" className="inline-flex items-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm shadow hover:opacity-90">Оставить заявку</a>
        </div>
        <Analytics />
        <SpeedInsights />
        <CookieBanner />
        <ChatWidget />
      </body>
    </html>
  );
}
