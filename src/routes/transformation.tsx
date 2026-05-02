import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { text } from "@/config/text";
import { buttons } from "@/config/buttons";
import { images } from "@/config/images";

export const Route = createFileRoute("/transformation")({
  component: TransformationPage,
  head: () => ({
    meta: [
      { title: "Real Transformations & Success Stories — Forge Fitness" },
      { name: "description", content: "See real before & after transformations from Forge Fitness members. Proof that our programs deliver results." },
    ],
  }),
});

const transformImages = [images.transformation1, images.transformation2, images.transformation3, images.transformation4];

function TransformationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-black uppercase text-foreground sm:text-6xl">
              Real <span className="text-primary">Transformations</span>
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">Our members' success speaks for itself</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {text.transformations.map((t, i) => (
              <div key={t.name} className="glass-card overflow-hidden rounded-2xl">
                <div className="aspect-video overflow-hidden">
                  <img src={transformImages[i]} alt={`${t.name} transformation`} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-8">
                  <div className="mb-3 flex items-center gap-4">
                    <span className="rounded-full bg-primary/20 px-3 py-1 text-sm font-bold text-primary">-{t.weightLost}</span>
                    <span className="text-sm text-muted-foreground">{t.duration}</span>
                  </div>
                  <h3 className="text-2xl font-black text-foreground">{t.name}</h3>
                  <p className="mt-2 text-muted-foreground">{t.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to={buttons.freeTrial.link} className="btn-primary-gym rounded-lg px-10 py-4 text-lg">
              Start Your Transformation
            </Link>
          </div>
        </div>
      </section>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
