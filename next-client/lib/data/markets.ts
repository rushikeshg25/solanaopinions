export interface Market {
  id: string;
  title: string;
  endDate: string;
  totalPool: number;
  participants: number;
}

export const markets: Market[] = [
  {
    id: "8F6YQ1XUp3QJz8abH6y7nVkrb67gEx1wnQaHdFi9p5NA",
    title: "BTC Price > $100k by EOY",
    endDate: "Dec 31, 2024",
    totalPool: 1250,
    participants: 456,
  },
  {
    id: "C3LB4TfhcJXP3W7h9f7TZV6pUkC71vQwRbGNVhD1MJ6X",
    title: "SOL TVL Surpasses ETH",
    endDate: "Jun 30, 2024",
    totalPool: 890,
    participants: 234,
  },
  {
    id: "D9TQY6LfU6BNP3V7fMJf1cXoPv5W4hQhNfVX7yLPq19Q",
    title: "DeFi Users Reach 5M",
    endDate: "Sep 15, 2024",
    totalPool: 670,
    participants: 189,
  },
  {
    id: "8xPf5hRQVp39NV6KYhTZ4Jo1BW3tCNfQP6FyX1VL3K5P",
    title: "SOL > $500 by July",
    endDate: "Jul 1, 2024",
    totalPool: 950,
    participants: 312,
  },
  {
    id: "Bn8W7jPX3TfLKQ6F8R4hXVN91CW9TZyVoMJp5Bq2Jh31",
    title: "NFT Market Cap > $100B",
    endDate: "Aug 15, 2024",
    totalPool: 430,
    participants: 156,
  },
  {
    id: "X7yQW5F1LNV3BTZ6oMjPV9R8hCpQo1K9TJ43Lf6KN8Jb",
    title: "DAOs Control $10B TVL",
    endDate: "Oct 1, 2024",
    totalPool: 580,
    participants: 203,
  },
];
