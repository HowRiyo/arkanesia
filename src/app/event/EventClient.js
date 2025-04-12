"use client";

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
    <main ref={containerRef} className="text-[var(--dark-col)] py-15 px-30">
      <section className="text-center mb-15">
          <h2 className="text-3xl font-bold text-[var(--main-col)]">Event Budaya</h2>
          <p className="text-[var(--gray-col)] mt-2">
            Jelajahi beragam event budaya menarik dari seluruh Indonesia.
          </p>
      </section>

      <section className="mx-auto mb-30">

        <h3 className="text-3xl font-bold text-[var(--dark-col)] mb-10">
          Event Terbaru
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {events.map((event) => (
            <div
              key={event.id}
              className="event-card border-[var(--border-col)] border rounded-xl overflow-hidden shadow-[0_5px_10px_var(--shadow-col)]"
            >
              <img src={event.image} alt={event.title} />
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
                  className="inline-block font-semibold mt-4 bg-[var(--main-col)] text-[var(--light-col)] px-4 py-2 text-sm rounded-2xl hover:bg-[var(--accent-col)] transition"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-3xl font-bold text-[var(--dark-col)] mb-10">
          Rekomendasi Wisata
        </h3>

          <div id="rekomendasi-wisata" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {tours.map((tour) => (
              <div
                key={`wisata-${tour.id}`}
                className="event-card border-[var(--border-col)] border rounded-xl overflow-hidden shadow-[0_5px_10px_var(--shadow-col)]"
              >
                <img src={tour.image} alt={tour.title} />
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
                    href="#"
                    className="inline-block font-semibold mt-4 bg-[var(--main-col)] text-[var(--light-col)] px-4 py-2 text-sm rounded-2xl hover:bg-[var(--accent-col)] transition"
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





{/* <main ref={containerRef} className="text-[var(--dark-col)] py-15 px-30">
      
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
        className="event-card relative border-[var(--border-col)] border-[var(- border-[var(--border-col)]-border-col)] border-[var(--border-col)] border rounded-2xl overflow-hidden shadow-[0_5px_10px_var(--shadow-col)] h-90"
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
        className="event-card relative border-[var(--border-col)] border-[var(- border-[var(--border-col)]-border-col)] border-[var(--border-col)] border rounded-2xl overflow-hidden shadow-[0_5px_10px_var(--shadow-col)] h-90"
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
</main> */}