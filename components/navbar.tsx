"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, Wallet } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";

export function Navbar() {
  const { theme, setTheme } = useTheme();

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
            <Button variant="outline" className="gap-2">
              <Wallet className="h-4 w-4" />
              Connect Wallet
            </Button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
