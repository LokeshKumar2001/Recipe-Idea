"use client";

/*import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export default function Ingredients() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const apiData = process.env.NEXT_PUBLIC_BASE_CATEGORY_URL || "";
  // "https://www.themealdb.com/api/json/v1/1/search.php?s="

  useEffect(() => {
    async function fetchMeals() {
      try {
        const res = await axios.get(apiData);
        setMeals(res.data.meals || []);
      } catch (error) {
        console.error("Error fetching meals:", error);
        setMeals([]);
      }
    }

    if (apiData) fetchMeals();
  }, [apiData]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMeals = meals.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(meals.length / itemsPerPage);

  return (
    <div className="mt-20 p-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentMeals.map((meal) => (
          <div
            key={meal.idMeal}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <Image
              width={400}
              height={192}
              src={meal.strCategoryThumb}
              alt={meal.strCategory}
              className="w-full h-48 sm:h-56 md:h-48 lg:h-52 object-cover"
            />
            <h3 className="mt-2 p-2 font-semibold text-center">
              {meal.strCategory}
            </h3>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded-md min-w-[36px] ${
              page === currentPage
                ? "bg-orange-500 text-white font-bold"
                : "bg-gray-200 text-gray-700 hover:bg-orange-300"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
*/

"use client";

import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCategories = categories.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const api = process.env.NEXT_PUBLIC_BASE_CATEGORY_URL;

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await axios.get(api || "");
        setCategories(res.data.categories || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    fetchCategories();
  }, []);

  return (
    <div className="mt-20 p-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentCategories.map((cat) => (
          <div
            key={cat.idCategory}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <Image
              width={400}
              height={192}
              src={cat.strCategoryThumb}
              alt={cat.strCategory}
              className="w-full h-48 sm:h-56 md:h-48 lg:h-52 object-cover"
            />
            <h3 className="mt-2 p-2 font-semibold text-center">
              {cat.strCategory}
            </h3>
            <p className="p-2 text-sm text-gray-700">
              {cat.strCategoryDescription.substring(0, 100)}...
            </p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-wrap justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded-md min-w-[36px] ${
              page === currentPage
                ? "bg-orange-500 text-white font-bold"
                : "bg-gray-200 text-gray-700 hover:bg-orange-300"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
