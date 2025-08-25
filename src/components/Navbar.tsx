// OVERWRITE this file: src/components/Navbar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/#services", label: "Services" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#contact", label: "Contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname.startsWith("/#");

  return (
    <header className="border-b border-white/10 bg-black/30 backdrop-blur sticky top-0 z-50">
      <div className="container-edge flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          <span className="text-brand-accent">Natural</span> Edge Media
        </Link>
        <nav className="flex gap-6 text-sm">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className={`hover:text-white/90 ${isHome ? "text-white/70" : "text-white/70"}`}
            >
              {i.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
