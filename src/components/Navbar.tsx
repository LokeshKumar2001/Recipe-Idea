"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useAppStore } from "@/store/appStore";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useAppStore();
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-500 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Image src="/logo.png" width={40} height={40} alt="No Image" />
          <Link href="/" className="text-2xl font-bold tracking-wide">
            Recipe Ideas
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover: text-slate-200">
              Home
            </Link>
            <Link href="/recipes" className="text-slate-200">
              Recipes
            </Link>
            <Link href="/ingredients" className="text-slate-200">
              Ingredients
            </Link>
            <Link href="/favorites" className="text-slate-200">
              Favorites
            </Link>
            <Link href="/about" className="text-slate-200">
              About
            </Link>

            <Button
              onClick={toggleTheme}
              className="p-2 rounded-lg  dark:bg-gray-700"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </Button>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg  dark:bg-gray-700"
              >
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              <button
                className="bg-amber-400"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-800 px-4 pb-3 space-y-2">
          <Link
            href="/"
            className="text-black hover:bg-blue-400 cursor-pointer  text-slate-800"
          >
            Home
          </Link>
          <Link
            href={"/recipe"}
            className="block text-black hover:bg-blue-400 cursor-pointer  text-slate-800"
          >
            Recipes
          </Link>
          <Link
            href="/ingredients"
            className="block text-black hover:bg-blue-400 cursor-pointer text-slate-800"
          >
            Ingredients
          </Link>
          <Link
            href="/favorites"
            className="block text-black hover:bg-blue-400 cursor-pointer  text-slate-800"
          >
            Favorites
          </Link>
          <Link
            href="/about"
            className="block hover:bg-blue-400 cursor-pointer  text-slate-800"
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
