import { destinations } from "../../../data/destinations"
import Link from "next/link"
import { notFound } from "next/navigation"
export default async function DestinationPage({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
  
    const { slug } = await params
  
    const destination = destinations.find(d => d.slug === slug)
  
    if (!destination) return notFound()
  
    return (
      <main className="max-w-3xl mx-auto py-10">
        <h1 className="text-4xl font-bold">{destination.name}</h1>
  
        <p className="mt-4 text-gray-600">
          Province: {destination.province}
        </p>
  
        <p className="mt-6">
          {destination.description}
        </p>
        <p className="mt-6">
            Located in {destination.province} province in {destination.region} Vietnam.
        </p>
        <p className="mt-8 text-sm text-gray-500">
            Explore more destinations in{" "}
            <Link href={`/${destination.region}-vietnam`} className="text-blue-600 underline">
                {destination.region} Vietnam
            </Link>
        </p>
      </main>
    )
  }