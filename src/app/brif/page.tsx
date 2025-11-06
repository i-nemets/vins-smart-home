"use client";
import { Suspense, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, type LeadInput } from "@/lib/validators";
import { Input } from "@/components/ui/input";
import InputMask from "react-input-mask";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BriefPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const form = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "smart-home",
      message: "",
    },
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const utmKeys = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_term",
        "utm_content",
      ] as const;
      utmKeys.forEach((k) => {
        const v = params.get(k);
        if (v) form.setValue(k, v);
      });
      if (document.referrer) {
        form.setValue("referrer", document.referrer);
      }
    }
  }, [form]);

  async function onSubmit(values: LeadInput) {
    setStatus("idle");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source: "brif" }),
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
    setValue,
    watch,
  } = form;

  return (
    <Suspense fallback={null}>
      <main className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Бриф
        </h1>
        <p className="mt-4 text-black/70 dark:text-white/70">
          Заполните форму — пришлём ориентировочное предложение и сроки.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
          <input type="hidden" {...register("utm_source")} />
          <input type="hidden" {...register("utm_medium")} />
          <input type="hidden" {...register("utm_campaign")} />
          <input type="hidden" {...register("utm_term")} />
          <input type="hidden" {...register("utm_content")} />
          <input type="hidden" {...register("referrer")} />
          <input
            type="text"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            {...register("hp")}
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Имя</Label>
              <Input id="name" placeholder="Иван" {...register("name")} />
              {errors.name && (
                <p className="text-sm text-destructive">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="phone">Телефон</Label>
              <InputMask mask="+7 (999) 999-99-99" {...register("phone")}>
                {(inputProps: React.InputHTMLAttributes<HTMLInputElement>) => (
                  <Input
                    {...inputProps}
                    id="phone"
                    type="tel"
                    placeholder="+7 (900)-00-00"
                  />
                )}
              </InputMask>
              {errors.phone && (
                <p className="text-sm text-destructive">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email (необязательно)</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-destructive">
                {errors.email.message as string}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label>Тип услуги</Label>
            <Select
              value={watch("service")}
              onValueChange={(v) =>
                setValue("service", v as LeadInput["service"])
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Выберите услугу" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="smart-home">Умный дом</SelectItem>
                <SelectItem value="iot">IoT</SelectItem>
                <SelectItem value="iiot">IIoT</SelectItem>
                <SelectItem value="other">Другое</SelectItem>
              </SelectContent>
            </Select>
            {errors.service && (
              <p className="text-sm text-destructive">
                {errors.service.message as string}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="message">Опишите задачу</Label>
            <Textarea
              id="message"
              rows={6}
              placeholder="Кратко о проекте..."
              {...register("message")}
            />
            {errors.message && (
              <p className="text-sm text-destructive">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Отправка..." : "Отправить бриф"}
            </Button>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                {...register("consent", { required: true })}
              />
              <span>
                Я согласен с{" "}
                <a
                  className="underline"
                  href="/privacy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Политикой конфиденциальности
                </a>
              </span>
            </label>
            {status === "success" && (
              <span className="text-sm text-green-600 dark:text-green-400">
                Отправлено. Свяжемся в ближайшее время.
              </span>
            )}
            {status === "error" && (
              <span className="text-sm text-destructive">
                Ошибка отправки. Попробуйте ещё раз.
              </span>
            )}
          </div>
        </form>
      </main>
    </Suspense>
  );
}
