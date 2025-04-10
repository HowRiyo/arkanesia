"use client";
import Image from "next/image";
import "../../public/css/home.css";
import Link from "next/link";

export default function Home() {
    const handleMove = (e) => {
        const btn = e.currentTarget;
        const rect = btn.getBoundingClientRect();
        btn.style.setProperty("--x", `${e.clientX - rect.left}px`);
        btn.style.setProperty("--y", `${e.clientY - rect.top}px`);
    };

    return (
        <main>
            <section className="flex flex-col md:flex-row items-center justify-between px-6 py-16 max-w-6xl mx-auto">
                <div>
                    <div className="text-center md:text-left max-w-xl">
                        <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                            Temukan rekomendasi tempat wisata dalam satu 1 klik
                        </h2>
                        <p className="text-gray-500 mt-4">
                            ArkaNesia hadir buat kamu yang mau eksplorasi budaya Indonesia dengan cara yang seru dan personal. 
                            Temukan cerita, sejarah, dan tempat bersejarah dalam satu genggaman.
                        </p>
                        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md">
                            Rekomendasi Wisata
                        </button>
                    </div>

                    <div className="mt-6 flex space-x-10 text-gray-600">
                        {/* EVENT */}
                        <div className="flex items-center space-x-3">
                            <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3M5 11h14M5 19h14a2 2 0 002-2v-6H3v6a2 2 0 002 2z"/>
                            </svg>
                            <span className="text-black font-semibold text-base">250</span>
                            <span className="text-sm">Event</span>
                        </div>

                        {/* GAMBAR */}
                        <div className="flex items-center space-x-3">
                            <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2l2 3h6l2-3h2a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm4 14l3-4 4 5 5-7 3 4"/>
                            </svg>
                            <span className="text-black font-semibold text-base">200</span>
                            <span className="text-sm">Gambar</span>
                        </div>

                        {/* TEMPAT WISATA */}
                        <div className="flex items-center space-x-3">
                            <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zm0 0v10m0 0c3-4 6-7 6-10a6 6 0 10-12 0c0 3 3 6 6 10z" />
                            </svg>
                            <span className="text-black font-semibold text-base">100</span>
                            <span className="text-sm">Tempat Wisata</span>
                        </div>
                    </div>
                </div>

                <div className="relative w-[40%] h-80">
                    <Image
                        src="/image/bg.jpg"
                        alt="Hero Image"
                        fill
                        className="object-cover rounded-xl shadow-md"
                    />
                </div>

            </section>

            {/* BUTTON HOVER SECTION */}
            <section className="flex justify-center mt-10">
                <div className="w-full max-w-3xl bg-blue-100 rounded-3xl px-8 py-6 shadow-inner">
                    <div className="flex justify-center space-x-12">
                        <button
                            className="px-6 py-3 bg-white border rounded-lg shadow-md text-base hover-glow"
                            style={{ "--glow-color": "rgba(59,130,246,0.35)" }}
                            onMouseMove={handleMove}
                        >
                            Select Location
                        </button>
                        <button
                            className="px-6 py-3 bg-white border rounded-lg shadow-md text-base hover-glow"
                            style={{ "--glow-color": "rgba(59,130,246,0.35)" }}
                            onMouseMove={handleMove}
                        >
                            Check Available
                        </button>
                        <button
                            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md text-base hover-glow"
                            style={{ "--glow-color": "rgba(255,255,255,0.4)" }}
                            onMouseMove={handleMove}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </section>

            {/* MOST PICKED */}
            <section className="mt-20 px-20">
                <h3 className="text-2xl font-bold text-gray-800">Most Picked</h3>

                <div className="grid grid-cols-3 gap-8 mt-4">
                    <div className="relative col-span-1 rounded-lg shadow-md overflow-hidden hover-card">
                        <Link href="/login">
                            <div className="relative w-150 h-[100%]">
                                <Image src="/image/bg.jpg" fill objectFit="cover" alt="Big Most Picked"/>
                            </div>
                            <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded">Rp 300.000</span>
                        </Link>
                    </div>
                    <div className="col-span-2 grid grid-cols-2 gap-8">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="relative rounded-lg shadow-md overflow-hidden hover-card">
                                <Link href="/login">
                                    <div className="relative w-150 h-40">
                                        <Image src="/image/bg.jpg" fill objectFit="cover" alt="Big Most Picked"/>
                                    </div>
                                    <span className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 rounded">Rp 200.000</span>
                                    <div className="absolute bottom-2 left-2 text-white">
                                        <h4 className="font-bold">Nama Wisata</h4>
                                        <p className="text-sm">Lokasi tempat wisata</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            {/* POPULAR CHOICE */}
            <section className="mt-20 px-20 fade-in">
                <h3 className="text-2xl font-bold text-gray-800">Popular Choice</h3>

                <div className="grid grid-cols-4 gap-4 mt-4">
                    {[...Array(8)].map((_, i) => (
                        <Link key={i} href="#">
                            <div className="relative">
                                <div className="hover-popular">
                                    <Image src="/image/bg.jpg" objectFit="cover" width={200} height={100} alt="Popular Choice" className="rounded-xl w-full h-32 object-cover shadow-md" />
                                    <span className="absolute top-0 left-0 bg-blue-600 text-white px-4 py-1 rounded-br-lg">Popular Choice</span>
                                </div>
                                <p className="mt-2 font-semibold">Nama Wisata</p>
                                <p className="text-gray-500">Lokasi tempat wisata</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
