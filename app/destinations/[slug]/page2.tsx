import { notFound } from "next/navigation"
import { getCityBySlug } from "@/data/cities"

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>
}) {
  const { city: citySlug } = await params

  const city = getCityBySlug(citySlug)

  if (!city) {
    notFound()
  }

  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Solo Travel in {city.name}</h1>

      <p>{city.tagline}</p>

      <img
        src={city.heroImage}
        alt={city.name}
        style={{ width: "100%", maxWidth: "800px", marginTop: "20px" }}
      />

      <p style={{ marginTop: "20px" }}>{city.description}</p>

      <h2>Top highlights</h2>
      <ul>
        {city.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </main>
  )
}