import { SUBJECTS } from "./subjects"

export const MAX_LENGTHS = {
  name: 100,
  email: 200,
  message: 5000,
} as const

export type ContactFormValues = {
  name: string
  email: string
  subject: string
  message: string
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const LINE_BREAK_REGEX = /[\r\n]/

export function validateContactForm(values: ContactFormValues): string | null {
  const name = values.name.trim()
  const email = values.email.trim()
  const subject = values.subject.trim()
  const message = values.message.trim()

  if (!name) return "Please enter your name."
  if (name.length > MAX_LENGTHS.name) return "Name is too long."
  // Name is echoed into the email Subject header - reject line breaks so it
  // can't be used to inject extra headers.
  if (LINE_BREAK_REGEX.test(name)) return "Name cannot contain line breaks."

  if (!email) return "Please enter your email."
  if (email.length > MAX_LENGTHS.email || !EMAIL_REGEX.test(email)) {
    return "Please enter a valid email address."
  }

  if (!subject || !SUBJECTS.some((s) => s.value === subject)) {
    return "Please choose a subject."
  }

  if (!message) return "Please enter a message."
  if (message.length > MAX_LENGTHS.message) return "Message is too long."

  return null
}
