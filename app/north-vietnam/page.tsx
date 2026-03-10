import { destinations } from "@/data/destinations"
import Link from "next/link"

export default function NorthVietnamPage() {
  const northDestinations = destinations.filter(
    d => d.region === "north"
  )

  return (
    <main className="max-w-4xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">
        North Vietnam Travel Guide
      </h1>

      <ul className="space-y-4">
        {northDestinations.map(d => (
          <li key={d.slug}>
            <Link href={`/destinations/${d.slug}`}>
              {d.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}