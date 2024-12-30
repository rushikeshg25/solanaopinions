import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface MarketCardProps {
  id: string;
  title: string;
  endDate: string;
  totalPool: number;
  participants: number;
}

export function MarketCard({
  id,
  title,
  endDate,
  totalPool,
  participants,
}: MarketCardProps) {
  return (
    <Link href={`/events/${id}`}>
      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-primary/10 p-2 rounded-full">
            <TrendingUp className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">Ends {endDate}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{totalPool} SOL</Badge>
            <Badge variant="outline">{participants} traders</Badge>
          </div>
        </div>
      </Card>
    </Link>
  );
}
