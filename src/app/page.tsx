import { SearchBox } from "@/components/search-box";
import { NobelPrizeResultContainer } from "@/components/nobel-prize-result-container";
import { Footer } from "@/components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="container h-dvh flex flex-col items-center">
        <div className="flex gap-2 items-center py-4">
          <Image
            src={"/logo.png"}
            alt="Nobel Prize"
            width={50}
            height={50}
            className="h-[30px] w-[30px] sm:h-[75px] sm:w-[75px]"
          />
          <h1 className="text-lg font-bold text-[#CEA152] sm:text-4xl">
            Nobel Prize Explorer
          </h1>
        </div>

        <SearchBox />
        <NobelPrizeResultContainer />
      </div>
      <Footer />
    </main>
  );
}
