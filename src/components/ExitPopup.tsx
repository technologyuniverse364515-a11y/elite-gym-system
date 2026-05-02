import { useState, useEffect } from "react";
import { messages } from "@/config/messages";
import { buttons } from "@/config/buttons";
import { Link } from "@tanstack/react-router";

export function ExitPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let triggered = false;
    const handler = (e: MouseEvent) => {
      if (e.clientY < 10 && !triggered) {
        triggered = true;
        setShow(true);
      }
    };
    document.addEventListener("mouseleave", handler);
    return () => document.removeEventListener("mouseleave", handler);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md rounded-2xl glass-card p-8 text-center animate-scale-in">
        <button
          onClick={() => setShow(false)}
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
          aria-label="Close"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
          <span className="text-3xl">🎁</span>
        </div>
        <h3 className="text-2xl font-black text-foreground">{messages.exitPopupTitle}</h3>
        <p className="mt-3 text-muted-foreground">{messages.exitPopupBody}</p>
        <Link
          to={buttons.freeTrial.link}
          onClick={() => setShow(false)}
          className="btn-primary-gym mt-6 inline-block rounded-lg px-8 py-3 text-base"
        >
          {messages.exitPopupCta}
        </Link>
      </div>
    </div>
  );
}
