import { useState } from "react";
import { text } from "@/config/text";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-black uppercase text-foreground sm:text-5xl">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </div>
        <div className="space-y-3">
          {text.faqs.map((faq, i) => (
            <div key={i} className="glass-card overflow-hidden rounded-xl">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-bold text-foreground">{faq.q}</span>
                <svg
                  className={`h-5 w-5 text-primary transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="border-t border-border px-6 py-5">
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
