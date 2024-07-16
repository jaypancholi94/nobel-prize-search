export const DEFAULT_FUZZY_OPTIONS = {
  includeScore: true,
  shouldSort: true,
  includeMatches: true,
  threshold: 0.5,
  minMatchCharLength: 2,
  keys: [
    "year",
    "category",
    "laureates.firstname",
    "laureates.surname",
    "laureates.motivation",
  ],
};

export const RANK = {
  5: {
    backgroundColor: "bg-green-500",
    borderColor: "border-green-700",
    rank: 5,
  },
  4: {
    backgroundColor: "bg-green-400",
    borderColor: "border-green-600",
    rank: 4,
  },
  3: {
    backgroundColor: "bg-yellow-200",
    borderColor: "border-yellow-200",
    rank: 3,
  },
  2: {
    backgroundColor: "bg-orange-300",
    borderColor: "border-orange-500",
    rank: 2,
  },
  1: { backgroundColor: "bg-red-500", borderColor: "border-red-700", rank: 1 },
};

export const NUMBER_OF_RESULTS_PER_PAGE = 10;
