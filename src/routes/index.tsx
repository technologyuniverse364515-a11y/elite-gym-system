import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsSection } from "@/components/StatsSection";
import { BrandStory } from "@/components/BrandStory";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { OfferBanner } from "@/components/OfferBanner";
import { LocationsSection } from "@/components/LocationsSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { ExitPopup } from "@/components/ExitPopup";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Forge Fitness — Transform Your Body. Transform Your Life." },
      { name: "description", content: "Join the most result-driven gym in America. World-class trainers, proven programs, and real transformations. Start your free 7-day trial today." },
      { property: "og:title", content: "Forge Fitness — Transform Your Body. Transform Your Life." },
      { property: "og:description", content: "50,000+ members transformed. 200+ expert trainers. Start your free trial today." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <StatsSection />
      <BrandStory />
      <TestimonialsSection />
      <OfferBanner />
      <LocationsSection />
      <FAQSection />
      <Footer />
      <FloatingButtons />
      <ExitPopup />
    </div>
  );
}
