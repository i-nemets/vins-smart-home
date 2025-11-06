import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Вопросы и ответы: умный дом, IoT, IIoT",
  description:
    "Популярные вопросы по умному дому, IoT и IIoT: сроки, стоимость, поддержка и безопасность.",
};

export default function FaqPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Вопросы и ответы</h1>
      <p className="mt-4 text-black/70 dark:text-white/70">Ответы на частые вопросы по умному дому, IoT и IIoT.</p>

      <div className="mt-8">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="q1">
            <AccordionTrigger>Сколько занимает внедрение умного дома?</AccordionTrigger>
            <AccordionContent>Обычно 2–6 недель в зависимости от площади, подсистем и готовности объекта (ремонт, сети).</AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger>Как формируется стоимость?</AccordionTrigger>
            <AccordionContent>По проекту и смете: оборудование, работы (монтаж, настройка), пуск и сервис. Примерные цены указаны на страницах услуг.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="q3">
            <AccordionTrigger>Можно ли интегрировать уже купленное оборудование?</AccordionTrigger>
            <AccordionContent>Да, поддерживаем популярные протоколы и бренды. Оценим совместимость на аудите.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="q4">
            <AccordionTrigger>Работаете с существующими системами (SCADA/MES/ERP)?</AccordionTrigger>
            <AccordionContent>Да, интегрируемся через стандартные API, OPC UA, Modbus или вебхуки.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="q5">
            <AccordionTrigger>Какой протокол выбрать для умного дома: Zigbee, Z-Wave или Wi‑Fi?</AccordionTrigger>
            <AccordionContent>Зависит от бюджета и требований. Zigbee — бюджет и большой выбор, Z‑Wave — стабильность, Wi‑Fi — для видео/стриминга.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="q6">
            <AccordionTrigger>Что такое OEE и как его считаете?</AccordionTrigger>
            <AccordionContent>OEE (Overall Equipment Effectiveness) = доступность × производительность × качество. Собираем статусы станков и рассчитываем автоматически.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="q7">
            <AccordionTrigger>Можно ли подключить старые станки к IIoT?</AccordionTrigger>
            <AccordionContent>Да, используем ретрофит (внешние датчики), Modbus/TCP, считыватели сигналов.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="q8">
            <AccordionTrigger>Как обеспечиваете безопасность IoT/IIoT?</AccordionTrigger>
            <AccordionContent>Сегментация сети, TLS/VPN, RBAC, логирование, регулярные обновления и аудит.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="q9">
            <AccordionTrigger>Что входит в SLA?</AccordionTrigger>
            <AccordionContent>Время реакции, регламентные проверки, обновления, резервное копирование конфигураций.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="q10">
            <AccordionTrigger>Работаете в других городах (кроме Минска/Москвы)?</AccordionTrigger>
            <AccordionContent>Да, готовы обсудить проекты в СНГ и РФ. Возможен удалённый запуск и выездные визиты.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="q11">
            <AccordionTrigger>Как происходит пост‑гарантийное обслуживание?</AccordionTrigger>
            <AccordionContent>Заключаем договор SLA с регламентом реакции, плановыми проверками и обновлениями.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="q12">
            <AccordionTrigger>Можно ли масштабировать систему позже?</AccordionTrigger>
            <AccordionContent>Да, проектируем с учётом масштабирования (модульность, резервы сети).</AccordionContent>
          </AccordionItem>
          <AccordionItem value="q13">
            <AccordionTrigger>Предоставляете обучение?</AccordionTrigger>
            <AccordionContent>Да, обучаем пользователей и персонал на этапе пуска и по запросу после внедрения.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="q14">
            <AccordionTrigger>Работаете по предоплате или постоплате?</AccordionTrigger>
            <AccordionContent>Обычно 50% аванс, 50% по завершению пуска. Возможна рассрочка по этапам.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="q15">
            <AccordionTrigger>Как начать проект?</AccordionTrigger>
            <AccordionContent>Заполните <a href="/brif" className="underline">бриф</a> или позвоните. Проведём аудит, подготовим ТЗ и смету.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "Сколько занимает внедрение умного дома?", acceptedAnswer: { "@type": "Answer", text: "Обычно 2–6 недель в зависимости от площади, подсистем и готовности объекта (ремонт, сети)." } },
              { "@type": "Question", name: "Как формируется стоимость?", acceptedAnswer: { "@type": "Answer", text: "По проекту и смете: оборудование, работы (монтаж, настройка), пуск и сервис." } },
              { "@type": "Question", name: "Можно ли интегрировать уже купленное оборудование?", acceptedAnswer: { "@type": "Answer", text: "Да, поддерживаем популярные протоколы и бренды. Оценим совместимость на аудите." } },
            ],
          }),
        }}
      />
    </main>
  );
}
