import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { text } from "@/config/text";
import { buttons } from "@/config/buttons";
import { images } from "@/config/images";

export const Route = createFileRoute("/trainers/$trainerId")({
  component: TrainerDetailPage,
  head: ({ params }) => {
    const trainer = text.trainers.find((t) => t.id === params.trainerId);
    return {
      meta: [
        { title: trainer ? `${trainer.name} — Forge Fitness Trainer` : "Trainer — Forge Fitness" },
        { name: "description", content: trainer?.bio || "Meet our expert trainer." },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-black text-foreground">Trainer Not Found</h1>
        <Link to="/trainers" className="mt-4 inline-block text-primary">← Back to Trainers</Link>
      </div>
    </div>
  ),
});

const trainerImageMap: Record<string, string> = {
  "marcus-johnson": images.trainer1,
  "sarah-chen": images.trainer2,
  "david-martinez": images.trainer3,
  "jessica-williams": images.trainer4,
};

function TrainerDetailPage() {
  const { trainerId } = Route.useParams();
  const trainer = text.trainers.find((t) => t.id === trainerId);

  if (!trainer) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-black text-foreground">Trainer Not Found</h1>
          <Link to="/trainers" className="mt-4 inline-block text-primary">← Back to Trainers</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link to="/trainers" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            ← Back to Trainers
          </Link>

          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={trainerImageMap[trainer.id] || images.trainer1}
                alt={trainer.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <div className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">{trainer.specialty}</div>
              <h1 className="text-5xl font-black text-foreground">{trainer.name}</h1>
              <p className="mt-2 text-lg text-muted-foreground">{trainer.experience} experience</p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{trainer.bio}</p>

              {/* Achievements */}
              <div className="mt-8">
                <h3 className="mb-4 text-lg font-bold uppercase tracking-wider text-foreground">Achievements</h3>
                <ul className="space-y-2">
                  {trainer.achievements.map((a) => (
                    <li key={a} className="flex items-center gap-3">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-foreground">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certifications */}
              <div className="mt-8">
                <h3 className="mb-4 text-lg font-bold uppercase tracking-wider text-foreground">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {trainer.certifications.map((c) => (
                    <span key={c} className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground">{c}</span>
                  ))}
                </div>
              </div>

              <Link
                to={buttons.bookTrainer.link}
                className="btn-primary-gym mt-10 inline-block rounded-lg px-10 py-4 text-lg"
              >
                {buttons.bookTrainer.text}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
