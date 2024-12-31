# Opinion Trading Platform on Solana

## Overview

This is an innovative opinion trading platform inspired by Probo, leveraging the Solana blockchain for fast, secure, and cost-effective transactions. Users can trade on real-world events by buying and selling opinions, adding an engaging and gamified layer to prediction markets.
[In progress]

## Features

- **Event-Based Trading**: Trade on outcomes of real-world events.
- **Solana Integration**: Benefit from Solana's high-speed and low-cost transactions.
- **Secure Wallet Support**: Connect and trade using popular Solana wallets.
- **Decentralized Architecture**: Ensure transparency and trust with blockchain-based infrastructure.
- **User-Friendly Interface**: Simple and intuitive design for all user levels.

## Technology Stack

- **Blockchain**: [Solana](https://solana.com)
- **Smart Contracts**: Rust, Anchor
- **Web**: Next.js, TypeScript
- **Database**: Postgres,Prisma (off-chain data storage)

## Getting Started

### Prerequisites

1. **Node.js** (v20 or above)
2. **Rust** and **Solana CLI** and **Anchor**
3. **PostgresDB**
4. A Solana Wallet (e.g., Phantom, Backpack)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rushikeshg25/solanaopinions.git
   cd solanaopinions
   ```

2. Set up environment variables:

   - Create a `.env` file in the next-client directory.
   - Add the following variables:
     ```
     DATABASE_URL=your_postgresdb_connection_string
     ```

3. Build and deploy the Solana program:

   ```bash
   cd contract-options
   pnpm install
   anchor build
   anchor deploy
   ```

4. Build and Start the Web:

   ```bash
   cd next-client
   pnpm install
   pnpm run build
   pnpm run start
   ```

## Usage

- **Create an Account**: Sign up with your wallet.
- **Browse Events**: Explore live and upcoming events.
- **Trade Opinions**: Buy or sell opinions based on your predictions.
- **Track Your Performance**: Monitor your trades and overall profits.

Start trading your opinions today and experience the power of blockchain technology with our Solana-based platform!
