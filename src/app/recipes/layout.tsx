"use client";
import { useAppStore } from "@/store/appStore";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useAppStore();
  return (
    <section
      className={`pt-16 px-4 max-w-6xl mx-auto min-h-screen  py-12 transition-colors duration-300 mt-5 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      {children}
    </section>
  );
};

export default Layout;

{
  /*<html lang="en">
      <head>
        <title>Recipe Ideas</title>
        <meta name="description" content="Find your favorite recipe ideas" />
      </head>
      <body>
        <header className="p-4 bg-yellow-200 text-center font-bold text-xl">
          Recipe Finder
        </header>

        <main className="min-h-screen bg-gray-50">{children}</main>
      </body>
    </html>*/
}
