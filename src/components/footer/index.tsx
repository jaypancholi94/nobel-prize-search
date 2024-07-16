"use client";

import { useNobelPrize } from "@/context/nobel-prize-context";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

export const Footer = () => {
  const {
    pagination,
    setPagination,
    loading,
    splittedNobelPrizesResult,
    searchQuery,
    totalResults,
  } = useNobelPrize();
  if (loading || searchQuery === "" || totalResults.length === 0) return null;

  const parsedIntPagination = parseInt(pagination);
  return (
    <div className="fixed bottom-0 bg-slate-50 w-full container flex py-4 justify-center">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={
                parsedIntPagination === 1
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              }
              onClick={() => {
                if (parsedIntPagination !== 1)
                  setPagination((parsedIntPagination - 1).toString());
              }}
            />
          </PaginationItem>
          {splittedNobelPrizesResult.map((_, index) => {
            const realIndex = index + 1;

            if (
              (parsedIntPagination < 3 && realIndex < 2) ||
              (splittedNobelPrizesResult.length - 2 < parsedIntPagination &&
                splittedNobelPrizesResult.length - 3 < realIndex)
            ) {
              return (
                <>
                  {parsedIntPagination <= splittedNobelPrizesResult.length &&
                    index === splittedNobelPrizesResult.length - 3 && (
                      <PaginationItem className="cursor-pointer">
                        <PaginationEllipsis />
                      </PaginationItem>
                    )}
                  <PaginationItem key={realIndex} className="cursor-pointer">
                    <PaginationLink
                      isActive={parsedIntPagination === realIndex}
                      onClick={() => setPagination(realIndex.toString())}
                    >
                      {realIndex}
                    </PaginationLink>
                  </PaginationItem>
                  {parsedIntPagination < 3 && realIndex === 3 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}
                </>
              );
            }

            if (
              realIndex === parsedIntPagination - 1 ||
              realIndex === parsedIntPagination ||
              realIndex === parsedIntPagination + 1
            ) {
              return (
                <>
                  {realIndex === parsedIntPagination - 1 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}
                  <PaginationItem key={realIndex}>
                    <PaginationLink
                      isActive={parsedIntPagination === realIndex}
                      onClick={() => setPagination(realIndex.toString())}
                    >
                      {realIndex}
                    </PaginationLink>
                  </PaginationItem>
                  {realIndex === parsedIntPagination + 1 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}
                </>
              );
            }
          })}
          <PaginationItem>
            <PaginationNext
              className={
                parsedIntPagination === splittedNobelPrizesResult.length
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              }
              onClick={() => {
                if (parsedIntPagination !== splittedNobelPrizesResult.length)
                  setPagination((parsedIntPagination + 1).toString());
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
