"use client";
import { useMemo, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

// metadata moved to layout because this page is a client component

type ServiceType = "smart-home" | "iiot";

export default function CalculatorPage() {
  const [service, setService] = useState<ServiceType>("smart-home");
  const [area, setArea] = useState(80); // м² для умного дома
  const [devices, setDevices] = useState(5); // станки/узлы для IIoT
  const [sla, setSla] = useState(false);

  const estimate = useMemo(() => {
    if (service === "smart-home") {
      const basePerM2 = 3000; // ₽ за м² (MVP)
      const total = area * basePerM2;
      return Math.max(total, 150000);
    }
    // IIoT
    const perNode = 180000; // ₽ за узел (MVP)
    const slaCost = sla ? 120000 : 0; // ежегодно, показываем в сумме первый год
    return Math.max(devices * perNode + slaCost, 300000);
  }, [service, area, devices, sla]);

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Калькулятор стоимости</h1>
      <p className="mt-4 text-black/70 dark:text-white/70">
        Получите ориентировочную стоимость внедрения. Итоговая смета зависит от проекта и сценариев.
      </p>

      <div className="mt-8 grid gap-6">
        <div className="grid gap-2">
          <Label>Услуга</Label>
          <Select value={service} onValueChange={(v) => setService(v as ServiceType)}>
            <SelectTrigger>
              <SelectValue placeholder="Выберите услугу" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="smart-home">Умный дом</SelectItem>
              <SelectItem value="iiot">IIoT</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {service === "smart-home" ? (
          <div className="grid gap-2">
            <Label htmlFor="area">Площадь объекта (м²)</Label>
            <Input
              id="area"
              type="number"
              min={20}
              step={5}
              value={area}
              onChange={(e) => setArea(Number(e.target.value) || 0)}
            />
            <p className="text-xs text-muted-foreground">MVP: ориентир — от 3000 ₽/м², минимум 150 000 ₽.</p>
          </div>
        ) : (
          <>
            <div className="grid gap-2">
              <Label htmlFor="devices">Количество станков/узлов</Label>
              <Input
                id="devices"
                type="number"
                min={1}
                step={1}
                value={devices}
                onChange={(e) => setDevices(Number(e.target.value) || 0)}
              />
              <p className="text-xs text-muted-foreground">MVP: ~180 000 ₽/узел. Минимум 300 000 ₽.</p>
            </div>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={sla} onChange={(e) => setSla(e.target.checked)} />
              Включить SLA (первый год)
            </label>
          </>
        )}

        <div className="mt-2 rounded-md border p-4">
          <p className="text-sm text-muted-foreground">Ориентировочная стоимость</p>
          <p className="mt-1 text-2xl font-semibold">≈ {estimate.toLocaleString("ru-RU")} ₽</p>
        </div>

        <div className="flex gap-3">
          <Button asChild>
            <a href="/brif?utm_source=calc">Получить точную смету</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/kejsy">Смотреть кейсы</a>
          </Button>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Калькулятор стоимости",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
          }),
        }}
      />
    </main>
  );
}


