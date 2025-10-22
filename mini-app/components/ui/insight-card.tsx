"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./card";

export function InsightCard() {
  const [dietType, setDietType] = useState<string>("Unknown");

  // Simple heuristic: if total calories < 1500 -> low calorie, if > 2000 -> high calorie
  // In a real app you would analyze meal patterns or user input.
  useEffect(() => {
    const stored = localStorage.getItem("meals");
    if (stored) {
      const meals = JSON.parse(stored) as Array<{
        calories: number;
      }>;
      const totalCalories = meals.reduce(
        (sum: number, m: { calories: number }) => sum + m.calories,
        0
      );
      if (totalCalories < 1500) {
        setDietType("Low‑Calorie Diet");
      } else if (totalCalories > 2000) {
        setDietType("High‑Calorie Diet");
      } else {
        setDietType("Balanced Diet");
      }
    }
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Diet Insight</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-medium">{dietType}</p>
        <p className="text-sm text-muted-foreground mt-2">
          This insight is based on your recent meal totals. Adjust your
          nutrition to match your weight‑loss goals.
        </p>
      </CardContent>
    </Card>
  );
}
