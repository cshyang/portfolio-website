"use client";

import { useRef, useState, type FormEvent } from "react";
import { sendEmail } from "@/actions/sendEmail";
import { cvHref } from "@/lib/data";
import Magnetic from "./Magnetic";

type FormStatus = { kind: "idle" | "success" | "error"; message: string };
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
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/cshyang"
              target="_blank"
              rel="noreferrer"
              className="sk-pill"
            >
              GitHub ↗
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
