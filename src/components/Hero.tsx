import { Link } from "@tanstack/react-router";
import { text } from "@/config/text";
import { buttons } from "@/config/buttons";
import { images } from "@/config/images";
import { messages } from "@/config/messages";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={images.heroPoster}
          className="h-full w-full object-cover"
        >
          <source src={images.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        {/* Urgency badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary animate-pulse-glow">
          {messages.urgency}
        </div>

        <h1 className="text-5xl font-black uppercase leading-none tracking-tight text-foreground sm:text-7xl lg:text-8xl" style={{ whiteSpace: "pre-line" }}>
          {text.heroTitle}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          {text.heroSubtitle}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to={buttons.freeTrial.link}
            className="btn-primary-gym rounded-lg px-10 py-4 text-lg"
          >
            {buttons.freeTrial.text}
          </Link>
          <Link
            to={buttons.viewTransformations.link}
            className="btn-outline-gym rounded-lg px-10 py-4 text-lg"
          >
            {buttons.viewTransformations.text}
          </Link>
        </div>

        {/* Social proof */}
        <p className="mt-8 text-sm text-muted-foreground">{messages.socialProof}</p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="h-6 w-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
