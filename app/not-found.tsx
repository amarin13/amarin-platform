import Link from "next/link";
import Image from "next/image";
import { routes } from "@/lib/routes";

export default function NotFound() {
  return (
    <div className="grid-pattern min-h-screen flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <span className="font-mono text-8xl font-bold text-gray-200">
            404
          </span>
        </div>

        <Link href={routes.home.href} className="inline-block mb-8">
          <Image
            src="/logos/amarin-logo.svg"
            alt="AMARIN"
            width={120}
            height={36}
            className="h-8 w-auto mx-auto opacity-50 hover:opacity-100 transition-opacity"
          />
        </Link>

        <h1 className="text-2xl font-semibold tracking-tight mb-4">
          Page not found
        </h1>

        <p className="text-muted mb-8">
          The system you&apos;re looking for doesn&apos;t exist — or hasn&apos;t
          been architected yet.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={routes.home.href}
            className="inline-flex items-center justify-center gap-2 border border-accent text-accent px-6 py-3 text-sm font-medium transition-all hover:bg-accent hover:text-background"
          >
            ← Back to Home
          </Link>
          <Link
            href={routes.articles.href}
            className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 text-sm font-medium transition-all hover:border-accent hover:text-accent"
          >
            Explore Articles
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 text-center">
        <p className="font-mono text-xs text-gray-400">
          AMARIN · Product Systems Lab
        </p>
      </div>
    </div>
  );
}
