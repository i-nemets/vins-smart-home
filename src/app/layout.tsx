import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CookieBanner } from "@/components/CookieBanner";
import { ChatWidget } from "@/components/ChatWidget";
import { ThemeToggle } from "@/components/ThemeToggle";
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
              <ThemeToggle />
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
        <footer className="mt-16 border-t border-white/10 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm">
              <div>
                <h3 className="font-semibold mb-3">VINS</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">Проектирование и внедрение умного дома, IoT и IIoT под ключ</p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Услуги</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="/uslugi/umnyj-dom" className="hover:text-blue-400 transition-colors">Умный дом</a></li>
                  <li><a href="/uslugi/iot" className="hover:text-purple-400 transition-colors">IoT</a></li>
                  <li><a href="/uslugi/iiot" className="hover:text-green-400 transition-colors">IIoT</a></li>
                  <li><a href="/kalkulyator" className="hover:text-blue-400 transition-colors">Калькулятор</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Ресурсы</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="/blog" className="hover:text-blue-400 transition-colors">Блог</a></li>
                  <li><a href="/kejsy" className="hover:text-purple-400 transition-colors">Кейсы</a></li>
                  <li><a href="/faq" className="hover:text-green-400 transition-colors">FAQ</a></li>
                  <li><a href="/checklist" className="hover:text-blue-400 transition-colors">Чек-лист</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Контакты</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="tel:+375291234567" className="hover:text-blue-400 transition-colors">+375 (29) 123-45-67</a></li>
                  <li><a href="mailto:info@vins.example" className="hover:text-purple-400 transition-colors">info@vins.example</a></li>
                  <li><a href="/kontakty" className="hover:text-green-400 transition-colors">Все контакты</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4 justify-between items-center text-xs text-muted-foreground">
              <p>© {new Date().getFullYear()} VINS. Все права защищены.</p>
              <div className="flex gap-4">
                <a href="/privacy" className="hover:text-blue-400 transition-colors">Политика</a>
                <a href="/terms" className="hover:text-purple-400 transition-colors">Условия</a>
              </div>
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
