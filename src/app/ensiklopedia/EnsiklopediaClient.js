"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function EnsiklopediaClient({ cultures }) {
  const wrapperRef = useRef(null);

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

  return (
    <main
      ref={wrapperRef}
      className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <h2 className="text-3xl font-bold text-center text-blue-900 fade-in">
        Ensiklopedia
      </h2>
      <br />
      <div className="space-y-6 flex flex-col">
        {cultures.map((culture, i) => (
          <Link
            href={`/ensiklopedia/${culture.id}`}
            key={i}
            className="fade-in"
          >
            <div className="bg-white p-4 shadow-md rounded-lg flex flex-col sm:flex-row items-start gap-4">
              <div
                className="w-16 h-16 min-w-[64px] bg-gray-200 rounded-md bg-cover bg-center"
                style={{ backgroundImage: `url(${culture.image})` }}
              ></div>
              <div>
                <h3 className="font-bold text-gray-800">
                  {culture.title} ({culture.year})
                </h3>
                <p className="text-gray-600 text-sm">{culture.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
