import { text } from "@/config/text";
import { images } from "@/config/images";

const avatarMap = [images.testimonialAvatar1, images.testimonialAvatar2, images.testimonialAvatar3, images.testimonialAvatar4];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-black uppercase text-foreground sm:text-5xl">
            Real People. <span className="text-primary">Real Results.</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {text.testimonials.map((t, i) => (
            <div key={t.name} className="glass-card rounded-2xl p-8">
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 text-lg text-foreground">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img src={avatarMap[i]} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
