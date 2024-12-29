export interface Market {
  id: string;
  title: string;
  endDate: string;
  totalPool: number;
  participants: number;
}

export const markets: Market[] = [
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
  {
    id: "sol-price-prediction",
    title: "SOL > $500 by July",
    endDate: "Jul 1, 2024",
    totalPool: 950,
    participants: 312,
  },
  {
    id: "nft-market-recovery",
    title: "NFT Market Cap > $100B",
    endDate: "Aug 15, 2024",
    totalPool: 430,
    participants: 156,
  },
  {
    id: "dao-governance",
    title: "DAOs Control $10B TVL",
    endDate: "Oct 1, 2024",
    totalPool: 580,
    participants: 203,
  },
];