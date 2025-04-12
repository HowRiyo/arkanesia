"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function EnsiklopediaClient({ cultures }) {
  const wrapperRef = useRef(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-in", {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  // Filter cultures berdasarkan lokasi
  const filteredCultures = cultures.filter((culture) =>
    culture.province?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main
      ref={wrapperRef}
      className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <h2 className="text-3xl font-bold text-center text-blue-900 fade-in">
        Ensiklopedia
      </h2>

      <div className="my-6 fade-in">
        <input
          type="text"
          placeholder="Cari Budaya di Provinsi..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      <div className="space-y-6 flex flex-col">
        {filteredCultures.map((culture, i) => (
          <Link
            href={`/ensiklopedia/${culture.id}`}
            key={i}
            className="fade-in"
          >
            <div className="bg-white p-4 shadow-md rounded-lg flex flex-col sm:flex-row items-start gap-4">
              <div
                className="w-52 h-32 min-w-[64px] bg-gray-200 rounded-md bg-cover bg-center"
                style={{ backgroundImage: `url(${culture.image})` }}
              ></div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">
                  {culture.title} ({culture.year})
                </h3>
                <p className="text-gray-600 text-sm line-clamp-4">
                  {culture.description}
                </p>
              </div>
            </div>
          </Link>
        ))}

        {filteredCultures.length === 0 && (
          <p className="text-center text-gray-500">
            Tidak ditemukan hasil untuk lokasi tersebut.
          </p>
        )}
      </div>
    </main>
  );
}
