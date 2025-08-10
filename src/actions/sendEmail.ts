"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/ContactFormEmail";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

  if (!message || typeof message !== "string") {
    return {
      error: "Invalid message",
    };
  }

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalide sender email.",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message.",
    };
  }

  try {
    const data = await resend.emails.send({
      from: "Contact From <onboarding@resend.dev>",
      to: "cshyang92@gmail.com",
      reply_to: senderEmail as string,
      subject: "Message to test",
      //   text: message as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
    return { data };
  } catch (err: unknown) {
    return {
      error: getErrorMessage(err),
    };
  }
};
