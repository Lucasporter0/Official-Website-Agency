import Link from "next/link";
const items = [
  { title: "Starter Website", desc: "1–3 page site, fast and clean. Strategy, design, build, and launch.", href: "/services" },
  { title: "Growth Website", desc: "Multi-page site with SEO, analytics, and integrations that matter.", href: "/services" },
  { title: "Premium Funnel", desc: "Website + email capture + basic ad landing flow. Measured and iterative.", href: "/services" }
];
export function ServicesPreview() {
  return (
    <section className="grid gap-6 sm:grid-cols-3">
      {items.map((s) => (
        <article key={s.title} className="card">
          <h3 className="text-lg font-semibold">{s.title}</h3>
          <p className="mt-2 text-white/70">{s.desc}</p>
          <Link href={s.href} className="mt-4 inline-block text-brand-accent">Learn more →</Link>
        </article>
      ))}
    </section>
  );
}
