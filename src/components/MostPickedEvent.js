import Link from "next/link";
import { useEffect, useState } from "react";

export default function MostPickedSection({ tours }) {
  const [randomTours, setRandomTours] = useState([]);

  useEffect(() => {
    const shuffled = [...tours].sort(() => 0.5 - Math.random()).slice(0, 7);
    setRandomTours(shuffled);
  }, [tours]);

  if (randomTours.length === 0) return null;

  return (
    <section className="my-10">
      <h2 className="text-3xl font-bold text-[var(--dark-col)] mb-6">Most Picked</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Kartu besar di kiri */}
        <Link href={`/tour/${randomTours[0].id}`} className="md:col-span-1">
          <div className="relative rounded-xl overflow-hidden shadow-lg h-full">
            <img
              src={randomTours[0].image}
              alt={randomTours[0].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 right-0 font-semibold bg-[var(--main-col)] text-[var(--light-col)] px-6 py-2 rounded-bl-2xl text-md">
              {randomTours[0].prices > 0
                ? `Rp ${randomTours[0].prices}`
                : "Free Entry"}
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[var(--dark-col)] to-transparent p-3 text-[var(--light-col)]">
                <p className="font-bold">{randomTours[0].name}</p>
                <p className="text-sm">{randomTours[0].location}</p>
              </div>
          </div>
        </Link>

        {/* Kartu kecil di kanan */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {randomTours.slice(1).map((tour) => (
            <Link
              key={tour.id}
              className="relative rounded-xl overflow-hidden shadow-md"
              href={`/tour/${tour.id}`}
            >
              <img
                src={tour.image}
                alt={tour.name}
                className="w-full h-40 object-cover"
              />
              <div className="absolute top-0 right-0 bg-[var(--main-col)] text-[var(--light-col)] px-4 py-1 rounded-bl-xl text-sm">
                {tour.prices > 0 ? `Rp ${tour.prices}` : "Free Entry"}
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[var(--dark-col)] to-transparent p-3 text-[var(--light-col)]">
                <p className="font-bold">{tour.name}</p>
                <p className="text-sm">{tour.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
