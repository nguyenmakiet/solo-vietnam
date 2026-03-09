import { experiences } from "@/data/experiences"

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const experience = experiences.find(
    (exp) => exp.slug === slug
  )

  if (!experience) {
    return <div>Experience not found</div>
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-6">
        {experience.name} in Vietnam
      </h1>

      <p className="text-gray-600">
        {experience.description}
      </p>

    </main>
  )
}