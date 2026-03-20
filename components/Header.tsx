"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import "./header.css"

const NAV_LINKS = [
  { href: "/destinations", label: "Destinations" },
  { href: "/provinces", label: "Provinces" },
  { href: "/experiences", label: "Experiences" },
  { href: "/blog", label: "Blog" },
  { href: "/map", label: "Map" },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="site-header-inner">

          {/* Logo */}
          <Link href="/" className="site-logo">
            Solo<em>InVietnam</em>
          </Link>

          {/* Desktop nav */}
          <nav className="site-nav">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`site-nav-link ${pathname.startsWith(link.href) ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            className={`site-hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`site-mobile-overlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile menu drawer */}
      <div className={`site-mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="site-mobile-menu-inner">
          <div className="site-mobile-eyebrow">Menu</div>
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`site-mobile-link ${pathname.startsWith(link.href) ? "active" : ""}`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
              <span className="site-mobile-link-arrow">→</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
