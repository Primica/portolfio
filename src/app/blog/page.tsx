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
            Retour au Portfolio
          </Link>
        </Button>
      </div>
      <h1 className="text-3xl font-bold mb-8">Blog & Actualités</h1>
      
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-muted-foreground text-lg mb-4">
            📝
          </div>
          <h2 className="text-xl font-semibold mb-2">Aucun article pour le moment</h2>
          <p className="text-muted-foreground">
            Pour le moment, aucun article de blog n&apos;a été publié. 
            Revenez bientôt pour découvrir du contenu intéressant !
          </p>
        </div>
      ) : (
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
      )}
    </main>
  );
}
