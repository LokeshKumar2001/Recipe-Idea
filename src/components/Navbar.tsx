"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { LogOut, Menu, Moon, Sun, X } from "lucide-react";
import { useAppStore } from "@/store/appStore";
import { useTheme } from "next-themes";

interface DecodedToken {
  userId: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useAppStore();
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [token, setToken] = useState<string | null>();
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    setTheme(theme);
  }, [setTheme, theme]);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        setMounted(true);
        const res = await fetch("/api/auth/getToken");
        const data = await res.json();
        if (data.token) {
          setToken(data.token);
        }
      } catch (err) {
        console.error("Error fetching token:", err);
      }
    };

    fetchToken();
  }, []);

  if (!mounted) return false;

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-600 dark:bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Brand */}
          <div className="flex items-center gap-2">
            <Image src="/logo.png" width={40} height={40} alt="Logo" />
            <Link href="/" className="text-xl font-bold tracking-wide">
              Recipe Ideas
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-orange-300 transition">
              Home
            </Link>
            <Link href="/recipes" className="hover:text-orange-300 transition">
              Recipes
            </Link>
            <Link
              href="/categories"
              className="hover:text-orange-300 transition"
            >
              Categories
            </Link>
            <Link
              href="/favorites"
              className="hover:text-orange-300 transition"
            >
              Favorites
            </Link>
            <Link
              href="/about"
              className={`text-${
                theme === "dark" ? "  text-white" : " text-black"
              }hover:text-orange-300 transition`}
            >
              About
            </Link>
            <Button
              onClick={toggleTheme}
              variant="ghost"
              className={`p-2 rounded-lg text-${
                theme === "dark" ? "  text-white" : " text-black"
              }`}
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </Button>
            {token && (
              <Link
                href="/logout"
                className={`text-${
                  theme === "dark" ? "  text-white" : " text-black"
                } hover:text-orange-400 transition`}
                title="Logout"
              >
                {<LogOut />}
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-500 dark:bg-gray-700"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-orange-400"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-800 px-4 pb-4 space-y-2 text-black dark:text-white">
          <Link
            href="/"
            className="block py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded px-2"
          >
            Home
          </Link>
          <Link
            href="/recipes"
            className="block py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded px-2"
          >
            Recipes
          </Link>
          <Link
            href="/categories"
            className="block py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded px-2"
          >
            Categories
          </Link>
          <Link
            href="/favorites"
            className="block py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded px-2"
          >
            Favorites
          </Link>
          <Link
            href="/about"
            className="block py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded px-2"
          >
            About
          </Link>
          <Link
            href="/logout"
            className="flex items-center gap-2 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded px-2"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
