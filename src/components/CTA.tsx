import Link from "next/link";
export function CTA(props: {
  heading: string; sub?: string;
  cta: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  const { heading, sub, cta, secondary } = props;
  return (
    <section className="card">
      <h3 className="text-2xl font-semibold">{heading}</h3>
      {sub && <p className="mt-2 text-white/70">{sub}</p>}
      <div className="mt-6 flex gap-3">
        <Link className="btn" href={cta.href}>{cta.label}</Link>
        {secondary && (
          <Link className="inline-flex items-center rounded-2xl px-5 py-3 ring-1 ring-white/20" href={secondary.href}>
            {secondary.label}
          </Link>
        )}
      </div>
    </section>
  );
}
