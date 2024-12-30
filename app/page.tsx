import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  LineChart,
  TrendingUp,
  Trophy,
  Wallet,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 ">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Trade Options on Prediction Events
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stake your SOL on event predictions and trade options in real-time.
            Join the future of decentralized prediction events.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/events">
              <Button size="lg" className="gap-2">
                Explore Events <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.map((market) => (
              <Link href={`/events/${market.id}`} key={market.id}>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">{market.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        Ends {market.endDate}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Total Pool:</span>
                      <span className="font-medium ml-2">
                        {market.totalPool} SOL
                      </span>
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">
                        Participants:
                      </span>
                      <span className="font-medium ml-2">
                        {market.participants}
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stepsLanding.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-primary/10">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

const stepsLanding = [
  {
    icon: <Wallet className="h-8 w-8 text-primary" />,
    title: "Connect Wallet",
    description:
      "Connect your Solana wallet to start trading on prediction Events",
  },
  {
    icon: <LineChart className="h-8 w-8 text-primary" />,
    title: "Choose Events",
    description: "Browse and select from various prediction Events",
  },
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    title: "Trade & Earn",
    description:
      "Stake your SOL and earn rewards when your predictions are correct",
  },
];

const featuredEvents = [
  {
    id: "btc-price-prediction",
    title: "BTC Price > $100k by EOY",
    endDate: "Dec 31, 2024",
    totalPool: 1250,
    participants: 456,
  },
  {
    id: "eth-merge-success",
    title: "SOL TVL Surpasses ETH",
    endDate: "Jun 30, 2024",
    totalPool: 890,
    participants: 234,
  },
  {
    id: "defi-adoption",
    title: "DeFi Users Reach 5M",
    endDate: "Sep 15, 2024",
    totalPool: 670,
    participants: 189,
  },
];
