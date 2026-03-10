import { destinations } from "@/data/destinations"
import Link from "next/link"

export default function DestinationsPage() {
  return (
    <main className="max-w-4xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Destinations</h1>

      <ul className="space-y-4">
        {destinations.map(d => (
          <li key={d.slug}>
            <Link href={`/destinations/${d.slug}`} className="text-blue-600">
              {d.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}