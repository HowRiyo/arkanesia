"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

export default function EncyclopediaPage() {
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
      className="px-30 py-15 mx-auto"
    >
      <h2 className="text-3xl font-extrabold text-center text-[var(--main-col)] fade-in mb-5">
        Ensiklopedia
      </h2>
      <br />
      <div className="space-y-6">
        {[...Array(8)].map((_, i) => (
          <Link href="/ensiklopedia" key={i} className="fade-in">
            <div className="my-5 p-4 shadow-md rounded-lg flex justify-center flex-col sm:flex-row items-start gap-6">
              <div
                className="relative w-25 h-25 min-w-[64px] bg-[var(--light-col)] bg-cover bg-center">
                  <Image
                    src={"/assets/images/bg.jpg"}
                    alt="title"
                    fill
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              <div className="w-[90%]">
                <h3 className="font-bold text-xl text-[var(--dark-col)]">
                  Judul ensiklopedia (tahun)
                </h3>
                <p className="text-[var(--gray-col)] text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
