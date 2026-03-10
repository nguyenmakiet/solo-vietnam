import VietnamMap from "@/components/VietnamMap"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Solo Travel Vietnam
        </h1>

        <p className="text-xl text-gray-600 mb-10">
          The ultimate guide for exploring Vietnam alone
        </p>

        <div className="mb-16">
          <VietnamMap />
        </div>
        <p className="text-gray-500 text-sm">
          Click a destination on the map to explore solo travel guides across Vietnam.
        </p>
      </section>

      {/* DESTINATIONS */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-6">
          Popular Destinations
        </h2>

        <ul className="space-y-2">
          <li><Link href="/destinations/ha-noi">Hanoi</Link></li>
          <li><Link href="/destinations/da-lat">Da Lat</Link></li>
          <li><Link href="/destinations/hoi-an">Hoi An</Link></li>
          <li><Link href="/destinations/phu-quoc">Phu Quoc</Link></li>
        </ul>
      </section>

      {/* EXPERIENCES */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-6">
          Travel Experiences
        </h2>

        <ul className="space-y-2 mb-6">
          <li><Link href="/experiences/beaches">Beaches</Link></li>
          <li><Link href="/experiences/mountains">Mountains</Link></li>
          <li><Link href="/experiences/camping">Camping</Link></li>
          <li><Link href="/experiences/food">Food</Link></li>
        </ul>

        <Link 
          href="/experiences"
          className="text-blue-600 hover:underline font-medium"
        >
          View all travel experiences →
        </Link>
      </section>

    </main>
  )
}