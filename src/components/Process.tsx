const steps = [
  { t: "01 — Discover", d: "Clarify goals, audience, and constraints. No assumptions." },
  { t: "02 — Design", d: "Wireframe → visual design. Content-first, accessibility-minded." },
  { t: "03 — Build", d: "Next.js + Tailwind. SEO, analytics, and integrations wired in." },
  { t: "04 — Launch", d: "Deploy on Vercel. Measure, iterate, and support." }
];
export function Process() {
  return (
    <section className="grid gap-6 sm:grid-cols-4">
      {steps.map(s => (
        <div key={s.t} className="card">
          <p className="tag">{s.t}</p>
          <p className="mt-2 text-white/80">{s.d}</p>
        </div>
      ))}
    </section>
  );
}
