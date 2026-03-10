import { provinces } from "../../../data/provinces"
import { destinations } from "../../../data/destinations"
import { notFound } from "next/navigation"
import Link from "next/link"

export default async function ProvincePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const province = provinces.find(p => p.slug === slug)

  if (!province) return notFound()

  const provinceDestinations = destinations.filter(
    d => d.province.toLowerCase().replace(" ", "-") === slug
  )

  return (
    <main className="max-w-4xl mx-auto py-10">

      <h1 className="text-4xl font-bold">
        {province.name} Travel Guide
      </h1>

      <p className="mt-4 text-gray-600">
        Explore destinations in {province.name} province.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Destinations
      </h2>

      <ul className="space-y-3">
        {provinceDestinations.map(d => (
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