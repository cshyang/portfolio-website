"use client";

import { useRef, useState, type FormEvent } from "react";
import { sendEmail } from "@/actions/sendEmail";
import { cvHref } from "@/lib/data";
import Magnetic from "./Magnetic";

type FormStatus = { kind: "idle" | "success" | "error"; message: string };
const initialStatus: FormStatus = { kind: "idle", message: "" };

// Inline brand marks (fill: currentColor) so they invert with the pill on hover.
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="sk-pill-icon">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="sk-pill-icon">
      <path
        fill="currentColor"
        d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58l-.01-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22l-.01 3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .3z"
      />
    </svg>
  );
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>(initialStatus);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setStatus(initialStatus);
    try {
      const result = await sendEmail(new FormData(event.currentTarget));
      if (result.error) {
        setStatus({ kind: "error", message: result.error });
      } else {
        setStatus({ kind: "success", message: "pinned! I’ll write back soon ✓" });
        formRef.current?.reset();
      }
    } catch {
      setStatus({ kind: "error", message: "that didn’t send — try again?" });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="sk-contact">
      <div aria-hidden="true" className="sk-contact-grain" />
      <div className="sk-contact-grid">
        <div>
          <p className="sk-contact-kicker">page 99 — leave something in the margin</p>
          <h2 id="contact-heading" className="sk-contact-title">
            Got a blank page worth filling?
          </h2>
          <p className="sk-contact-lead">
            I’m interested in AI products, data systems, product leadership, and
            collaborations that need someone comfortable crossing boundaries.
            Kuala Lumpur · GMT +8.
          </p>
          <div className="sk-contact-links">
            <a
              href="https://www.linkedin.com/in/chaushyang/"
              target="_blank"
              rel="noreferrer"
              className="sk-pill"
            >
              <LinkedInIcon /> LinkedIn ↗
            </a>
            <a
              href="https://github.com/cshyang"
              target="_blank"
              rel="noreferrer"
              className="sk-pill"
            >
              <GitHubIcon /> GitHub ↗
            </a>
            <a href={cvHref} download className="sk-pill">
              Download CV ↓
            </a>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="sk-note">
          <span aria-hidden="true" className="sk-note-tape" />
          <p className="sk-note-title">a note for Shyang ✎</p>
          <div className="sk-field">
            <label htmlFor="sb-email">YOUR EMAIL</label>
            <input
              id="sb-email"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="you@example.com…"
            />
          </div>
          <div className="sk-field">
            <label htmlFor="sb-message">WHAT ARE YOU TRYING TO BUILD?</label>
            <textarea
              id="sb-message"
              name="message"
              rows={5}
              required
              maxLength={5000}
              placeholder="A useful amount of context is enough…"
            />
          </div>
          <div className="sk-note-actions">
            <Magnetic>
              <button type="submit" className="sk-send" disabled={isSubmitting}>
                {isSubmitting ? "Pinning…" : "Pin it to the page ↗"}
              </button>
            </Magnetic>
            <p role="status" className="sk-form-status" data-kind={status.kind}>
              {status.message}
            </p>
          </div>
          <p className="sk-note-footnote">
            Goes straight to my inbox — I read and reply to every note.
          </p>
        </form>
      </div>
    </section>
  );
}
