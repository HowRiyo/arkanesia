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
    <section className="mx-auto max-w-4xl">
      <div className="flex items-center justify-between mb-4">
        <Link
          href="/ensiklopedia"
          className="bg-[var(--accent-col)] text-[var(--light-col)] px-6 py-2 rounded-lg shadow-[0_2px_4px_var(--shadow-col)] transition"
        >
          Back
        </Link>
      </div>
      <h2 className="text-3xl font-bold text-[var(--dark-col)] mb-4">
        {culture.title} ({culture.year})
      </h2>
      <img
        src={culture.image}
        alt={culture.title}
        className="w-full rounded-lg my-6 mx-auto"
      />
      <div className="flex flex-col items-center mx-auto">
        <p className="text-[var(--gray-col)] leading-relaxed text-center">
          Gambar ini menunjukkan ilustrasi terkait ensiklopedia yang sedang
          dibahas. Visualisasi ini membantu memahami konteks lebih dalam dan
          memperkaya informasi yang tersedia.
        </p>
      </div>

      <div className="md:col-span-3 mt-15 indent-10 md:indent-20">
        {(() => {
          const sentences = culture.description.split(". ");
          const mid = Math.ceil(sentences.length / 2);
          const firstParagraph = sentences.slice(0, mid).join(". ") + ".";
          const secondParagraph = sentences.slice(mid).join(". ");

          return (
            <>
              <p className="text-[var(--dark-col)] leading-relaxed text-justify mb-6 indent-20">
                {firstParagraph}
              </p>
              <p className="text-[var(--dark-col)] leading-relaxed text-justify indent-20">
                {secondParagraph}
              </p>
            </>
          );
        })()}
      </div>
    </section>
  );
}
