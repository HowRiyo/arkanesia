"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Ensiklopedia", href: "/ensiklopedia" },
    { name: "Event", href: "/event" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="bg-white shadow-lg px-10 py-4 flex items-center justify-between sticky top-0 z-50">
      <h1 className="text-3xl font-bold tracking-tight">
        <span className="text-blue-600 hover:tracking-wider transition-all duration-300">
          Arka
        </span>
        <span className="text-gray-800">nesia.</span>
      </h1>

      <div className="flex items-center space-x-8">
        <ul className="flex space-x-8 text-gray-600 font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative group transition-all duration-300 ${
                  pathname === link.href
                    ? "text-blue-600 "
                    : "hover:text-blue-600"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/search-culture"
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300"
        >
          Cari Budaya
        </Link>
      </div>
    </nav>
  );
}
