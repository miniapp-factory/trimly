import { description, title } from "@/lib/metadata";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-6 place-items-center px-4 py-8">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
      <div className="flex gap-4">
        <Link
          href="/meals"
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          Meals
        </Link>
        <Link
          href="/insights"
          className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90"
        >
          Insights
        </Link>
      </div>
    </main>
  );
}
