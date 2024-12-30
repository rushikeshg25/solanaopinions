"use client";

import { useState, useEffect } from "react";

interface PriceData {
  time: string;
  price: number;
}

export function useMarketData(marketId: string) {
  const [data, setData] = useState<PriceData[]>([]);

  useEffect(() => {
    // In a real app, this would fetch from an API
    // For now, using mock data
    setData([
      { time: "00:00", price: 0.45 },
      { time: "04:00", price: 0.52 },
      { time: "08:00", price: 0.48 },
      { time: "12:00", price: 0.61 },
      { time: "16:00", price: 0.58 },
      { time: "20:00", price: 0.65 },
    ]);
  }, [marketId]);

  return { data };
}