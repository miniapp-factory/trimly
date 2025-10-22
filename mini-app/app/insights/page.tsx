import { InsightCard } from "@/components/ui/insight-card";

export default function InsightsPage() {
  return (
    <main className="flex flex-col gap-6 px-4 py-8">
      <h2 className="text-2xl font-semibold">Diet Insights</h2>
      <InsightCard />
    </main>
  );
}
