// ADD this new file: src/components/Testimonials.tsx
type Quote = {
  quote: string;
  name: string;
  role: string;
};

const quotes: Quote[] = [
  {
    quote:
      "Natural Edge shipped a clean site that loads fast and converts. Traffic went up, but more importantly—sign-ups did too.",
    name: "Avery Lane",
    role: "Founder, Daily Greens"
  },
  {
    quote:
      "They guided us through content, SEO, and launch. Smooth process and the design actually reflects our brand.",
    name: "Jordan Patel",
    role: "Head of Marketing, Calm Fitness"
  },
  {
    quote:
      "Our landing + email flow paid for itself within weeks. Clear dashboards, quick iterations, real results.",
    name: "Maya Chen",
    role: "COO, Wellness Co."
  }
];

export function Testimonials() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="tag">Testimonials</p>
        <h2 className="text-3xl sm:text-4xl font-semibold">Proof in the details</h2>
        <p className="text-white/70 max-w-2xl">
          Teams choose Natural Edge Media for modern builds, clear communication, and measurable outcomes.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-3">
        {quotes.map((q) => (
          <figure key={q.name} className="card">
            <blockquote className="text-white/90">&ldquo;{q.quote}&rdquo;</blockquote>
            <figcaption className="mt-4 text-sm text-white/60">
              <span className="font-medium text-white/80">{q.name}</span> — {q.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
