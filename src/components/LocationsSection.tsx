import { useState } from "react";
import { text } from "@/config/text";

export function LocationsSection() {
  const [selected, setSelected] = useState(0);
  const loc = text.locations[selected];

  return (
    <section className="section-padding bg-card">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-black uppercase text-foreground sm:text-5xl">
            Find Your <span className="text-primary">Location</span>
          </h2>
        </div>

        {/* Location tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {text.locations.map((l, i) => (
            <button
              key={l.name}
              onClick={() => setSelected(i)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                i === selected
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {l.name}
            </button>
          ))}
        </div>

        {/* Selected location */}
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-black text-foreground">{loc.name}</h3>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-muted-foreground">{loc.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-muted-foreground">{loc.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-muted-foreground">{loc.hours}</span>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <iframe
              title={`Map of ${loc.name}`}
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              src={`https://www.google.com/maps?q=${loc.mapQuery}&output=embed`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
