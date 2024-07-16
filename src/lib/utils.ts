import { RANK } from "@/constants";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleSearchParams = (
  searchParamValue: string,
  searchParams: URLSearchParams,
  searchParamsKey: string,
) => {
  const params = new URLSearchParams(searchParams);
  if (searchParamValue) {
    params.set(searchParamsKey, searchParamValue);
  } else {
    params.delete(searchParamsKey);
  }
  return params.toString();
};

export const generateSearchRank = (score: number) => {
  if (score > 0.8) {
    return RANK[1];
  } else if (score > 0.6) {
    return RANK[2];
  } else if (score > 0.4) {
    return RANK[3];
  } else if (score > 0.2) {
    return RANK[4];
  }
  return RANK[5];
};
