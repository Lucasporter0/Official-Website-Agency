// ADD this new file: src/components/Services.tsx
const items = [
  {
    title: "Starter Website",
    desc: "1–3 page site. Strategy, design, build, launch. Fast, clean, and mobile-first.",
    bullets: ["Home, About, Contact", "Basic SEO & analytics", "Deployment & handoff"]
  },
  {
    title: "Growth Website",
    desc: "Multi-page site with SEO, blog, and the integrations you actually use.",
    bullets: ["Custom components & pages", "SEO schema + blog setup", "Integrations (email/forms/CRM)"]
  },
  {
    title: "Premium Funnel",
    desc: "Website + lead capture + conversion-focused landing flow.",
    bullets: ["Landing + lead magnet", "Email sequences (Klaviyo/Mailchimp)", "Ad-ready sections & testing"]
  }
];

export function Services() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="tag">Services</p>
        <h2 className="text-3xl sm:text-4xl font-semibold">Strategy-first websites that convert</h2>
        <p className="text-white/70 max-w-2xl">
          We design and build fast, SEO-ready sites with clean UX and measurable outcomes—no fluff, no lock-in.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-3">
        {items.map((s) => (
          <article key={s.title} className="card">
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-white/70">{s.desc}</p>
            <ul className="mt-3 space-y-2 text-white/80 list-disc pl-5">
              {s.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
            <p className="mt-4 text-white/60 text-sm">
              Pricing is tailored per scope. Ask for a proposal.
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

