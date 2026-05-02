import { Link } from "@tanstack/react-router";
import { text } from "@/config/text";
import { buttons } from "@/config/buttons";
import { images } from "@/config/images";

export function BrandStory() {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-black uppercase leading-tight text-foreground sm:text-5xl" style={{ whiteSpace: "pre-line" }}>
              {text.brandStoryTitle}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {text.brandStoryBody}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to={buttons.freeTrial.link} className="btn-primary-gym rounded-lg px-8 py-3">
                {buttons.freeTrial.text}
              </Link>
              <Link to={buttons.viewTrainers.link} className="btn-outline-gym rounded-lg px-8 py-3">
                {buttons.viewTrainers.text}
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={images.gymInterior1} alt="Gym interior" className="h-64 w-full rounded-2xl object-cover" />
            <img src={images.gymInterior2} alt="Gym equipment" className="mt-8 h-64 w-full rounded-2xl object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
