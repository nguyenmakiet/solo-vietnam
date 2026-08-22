"use client"

import { useState, FormEvent } from "react"
import { SUBJECTS } from "./subjects"
import { MAX_LENGTHS, validateContactForm } from "./validation"
import { submitContactForm } from "./actions"

type Status = "idle" | "submitting" | "sent" | "error"

const GENERIC_ERROR = "Something went wrong. Please try again later."

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [company, setCompany] = useState("") // honeypot
  const [status, setStatus] = useState<Status>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === "submitting") return // prevent duplicate submissions

    const validationError = validateContactForm({ name, email, subject, message })
    if (validationError) {
      setStatus("error")
      setErrorMessage(validationError)
      return
    }

    setStatus("submitting")
    setErrorMessage("")

    try {
      const result = await submitContactForm({ name, email, subject, message, company })
      if (result.ok) {
        setStatus("sent")
      } else {
        setStatus("error")
        setErrorMessage(result.error)
      }
    } catch {
      setStatus("error")
      setErrorMessage(GENERIC_ERROR)
    }
  }

  if (status === "sent") {
    return (
      <div className="contact-success">
        <div className="contact-success-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h2>Message sent.</h2>
        <p>Thanks for reaching out - I read every message myself and&apos;ll get back to you soon.</p>
        <button
          type="button"
          className="contact-success-reset"
          onClick={() => {
            setName("")
            setEmail("")
            setSubject("")
            setMessage("")
            setCompany("")
            setErrorMessage("")
            setStatus("idle")
          }}
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-field">
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          maxLength={MAX_LENGTHS.name}
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
      </div>

      <div className="contact-field">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          maxLength={MAX_LENGTHS.email}
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
      </div>

      <div className="contact-field">
        <label htmlFor="contact-subject">Subject</label>
        <select
          id="contact-subject"
          name="subject"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="" disabled>
            Choose a topic
          </option>
          {SUBJECTS.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <div className="contact-field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          maxLength={MAX_LENGTHS.message}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What's on your mind?"
        />
      </div>

      {/* Honeypot - hidden from real visitors, left for bots to fill in */}
      <div className="contact-honeypot" aria-hidden="true">
        <label htmlFor="contact-company">Company</label>
        <input
          id="contact-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      {status === "error" && (
        <p className="contact-error" role="alert">
          {errorMessage}
        </p>
      )}

      <button type="submit" className="contact-submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  )
}
