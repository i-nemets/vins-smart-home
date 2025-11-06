# VINS — IoT / IIoT / Smart Home

Современный продающий сайт для услуг умного дома, IoT и IIoT с упором на SEO и конверсию.

## Стек
- **Next.js 14** (App Router)
- **shadcn/ui** (New York theme) + **Tailwind CSS**
- **MDX** для блога
- **React Hook Form** + **Zod** для форм
- **Resend** для email-уведомлений
- **Vercel Analytics** + **Speed Insights**

## Функции
- ✅ 55+ страниц: главная, услуги, блог (16 статей), кейсы (5), FAQ (15 вопросов), гео (Минск/Москва), калькулятор, чек-лист
- ✅ SEO: metadata/OG, sitemap/robots, JSON-LD (Service/Product/FAQPage/LocalBusiness/Breadcrumb/Article), canonical/hreflang
- ✅ Формы: бриф с валидацией, маска телефона, UTM-захват, honeypot, rate-limit, согласие
- ✅ Email: Resend integration для лидов и чек-листа
- ✅ CRM: готовая интеграция HubSpot/Pipedrive/Webhook (требуется токен)
- ✅ Аналитика: @vercel/analytics, Speed Insights, GA4/Meta Pixel (через ENV)
- ✅ Перфоманс: preload шрифтов, image placeholders/sizes, skip-link, фокус-стили
- ✅ Виджеты: cookie banner, Crisp chat (через ENV)

## Установка

\`\`\`bash
npm install
npm run dev
\`\`\`

Откройте http://localhost:3000.

## ENV переменные

Создайте `.env.local`:

\`\`\`bash
# Site
NEXT_PUBLIC_SITE_URL=https://ваш-домен

# Email (Resend)
RESEND_API_KEY=re_...
LEADS_TO_EMAIL=you@domain.com
LEADS_FROM_EMAIL=noreply@resend.dev

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=123456789

# Search Console / Meta Verification
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=...
NEXT_PUBLIC_META_SITE_VERIFICATION=...

# Chat (опционально)
NEXT_PUBLIC_CRISP_WEBSITE_ID=...

# CRM (выберите один)
HUBSPOT_ACCESS_TOKEN=...
# или
PIPEDRIVE_API_TOKEN=...
# или
CRM_WEBHOOK_URL=https://...
\`\`\`

## Деплой

### Vercel (рекомендуется)
1. Подключите GitHub/GitLab репозиторий к Vercel
2. Добавьте ENV переменные в Settings → Environment Variables
3. Deploy автоматически при push в main

### Другой хостинг
\`\`\`bash
npm run build
npm start
\`\`\`

## Структура

- \`src/app/\` — страницы и API-роуты
- \`src/components/\` — переиспользуемые компоненты и UI (shadcn/ui)
- \`src/lib/\` — утилиты, валидаторы, CRM, email
- \`public/\` — статические файлы

## Контент

### Блог (MDX)
Добавьте новую статью: \`src/app/blog/<slug>/page.mdx\`

### Кейсы (MDX)
Добавьте кейс: \`src/app/kejsy/<slug>/page.mdx\`

### Гео-страницы
Динамические роуты: \`/uslugi/umnyj-dom/<город>\` и \`/uslugi/iiot/<город>\`

## SEO
- Sitemap: автогенерация через \`app/sitemap.ts\`
- Robots: \`app/robots.ts\`
- OG images: динамические для блога/кейсов (\`opengraph-image.tsx\`)
- JSON-LD: на всех ключевых страницах

## Формы и лиды
- Бриф: \`/brif\` → API \`/api/lead\` → Resend + CRM
- Чек-лист: \`/checklist\` → API \`/api/checklist\` → email с PDF

## Поддержка
Для вопросов и доработок: info@vins.example
