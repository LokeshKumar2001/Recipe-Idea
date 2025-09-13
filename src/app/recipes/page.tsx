"use client";

import SearchBar from "@/components/searchBar";
import { useState } from "react";
import { searchMeals } from "../../../lib/api";
import ReceipeCard, { RecipeCardProps } from "@/components/ReceipeCard";

const RecipePage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [recipes, setRecipes] = useState<RecipeCardProps[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    const meals = await searchMeals(query);
    setRecipes(meals);
    console.log(recipes);
  };
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-3">Receipe Idea</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <p className="mt-4">Loading recipes...</p>}

      <div className="grid grid-cols-1 sm: grid-cols-2 md:grid-cols-3 gap-6 mt-5">
        {recipes.map((meal) => (
          <ReceipeCard
            key={meal.idMeal}
            idMeal={meal.idMeal}
            strMeal={meal.strMeal}
            strMealThumb={meal.strMealThumb}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipePage;
