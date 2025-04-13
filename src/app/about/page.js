import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl py-20 bg-[var(--background-col)] text-[var(--dark-col)]">
      {/* About Section */}
      <section>
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-[var(--main-col)]">About Arkanesia</h1>
          <p className="text-[var(--gray-col)] text-lg mt-2">Kenali kisah di balik platform budaya modern ini.</p>
        </div>

        <div className="flex justify-between flex-col md:flex-row gap-20">
          <div className="relative w-full md:w-1/2 h-100">
            <Image
              src="/assets/images/arkanesia-bg2.png"
              alt="ArkaNesia"
              fill
              objectFit="cover"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

          <div className="h-100 w-[2px] bg-[var(--gray-col)] opacity-40"></div>

          <div className="w-full md:w-1/2 space-y-5 text-[17px] text-[var(--gray-col)] leading-7">
            <p>
              Berawal dari keresahan akan kurangnya platform budaya yang menarik,{" "}
              <strong className="text-[var(--main-col)]">ArkaNesia</strong> hadir sebagai jembatan antara generasi muda dan kekayaan budaya Indonesia.
            </p>
            <p>
              Kami percaya bahwa budaya bukan sekadar masa lalu, tapi energi yang bisa menginspirasi masa depan. Dengan menggabungkan teknologi, desain modern, dan semangat eksplorasi, kami bantu kamu mengenal budaya Indonesia secara lebih dekat, fun, dan relevan.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="font-semibold text-[var(--accent-col)]">🎯 Visi</h4>
                <p>Membawa budaya Indonesia lebih dekat ke generasi muda lewat platform digital yang fun dan interaktif.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--accent-col)]">🚀 Misi</h4>
                <ul className="list-disc ml-5">
                  <li>Membuat budaya jadi mudah diakses dan dipahami.</li>
                  <li>Memberikan informasi akurat & menarik.</li>
                  <li>Menghubungkan wisata budaya dengan teknologi.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-[var(--main-col)] mb-18 text-center">Apa yang bisa kamu temukan di ArkaNesia?</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-[var(--light-col)] p-6 border-[var(--border-col)] border rounded-2xl hover:shadow-[0_0_15px_var(--shadow-col)] transition">
              <i className="fas fa-map-marked-alt text-[var(--accent-col)] text-3xl mb-4"></i>
              <h4 className="font-semibold text-lg mb-2">Wisata Budaya Interaktif</h4>
              <p className="text-[var(--gray-col)]">Cari destinasi budaya terdekat berbasis lokasi & minat kamu.</p>
            </div>
            <div className="bg-[var(--light-col)] p-6 border-[var(--border-col)] border rounded-2xl hover:shadow-[0_0_15px_var(--shadow-col)] transition">
              <i className="fas fa-book-open text-[var(--accent-col)] text-3xl mb-4"></i>
              <h4 className="font-semibold text-lg mb-2">Ensiklopedia Budaya</h4>
              <p className="text-[var(--gray-col)]">Baca fakta, sejarah, dan cerita unik dari berbagai daerah.</p>
            </div>
            <div className="bg-[var(--light-col)] p-6 border-[var(--border-col)] border rounded-2xl hover:shadow-[0_0_15px_var(--shadow-col)] transition">
              <i className="fas fa-calendar-alt text-[var(--accent-col)] text-3xl mb-4"></i>
              <h4 className="font-semibold text-lg mb-2">Event Lokal</h4>
              <p className="text-[var(--gray-col)]">Jangan sampai ketinggalan acara budaya seru di sekitarmu!</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
