export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Solo Travel Vietnam
        </h1>

        <p className="text-xl text-gray-600 mb-10">
          The ultimate guide for exploring Vietnam alone
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          <div className="p-6 border rounded-xl">Hanoi</div>
          <div className="p-6 border rounded-xl">Da Lat</div>
          <div className="p-6 border rounded-xl">Hoi An</div>
          <div className="p-6 border rounded-xl">Phu Quoc</div>
        </div>
      </section>
    </main>
  );
}