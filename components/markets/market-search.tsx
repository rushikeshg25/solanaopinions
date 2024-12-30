"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useCallback } from "react";
import { debounce } from "@/lib/utils";

export function MarketSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      //@ts-ignore
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleSearch = debounce((term: string) => {
    router.push(`/events?${createQueryString("q", term)}`);
  }, 300);

  return (
    <Input
      placeholder="Search markets..."
      className="max-w-xs"
      defaultValue={searchParams.get("q") ?? ""}
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
}
