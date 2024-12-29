"use client";

import { useState } from "react";
import { MarketCard } from "./market-card";
import { markets } from "@/lib/data/markets";
import { useSearchParams } from "next/navigation";

export function MarketsList() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const filteredMarkets = markets.filter(market => 
    market.title.toLowerCase().includes(query)
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredMarkets.map((market) => (
        <MarketCard key={market.id} {...market} />
      ))}
    </div>
  );
}