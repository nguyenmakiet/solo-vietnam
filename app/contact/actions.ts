"use server"

import { Resend } from "resend"
import { SUBJECTS } from "./subjects"
import { validateContactForm, type ContactFormValues } from "./validation"

const GENERIC_ERROR = "Something went wrong. Please try again later."

export type ContactFormResult = { ok: true } | { ok: false; error: string }

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function submitContactForm(
  input: ContactFormValues & { company: string }
): Promise<ContactFormResult> {
  // Honeypot tripped - pretend success, send nothing.
  if (input.company.trim()) {
    return { ok: true }
  }

  const validationError = validateContactForm(input)
  if (validationError) {
    return { ok: false, error: validationError }
  }

  const contactEmail = process.env.CONTACT_EMAIL
  const apiKey = process.env.RESEND_API_KEY
  if (!contactEmail || !apiKey) {
    console.error("RESEND_API_KEY or CONTACT_EMAIL environment variable is not set")
    return { ok: false, error: GENERIC_ERROR }
  }

  const resend = new Resend(apiKey)

  const name = input.name.trim()
  const email = input.email.trim()
  const message = input.message.trim()
  const subjectLabel =
    SUBJECTS.find((s) => s.value === input.subject.trim())?.label ?? "Other"

  try {
    const { error } = await resend.emails.send({
      from: "SoloInVietnam <contact@soloinvietnam.com>",
      to: contactEmail,
      replyTo: email,
      subject: `[SoloInVietnam Contact] ${subjectLabel} — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subjectLabel}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; font-size: 15px; color: #2d2110; line-height: 1.6;">
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subjectLabel)}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return { ok: false, error: GENERIC_ERROR }
    }

    return { ok: true }
  } catch (err) {
    console.error("Failed to send contact email:", err)
    return { ok: false, error: GENERIC_ERROR }
  }
}
