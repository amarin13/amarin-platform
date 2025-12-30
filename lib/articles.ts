import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "content/articles");

export interface ArticleMeta {
  slug: string;
  title: string;
  excerpt: string;
  pillar: string;
  level: string;
  status: string;
  publishedAt: string;
}

export interface Article extends ArticleMeta {
  content: string;
}

export function getArticleFiles(): string[] {
  const files = fs.readdirSync(articlesDirectory);
  return files.filter((file) => file.endsWith(".mdx"));
}

export function getArticleBySlug(slug: string): Article | null {
  const files = getArticleFiles();
  const file = files.find((f) => {
    const fullPath = path.join(articlesDirectory, f);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return data.slug === slug;
  });

  if (!file) return null;

  const fullPath = path.join(articlesDirectory, file);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: data.slug,
    title: data.title,
    excerpt: data.excerpt,
    pillar: data.pillar,
    level: data.level,
    status: data.status,
    publishedAt: data.publishedAt,
    content,
  };
}

export function getAllArticles(): ArticleMeta[] {
  const files = getArticleFiles();

  const articles = files
    .map((file) => {
      const fullPath = path.join(articlesDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug: data.slug,
        title: data.title,
        excerpt: data.excerpt,
        pillar: data.pillar,
        level: data.level,
        status: data.status,
        publishedAt: data.publishedAt,
      };
    })
    .filter((article) => article.status === "published")
    .sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1));

  return articles;
}

export function getArticleSlugs(): string[] {
  return getAllArticles().map((article) => article.slug);
}
