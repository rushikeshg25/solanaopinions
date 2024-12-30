import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">SolanaOptions</h3>
            <p className="text-sm text-muted-foreground">
              Decentralized prediction events powered by Solana blockchain.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://x.com/RushikeshG10"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/rushikeshg25/option-trading-solana"
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div>
              <h4 className="font-semibold mb-4">Events</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/events"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Browse Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="text-muted-foreground hover:text-primary"
                  >
                    My Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Trending
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} SolanaOptions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
