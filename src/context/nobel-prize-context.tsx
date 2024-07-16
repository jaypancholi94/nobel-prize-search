"use client";

import { handleSearchParams } from "@/lib/utils";
import Fuse from "fuse.js";
import { chunk } from "lodash";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { DEFAULT_FUZZY_OPTIONS } from "@/constants";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type PrizesProps = {
  year: string;
  category: string;
  laureates: {
    id: string;
    firstname: string;
    surname: string;
    motivation: string;
    share: string;
  }[];
};
export type matchesProps = {
  indices: number[][];
  value: string;
  key: string;
  refIndex: number;
};
type NobelPrizesResultProps = {
  item: PrizesProps;
  score: number;
  matches: matchesProps[];
  refIndex: number;
};
type NobelPrizeContextProps = {
  nobelPrizes: PrizesProps[] | null;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  splittedNobelPrizesResult: NobelPrizesResultProps[][];
  setSplittedNobelPrizesResult: (result: NobelPrizesResultProps[][]) => void;
  loading: boolean;
  currentPageResult: NobelPrizesResultProps[];
  pagination: string;
  setPagination: (page: string) => void;
  totalResults: NobelPrizesResultProps[];
};
type NobelPrizeProviderProps = { children: ReactNode };
type FuzzOptionsProps = {
  isCaseSensitive?: boolean;
  includeScore?: boolean;
  shouldSort?: boolean;
  includeMatches?: boolean;
  threshold?: number;
  keys?: string[];
  minMatchCharLength: number;
};
type fuzzySearchProps = {
  query: string;
  fuseOptions: FuzzOptionsProps;
  dataSet: PrizesProps[];
};

const NobelPrizeContext = createContext<NobelPrizeContextProps | null>(null);

export const fuzzySearch = ({
  query,
  fuseOptions,
  dataSet,
}: fuzzySearchProps) => {
  const fuse = new Fuse(dataSet, fuseOptions);
  const result = fuse.search(query);
  return result;
};

export const NobelPrizeProvider = ({ children }: NobelPrizeProviderProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [nobelPrizes, setNobelPrizes] = useState<PrizesProps[] | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>(
    searchParams.get("search") ?? "",
  );
  const [pagination, setPagination] = useState<string>(
    searchParams.get("page") ?? "",
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [totalResults, setTotalResults] = useState<NobelPrizesResultProps[]>(
    [],
  );
  const [splittedNobelPrizesResult, setSplittedNobelPrizesResult] = useState<
    NobelPrizesResultProps[][]
  >([]);
  const [currentPageResult, setCurrentPageResult] = useState<
    NobelPrizesResultProps[]
  >([]);

  const handleFuzzySearch = (dataSet: PrizesProps[]) => {
    const result = fuzzySearch({
      query: searchQuery,
      fuseOptions: DEFAULT_FUZZY_OPTIONS,
      dataSet: dataSet,
    });
    setTotalResults(result as unknown as NobelPrizesResultProps[]);
    const paginationSplitResult = chunk(result, 10);
    setSplittedNobelPrizesResult(
      paginationSplitResult as unknown as NobelPrizesResultProps[][],
    );
    setLoading(false);
  };

  useEffect(() => {
    fetch("https://api.nobelprize.org/v1/prize.json")
      .then((response) => response.json())
      .then((data) => {
        setNobelPrizes(data.prizes);
        if (searchQuery) {
          handleFuzzySearch(data.prizes);
          setPagination(pagination);
        }
      });
    if (searchQuery) {
      setSearchQuery(searchQuery);
    }
  }, []);

  useEffect(() => {
    const params = handleSearchParams(searchQuery, searchParams, "search");
    replace(`${pathname}?${params.toString()}`);
    setLoading(true);
    const handleDebounce = setTimeout(() => {
      if (nobelPrizes) {
        handleFuzzySearch(nobelPrizes);
        setPagination("1");
      }
    }, 1000);
    return () => {
      clearTimeout(handleDebounce);
    };
  }, [searchQuery]);

  useEffect(() => {
    const paginationIndex = parseInt(pagination);
    setCurrentPageResult(
      splittedNobelPrizesResult[paginationIndex ? paginationIndex - 1 : 0],
    );
    const params = handleSearchParams(pagination, searchParams, "page");
    replace(`${pathname}?${params.toString()}`);
  }, [splittedNobelPrizesResult, pagination]);

  return (
    <NobelPrizeContext.Provider
      value={{
        nobelPrizes,
        searchQuery,
        setSearchQuery,
        splittedNobelPrizesResult,
        setSplittedNobelPrizesResult,
        loading,
        currentPageResult,
        pagination,
        setPagination,
        totalResults,
      }}
    >
      {children}
    </NobelPrizeContext.Provider>
  );
};

export const useNobelPrize = () => {
  const context = useContext(NobelPrizeContext);
  if (!context) {
    throw new Error("useInvitee must be used within a InviteeProvider");
  }
  return context;
};
