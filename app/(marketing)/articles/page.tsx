import Link from "next/link";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { getAllArticles } from "@/lib/articles";

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="grid-pattern min-h-screen flex flex-col">
      <Navbar />

      <main className="px-6 py-24 flex-1">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
            Thinking
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Articles
          </h1>
          <p className="mt-6 text-lg text-muted">
            Systems thinking, product architecture, and strategic engineering —
            written from first principles.
          </p>

          <div className="mt-16 space-y-1">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group block border border-border p-6 transition-all hover:border-accent"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-medium tracking-tight group-hover:text-accent transition-colors">
                      {article.title}
                    </h2>
                    <p className="mt-2 text-muted line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                  <time className="shrink-0 font-mono text-xs text-gray-400">
                    {new Date(article.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <div className="mt-4 flex gap-3">
                  <span className="font-mono text-xs text-accent">
                    {article.pillar}
                  </span>
                  <span className="font-mono text-xs text-gray-400">
                    {article.level}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
