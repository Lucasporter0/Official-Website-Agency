// OVERWRITE this file: src/components/Hero.tsx
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div className="absolute inset-0 -z-10 opacity-30 [background:radial-gradient(1200px_600px_at_20%_-10%,#4ADE80,transparent_60%)]" />
      <div className="container-edge py-20">
        <p className="tag">Natural Edge Media</p>
        <h1 className="mt-3 text-4xl/tight sm:text-6xl/tight font-semibold">
          Clean, high-converting websites
          <br />for health & wellness brands.
        </h1>
        <p className="mt-5 max-w-2xl text-white/80">
          Strategy-first, SEO-ready builds that are fast, accessible, and easy to manage. Design you’re proud to ship.
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="#contact" className="btn">Request a proposal</Link>
          <Link href="#services" className="inline-flex items-center rounded-2xl px-5 py-3 ring-1 ring-white/20">
            Explore services
          </Link>
        </div>
      </div>
    </div>
  );
}
