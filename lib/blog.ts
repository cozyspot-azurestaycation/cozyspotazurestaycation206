import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIRECTORY = path.join(process.cwd(), "content/blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  updated: string;
  readTime: string;
  image: {
    src: string;
    alt: string;
  };
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

function getMdxFilenames(): string[] {
  if (!fs.existsSync(BLOG_DIRECTORY)) {
    return [];
  }

  return fs
    .readdirSync(BLOG_DIRECTORY)
    .filter((filename) => filename.endsWith(".mdx"));
}

export function getAllSlugs(): string[] {
  return getMdxFilenames().map((filename) => filename.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIRECTORY, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const rawFile = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(rawFile);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title,
    category: data.category,
    excerpt: data.excerpt,
    date: data.date,
    updated: data.updated,
    readTime: `${Math.max(1, Math.ceil(stats.minutes))} min read`,
    image: {
      src: data.image?.src ?? "",
      alt: data.image?.alt ?? "",
    },
    content,
  };
}

export function getAllPosts(): BlogPostMeta[] {
  return getAllSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .map(({ content, ...meta }) => meta)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
