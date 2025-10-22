"use client";

import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";

interface Meal {
  name: string;
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
  date: string;
}

export function MealTracker() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [form, setForm] = useState({
    name: "",
    calories: "",
    carbs: "",
    protein: "",
    fat: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMeal: Meal = {
      name: form.name,
      calories: Number(form.calories),
      carbs: Number(form.carbs),
      protein: Number(form.protein),
      fat: Number(form.fat),
      date: form.date,
    };
    setMeals([...meals, newMeal]);
    setForm({
      name: "",
      calories: "",
      carbs: "",
      protein: "",
      fat: "",
      date: "",
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="grid gap-4 mb-6">
        <div className="grid gap-2">
          <Label htmlFor="name">Meal Name</Label>
          <Input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="calories">Calories</Label>
          <Input
            id="calories"
            name="calories"
            type="number"
            value={form.calories}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="carbs">Carbs (g)</Label>
          <Input
            id="carbs"
            name="carbs"
            type="number"
            value={form.carbs}
            onChange={handleChange}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="protein">Protein (g)</Label>
          <Input
            id="protein"
            name="protein"
            type="number"
            value={form.protein}
            onChange={handleChange}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="fat">Fat (g)</Label>
          <Input
            id="fat"
            name="fat"
            type="number"
            value={form.fat}
            onChange={handleChange}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="date">Date</Label>
          <Input
            id="date"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
          />
        </div>
        <Button type="submit" className="w-full">
          Add Meal
        </Button>
      </form>

      <h3 className="text-xl font-medium mb-2">Meals</h3>
      <ul className="space-y-2">
        {meals.map((meal, idx) => (
          <li
            key={idx}
            className="p-3 border rounded-md bg-muted/20 flex justify-between items-center"
          >
            <div>
              <span className="font-semibold">{meal.name}</span> -{" "}
              {meal.calories} kcal
            </div>
            <span className="text-sm text-muted-foreground">
              {meal.date}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
