import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/articles", label: "Articles" },
  { href: "/playbooks", label: "Playbooks" },
  { href: "/about", label: "About" },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-5xl items-center justify-between text-sm text-muted">
        <span className="font-mono">AMARIN</span>
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
