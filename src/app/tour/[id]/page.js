export const runtime = "nodejs";

import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function TourDetailPage({ params, searchParams }) {
  const { id } = params;
  const { from } = searchParams || {};
  const backHref = from || "/";

  // Validate ID
  const tourId = Number(id);
  if (isNaN(tourId)) {
    return <div>ID wisata tidak valid</div>;
  }

  const tour = await prisma.tour.findUnique({
    where: {
      id: tourId,
    },
  });

  if (!tour) {
    return <div>Wisata tidak ditemukan</div>;
  }

  return (
    <section className="mx-auto max-w-4xl">
      <div className="flex items-center justify-between mb-15">
        <Link
          href={backHref}
          passHref
          className="bg-[var(--accent-col)] text-[var(--light-col)] px-6 py-2 rounded-lg shadow-[0_2px_4px_var(--shadow-col)] transition"
        >
          Back
        </Link>
      </div>
      <h2 className="text-3xl text-[var(--dark-col)] font-bold mb-4">{tour.name}</h2>
      <img
        src={tour.image}
        alt={tour.title}
        className="w-full rounded-lg my-6 mx-auto"
      />
      <div className="flex flex-col items-center">
        <p className="text-[var(--gray-col)] leading-relaxed text-center">
          Gambar ini menunjukkan ilustrasi terkait tempat wisata{" "}
          <i className="font-semibold">{tour.name}</i> yang sedang dibahas.
          Visualisasi ini membantu memahami konteks lebih dalam dan memperkaya
          informasi yang tersedia.
        </p>
      </div>

      <div className="md:col-span-3 mt-15">
        <p className="text-[var(--dark-col)] leading-relaxed indent-10 md:indent-20 mb-6">
          {tour.description}{" "}
        </p>
      </div>

      {tour.link && (
        <div className="md:col-span-3">
          <Link href={tour.link} className="text-[var(--main-col)]" target="_blank">
            Lihat Selengkapnya
          </Link>
        </div>
      )}

      <div className="md:col-span-3 mt-20 border-t text-[var(--dark-col)] border-[var(--border-col)] px-8 py-6 shadow-xl">
        <h3 className="text-2xl font-bold mb-10">Informasi Lengkap</h3>
        <div className="mb-6 flex flex-col">
          <h5 className="text-lg font-bold mb-2">Harga Tiket</h5>
          <p className="leading-relaxed text-justify mb-2">
            {tour.prices > 0 ? `Rp ${tour.prices}` : "Free Entry"}
          </p>
        </div>
        <div className="mb-6 flex flex-col">
          <h5 className="text-lg font-bold mb-2">Lokasi</h5>
          <p className="leading-relaxed text-justify mb-2">
            {tour.location}
          </p>
        </div>
        <div className="mb-6 flex flex-col">
          <h5 className="text-lg font-bold mb-2">Kabupaten</h5>
          <p className="leading-relaxed text-justify mb-2">
            {tour.district}
          </p>
        </div>
        <div className="mb-6 flex flex-col">
          <h5 className="text-lg font-bold mb-2">Provinsi</h5>
          <p className="leading-relaxed text-justify mb-2">
            {tour.province}
          </p>
        </div>
        <div className="mb-6 flex flex-col">
          <h5 className="text-lg font-bold mb-2">Berdiri sejak</h5>
          <p className="leading-relaxed text-justify mb-2">
            {new Date(tour.date).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
        <div className="mb-6 flex flex-col">
          <h5 className="text-lg font-bold mb-2">Map</h5>
          {tour.latitude && tour.longitude ? (
            <iframe
              width="100%"
              height="400"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${tour.latitude},${tour.longitude}&z=15&output=embed`}
            ></iframe>
          ) : (
            <p className="text-[var(--dark-col)] italic">
              Koordinat tidak tersedia.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}