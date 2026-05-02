import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { text } from "@/config/text";
import { buttons } from "@/config/buttons";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Trainers", to: "/trainers" },
  { label: "Transformations", to: "/transformation" },
  { label: "Offers", to: "/offers" },
  { label: "Blog", to: "/blog" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-black text-primary-foreground">F</span>
            </div>
            <span className="text-xl font-black tracking-tight text-foreground">
              {text.brandName}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-primary ${
                  location.pathname === (link.to === "/" ? "/elite-gym-system/" : `/elite-gym-system${link.to}`) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to={buttons.freeTrial.link}
              className="btn-primary-gym rounded-lg px-6 py-2.5 text-sm"
            >
              {buttons.freeTrial.text}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-border bg-background px-4 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-semibold uppercase tracking-wider ${
                  location.pathname === (link.to === "/" ? "/elite-gym-system/" : `/elite-gym-system${link.to}`) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to={buttons.freeTrial.link}
              onClick={() => setIsOpen(false)}
              className="btn-primary-gym mt-2 rounded-lg px-6 py-3 text-center text-sm"
            >
              {buttons.freeTrial.text}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
