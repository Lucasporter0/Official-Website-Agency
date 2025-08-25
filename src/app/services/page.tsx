import { ServiceGrid } from "@/components/ServiceGrid";
import { PageHeader } from "@/components/PageHeader";

export default function ServicesPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Services"
        title="Strategy-first websites that convert"
        desc="We design and build fast, SEO-ready sites with the integrations you actually use. No fluff, no lock-in."
      />
      <ServiceGrid />
    </div>
  );
}
