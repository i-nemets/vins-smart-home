import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Условия использования",
  description: "Правила и условия использования сайта и услуг.",
};

export default function TermsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Условия использования</h1>
      <div className="prose prose-invert mt-6 max-w-none text-sm leading-6 opacity-90">
        <h2>Предмет</h2>
        <p>Сайт предоставляет информацию об услугах и форму обратной связи для запроса коммерческого предложения.</p>
        <h2>Ограничение ответственности</h2>
        <p>Информация на сайте носит справочный характер и не является публичной офертой.</p>
        <h2>Интеллектуальная собственность</h2>
        <p>Материалы сайта защищены. Копирование допускается только с согласия правообладателя.</p>
        <h2>Обратная связь</h2>
        <p>Отправляя формы, вы подтверждаете корректность данных и согласие на обработку персональных данных.</p>
      </div>
    </main>
  );
}


