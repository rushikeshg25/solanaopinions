import { MarketsList } from "@/components/markets/markets-list";
import { MarketSearch } from "@/components/markets/market-search";

export default function MarketsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Events</h1>
        <MarketSearch />
      </div>
      <MarketsList />
    </div>
  );
}
