"use client";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import React, { useState } from "react";

type SearchProps = {
  onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: SearchProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };
  return (
    <form className="flex gap-2 p-3 ml-0" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search receipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit" className="px-4 py-2 bg-slate-600">
        <Search />
      </Button>
    </form>
  );
}
