export default async function EventDetailPage({ params }) {
  const { id } = await params;

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
          href="/event"
          className="bg-[var(--accent-col)] text-[var(--light-col)] px-6 py-2 rounded-lg shadow-[0_2px_4px_var(--shadow-col)] transition"
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
        className="md:w-5/6 w-full rounded-lg my-6 mx-auto"
      />
      <div className="flex flex-col items-center">
        <p className="p-4 text-[var(--gray-col)] leading-relaxed text-center">
          Gambar ini menunjukkan ilustrasi terkait ensiklopedia yang sedang
          dibahas. Visualisasi ini membantu memahami konteks lebih dalam dan
          memperkaya informasi yang tersedia.
        </p>
      </div>

      <div className="md:col-span-3 mt-15">
        <p className="text-[var(--dark-col)] leading-relaxed text-justify mb-6 indent-20">
          {event.description}{" "}
        </p>
      </div>
    </main>
  );
}
