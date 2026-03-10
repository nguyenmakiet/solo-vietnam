import Link from "next/link"
import { destinations } from "../../data/destinations"

export default function CentralVietnamPage() {

  const centralDestinations = destinations.filter(
    d => d.region === "central"
  )

  return (
    <main className="max-w-4xl mx-auto py-10 px-6">

      <h1 className="text-4xl font-bold mb-6">
        Central Vietnam Travel Guide
      </h1>

      <p className="text-gray-600 mb-8">
        Central Vietnam is known for its ancient towns, beautiful beaches,
        and cultural heritage sites. Popular destinations include Hoi An,
        Da Nang, Hue, and Phong Nha.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Top destinations in Central Vietnam
      </h2>

      <ul className="space-y-3">
        {centralDestinations.map(d => (
          <li key={d.slug}>
            <Link
              href={`/destinations/${d.slug}`}
              className="text-blue-600 hover:underline"
            >
              {d.name}
            </Link>
          </li>
        ))}
      </ul>

    </main>
  )
}