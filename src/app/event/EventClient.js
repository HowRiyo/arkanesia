"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function EventClient({ events, tours }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".event-card", {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".event-card",
          start: "top 85%",
        },
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert(); // Clean up saat unmount
  }, []);

  return (
    <section ref={containerRef} className="text-[var(--dark-col)]">
      <section className="mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-[var(--main-col)]">Event</h2>
          <p className="text-[var(--gray-col)] mt-2">
            Jelajahi beragam event budaya menarik dari seluruh Indonesia.
          </p>
        </div>

        <h3 className="text-3xl font-bold text-[var(--dark-col)] mb-8 mt-10">Event Terbaru</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {events.map((event) => (
            <div
              key={event.id}
              className="event-card rounded-xl overflow-hidden shadow-[0_15px_30px_var(--shadow-col)]"
            >
              <img src={event.image} alt={event.title} className="w-full h-60 object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-bold text-[var(--main-col)]">
                  {event.name}
                </h3>
                <p className="text-sm text-[var(--gray-col)] mt-1">
                  {event.location} -{" "}
                  {new Date(event.date).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>

                <Link
                  href={`/event/${event.id}`}
                  className="inline-block mt-4 bg-[var(--main-col)] text-[var(--light-col)] px-4 py-2 text-sm rounded-lg hover:bg-[var(--accent-col)] transition"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-3xl font-bold text-[var(--dark-col)] mb-8 mt-20">
          Rekomendasi Wisata
        </h3>

        <div id="rekomendasi-wisata" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="event-card rounded-xl overflow-hidden shadow-[0_15px_30px_var(--shadow-col)]"
            >
              <img src={tour.image} alt={tour.title} className="w-full h-60" />
              <div className="p-5">
                <h3 className="text-lg font-bold text-[var(--main-col)]">
                  {tour.name}
                </h3>
                <p className="text-sm text-[var(--gray-col)] mt-1">
                  {tour.location} -{" "}
                  {new Date(tour.date).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <Link
                  href={`/tour/${tour.id}?from=/event`}
                  className="inline-block mt-4 bg-[var(--main-col)] text-[var(--light-col)] px-4 py-2 text-sm rounded-lg hover:bg-[var(--accent-col)] transition"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
