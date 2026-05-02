import { Link } from "@tanstack/react-router";
import { text } from "@/config/text";
import { buttons } from "@/config/buttons";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-black text-primary-foreground">F</span>
              </div>
              <span className="text-xl font-black text-foreground">{text.brandName}</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{text.footerTagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">Explore</h4>
            <div className="flex flex-col gap-3">
              <Link to="/trainers" className="text-sm text-muted-foreground transition-colors hover:text-primary">Trainers</Link>
              <Link to="/transformation" className="text-sm text-muted-foreground transition-colors hover:text-primary">Transformations</Link>
              <Link to="/offers" className="text-sm text-muted-foreground transition-colors hover:text-primary">Offers</Link>
              <Link to="/blog" className="text-sm text-muted-foreground transition-colors hover:text-primary">Blog</Link>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">Programs</h4>
            <div className="flex flex-col gap-3">
              <Link to="/free-trial" className="text-sm text-muted-foreground transition-colors hover:text-primary">Free Trial</Link>
              <Link to="/weight-loss-funnel" className="text-sm text-muted-foreground transition-colors hover:text-primary">Weight Loss</Link>
              <Link to="/personal-training-funnel" className="text-sm text-muted-foreground transition-colors hover:text-primary">Personal Training</Link>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">Locations</h4>
            <div className="flex flex-col gap-3">
              {text.locations.map((loc) => (
                <span key={loc.name} className="text-sm text-muted-foreground">{loc.name}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">{text.footerCopyright}</p>
          <a href={buttons.callNow.link} className="text-sm font-semibold text-primary transition-colors hover:text-primary/80">
            {buttons.callNow.text}
          </a>
        </div>
      </div>
    </footer>
  );
}
