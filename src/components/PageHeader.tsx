export function PageHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <header className="space-y-3">
      <p className="tag">{eyebrow}</p>
      <h1 className="text-3xl sm:text-5xl font-semibold">{title}</h1>
      {desc && <p className="max-w-2xl text-white/70">{desc}</p>}
    </header>
  );
}
