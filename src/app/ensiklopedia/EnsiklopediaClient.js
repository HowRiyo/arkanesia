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
      className="mx-auto max-w-6xl py-20 overflow-hidden"
    >
      <h2 className="text-4xl font-extrabold text-center text-[var(--main-col)] fade-in">
        Ensiklopedia
      </h2>

      <div className="my-15 fade-in mx-auto w-1/2">
        <input
          type="text"
          placeholder="Cari Budaya di Provinsi..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border-[var(--border-col)] border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent-col)] transition"
        />
      </div>

      <div className="space-y-6 flex flex-col gap-5">
        {filteredCultures.map((culture, i) => (
          <Link
            href={`/ensiklopedia/${culture.id}`}
            key={i}
            className="fade-in"
          >
            <div className="p-4 shadow-md rounded-lg flex flex-col sm:flex-row items-start gap-4">
              <div
                className="w-52 h-32 min-w-[64px] bg-[var(--light-col)] rounded-md bg-cover bg-center"
                style={{ backgroundImage: `url(${culture.image})` }}
              ></div>
              <div className="flex-1">
                <h3 className="font-bold text-[var(--dark-col)]">
                  {culture.title} ({culture.year})
                </h3>
                <p className="text-[var(--gray-col)] text-sm line-clamp-4">
                  {culture.description}
                </p>
              </div>
            </div>
          </Link>
        ))}

        {filteredCultures.length === 0 && (
          <p className="text-center text-[var(--gray-col)]">
            Tidak ditemukan hasil untuk lokasi tersebut.
          </p>
        )}
      </div>
    </main>
  );
}