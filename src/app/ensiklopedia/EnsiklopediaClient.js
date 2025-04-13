"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

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
        className="px-30 py-15 mx-auto"
      >
        <h2 className="text-3xl font-extrabold text-center text-[var(--main-col)] fade-in mb-5">
          Ensiklopedia
        </h2>
        <br />
        <div className="space-y-6">
        {cultures.map((culture, i) => (
          <Link
            href={`/ensiklopedia/${culture.id}`}
            key={i}
            className="fade-in"
          >
            <div className="p-4 my-10 shadow-[0_5px_10px_var(--shadow-col)] rounded-lg flex flex-col sm:flex-row items-start gap-10">
              <img
                src={culture.image}
                alt={culture.title}
                width={200}
                height={200}
                className="rounded-md"
              />
              <div>
                <h3 className="font-bold text-[var(--dark-col)] text-xl">
                  {culture.title} ({culture.year})
                </h3>
                <p className="text-[var(--gray-col)] text-sm">{culture.description}</p>
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
