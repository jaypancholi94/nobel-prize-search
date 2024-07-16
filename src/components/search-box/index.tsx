"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { ExternalLink } from "lucide-react";
import { useNobelPrize } from "../../context/nobel-prize-context";
import { Badge } from "../ui/badge";

// const SEARCH_BY: { [key: string]: { label: string; hint: string } } = {
//   keyword: {
//     label: "Keyword",
//     hint: "Result will show matching keyword value",
//   },
//   name: {
//     label: "Name",
//     hint: "Search results will only show items matching the entered name.",
//   },
//   motivation: {
//     label: "Motivation",
//     hint: "Search results will only show items related to motivation.",
//   },
//   share: {
//     label: "Share",
//     hint: "Search results will show items related to sharing.",
//   },
// };
//
export const SearchBox = () => {
  const { categories, searchQuery, setSearchQuery } = useNobelPrize();
  return (
    <div className="flex flex-col items-center gap-4 max-w-screen-sm">
      <div className={`flex w-full items-center space-x-2`}>
        <Input
          type="text"
          placeholder="Search text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="flex flex-col w-full">
        Categories
        <div className="flex gap-1">
          {categories.map((val) => {
            return (
              <>
                <Badge className="gap-2 cursor-pointer">
                  <span>{val}</span>
                  <ExternalLink size={14} />
                </Badge>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
