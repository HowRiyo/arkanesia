import prisma from "@/lib/prisma"; // path sesuai tempat kamu taruh prisma client
import Link from "next/link";

export default async function CultureDetailPage({ params }) {
  const { id } = params;

  const culture = await prisma.culture.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!culture) {
    return <div className="p-10 text-center">Budaya tidak ditemukan</div>;
  }

  return (
    <main className="mx-auto max-w-6xl py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-4">
        <Link
          href="/ensiklopedia"
          className="bg-[var(--accent-col)] text-[var(--light-col)] px-6 py-2 rounded-lg shadow-[0_2px_4px_var(--shadow-col)] transition"
        >
          Back
        </Link>
      </div>
      <h2 className="text-3xl font-bold mb-4">
        {culture.title} ({culture.year})
      </h2>
      <img
        src={culture.image}
        alt={culture.title}
        className="w-full h-auto rounded-lg my-6"
      />
      <div className="flex flex-col items-center">
        <p className="text-[var(--gray-col)] leading-relaxed text-center">
          Gambar ini menunjukkan ilustrasi terkait ensiklopedia yang sedang
          dibahas. Visualisasi ini membantu memahami konteks lebih dalam dan
          memperkaya informasi yang tersedia.
        </p>
      </div>

      <div className="md:col-span-3 mt-15">
        <p className="text-[var(--dark-col)] leading-relaxed text-justify mb-6 indent-20">
          {culture.description}{" "}
        </p>
      </div>
    </main>
  );
}
