import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { FloatingButtons } from "@/components/FloatingButtons";
import { text } from "@/config/text";
import { messages } from "@/config/messages";

export const Route = createFileRoute("/free-trial")({
  component: FreeTrialPage,
  head: () => ({
    meta: [
      { title: "Start Your 7-Day Free Trial — Forge Fitness" },
      { name: "description", content: "Get full access to all Forge Fitness facilities, classes, and a free personal training session. No credit card required." },
      { property: "og:title", content: "7-Day Free Trial — Forge Fitness" },
      { property: "og:description", content: "Full access. No commitment. No credit card. Start today." },
    ],
  }),
});

function FreeTrialPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Left - Info */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                {messages.urgency}
              </div>
              <h1 className="text-5xl font-black uppercase leading-tight text-foreground sm:text-6xl">
                {text.freeTrialTitle}
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">{text.freeTrialSubtitle}</p>

              <div className="mt-10">
                <h3 className="mb-4 text-lg font-bold uppercase tracking-wider text-foreground">What's Included:</h3>
                <ul className="space-y-3">
                  {text.freeTrialIncludes.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 glass-card rounded-xl p-6">
                <p className="text-sm text-muted-foreground">{messages.guarantee}</p>
              </div>
            </div>

            {/* Right - Form */}
            <LeadForm
              title="Claim Your Free Trial"
              subtitle="Fill out the form below and we'll get you started within 24 hours."
              buttonText="Start My Free Trial"
            />
          </div>
        </div>
      </section>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
