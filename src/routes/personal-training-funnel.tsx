import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { FloatingButtons } from "@/components/FloatingButtons";
import { text } from "@/config/text";
import { images } from "@/config/images";
import { messages } from "@/config/messages";

export const Route = createFileRoute("/personal-training-funnel")({
  component: PersonalTrainingFunnelPage,
  head: () => ({
    meta: [
      { title: "1-on-1 Personal Training — Forge Fitness" },
      { name: "description", content: "Get matched with your perfect trainer. Custom programs, nutrition guidance, and results guaranteed in 30 days." },
    ],
  }),
});

const trainerImages = [images.trainer1, images.trainer2, images.trainer3];

function PersonalTrainingFunnelPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            {messages.urgency}
          </div>
          <h1 className="text-5xl font-black uppercase leading-tight text-foreground sm:text-7xl" style={{ whiteSpace: "pre-line" }}>
            {text.ptHeadline}
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">{text.ptSubheadline}</p>
        </div>
      </section>

      {/* Trainers preview + Benefits + Form */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              {/* Trainer preview */}
              <div className="mb-10 flex -space-x-4">
                {trainerImages.map((img, i) => (
                  <img key={i} src={img} alt="Trainer" className="h-16 w-16 rounded-full border-4 border-background object-cover" />
                ))}
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-background bg-primary text-sm font-bold text-primary-foreground">
                  200+
                </div>
              </div>

              <h2 className="mb-8 text-3xl font-black uppercase text-foreground">Program Includes:</h2>
              <ul className="space-y-4">
                {text.ptBenefits.map((b) => (
                  <li key={b} className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-foreground">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 glass-card rounded-xl p-6">
                <p className="text-sm text-muted-foreground">{messages.guarantee}</p>
              </div>
            </div>

            <LeadForm
              title="Book Your Trainer"
              subtitle="Tell us your goals and we'll match you with the perfect trainer."
              buttonText="Get Matched Now"
            />
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
