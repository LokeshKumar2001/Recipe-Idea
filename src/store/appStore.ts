import { useTheme } from "next-themes";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";

type IngredientFilter = {
  ingredient: string;
};

type Recipe = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

type AppStore = {
  // Search & Filter
  ingredient: string;
  setIngredient: (val: string) => void;

  //recipes
  recipes: Recipe[];
  setRecipes: (data: Recipe[]) => void;

  // Favourites
  favourites: string[];
  addFavourite: (id: string) => void;
  removeFavourite: (id: string) => void;

  // Theme
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

export const useAppStore = create(
  persist<AppStore>(
    (set, get) => ({
      // Search
      ingredient: "",
      setIngredient: (val) => set({ ingredient: val }),

      recipes: [],
      setRecipes: (data) => set({ recipes: data }),

      favourites: [],
      addFavourite: (id) =>
        set((state) => ({
          favourites: state.favourites.includes(id)
            ? state.favourites
            : [...state.favourites, id],
        })),
      removeFavourite: (id) =>
        set((state) => ({
          favourites: state.favourites.filter((f) => f !== id),
        })),

      theme: "light",
      toggleTheme: () =>
        set({ theme: get().theme === "light" ? "dark" : "light" }),
      setTheme: (theme) => set({ theme }),
    }),

    {
      name: "app-storage",
    }
  )
);
