import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Чек‑лист по умному дому: 10 пунктов перед проектированием",
  description: "Скачайте чек‑лист: что учесть при проектировании умного дома (сети, резервирование, сценарии, безопасность).",
  alternates: { canonical: "/checklist" },
};

export default function ChecklistLayout({ children }: { children: React.ReactNode }) {
  return children;
}

