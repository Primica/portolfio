import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default async function BlogIndexPage() {
  const posts = await getAllPosts();
  return (
    <main className="max-w-2xl mx-auto py-12">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" asChild size="sm">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>
      </div>
      <h1 className="text-3xl font-bold mb-8">Blog & News</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="text-xl font-semibold hover:underline">
              {post.title}
            </Link>
            <div className="text-xs text-muted-foreground">{post.date}</div>
            <div className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
