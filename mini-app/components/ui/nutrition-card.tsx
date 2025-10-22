"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./card";

interface Meal {
  name: string;
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
  date: string;
}

export function NutritionCard() {
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalCarbs, setTotalCarbs] = useState(0);
  const [totalProtein, setTotalProtein] = useState(0);
  const [totalFat, setTotalFat] = useState(0);

  // In a real app this would come from a global store or API.
  // For demo purposes we read from localStorage.
  useEffect(() => {
    const stored = localStorage.getItem("meals");
    if (stored) {
      const meals = JSON.parse(stored) as Meal[];
      const totals = meals.reduce(
        (acc, m) => {
          acc.calories += m.calories;
          acc.carbs += m.carbs;
          acc.protein += m.protein;
          acc.fat += m.fat;
          return acc;
        },
        { calories: 0, carbs: 0, protein: 0, fat: 0 }
      );
      setTotalCalories(totals.calories);
      setTotalCarbs(totals.carbs);
      setTotalProtein(totals.protein);
      setTotalFat(totals.fat);
    }
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily Totals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="flex justify-between">
            <span>Calories:</span>
            <span>{totalCalories} kcal</span>
          </div>
          <div className="flex justify-between">
            <span>Carbs:</span>
            <span>{totalCarbs} g</span>
          </div>
          <div className="flex justify-between">
            <span>Protein:</span>
            <span>{totalProtein} g</span>
          </div>
          <div className="flex justify-between">
            <span>Fat:</span>
            <span>{totalFat} g</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
