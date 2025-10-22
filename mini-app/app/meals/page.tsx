import { MealTracker } from "@/components/ui/meal-tracker";
import { NutritionCard } from "@/components/ui/nutrition-card";

export default function MealsPage() {
  return (
    <main className="flex flex-col gap-6 px-4 py-8">
      <h2 className="text-2xl font-semibold">Meal Tracker</h2>
      <MealTracker />
      <NutritionCard />
    </main>
  );
}
