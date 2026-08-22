import Link from "next/link"
import "./footer.css"

const COLUMNS = [
  {
    title: "Explore",
    links: [
      { href: "/provinces", label: "Provinces" },
      { href: "/locations", label: "Locations" },
      { href: "/map", label: "Map" },
    ],
  },
  {
    title: "Experiences",
    links: [
      { href: "/experiences/beaches", label: "Beaches" },
      { href: "/experiences/trekking", label: "Trekking" },
      { href: "/experiences/camping", label: "Camping" },
      { href: "/experiences/food", label: "Food" },
    ],
  },
  {
    title: "About",
    links: [
      { href: "/about", label: "About me" },
      { href: "/contact", label: "Contact" },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <Link href="/" className="site-footer-logo">
            Solo<em>InVietnam</em>
          </Link>
          <p className="site-footer-tagline">
            Documenting Vietnam,
            <br />
            one road at a time.
          </p>
        </div>

        <div className="site-footer-cols">
          {COLUMNS.map((col) => (
            <div key={col.title} className="site-footer-col">
              <div className="site-footer-col-title">{col.title}</div>
              <ul>
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="site-footer-bottom">
        <div className="site-footer-bottom-inner">
          <div className="site-footer-copy">
            <div>© {year} soloinvietnam.com</div>
            <div>All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
