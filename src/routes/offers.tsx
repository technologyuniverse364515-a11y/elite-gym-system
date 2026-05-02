import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { text } from "@/config/text";
import { buttons } from "@/config/buttons";

export const Route = createFileRoute("/offers")({
  component: OffersPage,
  head: () => ({
    meta: [
      { title: "Exclusive Offers & Deals — Forge Fitness" },
      { name: "description", content: "Take advantage of limited-time membership deals, free trials, and personal training bundles at Forge Fitness." },
    ],
  }),
});

function OffersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-black uppercase text-foreground sm:text-6xl">
              Exclusive <span className="text-primary">Offers</span>
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">Limited-time deals you don't want to miss</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {text.offers.map((offer) => (
              <div key={offer.title} className="glass-card group relative overflow-hidden rounded-2xl p-8 transition-all hover:border-primary/30">
                <div className="mb-4 inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                  {offer.badge}
                </div>
                <h3 className="text-3xl font-black text-foreground">{offer.title}</h3>
                <p className="mt-3 text-muted-foreground">{offer.description}</p>
                <div className="mt-6 flex items-end justify-between">
                  <span className="text-4xl font-black text-primary">{offer.price}</span>
                  <Link to={buttons.freeTrial.link} className="btn-primary-gym rounded-lg px-6 py-3 text-sm">
                    {buttons.claimOffer.text}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
