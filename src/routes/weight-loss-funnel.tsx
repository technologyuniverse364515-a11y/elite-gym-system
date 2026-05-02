import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { FloatingButtons } from "@/components/FloatingButtons";
import { text } from "@/config/text";
import { images } from "@/config/images";
import { messages } from "@/config/messages";

export const Route = createFileRoute("/weight-loss-funnel")({
  component: WeightLossFunnelPage,
  head: () => ({
    meta: [
      { title: "Lose 10-15 lbs in 60 Days — Forge Fitness Weight Loss Program" },
      { name: "description", content: "Our proven weight loss program helps you lose 10-15 lbs in 60 days with personalized nutrition and 3x weekly coached sessions." },
    ],
  }),
});

const transformImages = [images.transformation1, images.transformation2, images.transformation3];

function WeightLossFunnelPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            {messages.urgency}
          </div>
          <h1 className="text-5xl font-black uppercase leading-tight text-foreground sm:text-7xl">
            {text.weightLossHeadline}
          </h1>
          <p className="mt-4 text-2xl font-bold text-primary">{text.weightLossSubheadline}</p>
        </div>
      </section>

      {/* Benefits + Form */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl font-black uppercase text-foreground">What You Get:</h2>
              <ul className="space-y-4">
                {text.weightLossBenefits.map((b) => (
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

              {/* Before/After Gallery */}
              <div className="mt-12">
                <h3 className="mb-6 text-2xl font-black uppercase text-foreground">Proven Results</h3>
                <div className="grid grid-cols-3 gap-4">
                  {transformImages.map((img, i) => (
                    <img key={i} src={img} alt="Transformation result" className="rounded-xl object-cover aspect-square" loading="lazy" />
                  ))}
                </div>
              </div>

              <div className="mt-10 glass-card rounded-xl p-6">
                <p className="text-sm text-muted-foreground">{messages.guarantee}</p>
              </div>
            </div>

            <LeadForm
              title="Start Losing Weight Today"
              subtitle="Limited spots available. Get matched with a coach within 24 hours."
              buttonText={text.weightLossHeadline}
            />
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
