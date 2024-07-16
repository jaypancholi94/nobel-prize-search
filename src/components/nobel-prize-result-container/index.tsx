"use client";
import { useNobelPrize } from "@/context/nobel-prize-context";

import { isEmpty } from "lodash";
import { PrizeCard } from "../PrizeCard";
import { NobelPrizeResultContainerSkeleton } from "./skeleton";

export const NobelPrizeResultContainer = () => {
  const {
    currentPageResult,
    splittedNobelPrizesResult,
    searchQuery,
    totalResults,
    loading,
  } = useNobelPrize();

  if (isEmpty(currentPageResult) && searchQuery === "") return;
  if (loading) return <NobelPrizeResultContainerSkeleton numberOfCard={2} />;

  return (
    <div className="my-8 w-full pb-28">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold leading-none tracking-tight">
          Result for &quot;{searchQuery}&quot;
        </h2>
        <p className="text-sm text-gray-500">
          Total result found: {totalResults.length}
        </p>
      </div>
      {splittedNobelPrizesResult.length === 0 ? (
        <div>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">
            No match found with search query &quot;{searchQuery}&quot;
          </h2>
        </div>
      ) : (
        <div className="flex flex-col w-full gap-2">
          {currentPageResult &&
            currentPageResult?.map(({ item, matches, score }) => (
              <PrizeCard
                key={`${item.year}-${item.category}`}
                categories={item.category}
                year={item.year}
                laureates={item.laureates}
                matches={matches}
                score={score}
              />
            ))}
        </div>
      )}
    </div>
  );
};
