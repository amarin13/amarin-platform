import Image from "next/image";
import Link from "next/link";
import { routes } from "@/lib/routes";

const FOOTER_LINKS = [routes.articles, routes.about];

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-5xl items-center justify-between text-sm text-muted">
        <Link
          href={routes.home.href}
          className="hover:opacity-80 transition-opacity"
        >
          <Image
            src="/logos/amarin-logo.svg"
            alt="AMARIN"
            width={80}
            height={24}
            className="h-5 w-auto"
          />
        </Link>
        <nav className="flex gap-6">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
