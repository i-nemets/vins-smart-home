"use client";
import { useEffect, useState } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const v = localStorage.getItem("cookie-consent");
    if (!v) setVisible(true);
  }, []);
  if (!visible) return null;
  return (
    <div className="fixed bottom-4 inset-x-0 px-4 z-50">
      <div className="mx-auto max-w-3xl rounded-md border bg-background text-foreground p-4 shadow">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
          <p className="text-sm opacity-80">
            Мы используем файлы cookie. Подробнее в <a className="underline" href="/privacy" target="_blank" rel="noreferrer">Политике конфиденциальности</a>.
          </p>
          <div className="flex gap-2">
            <button
              className="inline-flex items-center rounded-md bg-primary text-primary-foreground px-3 py-2 text-sm"
              onClick={() => {
                localStorage.setItem("cookie-consent", "accepted");
                setVisible(false);
              }}
            >
              Согласен
            </button>
            <button
              className="inline-flex items-center rounded-md border px-3 py-2 text-sm"
              onClick={() => setVisible(false)}
            >
              Позже
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


