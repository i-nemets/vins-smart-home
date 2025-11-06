export function ArticleHeader({ 
  author = "Команда VINS", 
  readTime = "5 мин", 
  date = "Ноябрь 2025" 
}: { 
  author?: string; 
  readTime?: string; 
  date?: string 
}) {
  return (
    <div className="mb-8 flex items-center justify-between text-sm text-muted-foreground border-b pb-4 border-white/10">
      <div>Автор: <span className="text-foreground font-medium">{author}</span></div>
      <div className="flex items-center gap-3">
        <span>{readTime} чтения</span>
        <span>·</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

export function CaseMetrics({ metrics }: { metrics: { label: string; value: string; color: string }[] }) {
  return (
    <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-blue-500/5 border-2 border-green-500/30">
      <div className="grid gap-6 sm:grid-cols-3 text-center">
        {metrics.map((m, i) => (
          <div key={i}>
            <div className={`text-3xl font-bold ${m.color}`}>{m.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SectionDivider() {
  return <hr className="my-8 border-white/10" />;
}

export function CallToAction({ href = "/brif", text = "Оставить заявку" }: { href?: string; text?: string }) {
  return (
    <div className="mt-10 p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-2 border-blue-500/30">
      <h3 className="text-lg font-semibold">Нужна помощь с проектом?</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Мы проведём аудит, подберём оптимальный стек и подготовим смету.
      </p>
      <div className="mt-4">
        <a
          href={href}
          className="inline-flex items-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm hover:opacity-90 transition-opacity"
        >
          {text}
        </a>
      </div>
    </div>
  );
}

