import { generateSearchRank } from "@/lib/utils";
import { SearchCheck } from "lucide-react";

export const PrizeCardScore = ({ score }: { score: number }) => {
  const generatedRank = generateSearchRank(score);
  return (
    <div
      className={`m-0 shadow-sm flex items-center content-center p-2 rounded border-1 gap-1 ${generatedRank.backgroundColor} ${generatedRank.borderColor}`}
    >
      <SearchCheck size={16} />
      <span className="font-bold">Score: {generatedRank.rank}/5</span>
    </div>
  );
};
