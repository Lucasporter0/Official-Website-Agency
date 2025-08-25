type Item = { title: string; result: string; tags: string[] };
const items: Item[] = [
  { title: "Wellness Co.", result: "Home redesign & speed boost → +38% time on page.", tags: ["Next.js","SEO","Klaviyo"] },
  { title: "Daily Greens", result: "Conversion-focused landing + email capture.", tags: ["Funnel","CRO","Email"] },
  { title: "Calm Fitness", result: "New brand site with blog & analytics.", tags: ["Design","Build","Analytics"] }
];
export function WorkList() {
  return (
    <section className="grid gap-6 sm:grid-cols-3">
      {items.map(i => (
        <article key={i.title} className="card">
          <h3 className="text-lg font-semibold">{i.title}</h3>
          <p className="mt-2 text-white/80">{i.result}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {i.tags.map(t => (
              <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs">{t}</span>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
