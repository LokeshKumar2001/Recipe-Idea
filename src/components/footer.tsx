"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Twitter, Mail } from "lucide-react";
import { useAppStore } from "@/store/appStore";

export default function Footer() {
  const { theme } = useAppStore();

  return (
    <footer
      className={`mt-10 border-t ${
        theme === "dark"
          ? "border-gray-800 bg-gray-900 text-white"
          : "border-gray-200 bg-slate-500 text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className={`text-2xl font-bold mt -2  text-${
              theme === "dark" ? "  text-white" : " text-black"
            } hover:text-orange-500 transition-colors`}
          >
            Recipe Ideas
          </h2>
          <p
            className={` mt -2 text-sm text-${
              theme === "dark" ? "  text-white" : " text-black"
            } hover:text-orange-500 transition-colors`}
          >
            Discover meals, save favorites, and cook smarter every day.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>
              <Link
                href="/"
                className={`text-${
                  theme === "dark" ? "  text-white" : " text-black"
                } hover:text-orange-500 transition-colors`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/favorites"
                className={`text-${
                  theme === "dark" ? "  text-white" : " text-black"
                } hover:text-orange-500 transition-colors`}
              >
                Favorites
              </Link>
            </li>
            <li>
              <Link
                href="/categories"
                className={`text-${
                  theme === "dark" ? "  text-white" : " text-black"
                } hover:text-orange-500 transition-colors`}
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`text-${
                  theme === "dark" ? "  text-white" : " text-black"
                } hover:text-orange-500 transition-colors`}
              >
                About
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-lg font-semibold mb-3">Stay Connected</h3>
          <div className="flex justify-center sm:justify-start space-x-6">
            <Link
              href="https://github.com/"
              target="_blank"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6 hover:text-orange-500 transition-colors" />
            </Link>
            <Link
              href="https://twitter.com/"
              target="_blank"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6 hover:text-orange-500 transition-colors" />
            </Link>
            <Link href="mailto:hello@recipeideas.com" aria-label="Email">
              <Mail className="h-6 w-6 hover:text-orange-500 transition-colors" />
            </Link>
          </div>
        </motion.div>
      </div>

      <div
        className={`text-center text-${
          theme === "dark" ? "  text-white" : " text-black"
        } text-xs sm:text-sm  py-4 border-t border-gray-200 dark:border-gray-800 px-4`}
      >
        © {new Date().getFullYear()} Recipe Ideas. All rights reserved.
      </div>
    </footer>
  );
}
