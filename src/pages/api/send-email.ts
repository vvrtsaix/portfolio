import React from "react";
import { Resend } from "resend";
import type { APIRoute } from 'astro';
import ContactFormEmail from "@/email/contact-form-email";
import { getErrorMessage, validateString } from "@/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const prerender = false;
export const config = {
  runtime: 'edge',
};

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const message = formData.get("message");

  // simple server-side validation
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

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "vvrtsaix.n@gmail.com",
      subject: "Message from contact form",
      reply_to: email,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: email,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return new Response(
    JSON.stringify({
      message: "Successfully send"
    }),
    { status: 200 }
  );
};
