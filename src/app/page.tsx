import { Hero } from "@/components/Hero";
import { ServicesPreview } from "@/components/ServicesPreview";
import { Logos } from "@/components/Logos";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";

export default function HomePage() {
  return (
    <div className="space-y-24">
      <Hero />
      <Logos />
      <ServicesPreview />
      <Process />
      <CTA
        heading="Ready to ship a site you’re proud of?"
        sub="No pricing tables here—every build is tailored. Tell us your goals and we’ll map the most effective path."
        cta={{ href: "/contact", label: "Request a proposal" }}
        secondary={{ href: "/work", label: "See selected work" }}
      />
    </div>
  );
}
