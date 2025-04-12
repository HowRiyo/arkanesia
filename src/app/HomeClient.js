"use client";
import Image from "next/image";
import Link from "next/link";
import MostPickedSection from "@/components/MostPickedEvent";

export default function HomeClient({ events, tours }) {
  const handleMove = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    btn.style.setProperty("--x", `${e.clientX - rect.left}px`);
    btn.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <main className="py-5 px-30">
      <section className="flex flex-col md:flex-row items-center justify-between py-16 w-full mx-auto">
        <div>
            <div className="text-center md:text-left max-w-xl">
                <h2 className="text-4xl font-bold text-[var(--dark-col)] leading-tight">
                    Temukan rekomendasi tempat wisata dalam satu 1 klik
                </h2>
                <p className="text-[var(--gray-col)] mt-4">
                    ArkaNesia hadir buat kamu yang mau eksplorasi budaya Indonesia dengan cara yang seru dan personal. 
                    Temukan cerita, sejarah, dan tempat bersejarah dalam satu genggaman.
                </p>
                <button className="mt-6 px-6 py-3 bg-[var(--main-col)] text-[var(--light-col)] rounded-lg shadow-md">
                    Rekomendasi Wisata
                </button>
            </div>

            <div className="mt-6 flex space-x-10 text-[var(--gray-col)]">
                {/* EVENT */}
                <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-[var(--main-col)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3M5 11h14M5 19h14a2 2 0 002-2v-6H3v6a2 2 0 002 2z"/>
                    </svg>
                    <span className="text-[var(--dark-col)] font-semibold text-base">250</span>
                    <span className="text-sm">Event</span>
                </div>

                {/* GAMBAR */}
                <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-[var(--main-col)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2l2 3h6l2-3h2a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm4 14l3-4 4 5 5-7 3 4"/>
                    </svg>
                    <span className="text-[var(--dark-col)] font-semibold text-base">200</span>
                    <span className="text-sm">Gambar</span>
                </div>

                {/* TEMPAT WISATA */}
                <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-[var(--main-col)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zm0 0v10m0 0c3-4 6-7 6-10a6 6 0 10-12 0c0 3 3 6 6 10z" />
                    </svg>
                    <span className="text-[var(--dark-col)] font-semibold text-base">100</span>
                    <span className="text-sm">Tempat Wisata</span>
                </div>
            </div>
        </div>

        <div className="relative w-[40%] h-80">
            <Image
                src="/image/bg.jpg"
                alt="Hero Image"
                fill
                className="object-cover rounded-3xl rounded-tl-[80px] shadow-md"
            />
        </div>
    </section>

    {/* BUTTON HOVER SECTION */}
    <section className="flex justify-around mt-10">
        <div className="w-full bg-[var(--light-col)] rounded-3xl py-6">
            <div className="flex justify-around space-x-12">
                <button
                    className="px-6 py-3 bg-[var(--background-col)] font-semibold border-[var(--border-col)] text-[var(--dark-col)] border rounded-lg shadow-[0_4px_2px_var(--shadow-col)] text-base hover-glow"
                    style={{ "--glow-color": "rgba(59,130,246,0.35)" }}
                    onMouseMove={handleMove}
                >
                    Select Location
                </button>
                <button
                    className="px-6 py-3 bg-[var(--background-col)] font-semibold border-[var(--border-col)] text-[var(--dark-col)] border rounded-lg shadow-[0_4px_2px_var(--shadow-col)] text-base hover-glow"
                    style={{ "--glow-color": "rgba(59,130,246,0.35)" }}
                    onMouseMove={handleMove}
                >
                    Check Available
                </button>
                <button
                    className="px-6 py-3 bg-[var(--main-col)] font-sans text-[var(--background-col)] rounded-lg shadow-[0_5px_15px_5px_var(--shadow-col)] ext-base hover-glow"
                    style={{ "--glow-color": "rgba(255,255,255,0.4)" }}
                    onMouseMove={handleMove}
                >
                    Search
                </button>
            </div>
        </div>
    </section>

    {/* MOST PICKED */}
    <section className="mt-20">
      <MostPickedSection tours={tours} />
    </section>

    {/* POPULAR CHOICE */}
    <section className="mt-20 fade-in">
        <h3 className="text-3xl font-bold text-[var(--dark-col)] mb-12">Popular Choice</h3>

        <div className="grid grid-cols-4 gap-y-12 gap-x-6 mt-4">
            {[...Array(8)].map((_, i) => (
                <Link key={i} href="#">
                    <div className="relative">
                        <div className="hover-popular">
                            <Image
                                src="/image/bg.jpg"
                                objectFit="cover"
                                width={200}
                                height={100}
                                alt="Popular Choice"
                                className="rounded-lg w-full h-32 object-cover shadow-md"
                            />
                            
                            {(i === 0 || i === 7) && (
                                <span className="absolute top-0 right-0 bg-[var(--main-col)] text-[var(--light-col)] px-4 py-1 rounded-bl-xl font-semibold">
                                    Popular Choice
                                </span>
                            )}
                        </div>

                        <p className="mt-2 font-semibold">Nama Wisata</p>
                        <p className="text-[var(--gray-col)] text-sm">Lokasi tempat wisata</p>
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
            background: radial-gradient(circle, var(--glow-color, rgba(59,130,246,0.35)), transparent 40%);
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
    </main>
);
}
