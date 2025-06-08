import "highlight.js/styles/github-dark.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import ReactMarkdown from 'react-markdown';
import rehypeMathjax from "rehype-mathjax";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkDirective from 'remark-directive';
import { Callout } from "@/components/ui/callout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  const processedContent = post.content.replace(
    /^>\[!(\w+)\]\s*\n((?:>[^\n]*\n?)*)/gm,
    (match: string, type: string, content: string) => {
      const processedContent = content
        .split('\n')
        .map((line: string) => line.startsWith('>') ? line.slice(1).trim() : line.trim())
        .filter(Boolean)
        .join('\n');
      return `<div class="callout-${type.toLowerCase()}">\n\n${processedContent}\n\n</div>\n\n`;
    }
  );
  
  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <div className="mb-8">
        <Button variant="ghost" asChild size="sm">
          <Link href="/blog" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>
      <div className="prose prose-neutral dark:prose-invert prose-headings:font-bold max-w-none">
        <h1 className="text-4xl mb-2">{post.title}</h1>
        <div className="text-xs text-muted-foreground mb-8">{post.date}</div>
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath, remarkDirective]}
          rehypePlugins={[rehypeMathjax, rehypeHighlight, rehypeRaw]}
          components={{
            h1: ({...props}) => (
              <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />
            ),
            h2: ({...props}) => (
              <h2 className="text-3xl font-bold mt-6 mb-3" {...props} />
            ),
            h3: ({...props}) => (
              <h3 className="text-2xl font-bold mt-4 mb-2" {...props} />
            ),
            h4: ({...props}) => (
              <h4 className="text-xl font-bold mt-3 mb-2" {...props} />
            ),
            h5: ({...props}) => (
              <h5 className="text-lg font-bold mt-2 mb-1" {...props} />
            ),
            h6: ({...props}) => (
              <h6 className="text-base font-bold mt-2 mb-1" {...props} />
            ),
            p: ({...props}) => (
              <p className="mb-4" {...props} />
            ),
            ul: ({children}) => (
              <ul className="list-disc list-inside my-4 space-y-1">{children}</ul>
            ),
            ol: ({children}) => (
              <ol className="list-decimal list-inside my-4 space-y-1">{children}</ol>
            ),
            li: ({children}) => (
              <li className="my-1 ml-4">{children}</li>
            ),
            div: ({className, children, ...props}) => {
              if (className?.startsWith('callout-')) {
                const type = className.replace('callout-', '');
                return <Callout type={type}>{children}</Callout>;
              }
              return <div className={className} {...props}>{children}</div>;
            },
          }}
        >
          {processedContent}
        </ReactMarkdown>
      </div>
    </article>
  );
}
