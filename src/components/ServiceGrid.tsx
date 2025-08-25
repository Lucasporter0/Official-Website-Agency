const services = [
  {
    title: "Starter Website",
    bullets: ["1–3 pages (Home, About, Contact)", "Mobile-first, fast build", "Basic SEO + analytics"]
  },
  {
    title: "Growth Website",
    bullets: ["Custom pages & components", "SEO schema + blog setup", "Integrations (email, forms, CRM)"]
  },
  {
    title: "Premium Funnel",
    bullets: ["Landing + lead magnet", "Email capture & sequences (Klaviyo/Mailchimp)", "Tested ad-ready sections"]
  }
];
export function ServiceGrid() {
  return (
    <section className="grid gap-6 sm:grid-cols-3">
      {services.map((s) => (
        <article key={s.title} className="card">
          <h3 className="text-lg font-semibold">{s.title}</h3>
          <ul className="mt-3 space-y-2 text-white/80 list-disc pl-5">
            {s.bullets.map((b) => <li key={b}>{b}</li>)}
          </ul>
          <p className="mt-4 text-white/60 text-sm">Pricing is tailored per project scope. Ask for a proposal.</p>
        </article>
      ))}
    </section>
  );
}
