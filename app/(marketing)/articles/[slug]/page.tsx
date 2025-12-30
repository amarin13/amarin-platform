import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { getArticleBySlug, getArticleSlugs } from "@/lib/articles";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found — AMARIN",
    };
  }

  return {
    title: `${article.title} — AMARIN`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article || article.status !== "published") {
    notFound();
  }

  return (
    <div className="grid-pattern min-h-screen flex flex-col">
      <Navbar />

      <main className="px-6 py-24 flex-1">
        <article className="mx-auto max-w-3xl">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-accent transition-colors mb-8"
          >
            ← Back to Articles
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <time className="font-mono text-xs text-gray-400">
                {new Date(article.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span className="font-mono text-xs text-accent">
                {article.pillar}
              </span>
              <span className="font-mono text-xs text-gray-400">
                {article.level}
              </span>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              {article.title}
            </h1>
            <p className="mt-4 text-xl text-muted">{article.excerpt}</p>
          </header>
          <div className="prose prose-lg max-w-none">
            <MDXRemote source={article.content} />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
