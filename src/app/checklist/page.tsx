"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadMagnetSchema, type LeadMagnetInput } from "@/lib/validators";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";

function ChecklistFormInner() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const form = useForm<LeadMagnetInput>({
    resolver: zodResolver(leadMagnetSchema),
    defaultValues: { name: "", email: "" },
  });

  async function onSubmit(values: LeadMagnetInput) {
    setStatus("idle");
    try {
      const res = await fetch("/api/checklist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5 max-w-md">
      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" {...register("hp")} />
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Имя</Label>
        <Input id="name" placeholder="Иван" {...register("name")} />
        {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
        {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
      </div>
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" {...register("consent", { required: true })} />
        <span>
          Я согласен с{" "}
          <a className="underline" href="/privacy" target="_blank" rel="noreferrer">
            Политикой конфиденциальности
          </a>
        </span>
      </label>
      <div className="flex items-center gap-3">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Отправка..." : "Получить чек‑лист"}
        </Button>
        {status === "success" && (
          <span className="text-sm text-green-600 dark:text-green-400">Отправлено на почту. Проверьте входящие.</span>
        )}
        {status === "error" && (
          <span className="text-sm text-destructive">Ошибка отправки. Попробуйте ещё раз.</span>
        )}
      </div>
    </form>
  );
}

export default function ChecklistPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Чек‑лист по умному дому</h1>
      <p className="mt-4 text-black/70 dark:text-white/70">
        10 пунктов для проверки перед проектированием: сети, резервирование, сценарии, безопасность.
      </p>
      <Suspense fallback={null}>
        <ChecklistFormInner />
      </Suspense>
    </main>
  );
}

