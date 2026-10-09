import type { Metadata } from "next"
import "./contact.css"
import ContactForm from "./ContactForm"
import { OG_FALLBACK_IMAGE } from "@/lib/cloudinary"

export const metadata: Metadata = {
  title: "Contact | Solo in Vietnam",
  description:
    "Get in touch with Solo in Vietnam - questions, corrections, collaborations, or press inquiries welcome.",
  alternates: { canonical: "https://www.soloinvietnam.com/contact" },
  openGraph: {
    title: "Contact | Solo in Vietnam",
    description:
      "Get in touch with Solo in Vietnam - questions, corrections, collaborations, or press inquiries welcome.",
    url: "https://www.soloinvietnam.com/contact",
    images: [{ url: OG_FALLBACK_IMAGE, width: 1200, height: 630 }],
  },
}

export default function ContactPage() {
  return (
    <main className="contact-wrap">
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <div className="contact-eyebrow">Contact</div>
          <h1>Get in touch</h1>
          <p className="contact-intro">
            Got a question about a place on the site, spotted something out of
            date, or want to collaborate? Send a message below - I read every
            one myself.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <ContactForm />
      </section>
    </main>
  )
}
