"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TradingPanelProps {
  marketId: string;
}

export function TradingPanel({ marketId }: TradingPanelProps) {
  const [stakeAmount, setStakeAmount] = useState("");

  return (
    <Card className="p-6">
      <Tabs defaultValue="yes">
        <TabsList className="w-full">
          <TabsTrigger value="yes" className="flex-1">Yes</TabsTrigger>
          <TabsTrigger value="no" className="flex-1">No</TabsTrigger>
        </TabsList>
        <div className="mt-6">
          <div className="mb-4">
            <p className="text-sm text-muted-foreground mb-2">Current Price</p>
            <p className="text-2xl font-bold">0.65 SOL</p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-muted-foreground">
                Amount (SOL)
              </label>
              <Input
                type="number"
                placeholder="0.0"
                value={stakeAmount}
                onChange={(e) => setStakeAmount(e.target.value)}
              />
            </div>
            <Button className="w-full">Place Order</Button>
          </div>
        </div>
      </Tabs>
    </Card>
  );
}