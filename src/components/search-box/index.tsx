"use client";
import React from "react";
import { Input } from "../ui/input";
import { useNobelPrize } from "../../context/nobel-prize-context";

export const SearchBox = () => {
  const { searchQuery, setSearchQuery } = useNobelPrize();
  return (
    <div className="flex flex-col items-center gap-4 sm:w-6/12 w-full">
      <Input
        type="text"
        placeholder="Search text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full"
      />
    </div>
  );
};
