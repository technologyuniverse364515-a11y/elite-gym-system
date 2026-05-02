import { text } from "@/config/text";

export function StatsSection() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-16 sm:px-6 md:grid-cols-4 lg:px-8">
        {text.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-4xl font-black text-primary sm:text-5xl">{stat.value}</div>
            <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
