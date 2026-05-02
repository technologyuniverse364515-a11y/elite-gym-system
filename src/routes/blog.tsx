import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { text } from "@/config/text";
import { images } from "@/config/images";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Fitness Blog — Expert Tips & Guides | Forge Fitness" },
      { name: "description", content: "Expert fitness tips, workout guides, and nutrition advice from Forge Fitness trainers." },
    ],
  }),
});

const blogImages = [images.blogImage1, images.blogImage2, images.blogImage3, images.blogImage4];

function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-black uppercase text-foreground sm:text-6xl">
              The <span className="text-primary">Blog</span>
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">Expert fitness insights from our team</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {text.blogPosts.map((post, i) => (
              <article key={post.id} className="glass-card group overflow-hidden rounded-2xl">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={blogImages[i]}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                      {post.category}
                    </span>
                    <span className="text-sm text-muted-foreground">{post.readTime} read</span>
                  </div>
                  <h2 className="text-2xl font-black text-foreground">{post.title}</h2>
                  <p className="mt-3 text-muted-foreground">{post.excerpt}</p>
                  <div className="mt-6">
                    <span className="font-semibold text-primary transition-colors hover:text-primary/80">
                      Read Article →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
