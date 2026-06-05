"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import "./header.css"
import SearchModal from "./Search/SearchModal"

const NAV_LINKS = [
  { href: "/destinations", label: "Destinations" },
  { href: "/locations", label: "Locations" },
  { href: "/blog", label: "Blog" },
  { href: "/map", label: "Map" },
  { href: "/about", label: "About" },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  // Global Cmd+K / Ctrl+K shortcut
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setSearchOpen((v) => !v)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
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

          {/* Right group: nav + search (desktop only) */}
          <div className="site-header-right">
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

            <button
              className="site-search-btn"
              onClick={() => setSearchOpen(true)}
              aria-label="Search (Ctrl+K)"
            >
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.6" />
                <path d="M13 13l3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>

            {/* Hamburger (mobile only) */}
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
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`site-mobile-overlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Search modal */}
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />

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
