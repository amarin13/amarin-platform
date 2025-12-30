"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/articles", label: "Articles" },
  { href: "/playbooks", label: "Playbooks" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border px-6 py-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm tracking-widest hover:text-accent"
        >
          AMARIN
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
