import { Market } from "@/lib/data/markets";

interface MarketHeaderProps {
  market: Market;
}

export function MarketHeader({ market }: MarketHeaderProps) {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">{market.title}</h1>
      <div className="flex items-center gap-4 mb-6">
        <div>
          <p className="text-sm text-muted-foreground">Total Pool</p>
          <p className="font-semibold">{market.totalPool} SOL</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Participants</p>
          <p className="font-semibold">{market.participants}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Ends In</p>
          <p className="font-semibold">{market.endDate}</p>
        </div>
      </div>
    </>
  );
}