import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Бриф на проект — получить предложение",
  description:
    "Заполните бриф и получите предложение по умному дому, IoT или IIoT. Быстрая оценка и сроки.",
  alternates: { canonical: "/brif" },
};

export default function BriefLayout({ children }: { children: React.ReactNode }) {
  return children;
}


