import React, { ReactNode } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <section className="pt-16 px-4 max-w-6xl mx-auto">{children}</section>;
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
