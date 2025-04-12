export default async function EventDetailPage({ params }) {
  const { id } = params;

  const event = await prisma.event.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!event) {
    return <div>Event tidak ditemukan</div>;
  }

  return (
    <main>
      <div className="flex items-center justify-between mb-4">
        <Link
          href="/ensiklopedia"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Back
        </Link>
      </div>
      <h2 className="text-3xl font-bold mb-4">
        {event.title} ({event.year})
      </h2>
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-auto rounded-lg my-6"
      />
      <div className="flex flex-col items-center">
        <p className="text-gray-700 leading-relaxed text-center">
          Gambar ini menunjukkan ilustrasi terkait ensiklopedia yang sedang
          dibahas. Visualisasi ini membantu memahami konteks lebih dalam dan
          memperkaya informasi yang tersedia.
        </p>
      </div>

      <div className="md:col-span-3 mt-10">
        <p className="text-gray-700 leading-relaxed text-justify mb-6">
          {event.description}{" "}
        </p>
      </div>
    </main>
  );
}
