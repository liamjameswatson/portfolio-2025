"use server";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/app/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const name = formData.get("name");

  // simple server-side validation
  if (!validateString(name, 200)) {
    return {
      error: "Invalid name",
    };
  }

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Message <onboarding@resend.dev>",
      to: "liamjwatson99@gmail.com",
      subject: "Message from contact form",
      text: message as string,
      replyTo: senderEmail as string,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
