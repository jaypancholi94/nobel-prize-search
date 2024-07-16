import { Card, CardContent, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export const NobelPrizeResultContainerSkeleton = ({
  numberOfCard: number,
}: {
  numberOfCard: number;
}) => {
  return (
    <div className="my-8 w-full">
      <div className="mb-8 flex flex-col gap-1">
        <Skeleton className="w-[250px] h-[24px]" />
        <Skeleton className="w-[200px] h-[20px]" />
      </div>
      <div className="flex flex-col w-full gap-2">
        {Array.from({ length: number }).map((_, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row">
              <div className="flex flex-col flex-grow gap-1">
                <Skeleton className="w-[150px] h-[24px]" />
                <Skeleton className="w-[250px] h-[20px]" />
              </div>
              <Skeleton className="w-[120px] h-[40px]" />
            </CardHeader>
            <CardContent className="gap-2 flex flex-col">
              <Card>
                <CardHeader>
                  <Skeleton className="w-[150px] h-[24px]" />
                  <Skeleton className="w-[350px] h-[20px]" />
                </CardHeader>
              </Card>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
