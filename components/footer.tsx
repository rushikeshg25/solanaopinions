import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer>
      <div className=" mx-auto px-4 py-12">
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} SolanaOptions. All rights reserved.{" "}
            <Link
              href="https://github.com/rushikeshg25/option-trading-solana"
              className="text-muted-foreground hover:text-primary underline"
            >
              Github
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
