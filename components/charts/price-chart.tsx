"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card } from "@/components/ui/card";
import { useMemo } from "react";

interface PriceChartProps {
  data?: Array<{ time: string; price: number }>;
}

export function PriceChart({ data: propData }: PriceChartProps) {
  const data = useMemo(() => propData ?? defaultData, [propData]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <XAxis
          dataKey="time"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value} SOL`}
        />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <Card className="p-2">
                  <div className="text-sm">
                    <span className="font-medium">{payload[0].value}</span> SOL
                  </div>
                </Card>
              );
            }
            return null;
          }}
        />
        <Line
          type="monotone"
          dataKey="price"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

const defaultData = [
  { time: "00:00", price: 0.45 },
  { time: "04:00", price: 0.52 },
  { time: "08:00", price: 0.48 },
  { time: "12:00", price: 0.61 },
  { time: "16:00", price: 0.58 },
  { time: "20:00", price: 0.65 },
];