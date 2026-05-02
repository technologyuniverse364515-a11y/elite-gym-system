import { useState } from "react";
import { messages } from "@/config/messages";

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  className?: string;
  dark?: boolean;
}

export function LeadForm({ title, subtitle, buttonText = "Get Started", className = "", dark = true }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className={`rounded-2xl p-8 text-center ${dark ? "glass-card" : "bg-card border border-border"} ${className}`}>
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
          <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-lg font-bold text-foreground">{messages.formSuccess}</p>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl p-8 ${dark ? "glass-card" : "bg-card border border-border"} ${className}`}>
      {title && <h3 className="mb-2 text-2xl font-black text-foreground">{title}</h3>}
      {subtitle && <p className="mb-6 text-muted-foreground">{subtitle}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          required
          className="rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          placeholder="Email Address"
          required
          className="rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <select className="rounded-lg border border-border bg-input px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
          <option value="">Select Location</option>
          <option>Downtown Austin</option>
          <option>Miami Beach</option>
          <option>Manhattan</option>
          <option>West Hollywood</option>
        </select>
        <button
          type="submit"
          disabled={loading}
          className="btn-primary-gym rounded-lg px-6 py-4 text-base disabled:opacity-50"
        >
          {loading ? messages.formSubmitting : buttonText}
        </button>
      </form>
    </div>
  );
}
