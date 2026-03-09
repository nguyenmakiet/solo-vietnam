import Link from "next/link"

export default function ExperiencesPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-8">
        Travel Experiences in Vietnam
      </h1>

      <p className="text-gray-600 mb-10">
        Discover the best experiences for solo travelers in Vietnam,
        from beautiful beaches to mountain adventures.
      </p>

      <ul className="space-y-4">

        <li>
          <Link href="/experiences/beaches">
            Beaches in Vietnam
          </Link>
        </li>

        <li>
          <Link href="/experiences/mountains">
            Mountain destinations
          </Link>
        </li>

        <li>
          <Link href="/experiences/camping">
            Camping spots
          </Link>
        </li>

        <li>
          <Link href="/experiences/food">
            Vietnamese food experiences
          </Link>
        </li>

      </ul>

    </main>
  )
}