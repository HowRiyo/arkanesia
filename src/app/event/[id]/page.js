import Link from "next/link";


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
    <section className="mx-auto max-w-4xl">
      <div className="flex items-center justify-between mb-15">
        <Link
          href="/event"
          className="bg-[var(--accent-col)] text-[var(--light-col)] px-6 py-2 rounded-lg shadow-[0_2px_4px_var(--shadow-col)] transition"
        >
          Back
        </Link>
      </div>
      <div className="text-3xl font-bold mb-4">
        {event.name}
      </div>
      <img
        src={event.image}
        alt={event.name}
        className="w-full rounded-lg my-6 mx-auto"
      />
      <div className="flex flex-col items-center">
        <p className="text-[var(--gray-col)] leading-relaxed text-center">
          Gambar ini menunjukkan ilustrasi terkait ensiklopedia yang sedang
          dibahas. Visualisasi ini membantu memahami konteks lebih dalam dan
          memperkaya informasi yang tersedia.
        </p>
      </div>

      <div className="md:col-span-3 mt-15">
        <p className="text-[var(--dark-col)] leading-relaxed text-justify mb-6 indent-10 md:indent-20">
          {event.description}{" "}
        </p>
      </div>

      <div className="md:col-span-3 mt-20 border-t text-[var(--dark-col)] border-[var(--border-col)] px-8 py-6 shadow-xl">
        <h3 className="text-2xl font-bold mb-10">Informasi Lengkap</h3>
        <div className="mb-6 flex flex-col">
          <h5 className="text-lg font-bold mb-2">Tanggal</h5>
          <p className="leading-relaxed text-justify mb-2">
            {new Date(event.date).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
        <div className="mb-6 flex flex-col">
          <h5 className="text-lg font-bold mb-2">Lokasi</h5>
          <p className="leading-relaxed text-justify mb-2">
            {event.location}
          </p>
        </div>
        <div className="mb-6 flex flex-col">
          <h5 className="text-lg font-bold mb-2">Detail</h5>
          <Link href={event.link} className="leading-relaxed text-[var(--main-col)] text-justify mb-2">
            {event.link}
          </Link>
        </div>
      </div>
    </section>
  );
}
