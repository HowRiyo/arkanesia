import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-blue-900">About Arkanesia</h1>
          <p className="text-gray-500 text-lg mt-2">Kenali kisah di balik platform budaya modern ini.</p>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
          <div className="w-full md:w-1/2">
            <Image
              src="/assets/images/arkanesia-bg2.png"
              alt="ArkaNesia"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-5 text-[17px] text-gray-600 leading-7">
            <p>
              Berawal dari keresahan akan kurangnya platform budaya yang menarik,{" "}
              <strong className="text-blue-700">ArkaNesia</strong> hadir sebagai jembatan antara generasi muda dan kekayaan budaya Indonesia.
            </p>
            <p>
              Kami percaya bahwa budaya bukan sekadar masa lalu, tapi energi yang bisa menginspirasi masa depan. Dengan menggabungkan teknologi, desain modern, dan semangat eksplorasi, kami bantu kamu mengenal budaya Indonesia secara lebih dekat, fun, dan relevan.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="font-semibold text-blue-600">🎯 Visi</h4>
                <p>Membawa budaya Indonesia lebih dekat ke generasi muda lewat platform digital yang fun dan interaktif.</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600">🚀 Misi</h4>
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
          <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Apa yang bisa kamu temukan di ArkaNesia?</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 border rounded-xl hover:shadow-xl transition">
              <i className="fas fa-map-marked-alt text-blue-600 text-3xl mb-4"></i>
              <h4 className="font-semibold text-lg mb-2">Wisata Budaya Interaktif</h4>
              <p className="text-gray-500">Cari destinasi budaya terdekat berbasis lokasi & minat kamu.</p>
            </div>
            <div className="p-6 border rounded-xl hover:shadow-xl transition">
              <i className="fas fa-book-open text-blue-600 text-3xl mb-4"></i>
              <h4 className="font-semibold text-lg mb-2">Ensiklopedia Budaya</h4>
              <p className="text-gray-500">Baca fakta, sejarah, dan cerita unik dari berbagai daerah.</p>
            </div>
            <div className="p-6 border rounded-xl hover:shadow-xl transition">
              <i className="fas fa-calendar-alt text-blue-600 text-3xl mb-4"></i>
              <h4 className="font-semibold text-lg mb-2">Event Lokal</h4>
              <p className="text-gray-500">Jangan sampai ketinggalan acara budaya seru di sekitarmu!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
