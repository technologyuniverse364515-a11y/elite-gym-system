import { Link } from "@tanstack/react-router";
import { buttons } from "@/config/buttons";
import { messages } from "@/config/messages";

export function OfferBanner() {
  return (
    <section className="relative overflow-hidden bg-primary py-16">
      {/* Decorative */}
      <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-foreground/5" />
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-foreground/5" />

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-primary-foreground/70">{messages.limitedOffer}</p>
        <h2 className="text-4xl font-black uppercase text-primary-foreground sm:text-5xl">
          7-Day Free Trial
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
          {messages.guarantee}
        </p>
        <Link
          to={buttons.freeTrial.link}
          className="mt-8 inline-block rounded-lg bg-background px-10 py-4 text-lg font-bold uppercase tracking-wider text-foreground transition-transform hover:-translate-y-1 hover:shadow-xl"
        >
          {buttons.freeTrial.text}
        </Link>
      </div>
    </section>
  );
}
