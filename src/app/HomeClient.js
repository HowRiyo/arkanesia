"use client";
import Image from "next/image";
import Link from "next/link";
import MostPickedSection from "@/components/MostPickedEvent";
import { useEffect, useState } from "react";

export default function HomeClient({ cultures, events, tours }) {
  const [shuffledTours, setShuffledTours] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState(
    "Sedang mencari wisata di dekatmu..."
  );

  useEffect(() => {
    const shuffled = [...tours].sort(() => 0.5 - Math.random()).slice(0, 10);
    setShuffledTours(shuffled);
  }, [tours]);

  useEffect(() => {
    const texts = [
      "Sedang mencari wisata di dekatmu...",
      "Mencari tempat wisata terbaik...",
      "Menemukan tempat wisata populer...",
      "Mencari tempat wisata terdekat...",
      "Rekomendasi wisata sedang diproses...",
    ];

    let index = 0;
    const interval = setInterval(() => {
      setLoadingText(texts[index]);
      index = (index + 1) % texts.length;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const savedRecommendations = sessionStorage.getItem("recommended");
    if (savedRecommendations) {
      setRecommended(JSON.parse(savedRecommendations));
    }
  }, []);

  const handleRecommendation = async () => {
    setLoading(true);
    try {
      const pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const { latitude, longitude } = pos.coords;
      console.log(latitude, longitude);

      setTimeout(async () => {
        const res = await fetch("http://localhost:5001/recommendation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ latitude, longitude }),
        });

        const data = await res.json();
        setRecommended(data);
        sessionStorage.setItem("recommended", JSON.stringify(data));
        setLoading(false);
      }, 5000);
    } catch (err) {
      console.error("Gagal dapat lokasi atau fetch data:", err);
      setLoading(false);
    }
  };

  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between w-full mx-auto">
        <div>
          <div className="text-center md:text-left max-w-xl">
            <h2 className="text-4xl font-bold text-[var(--dark-col)] leading-tight">
              Temukan rekomendasi tempat wisata dalam satu 1 klik
            </h2>
            <p className="text-[var(--gray-col)] mt-4">
              ArkaNesia hadir buat kamu yang mau eksplorasi budaya Indonesia
              dengan cara yang seru dan personal. Temukan cerita, sejarah, dan
              tempat bersejarah dalam satu genggaman.
            </p>
            <button
              onClick={handleRecommendation}
              className="mt-6 px-6 py-3 bg-[var(--main-col)] text-[var(--light-col)] font-semibold rounded-lg shadow-md hover:bg-[var(--accent-col)] transition duration-300 cursor-pointer"
            >
              Rekomendasi Wisata
            </button>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-y-5 gap-x-10 text-[var(--gray-col)]">
            {/* Budaya */}
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-[var(--main-col)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3M5 11h14M5 19h14a2 2 0 002-2v-6H3v6a2 2 0 002 2z"
                />
              </svg>
              <span className="text-[var(--dark-col)] font-semibold text-base">
                {cultures.length}
              </span>
              <span className="text-sm">Budaya</span>
            </div>

            {/* Event */}
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-[var(--main-col)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h2l2 3h6l2-3h2a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm4 14l3-4 4 5 5-7 3 4"
                />
              </svg>
              <span className="text-[var(--dark-col)] font-semibold text-base">
                {events.length}
              </span>
              <span className="text-sm">Event</span>
            </div>

            {/* TEMPAT WISATA */}
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-[var(--main-col)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zm0 0v10m0 0c3-4 6-7 6-10a6 6 0 10-12 0c0 3 3 6 6 10z"
                />
              </svg>
              <span className="text-[var(--dark-col)] font-semibold text-base">
                {tours.length}
              </span>
              <span className="text-sm">Tempat Wisata</span>
            </div>
          </div>
        </div>

        <div className="relative md:w-[40%] w-full h-80 md:mt-0 mt-10">
          <Image
            src="/assets/images/bg.jpg"
            alt="Hero Image"
            fill
            className="object-cover rounded-3xl rounded-tl-[80px] shadow-md"
          />
        </div>
      </section>

      {/* TOUR RECOMMENDATION */}
      <section className="flex justify-around mt-10">
        <div className="w-full bg-[var(--light-col)] rounded-3xl p-6">
          <div className="flex justify-around space-x-12">
            {loading ? (
              <p className="text-center text-[var(--gray-col)]">
                {loadingText}
              </p>
            ) : recommended.length > 0 ? (
              <div className="grid grid-cols-3 w-full gap-y-12 gap-x-6">
                {recommended.map((tour, i) => (
                  <Link
                    href={`/tour/${tour.id}`}
                    key={i}
                    className="relative transition duration-300 cursor-pointer transform hover:scale-105"
                  >
                    <img
                      src={tour.image || "/assets/images/default.jpg"}
                      alt={tour.name}
                      className="rounded-xl w-full h-52 object-cover shadow-md"
                    />
                    <p className="absolute top-0 left-0 bg-[var(--main-col)] text-[var(--light-col)] px-4 py-1 rounded-br-lg">
                      {tour.prices > 0 ? `Rp ${tour.prices}` : "Free Entry"}
                    </p>
                    <p className="mt-2 font-semibold">{tour.name}</p>
                    <p className="text-[var(--gray-col)] text-sm">
                      {tour.location}
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-center font-semibold text-[var(--gray-col)]">
                Cari wisata terdekat dengan satu klik
              </p>
            )}
          </div>
        </div>
      </section>

      {/* MOST PICKED */}
      <section className="mt-20">
        <MostPickedSection tours={tours} />
      </section>

      {/* POPULAR CHOICE */}
      <section className="mt-20 fade-in">
        <h3 className="text-3xl font-bold text-[var(--dark-col)] mb-12">
          Popular Choice
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-y-10 gap-x-8 mt-4">
          {shuffledTours.map((tour, i) => (
            <Link key={i} href={`/tour/${tour.id}`} className="md:h-50 h-70">
              <div className="relative">
                <div className="hover-popular">
                  <img
                    src={tour.image}
                    objectfit="cover"
                    width={200}
                    height={100}
                    alt="Popular Choice"
                    className="rounded-xl w-full h-60 md:h-35 object-cover shadow-md"
                  />
                  <span className="absolute top-0 left-0 font-semibold bg-[var(--main-col)] text-[var(--light-col)] px-4 py-1 rounded-br-lg">
                    Popular Choice
                  </span>
                </div>
                <p className="mt-2 text-[var(--dark-col)] font-semibold">{tour.name}</p>
                <p className="text-[var(--gray-col)] text-sm">
                  {tour.location}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <style jsx>{`
        .hover-glow {
          position: relative;
          overflow: hidden;
          z-index: 0;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-glow::before {
          content: "";
          position: absolute;
          top: var(--y, 50%);
          left: var(--x, 50%);
          transform: translate(-50%, -50%);
          width: 0;
          height: 0;
          background: radial-gradient(
            circle,
            var(--glow-color, rgba(59, 130, 246, 0.35)),
            transparent 40%
          );
          opacity: 0;
          transition: width 0.5s ease, height 0.5s ease, opacity 0.5s ease;
          border-radius: 50%;
          z-index: -1;
        }

        .hover-glow:hover::before {
          width: 400px;
          height: 400px;
          opacity: 1;
        }

        .hover-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
        }

        .hover-popular {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-popular:hover {
          transform: translateY(-8px) scale(1.02);
        }

        .mostPicked-card {
          box-shadow: inset 0 -25px 30px 5px var(--dark-col);
        }
      `}</style>
    </>
  );
}
