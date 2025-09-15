"use client";

import { useAppStore } from "@/store/appStore";
// Zustand store for dark/light mode
import { motion } from "framer-motion";

const AboutPage = () => {
  const { theme } = useAppStore(); // 'light' or 'dark'

  return (
    <div
      className={`min-h-screen px-6 py-12 transition-colors duration-300 mt-5 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          🥗 About Recipe Ideas
        </motion.h1>

        <motion.p
          className="text-lg leading-relaxed mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Welcome to <span className="font-semibold">Recipe Ideas</span> – your
          personal cooking companion! We help you discover meals that match{" "}
          <strong>your mood, your ingredients, and your time</strong>.
        </motion.p>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-2">👩‍🍳 Our Mission</h2>
            <p>
              To make cooking simple, fun, and stress-free for everyone –
              whether you’re a busy professional, a student, or just someone who
              loves good food.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-2">🌟 What You’ll Find</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Cook with What You Have</strong> – Enter your
                ingredients, and we’ll suggest recipes.
              </li>
              <li>
                <strong>Quick Recipes</strong> – Filter meals by how long they
                take to cook.
              </li>
              <li>
                <strong>Personalized Suggestions</strong> – Find meals based on
                mood, cravings, or diet.
              </li>
              <li>
                <strong>Healthy & Tasty</strong> – Balanced meals that don’t
                compromise on flavor.
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-2">
              💡 Why Recipe Ideas?
            </h2>
            <p>
              Because cooking should be enjoyable – not overwhelming. Whether
              it’s trying out a new dish, saving time with quick recipes, or
              making the most of what’s already in your kitchen, Recipe Ideas
              brings <strong>creativity and convenience</strong> to your meals.
            </p>
          </motion.div>
        </div>

        <motion.p
          className="mt-10 text-center text-lg italic font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          ✨ Cooking made simple. Meals made for you.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutPage;
