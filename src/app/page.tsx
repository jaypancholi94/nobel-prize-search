import { SearchBox } from "@/components/search-box";
import { NobelPrizeResultContainer } from "@/components/nobel-prize-result-container";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="container h-dvh">
        <h1 className="text-4xl font-bold text-[#CEA152] pb-8">
          Welcome to Nobel Prize Explorer
        </h1>
        <SearchBox />
        <NobelPrizeResultContainer />
      </div>
      <Footer />
    </main>
  );
}
