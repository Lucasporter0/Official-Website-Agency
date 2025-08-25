import { PageHeader } from "@/components/PageHeader";
import { WorkList } from "@/components/WorkList";

export default function WorkPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Selected work"
        title="Proof in the details"
        desc="A few recent builds. Real brands. Real outcomes."
      />
      <WorkList />
    </div>
  );
}
