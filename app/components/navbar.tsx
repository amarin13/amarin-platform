"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/lib/routes";

const NAV_LINKS = [routes.articles, routes.about];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border px-6 py-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link
          href={routes.home.href}
          className="hover:opacity-80 transition-opacity"
        >
          <Image
            src="/logos/amarin-logo.svg"
            alt="AMARIN"
            width={80}
            height={24}
            className="h-4 w-auto"
          />
        </Link>
        <nav className="flex gap-6 text-sm text-muted">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? "text-accent"
                  : "hover:text-accent transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
