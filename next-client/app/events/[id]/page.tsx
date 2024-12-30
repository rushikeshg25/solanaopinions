"use client";

import { Card } from "@/components/ui/card";
import { PriceChart } from "@/components/charts/price-chart";
import { MarketStats } from "@/components/markets/market-stats";
import { MarketHeader } from "@/components/markets/market-header";
import { TradingPanel } from "@/components/markets/trading-panel";
import { markets } from "@/lib/data/markets";
import { useMarketData } from "@/hooks/use-market-data";
import { notFound } from "next/navigation";

export default function MarketPage({ params }: { params: { id: string } }) {
  const market = markets.find((m) => m.id === params.id);
  const { data: priceData } = useMarketData(params.id);

  if (!market) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="p-6">
            <MarketHeader market={market} />
            <div className="h-[400px] relative">
              <PriceChart data={priceData} />
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <TradingPanel marketId={params.id} />
          <MarketStats marketId={params.id} />
        </div>
      </div>
    </div>
  );
}
