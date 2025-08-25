// OVERWRITE this file: src/app/page.tsx
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";

export default function HomePage() {
  return (
    <div className="space-y-24">
      {/* HERO */}
      <section id="home" aria-label="Hero">
        <Hero />
      </section>

      {/* SERVICES */}
      <section id="services" aria-label="Services" className="scroll-mt-24">
        <Services />
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" aria-label="Testimonials" className="scroll-mt-24">
        <Testimonials />
      </section>

      {/* CONTACT */}
      <section id="contact" aria-label="Contact" className="scroll-mt-24">
        <div className="space-y-6">
          <header className="space-y-2">
            <p className="tag">Contact</p>
            <h2 className="text-3xl sm:text-4xl font-semibold">Tell us what you’re building</h2>
            <p className="text-white/70 max-w-2xl">
              Share your goals and constraints. We’ll reply with a tailored proposal—no generic pricing tables.
            </p>
          </header>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
