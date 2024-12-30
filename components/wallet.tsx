// "use client";

// import dynamic from "next/dynamic";
// import { AnchorProvider } from "@coral-xyz/anchor";
// import { WalletError } from "@solana/wallet-adapter-base";
// import {
//   AnchorWallet,
//   useConnection,
//   useWallet,
//   ConnectionProvider,
//   WalletProvider,
// } from "@solana/wallet-adapter-react";
// import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
// import { ReactNode, useCallback, useMemo } from "react";
// import { useCluster } from "../cluster/cluster-data-access";

// require("@solana/wallet-adapter-react-ui/styles.css");

// export const WalletButton = dynamic(
//   async () =>
//     (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
//   {
//     ssr: false,
//   }
// );

// export function SolanaProvider({ children }: { children: ReactNode }) {
//   const { cluster } = useCluster();
//   const endpoint = useMemo(() => cluster.endpoint, [cluster]);
//   const onError = useCallback((error: WalletError) => {
//     console.error(error);
//   }, []);

//   return (
//     <ConnectionProvider endpoint={endpoint}>
//       <WalletProvider wallets={[]} onError={onError} autoConnect={true}>
//         <WalletModalProvider>{children}</WalletModalProvider>
//       </WalletProvider>
//     </ConnectionProvider>
//   );
// }

// export function useAnchorProvider() {
//   const { connection } = useConnection();
//   const wallet = useWallet();

//   return new AnchorProvider(connection, wallet as AnchorWallet, {
//     commitment: "confirmed",
//   });
// }
"use client";
import React, { FC, ReactNode, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";
import dynamic from "next/dynamic";

export const WalletWrapper: FC<{ children: ReactNode }> = ({
  children,
}: {
  children: ReactNode;
}) => {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [new UnsafeBurnerWalletAdapter()],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);
