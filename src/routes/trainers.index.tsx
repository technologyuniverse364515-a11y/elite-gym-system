import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { text } from "@/config/text";
import { buttons } from "@/config/buttons";
import { images } from "@/config/images";

export const Route = createFileRoute("/trainers/")({
  component: TrainersPage,
  head: () => ({
    meta: [
      { title: "Meet Our Expert Trainers — Forge Fitness" },
      { name: "description", content: "200+ certified trainers ready to help you reach your goals. Meet our team of elite fitness professionals." },
    ],
  }),
});

const trainerImages = [images.trainer1, images.trainer2, images.trainer3, images.trainer4];

function TrainersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-black uppercase text-foreground sm:text-6xl">
              Meet Our <span className="text-primary">Trainers</span>
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">Elite coaches dedicated to your success</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {text.trainers.map((trainer, i) => (
              <Link
                key={trainer.id}
                to="/trainers/$trainerId"
                params={{ trainerId: trainer.id }}
                className="glass-card group overflow-hidden rounded-2xl transition-all hover:border-primary/30"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={trainerImages[i]}
                    alt={trainer.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">{trainer.specialty}</div>
                  <h3 className="text-2xl font-black text-foreground">{trainer.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{trainer.experience} experience</p>
                  <p className="mt-3 text-muted-foreground line-clamp-2">{trainer.bio}</p>
                  <div className="mt-4 font-semibold text-primary">View Profile →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
