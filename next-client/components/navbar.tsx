"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import { WalletMultiButtonDynamic } from "./wallet";

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              SolanaOptions
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/events">
              <Button variant="ghost">Events</Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="ghost">Portfolio</Button>
            </Link>

            <WalletMultiButtonDynamic className="border-neutral-200" />
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
