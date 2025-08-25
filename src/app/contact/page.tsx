import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Contact"
        title="Tell us what you’re building"
        desc="Give us your goals and constraints. We’ll send a tailored proposal—no generic pricing."
      />
      <ContactForm />
    </div>
  );
}
