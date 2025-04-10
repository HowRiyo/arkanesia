import Link from "next/link";

export default function Nav() {
    return (
        <nav className="bg-white shadow-lg px-10 py-4 flex items-center justify-between sticky top-0 z-50">
            <h1 className="text-3xl font-bold tracking-tight">
                <span className="text-blue-600 hover:tracking-wider transition-all duration-300">Arka</span><span className="text-gray-800">nesia.</span>
            </h1>

            <div className="flex items-center space-x-8">
                <ul className="flex space-x-8 text-gray-600 font-medium">
                    <li>
                        <Link href="index.html" className="relative group text-blue-600">
                        Home
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="ensiklopedia.html" className="relative group hover:text-blue-600 transition">
                        Ensiklopedia
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="event.html" className="relative group hover:text-blue-600 transition">
                        Event
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="about-us.html" className="relative group hover:text-blue-600 transition">
                        About
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                        </Link>
                    </li>
                </ul>

                <Link href="search-page.html" className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300">
                    Cari Budaya
                </Link>
            </div>
        </nav>
    )
}