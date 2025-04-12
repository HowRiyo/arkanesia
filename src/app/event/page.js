"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register plugin GSAP
gsap.registerPlugin(ScrollTrigger);

export default function EventPage() {
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

    return () => ctx.revert();
  }, []);

  const dummyEvents = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    title: "Festival Tari Tradisional",
    location: "Yogyakarta",
    date: "20 Mei 2025",
    image: "/assets/images/bg-after.png",
  }));

  return (
    <main ref={containerRef} className="text-[var(--dark-col)] py-15 px-30">
      
      <section className="text-center mb-15">
          <h2 className="text-3xl font-bold text-[var(--main-col)]">Event Budaya</h2>
          <p className="text-[var(--gray-col)] mt-2">
            Jelajahi beragam event budaya menarik dari seluruh Indonesia.
          </p>
      </section>
      
      <section className="mx-auto mb-30">
        <h3 className="text-3xl font-bold text-[var(--dark-col)] mb-10">Event Terbaru</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15">
          {dummyEvents.map((event) => (
            <div
              key={`wisata-${event.id}`}
              className="event-card relative border-[var(--border-col)] border rounded-2xl overflow-hidden shadow-md h-90"
            >
              <div className="relative h-[55%] w-[101%]">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xl text-[var(--main-col)]">
                  {event.title}
                </h3>
                <p className="text-sm text-[var(--gray-col)] mt-1">
                  {event.location} - {event.date}
                </p>
              </div>
              <Link
                href="#"
                className="inline-block absolute bottom-6 right-6 bg-[var(--main-col)] text-[var(--light-col)] px-4 py-2 text-sm font-semibold rounded-2xl hover:bg-[var(--main-col)] transition"
              >
                Lihat Detail
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-3xl font-bold text-[var(--dark-col)] mb-10">
          Rekomendasi Wisata
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15">
          {dummyEvents.map((event) => (
            <div
              key={`wisata-${event.id}`}
              className="event-card relative border-[var(--border-col)] border rounded-2xl overflow-hidden shadow-md h-90"
            >
              <div className="relative h-[55%] w-[101%]">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xl text-[var(--main-col)]">
                  {event.title}
                </h3>
                <p className="text-sm text-[var(--gray-col)] mt-1">
                  {event.location} - {event.date}
                </p>
              </div>
              <Link
                href="#"
                className="inline-block absolute bottom-6 right-6 bg-[var(--main-col)] text-[var(--light-col)] px-4 py-2 text-sm font-semibold rounded-2xl hover:bg-[var(--main-col)] transition"
              >
                Lihat Detail
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
