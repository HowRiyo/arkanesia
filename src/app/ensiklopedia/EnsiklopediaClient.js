"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function EnsiklopediaClient({ cultures }) {
  const wrapperRef = useRef(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;


  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-in-content", {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, [currentPage, search]);

  
  const filteredCultures = cultures.filter((culture) =>
    culture.province?.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCultures.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCultures = filteredCultures.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Reset ke halaman pertama saat filter berubah
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  return (
    <section ref={wrapperRef} className="overflow-hidden">
      <h2 className="text-4xl font-extrabold text-center text-[var(--main-col)] fade-in-content">
        Ensiklopedia
      </h2>

      <div className="my-15 fade-in-content mx-auto w-full md:w-1/2">
        <input
          type="text"
          placeholder="Cari Budaya di Provinsi..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border-[var(--border-col)] border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent-col)] transition"
        />
      </div>

      <div className="space-y-6 flex flex-col gap-5">
        {paginatedCultures.map((culture, i) => (
          <Link
            href={`/ensiklopedia/${culture.id}`}
            key={i}
            className="fade-in-content"
          >
            <div className="p-4 shadow-md rounded-lg flex flex-col sm:flex-row items-start gap-4">
              <div
                className="sm:h-32 h-42 w-full sm:w-50 bg-[var(--light-col)] rounded-md bg-cover bg-center"
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-10 gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border border-[var(--border-col)] cursor-pointer rounded-md text-[var(--dark-col)] disabled:opacity-40"
          >
            <ArrowLeft />
          </button>

          <button
            onClick={() => handlePageChange(1)}
            className={`px-3 cursor-pointer ${
              currentPage === 1
                ? "text-[var(--accent-col)]"
                : "text-[var(--dark-col)]"
            }`}
          >
            1
          </button>

          {currentPage > 4 && <span className="px-2">...</span>}

          {Array.from({ length: 3 }, (_, i) => currentPage - 1 + i).map((page) => {
            if (page > 1 && page < totalPages) {
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 cursor-pointer ${
                    currentPage === page
                      ? "text-[var(--accent-col)]"
                      : "text-[var(--dark-col)]"
                  }`}
                >
                  {page}
                </button>
              );
            }
            return null;
          })}

          {currentPage < totalPages - 3 && <span className="px-2">...</span>}

          <button
            onClick={() => handlePageChange(totalPages)}
            className={`px-3 cursor-pointer ${
              currentPage === totalPages
                ? "text-[var(--accent-col)]"
                : "text-[var(--dark-col)]"
            }`}
          >
            {totalPages}
          </button>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border-[var(--border-col)] border cursor-pointer rounded-md text-[var(--dark-col)] disabled:opacity-40"
          >
            <ArrowRight />
          </button>
        </div>
      )}
    </section>
  );
}
