"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function Nav() {
  const pathname = usePathname();
  const navRef = useRef(null);
  const tl = useRef(null);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Ensiklopedia", href: "/ensiklopedia" },
    { name: "Event", href: "/event" },
    { name: "About", href: "/about" },
  ];
  const isAnimating = useRef(false);
  const leavePending = useRef(false);

const handleHover = () => {
  if (isAnimating.current) return;

  isAnimating.current = true;
  leavePending.current = false;

  tl.current = gsap.to(navRef.current, {
    "--before-opacity": "0.125",
    "--before-x": `${window.innerWidth * 1.15}px`,
    duration: 1.5,
    ease: "power3.out",
    onComplete: () => {
      isAnimating.current = false;

      if (leavePending.current) {
        gsap.set(navRef.current, {
          "--before-opacity": "0",
          "--before-x": `-${window.innerWidth * 1.15}px`,
        });
      }
    },
  });
};

const handleLeave = () => {
  if (isAnimating.current) {
    leavePending.current = true;
  } else {
    gsap.set(navRef.current, {
      "--before-opacity": "0",
      "--before-x": "0px",
    });
  }
};


  return (
    <nav
      ref={navRef}
      className="overflow-hidden bg-[var(--background-col)] backdrop-blur-sm shadow-lg px-10 py-4 flex items-center justify-between sticky top-0 z-50"
      style={{
        "--before-opacity": "0",
        "--before-x": "0px",
      }}
    >
      <h1 className="text-3xl font-bold tracking-tight">
        <span className="text-[var(--main-col)]">Arka</span>
        <span className="text-[var(--dark-col)]">Nesia</span>
      </h1>

      <ul className="flex items-center space-x-8 text-[var(--gray-col)] font-medium">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              className={`relative group transition-all duration-300 ${
                pathname === link.href
                  ? "text-[var(--main-col)]"
                  : "hover:text-[var(--main-col)]"
              }`}
            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-[var(--main-col)] transition-all ${
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          </li>
        ))}
        <Link
          href="/search-culture"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-[var(--main-col)] to-[var(--accent-col)] text-[var(--light-col)] font-bold shadow-lg hover:from-[var(--accent-col)] hover:to-blue-800 transform hover:scale-105 transition-all duration-300"
        >
          Cari Budaya
        </Link>
      </ul>

      <style jsx>{`
        nav::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        background: var(--main-col);
        box-shadow: 0 0 300px 50px var(--main-col), 0 0 200px 50px var(--main-col), 0 0 100px 2px var(--main-col), 0 0 300px 2px var(--light-col);
        filter: blur(100%);
        opacity: var(--before-opacity);
        transform: translateX(var(--before-x));
        z-index: -1;
        pointer-events: none;
      }
      `}</style>
    </nav>
  );
}
