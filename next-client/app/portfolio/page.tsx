"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PriceChart } from "@/components/price-chart";

export default function PortfolioPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-6">
            <p className="text-sm text-muted-foreground mb-2">Total Value</p>
            <p className="text-2xl font-bold">345.67 SOL</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-muted-foreground mb-2">Active Positions</p>
            <p className="text-2xl font-bold">8</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-muted-foreground mb-2">Total Profit/Loss</p>
            <p className="text-2xl font-bold text-green-500">+45.23 SOL</p>
          </Card>
        </div>
      </div>

      <Card className="mb-8">
        <div className="h-[400px] p-6">
          <PriceChart />
        </div>
      </Card>

      <Tabs defaultValue="active">
        <TabsList>
          <TabsTrigger value="active">Active Positions</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        <TabsContent value="active">
          <div className="space-y-4">
            {activePositions.map((position) => (
              <Card key={position.id} className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{position.market}</h3>
                    <p className="text-sm text-muted-foreground">
                      Position: {position.position}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{position.amount} SOL</p>
                    <p className={`text-sm ${position.profit.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {position.profit}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="history">
          <div className="space-y-4">
            {history.map((position) => (
              <Card key={position.id} className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{position.market}</h3>
                    <p className="text-sm text-muted-foreground">
                      {position.date} • {position.position}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{position.amount} SOL</p>
                    <p className={`text-sm ${position.profit.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {position.profit}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

const activePositions = [
  {
    id: 1,
    market: "BTC Price > $100k by EOY",
    position: "Yes",
    amount: "50.00",
    profit: "+12.34",
  },
  {
    id: 2,
    market: "SOL TVL Surpasses ETH",
    position: "No",
    amount: "25.50",
    profit: "-3.45",
  },
];

const history = [
  {
    id: 1,
    market: "ETH 2.0 Launch Success",
    position: "Yes",
    amount: "30.00",
    profit: "+15.75",
    date: "Mar 15, 2024",
  },
  {
    id: 2,
    market: "DeFi TVL > $100B",
    position: "No",
    amount: "20.25",
    profit: "-5.50",
    date: "Mar 10, 2024",
  },
];