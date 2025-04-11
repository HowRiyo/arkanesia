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

    return () => ctx.revert(); // Clean up saat unmount
  }, []);

  const dummyEvents = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    title: "Festival Tari Tradisional",
    location: "Yogyakarta",
    date: "20 Mei 2025",
    image: "/assets/images/bg-after.png",
  }));

  return (
    <main ref={containerRef} className="bg-white text-gray-800 min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-blue-900">Event Budaya</h2>
          <p className="text-gray-500 mt-2">
            Jelajahi beragam event budaya menarik dari seluruh Indonesia.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-6">Event Terbaru</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {dummyEvents.map((event) => (
            <div
              key={event.id}
              className="event-card bg-white border rounded-xl overflow-hidden shadow-md"
            >
              <Image
                src={event.image}
                alt={event.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-blue-800">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {event.location} - {event.date}
                </p>
                <Link
                  href="#"
                  className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 text-sm rounded-lg hover:bg-blue-700 transition"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Rekomendasi Wisata
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {dummyEvents.map((event) => (
            <div
              key={`wisata-${event.id}`}
              className="event-card bg-white border rounded-xl overflow-hidden shadow-md"
            >
              <Image
                src={event.image}
                alt={event.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-blue-800">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {event.location} - {event.date}
                </p>
                <Link
                  href="#"
                  className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 text-sm rounded-lg hover:bg-blue-700 transition"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
