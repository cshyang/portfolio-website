"use client";

import { FormEvent, useRef, useState } from "react";
import { sendEmail } from "@/actions/sendEmail";

type FormStatus = {
  kind: "idle" | "success" | "error";
  message: string;
};

const initialStatus: FormStatus = { kind: "idle", message: "" };

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
        setStatus({ kind: "success", message: "Message sent. I’ll get back to you soon." });
        formRef.current?.reset();
      }
    } catch {
      setStatus({
        kind: "error",
        message: "Something went wrong and your message wasn’t sent. Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="v2-contact" id="contact" aria-labelledby="contact-heading">
      <div className="v2-contact-intro">
        <p className="v2-contact-signal">Kuala Lumpur · GMT +8 · Open to the right problem.</p>
        <h2 id="contact-heading">Have a difficult problem worth shipping?</h2>
        <p>
          I’m interested in AI products, data systems, product leadership, and collaborations that need someone comfortable crossing boundaries.
        </p>
        <div className="v2-contact-links">
          <a href="https://www.linkedin.com/in/chaushyang/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/cshyang" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="/docs/shyang_cv.pdf" download>Download CV ↓</a>
        </div>
      </div>

      <form ref={formRef} className="v2-contact-form" onSubmit={handleSubmit}>
        <div className="v2-field">
          <label htmlFor="v2-email">Your email</label>
          <input id="v2-email" name="senderEmail" type="email" autoComplete="email" spellCheck={false} required maxLength={500} placeholder="you@example.com…" />
        </div>
        <div className="v2-field">
          <label htmlFor="v2-message">What are you trying to build?</label>
          <textarea id="v2-message" name="message" autoComplete="off" required maxLength={5000} rows={6} placeholder="A useful amount of context is enough…" />
        </div>
        <div className="v2-form-footer">
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending…" : "Send Message"}<span aria-hidden="true">↗</span>
          </button>
          <p className={`v2-form-status v2-form-status--${status.kind}`} role="status" aria-live="polite">
            {status.message}
          </p>
        </div>
        <p className="v2-form-note">Goes straight to my inbox — I read and reply to every message.</p>
      </form>
    </section>
  );
}
