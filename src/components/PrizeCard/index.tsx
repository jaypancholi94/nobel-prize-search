import { matchesProps } from "@/context/nobel-prize-context";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { PrizeCardScore } from "../prize-card-score";

type LaureatesProps = {
  id: string;
  firstname: string;
  surname: string;
  motivation: string;
  share: string;
};

type PrizeCardProps = {
  categories: string;
  year: string;
  laureates?: LaureatesProps[];
  matches: matchesProps[];
  score: number;
};

const generateHighlightedText = (
  text: string,
  textType: string,
  matches: matchesProps[],
) => {
  let highlightedText: JSX.Element = <>{text}</>;

  matches.forEach(({ key, indices, value }) => {
    if (textType === key && value === text) {
      indices.forEach(([start, end]) => {
        highlightedText = (
          <>
            {text.slice(0, start)}
            <span className="bg-yellow-200">{text.slice(start, end + 1)}</span>
            {text.slice(end + 1)}
          </>
        );
      });
      return highlightedText;
    }
  });
  return highlightedText;
};
export const PrizeCard = ({
  categories,
  year,
  laureates,
  matches,
  score,
}: PrizeCardProps) => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row">
        <div className="flex flex-col flex-grow">
          <CardTitle className="capitalize">
            {generateHighlightedText(categories, "category", matches)}
          </CardTitle>
          <CardDescription>
            {generateHighlightedText(year, "year", matches)}
          </CardDescription>
        </div>
        <PrizeCardScore score={score} />
      </CardHeader>
      <CardContent className="gap-2 flex flex-col">
        {laureates?.map((laureate: LaureatesProps) => (
          <Card key={laureate.id}>
            <CardHeader className="py-2">
              <CardTitle className="text-base">
                {generateHighlightedText(
                  laureate.firstname,
                  "laureates.firstname",
                  matches,
                )}{" "}
                {generateHighlightedText(
                  laureate.surname,
                  "laureates.surname",
                  matches,
                )}
              </CardTitle>
              <CardDescription>
                {generateHighlightedText(
                  laureate.motivation,
                  "laureates.motivation",
                  matches,
                )}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};
