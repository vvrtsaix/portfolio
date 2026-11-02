import React from "react";
import { Resend } from "resend";
import type { APIRoute } from 'astro';
import ContactFormEmail from "@/email/contact-form-email";
import { validateString } from "@/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const prerender = false;

// Provider errors (e.g. "API key is invalid") go to logs, never to the visitor.
const SEND_FAILED = "Message not sent. Please try again later or email me directly.";

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const message = formData.get("message");

  if (!validateString(email, 500)) {
    return new Response(
      JSON.stringify({ message: "Invalid sender email" }),
      { status: 400 }
    );
  }
  if (!validateString(message, 5000)) {
    return new Response(
      JSON.stringify({ message: "Invalid message" }),
      { status: 400 }
    );
  }

  // resend >= 4 returns API failures as `error` instead of throwing; catch covers network errors.
  try {
    const { error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "vvrtsaix.n@gmail.com",
      subject: "Message from contact form",
      replyTo: email,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: email,
      }),
    });
    if (error) {
      console.error("Resend rejected contact email:", error);
      return new Response(JSON.stringify({ message: SEND_FAILED }), { status: 502 });
    }
  } catch (error) {
    console.error("Contact email failed:", error);
    return new Response(JSON.stringify({ message: SEND_FAILED }), { status: 500 });
  }

  return new Response(JSON.stringify({ message: "Message sent." }), { status: 200 });
};
