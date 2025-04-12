'use client'

import Image from "next/image"

export default function MostPickedSection({ tours }) {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">Most Picked</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Kartu besar di kiri */}
        <div className="md:col-span-1">
          {tours[0] && (
            <div className="relative rounded-xl overflow-hidden shadow-lg h-full">
              <img
                src={tours[0].image}
                alt={tours[0].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 right-0 bg-[var(--main-col)] text-[var(--light-col)] px-8 py-2 rounded-bl-2xl font-semibold">
                Rp {tours[0].prices}
              </div>
            </div>
          )}
        </div>

        {/* Kartu kecil di kanan */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tours.slice(1, 6).map((tour) => (
            <div key={tour.id} className="relative rounded-xl overflow-hidden shadow-md">
              <img
                src={tour.image}
                alt={tour.name}
                className="w-full h-40 object-cover"
              />
              <div className="absolute top-0 right-0 bg-[var(--main-col)] text-[var(--light-col)] text-sm px-4 py-1 rounded-bl-2xl font-semibold">
                Rp {tour.prices}
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[var(--dark-col)] to-transparent p-3 text-[var(--light-col)]">
                <p className="font-bold">{tour.name}</p>
                <p className="text-sm">{tour.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>

    
  )
}
