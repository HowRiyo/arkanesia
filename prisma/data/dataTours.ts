import { Prisma } from "@/app/generated/prisma";

const tours: Prisma.TourCreateInput[] = [
  // Bali
  {
    name: "Pantai Kuta",
    date: new Date("1936-01-01"),
    location: "Kuta, Badung",
    image:
      "https://labirutour.com/wp-content/uploads/2020/09/Keindahan-Pantai-Kuta-Bali-yang-sanggup-menarik-ribuan-wisatawan-setiap-tahunnya-1.jpg",
    description:
      "Pantai Kuta adalah salah satu destinasi wisata paling terkenal di Bali, dikenal dengan pasir putihnya yang lembut dan ombak yang cocok untuk berselancar. Pantai ini juga menawarkan pemandangan matahari terbenam yang memukau, menjadikannya tempat favorit bagi wisatawan lokal maupun mancanegara.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Flabirutour.com%2Fblog%2Freview-wisata-pantai-kuta-bali-4-spot-melihat-sunset&psig=AOvVaw3xA4cKito9y5zmDg2k0I5l&ust=1744558857634000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCMDnoarq0owDFQAAAAAdAAAAABAY",
    prices: 0.0,
    district: "Kuta",
    province: "Bali",
    latitude: -8.7177,
    longitude: 115.1682,
  },
  {
    name: "Pura Ulun Danu Beratan",
    date: new Date("1633-01-01"),
    location: "Bedugul, Tabanan",
    image:
      "https://awsimages.detik.net.id/community/media/visual/2022/06/22/pura-ulun-danu-di-tabanan-bali-5.jpeg?w=1200",
    description:
      "Pura Ulun Danu Beratan adalah pura air yang terletak di tepi Danau Beratan, Bedugul. Dikelilingi oleh pegunungan, pura ini menawarkan pemandangan yang menakjubkan dan sering menjadi ikon pariwisata Bali.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftravel.detik.com%2Fdomestic-destination%2Fd-6146124%2Fterpukau-dengan-keindahan-pura-ulun-danu&psig=AOvVaw2kEmgvaJRWxzxtF8tWzvxY&ust=1744558913455000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCPiaksjq0owDFQAAAAAdAAAAABAE",
    prices: 50000.0,
    district: "Baturiti",
    province: "Bali",
    latitude: -8.275,
    longitude: 115.1675,
  },
  {
    name: "Tegallalang Rice Terrace",
    date: new Date("1800-01-01"),
    location: "Tegallalang, Gianyar",
    image:
      "https://media.cntraveler.com/photos/5e35bdf00e2bfd0008a03691/16:9/w_2560,c_limit/Tegallalang-GettyImages-515480864.jpg",
    description:
      "Tegallalang Rice Terrace terkenal dengan pemandangan sawah terasering yang indah dan hijau. Terletak di utara Ubud, tempat ini menawarkan pengalaman budaya dan alam yang autentik bagi para pengunjung.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cntraveler.com%2Factivities%2Fbali%2Fbali%2Ftegalang-rice-terrace&psig=AOvVaw33TBvgWFsM9QIjx1bG1Qr6&ust=1744558954006000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCKC-tdzq0owDFQAAAAAdAAAAABAY",
    prices: 25000.0,
    district: "Tegallalang",
    province: "Bali",
    latitude: -8.4366,
    longitude: 115.279,
  },
  {
    name: "Gunung Batur",
    date: new Date("1804-01-01"),
    location: "Kintamani, Bangli",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/47/Mount_Batur.JPG",
    description:
      "Gunung Batur adalah gunung berapi aktif yang populer untuk kegiatan pendakian, terutama untuk menyaksikan matahari terbit. Terletak di Kintamani, gunung ini menawarkan pemandangan alam yang spektakuler.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftravel.okezone.com%2Fread%2F2023%2F04%2F12%2F406%2F2797503%2Fwisata-gunung-batur-bali-segera-dilengkapi-hiking-centre-pendakian-makin-nyaman%3Fpage%3Dall&psig=AOvVaw2lu7o-2fcnZSVbfzz7ppKo&ust=1744559005368000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCNDBvfPq0owDFQAAAAAdAAAAABAE",
    prices: 30000.0,
    district: "Kintamani",
    province: "Bali",
    latitude: -8.239,
    longitude: 115.375,
  },
  {
    name: "Pantai Pandawa",
    date: new Date("2011-01-01"),
    location: "Kutuh, Badung",
    image:
      "https://cozzy.id/uploads/0000/630/2024/09/04/cozzyid-hotel-murah-hotel-terdekat-penginapan-murah-penginapan-terdekat-booking-hotel-pantai-pandawa-bali-surga-tersembunyi-di-pulau-dewata-sumber-gambar-tenuedeattire.jpg",
    description:
      "Pantai Pandawa dikenal dengan pasir putihnya yang bersih dan tebing kapur yang mengesankan. Terletak di daerah Kutuh, pantai ini menawarkan suasana yang lebih tenang dan cocok untuk keluarga.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcozzy.id%2Fnews%2Fpantai-pandawa-bali-surga-tersembunyi-di-pulau-dewata&psig=AOvVaw2pqNZ211Tt8OYEGI157yez&ust=1744559078704000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCKih9JTr0owDFQAAAAAdAAAAABAJ",
    prices: 15000.0,
    district: "Kutuh",
    province: "Bali",
    latitude: -8.8486,
    longitude: 115.1889,
  },

  // Yogyakarta
  {
    name: "Keraton Yogyakarta",
    date: new Date("1755-10-07"),
    location: "Kraton, Yogyakarta",
    image:
      "https://geoparkjogja.jogjaprov.go.id/uploads/site/1683517798_e7978510b2b1a5671686.jpg",
    description:
      "Keraton Yogyakarta adalah istana resmi Kesultanan Ngayogyakarta Hadiningrat yang juga berfungsi sebagai pusat budaya Jawa dan museum yang menyimpan berbagai koleksi bersejarah.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgeoparkjogja.jogjaprov.go.id%2Fsite%2Fkawasan-cagar-budaya-kraton&psig=AOvVaw39Ad4UTRCzZzVzkrye3txU&ust=1744561357954000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjZz9Lz0owDFQAAAAAdAAAAABAg",
    prices: 15000.0,
    district: "Kraton",
    province: "Yogyakarta",
    latitude: -7.8056,
    longitude: 110.3647,
  },
  {
    name: "Candi Prambanan",
    date: new Date("850-01-01"),
    location: "Prambanan, Sleman",
    image: "https://www.worldhistory.org/uploads/images/9249.jpg",
    description:
      "Candi Prambanan adalah kompleks candi Hindu terbesar di Indonesia yang dibangun pada abad ke-9, terkenal dengan arsitektur yang megah dan relief yang menceritakan kisah Ramayana.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.worldhistory.org%2Ftrans%2Fid%2F1-17393%2Fcandi-prambanan%2F&psig=AOvVaw3briNILJ6Tu9eeRxp70Nok&ust=1744561404066000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNC3uujz0owDFQAAAAAdAAAAABAE",
    prices: 50000.0,
    district: "Prambanan",
    province: "Yogyakarta",
    latitude: -7.752,
    longitude: 110.4918,
  },
  {
    name: "Taman Sari",
    date: new Date("1765-01-01"),
    location: "Kraton, Yogyakarta",
    image:
      "https://asset.kompas.com/crops/Y5S_hd-Jn2cuaKYtOfN4ASXnM2Y=/0x0:1000x667/1200x800/data/photo/2022/03/13/622e12c85befb.jpg",
    description:
      "Taman Sari adalah bekas taman kerajaan Keraton Yogyakarta yang digunakan untuk rekreasi dan meditasi, terkenal dengan arsitektur unik dan kolam pemandian.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftravel.kompas.com%2Fread%2F2022%2F07%2F26%2F190300727%2Fsejarah-taman-sari-jogja-taman-air-tempat-rekreasi-para-sultan%3Fpage%3Dall&psig=AOvVaw11T_6JLZlSoLObP1QHEEf9&ust=1744561425652000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCOioyPLz0owDFQAAAAAdAAAAABAY",
    prices: 10000.0,
    district: "Kraton",
    province: "Yogyakarta",
    latitude: -7.8106,
    longitude: 110.3608,
  },
  {
    name: "Pantai Parangtritis",
    date: new Date("1900-01-01"),
    location: "Kretek, Bantul",
    image:
      "https://assets.telkomsel.com/public/2025-01/pantai-parangtritis.png?VersionId=VCnPRvSC4AZhCbXmbOaOCRw4_ooIa.NF",
    description:
      "Pantai Parangtritis adalah pantai yang terkenal dengan ombak besar dan legenda Nyi Roro Kidul, menawarkan pemandangan matahari terbenam yang memukau.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.telkomsel.com%2Fjelajah%2Fjelajah-lifestyle%2Fmau-ke-pantai-parangtritis-simak-dulu-artikel-ini&psig=AOvVaw2_5n5z-e-wEB1847yBfaPE&ust=1744561468601000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCJjLoof00owDFQAAAAAdAAAAABAh",
    prices: 10000.0,
    district: "Kretek",
    province: "Yogyakarta",
    latitude: -8.0267,
    longitude: 110.3285,
  },
  {
    name: "Gumuk Pasir Parangkusumo",
    date: new Date("1920-01-01"),
    location: "Jl. Pantai Parangkusumo, Kretek, Bantul",
    image:
      "https://cdn.wisata.app/diary/7a71bd6b-6385-4fbb-88e4-3bf7d2a21e70.jpg",
    description:
      "Gumuk Pasir Parangkusumo adalah fenomena alam unik berupa bukit pasir di tepi pantai. Ini adalah satu-satunya gumuk pasir aktif di Asia Tenggara. Wisatawan bisa menikmati sandboarding di sini layaknya di gurun Sahara. Lokasinya juga sering digunakan untuk prewedding dan fotografi artistik.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwisata.app%2Fdiary%2Fgumuk-pasir-parangkusumo-sandboarding-jeep-atv-jogja&psig=AOvVaw28uKqh3kTW_9xFJ_cDHlCl&ust=1744561508766000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCNisgpz00owDFQAAAAAdAAAAABAE",
    prices: 10000,
    district: "Bantul",
    province: "Yogyakarta",
    latitude: -8.0205,
    longitude: 110.3245,
  },

  // Aceh
  {
    name: "Masjid Raya Baiturrahman",
    date: new Date("1879-01-01"),
    location: "Banda Aceh",
    image:
      "https://aceh.bpk.go.id/wp-content/uploads/2024/10/Masjid-raya-baiturrahman-banda-aceh-destinasi-wisata-religi-yang-patut-anda-kunjungi.jpg",
    description:
      "Masjid Raya Baiturrahman adalah masjid ikonik di Banda Aceh yang dibangun pada masa Kesultanan Aceh dan direnovasi oleh pemerintah Hindia Belanda. Masjid ini menjadi simbol kekuatan dan ketahanan masyarakat Aceh, terutama setelah tetap berdiri kokoh saat tsunami 2004.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Faceh.bpk.go.id%2Fberanda%2Fmasjid-raya-baiturrahman-banda-aceh-destinasi-wisata-religi-yang-patut-anda-kunjungi%2F&psig=AOvVaw1mFJ8tTAChpHgapS7OJLjJ&ust=1744564406248000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLic7v_-0owDFQAAAAAdAAAAABAE",
    prices: 0,
    district: "Banda Aceh",
    province: "Aceh",
    latitude: 5.554,
    longitude: 95.3171,
  },
  {
    name: "Museum Tsunami Aceh",
    date: new Date("2009-01-01"),
    location: "Banda Aceh",
    image:
      "https://asset.kompas.com/crops/LtbPhdGzxvEE4dq9TntoAqGXI5k=/40x0:657x411/1200x800/data/photo/2024/01/24/65b110e937363.jpg",
    description:
      "Museum Tsunami Aceh didirikan untuk mengenang peristiwa tsunami 2004 dan sebagai pusat edukasi bencana. Desain arsitekturnya yang unik dan simbolis menjadikan museum ini sebagai salah satu destinasi wisata edukatif di Aceh.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kompas.com%2Fstori%2Fread%2F2024%2F01%2F24%2F210000779%2Fsejarah-museum-tsunami-aceh-dirancang-oleh-ridwan-kamil&psig=AOvVaw2pyKrhw35cKWUNPQ-DXQWg&ust=1744564460557000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCIDhq5n_0owDFQAAAAAdAAAAABAE",
    prices: 0,
    district: "Banda Aceh",
    province: "Aceh",
    latitude: 5.548,
    longitude: 95.3238,
  },
  {
    name: "Pulau Weh",
    date: new Date("1900-01-01"),
    location: "Sabang, Aceh",
    image: "https://beritakini.co/files/images/20230516-sosoosoal.jpg",
    description:
      "Pulau Weh adalah pulau yang terletak di ujung barat Indonesia, tepatnya di Sabang, Aceh. Pulau ini terkenal dengan keindahan alam bawah lautnya, yang menjadi surga bagi penyelam dan pecinta alam laut. Dengan pantai yang bersih, air yang jernih, dan terumbu karang yang memukau, Pulau Weh adalah destinasi wisata yang sangat populer. Selain itu, pulau ini juga memiliki tempat wisata sejarah seperti Benteng Jepang dan Tugu Kilometer Nol Indonesia.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fberitakini.co%2Fnews%2Fpulau-weh-permata-bagi-penggemar-wisata-alam-dan-penyelam%2Findex.html&psig=AOvVaw1AybrAK4BzH1rAVTS64Ily&ust=1744564549573000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCMCfqMT_0owDFQAAAAAdAAAAABAI",
    prices: 50000,
    district: "Sabang",
    province: "Aceh",
    latitude: 5.8401,
    longitude: 95.319,
  },
  {
    name: "Taman Nasional Gunung Leuser",
    date: new Date("1980-01-01"),
    location: "Aceh Tenggara, Aceh",
    image:
      "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2022/08/15/1669557123.jpg",
    description:
      "Taman Nasional Gunung Leuser adalah kawasan konservasi alam yang terletak di provinsi Aceh dan Sumatera Utara. Taman ini terkenal dengan kekayaan keanekaragaman hayati, termasuk satwa langka seperti orangutan Sumatera, harimau Sumatera, dan gajah Sumatera. Gunung Leuser juga menjadi tujuan utama bagi pecinta alam yang ingin trekking, mempelajari flora dan fauna, serta merasakan keindahan alam yang masih alami.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kabaralam.com%2Fwisata-alam%2Fpr-5934180314%2Fmengenal-taman-nasional-gunung-leuser-surga-tersembunyi-di-utara-pulau-sumatra%3Fpage%3D3&psig=AOvVaw2rRInRMiDIHEzZ717WZp2D&ust=1744564587505000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCKi_59b_0owDFQAAAAAdAAAAABAY",
    prices: 20000,
    district: "Aceh Tenggara",
    province: "Aceh",
    latitude: 3.5505,
    longitude: 97.438,
  },
  {
    name: "Danau Laut Tawar",
    date: new Date("1900-01-01"),
    location: "Aceh Tengah, Aceh",
    image: "https://www.acehportal.com/files/images/wp-dji_0171.jpg",
    description:
      "Danau Laut Tawar adalah danau alami yang terletak di dataran tinggi Aceh, tepatnya di Aceh Tengah. Danau ini menawarkan pemandangan alam yang indah, dengan latar belakang pegunungan yang hijau dan udara yang sejuk. Di sekitar danau terdapat berbagai aktivitas seperti memancing, berperahu, dan menikmati keindahan alam sekitar. Danau Laut Tawar juga memiliki nilai historis karena menjadi tempat pemukiman suku Gayo sejak lama.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.acehportal.com%2Fnews%2Fpanorama-danau-laut-tawar-yang-eksotik%2Findex.html&psig=AOvVaw1vpQNHzJgJE6fgcg4hEBOa&ust=1744564621421000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDorOb_0owDFQAAAAAdAAAAABAJ",
    prices: 10000,
    district: "Aceh Tengah",
    province: "Aceh",
    latitude: 4.5961,
    longitude: 97.4314,
  },

  // Nusa Tenggara Timur
  {
    name: "Pantai Pink Komodo",
    date: new Date("1990-01-01"),
    location: "Labuan Bajo, NTT",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1e/Pink_Beach%2C_Padar_Island%2C_Komodo_National_Park.jpg",
    description:
      "Salah satu keajaiban alam yang memukau di Indonesia, terletak di kawasan Taman Nasional Komodo, Labuan Bajo, Nusa Tenggara Timur. Pantai ini terkenal karena pasirnya yang berwarna merah muda alami, fenomena langka yang hanya dapat ditemukan di beberapa tempat di dunia. Warna merah muda ini berasal dari fragmen karang merah (Foraminifera) yang bercampur dengan pasir putih, menciptakan gradasi warna yang memesona ketika terkena sinar matahari. Pantai ini tidak hanya menawarkan pemandangan unik tetapi juga air laut yang jernih kebiruan, cocok untuk snorkeling dan menyelam. Selain keindahan alamnya, Pantai Pink Komodo dikelilingi oleh perbukitan hijau yang kontras dengan warna pasir dan laut, menciptakan pemandangan fotogenik. Kawasan ini juga menjadi habitat bagi beragam biota laut, termasuk ikan warna-warni, terumbu karang yang sehat, dan terkadang penyu yang berenang di sekitar perairan dangkal. Pengunjung sering menghabiskan waktu untuk berenang, berjemur, atau sekadar menikmati keheningan pantai yang masih alami. Sebagai bagian dari Taman Nasional Komodo, pantai ini juga dilindungi sebagai situs warisan dunia UNESCO. Akses ke Pantai Pink biasanya dilakukan dengan perahu dari Labuan Bajo, dan banyak operator tur menyertakannya dalam paket wisata bersama Pulau Komodo atau Rinca. Meskipun tidak dikenakan biaya masuk khusus, pengunjung perlu membayar tiket masuk taman nasional. Pantai ini paling baik dikunjungi pada musim kemarau (April–November) ketika ombak tenang dan cuaca cerah. Dengan keunikan dan keindahannya, Pantai Pink Komodo tidak hanya menjadi destinasi wajib di NTT tetapi juga salah satu pantai terindah di Indonesia yang memadukan keeksotisan alam dengan nilai ekologis yang tinggi.",
    link: "https://www.nativeindonesia.com/pink-beach/",
    prices: 0,
    district: "Labuan Bajo",
    province: "Nusa Tenggara Timur",
    latitude: -8.6406,
    longitude: 119.5403,
  },
  {
    name: "Pulau Komodo",
    date: new Date("1980-01-01"),
    location: "Manggarai Barat",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5a/Komodo_Island_2009.jpg",
    description:
      'Pulau Komodo adalah salah satu destinasi wisata paling ikonik di Indonesia, terletak di dalam Taman Nasional Komodo, Nusa Tenggara Timur. Pulau ini terkenal sebagai habitat asli komodo (Varanus komodoensis), kadal terbesar di dunia yang sering disebut "naga purba" karena penampilannya yang unik dan sejarah evolusinya yang panjang. Komodo merupakan spesies endemik yang hanya ditemukan di Pulau Komodo, Pulau Rinca, dan beberapa pulau kecil di sekitarnya. Selain menjadi rumah bagi hewan langka ini, Pulau Komodo juga menawarkan pemandangan alam yang spektakuler, mulai dari savana kering, perbukitan berbatu, hingga pantai berpasir putih yang masih perawan. Salah satu spot terbaik untuk melihat komodo adalah di Loh Liang, area pintu masuk utama di mana pengunjung bisa menjelajahi pulau dengan dipandu ranger berpengalaman. Trekking di sini memberikan pengalaman unik menyusuri habitat alami komodo sambil menikmati panorama alam yang memukau. Pulau Komodo juga dikelilingi oleh perairan biru jernih yang menjadi surga bagi penyelam dan pecinta snorkeling. Spot seperti Batu Bolong dan Manta Point terkenal dengan terumbu karang yang sehat serta kehidupan laut yang beragam, termasuk ikan tropis, penyu, dan bahkan hiu karang. Bagi yang ingin menikmati keindahan pantai, Pantai Merah (atau Pink Beach) yang terletak di dekatnya menawarkan pasir kemerahan dan air laut yang tenang. Sebagai bagian dari Situs Warisan Dunia UNESCO dan salah satu 7 Keajaiban Alam Dunia (New7Wonders of Nature), Pulau Komodo memiliki nilai konservasi yang sangat tinggi. Pengunjung diharapkan mematuhi peraturan setempat, seperti tidak memberi makan komodo dan menjaga kebersihan lingkungan.',
    link: "https://id.wikipedia.org/wiki/Pulau_Komodo",
    prices: 150000.0,
    district: "Manggarai Barat",
    province: "Nusa Tenggara Timur",
    latitude: -8.55,
    longitude: 119.4833,
  },
  {
    name: "Kampung Adat Wae Rebo",
    date: new Date("2000-01-01"),
    location: "Manggarai",
    image:
      "https://cdn2.gnfi.net/gnfi/uploads/articles/wae-rebo-6596813f62d524e44bd8fbd636be19e7.jpg",
    description:
      'Sebuah permukiman tradisional yang terpencil dan memesona, terletak di kawasan pegunungan Manggarai, Flores, Nusa Tenggara Timur. Desa adat ini terkenal karena rumah-rumah berbentuk kerucut yang disebut Mbaru Niang, sebuah arsitektur khas suku Manggarai yang telah bertahan selama ratusan tahun. Wae Rebo bukan sekadar destinasi wisata, melainkan juga warisan budaya hidup yang menggambarkan kearifan lokal dan harmoni antara manusia dengan alam. Dikelilingi oleh hutan hijau yang lebat dan kabut pegunungan, Kampung Wae Rebo terasa seperti dunia yang terisolasi dari zaman modern. Untuk mencapainya, pengunjung harus menempuh perjalanan trekking sekitar 3–4 jam melintasi jalur berbukit dan perkebunan kopi, menambah kesan petualangan sekaligus penghargaan terhadap keberlanjutan budaya setempat. Desa ini hanya terdiri dari 7 rumah adat yang dihuni oleh komunitas kecil, tetapi setiap bangunan memiliki makna filosofis mendalam—dengan struktur kayu, atap ijuk, dan tata ruang yang mencerminkan kosmologi masyarakat Manggarai. Keunikan Wae Rebo telah diakui dunia, bahkan mendapatkan Penghargaan UNESCO Asia-Pacific Award for Cultural Heritage Conservation pada tahun 2012. Pengunjung yang datang tidak hanya menyaksikan keindahan arsitektur, tetapi juga belajar tentang tradisi seperti ritual adat, tenun ikat khas Flores, dan cara masyarakat menjaga hutan sebagai bagian dari kepercayaan leluhur. Homestay sederhana tersedia bagi wisatawan yang ingin menginap, memberikan pengalaman autentik hidup bersama warga sambil menikmati hidangan lokal seperti jagung bose dan kopi Flores. Dengan suasana yang sunyi, udara pegunungan yang sejuk, dan keramahan penduduknya, Wae Rebo menawarkan pelarian dari hiruk-pikuk kota sekaligus refleksi tentang pentingnya melestarikan warisan budaya. Destinasi ini cocok bagi pecinta alam, antropologi, atau siapa pun yang ingin menemukan "Flores yang sesungguhnya"',
    link: "https://id.wikipedia.org/wiki/Wae_Rebo",
    prices: 50000.0,
    district: "Manggarai",
    province: "Nusa Tenggara Timur",
    latitude: -8.7715,
    longitude: 120.4448,
  },
  {
    name: "Danau Kelimutu",
    date: new Date("1926-01-01"),
    location: "Ende",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Flores_Moni_Kelimutu.jpg",
    description:
      "Danau tiga warna di puncak Gunung Kelimutu yang airnya bisa berubah warna secara misterius. Termasuk salah satu keajaiban alam Indonesia. Danau Kelimutu adalah salah satu keajaiban alam yang memukau di Flores, Nusa Tenggara Timur, terkenal dengan tiga danau kawahnya yang memiliki warna air yang berbeda dan bisa berubah secara misterius. Terletak di puncak Gunung Kelimutu, danau ini menjadi daya tarik utama bagi wisatawan dan peneliti karena fenomena alamnya yang unik. Ketiga danau tersebut, bernama Tiwu Ata Mbupu (danau orang tua), Tiwu Nuwa Muri Koo Fai (danau pemuda dan gadis), dan Tiwu Ata Polo (danau yang tenang), masing-masing memiliki warna yang bervariasi, mulai dari biru, hijau, hingga merah kecokelatan. Perubahan warna ini disebabkan oleh aktivitas vulkanik, kandungan mineral, serta reaksi kimia di dasar danau. Selain keunikannya, Danau Kelimutu juga dikelilingi oleh pemandangan pegunungan yang hijau dan udara sejuk, menciptakan suasana yang mistis dan menenangkan. Bagi masyarakat setempat, danau ini dianggap sakral dan memiliki nilai spiritual yang tinggi. Pengunjung biasanya datang saat fajar untuk menyaksikan matahari terbit yang memantulkan cahaya indah di permukaan danau. Dengan keindahan alamnya yang luar biasa dan misteri warna airnya, Danau Kelimutu tidak hanya menjadi destinasi wisata alam tetapi juga salah satu situs geologi paling menarik di Indonesia.",
    link: "https://id.wikipedia.org/wiki/Danau_Kelimutu",
    prices: 50000.0,
    district: "Ende",
    province: "Nusa Tenggara Timur",
    latitude: -8.7701,
    longitude: 121.8225,
  },
  {
    name: "Pantai Nembrala",
    date: new Date("1995-01-01"),
    location: "Rote Ndao",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/73/Nemberala%2C_West_Rote%2C_Rote_Ndao_Regency%2C_East_Nusa_Tenggara%2C_Indonesia_-_panoramio.jpg",
    description:
      "Pantai eksotis di Pulau Rote yang terkenal di kalangan peselancar mancanegara karena ombaknya yang menantang. Pantai Nembrala adalah salah satu destinasi wisata pantai paling eksotis di Pulau Rote, Nusa Tenggara Timur. Terkenal dengan pasir putihnya yang halus dan air laut biru kehijauan yang jernih, pantai ini menjadi surga bagi para peselancar dunia karena ombaknya yang konsisten dan menantang. Ombak Nembrala bahkan disebut-sebut sebagai salah satu yang terbaik di Indonesia, menarik surfer profesional maupun pemula yang ingin menguji kemampuan mereka. Selain berselancar, pengunjung juga bisa menikmati keindahan alam sekitarnya, seperti tebing karang yang mengelilingi pantai dan hamparan pohon lontar yang menambah kesan tropis. Selain keindahan alamnya, Pantai Nembrala juga menawarkan pengalaman budaya yang unik. Masyarakat setempat masih mempertahankan tradisi nelayan dan kerajinan tenun khas Rote. Pengunjung bisa menyaksikan langsung kehidupan sehari-hari warga atau membeli suvenir berupa kain tenun bermotif tradisional. Saat matahari terbenam, pemandangan di Pantai Nembrala menjadi semakin memukau dengan langit berwarna jingga keemasan yang memantul di permukaan air. Akses menuju Pantai Nembrala relatif mudah, dengan perjalanan darat dari Kota Ba’a, ibu kota Kabupaten Rote Ndao. Meskipun masih tergolong tenang dan belum terlalu komersial, pantai ini sudah memiliki beberapa penginapan dan warung makan sederhana yang menyajikan hidangan laut segar. Dengan ombak yang memikat, alam yang masih asri, dan budaya lokal yang autentik, Pantai Nembrala layak masuk dalam daftar destinasi wajib dikunjungi bagi pecinta pantai dan petualangan.",
    link: "https://www.tripadvisor.com/Attraction_Review-g2301806-d6781841-Reviews-Nemberala_Beach-Rote_Island_East_Nusa_Tenggara.html",
    prices: 10000.0,
    district: "Rote Ndao",
    province: "Nusa Tenggara Timur",
    latitude: -10.8794,
    longitude: 122.8111,
  },

  // Nusa Tenggara Barat
  {
    name: "Pantai Senggigi",
    date: new Date("1980-01-01"),
    location: "Lombok Barat",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/Senggigi_Beach_Boats.JPG",
    description:
      "Pantai dengan pasir putih dan laut biru yang tenang, cocok untuk berenang, snorkeling, dan menikmati matahari terbenam. Salah satu destinasi wisata pantai paling populer di Lombok, Nusa Tenggara Barat. Terletak di pesisir barat pulau, pantai ini menawarkan pemandangan menakjubkan dengan pasir putih yang lembut, air laut biru jernih, dan garis pantai yang memanjang. Ombaknya yang tenang membuatnya ideal untuk berenang, snorkeling, atau sekadar bersantai di tepi laut. Saat matahari terbenam, langit di atas Pantai Senggigi berubah menjadi kanvas warna jingga, merah, dan ungu, menciptakan pemandangan romantis yang tak terlupakan. Selain keindahan alamnya, kawasan Pantai Senggigi juga dilengkapi dengan berbagai fasilitas wisata, seperti resort, restoran, dan kafe yang menghadap langsung ke laut. Pengunjung dapat menikmati hidangan laut segar sambil menikmati angin pantai yang sepoi-sepoi. Aktivitas lain yang bisa dilakukan di sekitar pantai termasuk menyewa perahu untuk menjelajahi pulau-pulau kecil di sekitarnya atau mencoba diving untuk mengeksplorasi keindahan bawah laut Lombok. Meskipun lebih berkembang secara pariwisata dibandingkan pantai-pantai lain di Lombok, Pantai Senggigi tetap mempertahankan pesona alaminya. Lokasinya yang hanya sekitar satu jam dari Bandara Internasional Lombok membuatnya mudah diakses, sekaligus menjadi gerbang menuju destinasi lain seperti Gili Trawangan atau Gunung Rinjani. Dengan kombinasi keindahan alam, kenyamanan, dan kemudahan akses, Pantai Senggigi pantas menjadi salah satu destinasi utama saat berkunjung ke Lombok.",
    link: "https://www.nativeindonesia.com/pantai-senggigi/",
    prices: 0,
    district: "Lombok Barat",
    province: "Nusa Tenggara Barat",
    latitude: -8.5003,
    longitude: 116.0475,
  },
  {
    name: "Gunung Rinjani",
    date: new Date("1917-01-01"),
    location: "Lombok Timur",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e9/Savanna_Mt._Rinjani_5.JPG",
    description:
      "Gunung tertinggi kedua di Indonesia dengan danau kawah Segara Anak yang memukau dan jalur pendakian yang menantang. gunung berapi aktif tertinggi kedua di Indonesia, menjulang setinggi 3.726 meter di atas permukaan laut (mdpl) dan menjadi ikon wisata alam di Lombok, Nusa Tenggara Barat. Gunung ini terkenal dengan keindahan Danau Segara Anak, sebuah danau kawah berwarna biru kehijauan yang terbentuk di kaldera, dikelilingi oleh tebing-tebing curam dan pemandangan vulkanik yang dramatis. Rinjani termasuk dalam Taman Nasional Gunung Rinjani dan dianggap suci oleh masyarakat Sasak dan Bali, yang sering melakukan ritual keagamaan di sekitar danau. Pendakian Gunung Rinjani menawarkan pengalaman trekking yang menantang namun memuaskan, dengan jalur yang melewati hutan tropis, padang savana, dan medan berbatu. Titik puncak (Puncak Rinjani) memberikan pemandangan spektakuler saat matahari terbit, membentang dari Lombok hingga Bali dan Gunung Agung di kejauhan. Banyak pendaki bermalam di Plawangan Sembalun atau Plawangan Senaru untuk menikmati panorama bintang dan udara pegunungan yang segar. Selain pendakian, wisatawan juga bisa menikmati pemandian air panas alami (Aik Kalak) di sekitar danau, yang dipercaya memiliki khasiat penyembuhan. Dengan keindahan alamnya yang memukau dan nilai spiritual yang kental, Gunung Rinjani tidak hanya menjadi destinasi petualangan tetapi juga tempat untuk merasakan kedamaian dan kekuatan alam. Pendakian biasanya membutuhkan 2–4 hari, tergantung rute yang dipilih, dan disarankan untuk menggunakan pemandu lokal demi keamanan. Rinjani telah dinobatkan sebagai salah satu gunung dengan pemandangan terindah di Asia, menarik pendaki dari seluruh dunia.",
    link: "https://id.wikipedia.org/wiki/Gunung_Rinjani",
    prices: 150000.0,
    district: "Lombok Timur",
    province: "Nusa Tenggara Barat",
    latitude: -8.4112,
    longitude: 116.4574,
  },
  {
    name: "Desa Sade",
    date: new Date("1970-01-01"),
    location: "Lombok Tengah",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/43/Desa_Sade%2C_Lombok.jpg",
    description:
      "Kampung adat suku Sasak yang mempertahankan arsitektur tradisional dan budaya lokal secara otentik. Sebuah kampung adat tradisional yang terletak di Lombok Tengah, Nusa Tenggara Barat, dan menjadi salah satu destinasi budaya paling otentik di Pulau Lombok. Desa ini dihuni oleh suku Sasak, masyarakat asli Lombok, yang masih mempertahankan gaya hidup, adat istiadat, serta arsitektur rumah tradisional mereka. Rumah-rumah di Desa Sade dibangun dengan bahan alami seperti bambu, kayu, dan alang-alang, dengan lantai dari tanah liat yang dicampur kotoran kerbau untuk kekuatan dan kehalusan. Atapnya yang berbentuk seperti tanduk kerbau menjadi ciri khas arsitektur Sasak. Selain melihat rumah adat, pengunjung dapat menyaksikan langsung aktivitas sehari-hari masyarakat Sade, seperti menenun kain tradisional Lombok yang disebut kain songket. Proses pembuatan kain ini dilakukan secara manual menggunakan alat tenun bukan mesin, menunjukkan keterampilan turun-temurun yang masih lestari. Desa Sade juga sering menggelar pertunjukan budaya, seperti tarian tradisional Sasak dan musik gendang beleq, yang menambah daya tarik wisatawan. Meskipun telah menjadi destinasi wisata, Desa Sade tetap menjaga nilai-nilai tradisionalnya tanpa terlalu terpengaruh modernisasi. Pengunjung diajak untuk menghormati adat setempat, seperti tidak memasuki rumah penduduk tanpa izin dan berpakaian sopan. Dengan suasana yang damai dan budaya yang kaya, Desa Sade memberikan pengalaman autentik tentang kehidupan masyarakat Sasak yang harmonis dengan alam dan warisan leluhur.",
    link: "https://id.wikipedia.org/wiki/Desa_Sade",
    prices: 10000.0,
    district: "Lombok Tengah",
    province: "Nusa Tenggara Barat",
    latitude: -8.8466,
    longitude: 116.2767,
  },
  {
    name: "Gili Trawangan",
    date: new Date("1990-01-01"),
    location: "Lombok Utara",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/01/Boats_at_Eastern_Gili_Trawangan_Beach.jpg",
    description:
      "Pulau kecil dengan pantai menawan, spot menyelam dan snorkeling kelas dunia, serta suasana bebas kendaraan bermotor. Ini adalah salah satu dari tiga pulau kecil yang membentuk gugusan Gili di Lombok Utara, Nusa Tenggara Barat. Dikenal sebagai destinasi wisata yang eksotis, pulau ini menawarkan pantai berpasir putih, air laut jernih kebiruan, dan suasana santai tanpa polusi suara kendaraan bermotor karena seluruh transportasi di sini mengandalkan sepeda atau cidomo (kereta kuda). Gili Trawangan merupakan yang terbesar di antara Gili Meno dan Gili Air, sekaligus paling populer di kalangan backpacker dan wisatawan mancanegara karena kehidupan malamnya yang semarak dengan bar dan restoran tepi pantai. Selain keindahan alamnya, Gili Trawangan juga menjadi surga bagi penyelam dan snorkeler. Perairan di sekitarnya dipenuhi terumbu karang sehat serta beragam biota laut, termasuk penyu hijau, ikan hias, dan bahkan hiu karang yang jinak. Spot menyelam seperti Shark Point dan Turtle Sanctuary kerap menjadi favorit pengunjung. Bagi yang ingin menikmati pemandangan tanpa basah, kapal kaca (glass-bottom boat) bisa menjadi pilihan untuk melihat keindahan bawah laut. Meskipun terkenal dengan atmosfer ramai, Gili Trawangan tetap mempertahankan pesona alamnya. Sunset di barat pulau menjadi momen magis, sementara sisi timur menawarkan ketenangan dengan penginapan bernuansa eco-friendly. Pulau ini juga bebas dari anjing dan kucing sebagai upaya menjaga ekosistem, digantikan oleh kuda yang menjadi transportasi utama. Dengan jarak tempuh 20–30 menit dari Bangsal (Pelabuhan Lombok) atau 2 jam dari Bali via speedboat, Gili Trawangan cocok untuk petualangan singkat maupun liburan panjang yang memadukan relaksasi dan petualangan bahari.",
    link: "https://id.wikipedia.org/wiki/Gili_Trawangan",
    prices: 0,
    district: "Lombok Utara",
    province: "Nusa Tenggara Barat",
    latitude: -8.3515,
    longitude: 116.0422,
  },
  {
    name: "Pantai Tanjung Aan",
    date: new Date("1985-01-01"),
    location: "Lombok Tengah",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e4/BIRUNYA_TANJUNG_AAN.jpg",
    description:
      'Pantai dengan pasir putih "Pantai Tanjung Aan" adalah salah satu destinasi wisata unggulan di Lombok Tengah, Nusa Tenggara Barat, yang terkenal dengan pasir putihnya yang lembut dan berbentuk seperti butiran merica. Pantai ini menawarkan pemandangan laut biru jernih yang memukau, dikelilingi perbukitan hijau yang menciptakan kontras warna alami. Salah satu daya tarik utamanya adalah ombaknya yang tenang, cocok untuk berenang, berjemur, atau sekadar bersantai di tepi pantai. Selain keindahan alamnya, Pantai Tanjung Aan juga menjadi lokasi utama perayaan "Bau Nyale", festival tahunan masyarakat Sasak untuk menangkap cacing laut (nyale) yang diyakini membawa keberuntungan. Pengunjung dapat menikmati suasana pantai yang masih asri dengan fasilitas sederhana seperti warung makan yang menyajikan hidangan laut segar. Aksesnya mudah, hanya berjarak sekitar 30 menit dari pusat Kota Kuta Lombok, sehingga cocok untuk wisatawan yang ingin menikmati liburan tanpa harus jauh berkendara. Dengan kombinasi pasir eksotis, air laut yang bening, dan budaya lokal yang kaya, Pantai Tanjung Aan menjadi destinasi wajib bagi mereka yang ingin merasakan pesona alam Lombok yang autentik.',
    link: "https://www.nativeindonesia.com/pantai-tanjung-aan/",
    prices: 5000.0,
    district: "Lombok Tengah",
    province: "Nusa Tenggara Barat",
    latitude: -8.9,
    longitude: 116.29,
  },

  // Kalimantan Timur
  {
    name: "Pulau Derawan",
    date: new Date("1990-01-01"),
    location: "Berau",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4e/Derawan_Island_East_Kalimantan.jpg",
    description:
      "Destinasi wisata bahari paling menakjubkan di Indonesia, terletak di Kabupaten Berau, Kalimantan Timur. Pulau ini terkenal dengan pantainya yang memesona, pasir putih halus, dan air laut biru kehijauan yang jernih hingga dasar lautnya terlihat jelas. Keindahan bawah laut Pulau Derawan tidak kalah memukau, dengan terumbu karang yang masih alami dan beragam biota laut, termasuk penyu hijau dan penyu sisik yang sering terlihat berenang bebas di perairan sekitar pulau. Salah satu daya tarik utama pulau ini adalah keberadaan ubur-ubur tidak menyengat di Danau Kakaban, sebuah fenomena langka di dunia yang hanya bisa ditemukan di beberapa tempat. Selain snorkeling dan menyelam, pengunjung juga bisa menikmati aktivitas seperti berjemur di pantai, menjelajahi pulau dengan berjalan kaki, atau mengunjungi pulau-pulau kecil di sekitarnya seperti Maratua dan Sangalaki. Pulau Derawan juga menjadi tempat yang ideal untuk menyaksikan matahari terbit dan terbenam yang spektakuler, dengan langit berwarna-warni yang memantul di permukaan air laut yang tenang. Fasilitas akomodasi di pulau ini cukup beragam, mulai dari homestay sederhana hingga resort nyaman, meskipun suasana alami dan jauh dari keramaian tetap menjadi ciri khasnya. Dengan keindahan alamnya yang masih terjaga, Pulau Derawan tidak hanya menjadi surga bagi penyelam dan pecinta alam, tetapi juga destinasi yang sempurna untuk melepas penat dan menikmati ketenangan tropis. Akses ke pulau ini biasanya melalui Tarakan atau Balikpapan, dilanjutkan dengan perjalanan laut menggunakan speedboat. Meskipun memerlukan perjalanan yang cukup panjang, keindahan Pulau Derawan sepadan dengan usaha untuk mencapainya.",
    link: "https://www.nativeindonesia.com/pulau-derawan/",
    prices: 25000.0,
    district: "Berau",
    province: "Kalimantan Timur",
    latitude: 2.2833,
    longitude: 118.2333,
  },
  {
    name: "Pulau Kakaban",
    date: new Date("1995-01-01"),
    location: "Berau",
    image:
      "https://cdn2.gnfi.net/gnfi/uploads/articles/pintrstcom-cf937c2641474b77c78eaf2cc2c2a361.jpg",
    description:
      "Pulau unik dengan danau air payau yang dihuni ubur-ubur tidak menyengat, salah satu fenomena langka di dunia. Sebuah danau air payau di tengah pulau yang dihuni oleh ribuan ubur-ubur tidak menyengat. Fenomena langka ini terjadi karena danau tersebut terisolasi dari laut selama ribuan tahun, menyebabkan ubur-ubur di dalamnya kehilangan kemampuan menyengat sebagai bentuk adaptasi. Selain ubur-ubur, danau ini juga menjadi rumah bagi berbagai biota endemik, seperti anemon laut, ikan kecil, dan alga yang membentuk ekosistem unik. Selain danau, Pulau Kakaban dikelilingi oleh terumbu karang yang masih asri dan air laut biru jernih, menjadikannya spot snorkeling dan diving yang memukau. Pengunjung bisa menyelam di tepian pulau untuk melihat beragam ikan tropis, penyu, hingga hiu karang yang berenang di antara karang sehat. Pulau ini juga memiliki hutan bakau yang lebat, menambah kesan alami dan eksotis. Akses ke Pulau Kakaban biasanya dilakukan dengan perahu dari Pulau Derawan atau Maratua, dengan waktu tempuh sekitar 1-2 jam. Meskipun belum memiliki fasilitas wisata yang lengkap, keindahan alamnya yang masih perawan membuatnya layak dikunjungi bagi para pencinta petualangan dan keunikan alam. Pulau ini menjadi bukti kekayaan biodiversitas Indonesia sekaligus destinasi yang wajib dikunjungi bagi mereka yang ingin mengalami keajaiban alam yang jarang ditemukan di belahan dunia mana pun.",
    link: "https://www.nativeindonesia.com/pulau-kakaban/",
    prices: 20000.0,
    district: "Berau",
    province: "Kalimantan Timur",
    latitude: 2.1787,
    longitude: 118.5423,
  },
  {
    name: "Bukit Bangkirai",
    date: new Date("2000-01-01"),
    location: "Kutai Kartanegara",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/Canopy_bridge_in_samboja.jpg",
    description:
      "Kawasan hutan tropis dengan jembatan gantung di antara pohon-pohon tinggi, cocok untuk pecinta alam dan ekowisata. Kawasan hutan tropis ini terkenal dengan jembatan gantung (canopy bridge) yang membentang di antara pohon-pohon Bangkirai raksasa berusia lebih dari 150 tahun. Dengan ketinggian mencapai 30 meter dari permukaan tanah, jembatan sepanjang 64 meter ini menawarkan pengalaman berjalan di atas kanopi hutan sambil menikmati pemandangan hijau yang memukau dan udara segar khas hutan hujan Kalimantan. Selain canopy bridge, Bukit Bangkirai juga menawarkan berbagai aktivitas alam seperti trekking melalui jalur interpretasi dengan ragam flora dan fauna endemik, termasuk anggrek hutan dan burung-burung langka. Pengunjung bisa menginap di resort berbentuk rumah panggung tradisional yang berbaur dengan alam, atau mencoba fasilitas camping untuk pengalaman lebih dekat dengan alam. Kawasan ini juga dilengkapi dengan kolam renang alami dan area outbound, cocok untuk wisata keluarga atau kegiatan kelompok. Sebagai bagian dari Hutan Lindung Sungai Wain, Bukit Bangkirai memegang peran penting dalam konservasi ekosistem Kalimantan. Dengan tiket masuk terjangkau (Rp15.000–Rp25.000), destinasi ini cocok bagi pecinta petualangan ringan maupun mereka yang ingin menikmati ketenangan alam tanpa jauh dari kota (hanya 1,5 jam perjalanan dari Balikpapan). Pohon Bangkirai (Shorea laevis) terkenal dengan kayunya yang keras dan tahan lama, sering digunakan untuk konstruksi tradisional. Keberadaan pohon-pohon raksasa ini menjadikan Bukit Bangkirai laboratorium alam yang hidup untuk studi ekologi.",
    link: "https://id.wikipedia.org/wiki/Bukit_Bangkirai",
    prices: 15000.0,
    district: "Kutai Kartanegara",
    province: "Kalimantan Timur",
    latitude: 1.1068,
    longitude: 117.1658,
  },
  {
    name: "Desa Budaya Pampang",
    date: new Date("1980-01-01"),
    location: "Samarinda",
    image:
      "https://selasar.co/assets/images/news/2023/11/desa-pampang-samarinda-wisata-budaya-yang-mengenal-seni-daerah-suku-dayak-657784cc87503.jpeg",
    description:
      "Sebuah kampung adat yang terletak di Samarinda, Kalimantan Timur, dan menjadi salah satu destinasi wisata budaya paling menarik di provinsi tersebut. Desa ini dihuni oleh Suku Dayak Kenyah, yang masih mempertahankan tradisi, adat istiadat, serta arsitektur asli mereka. Salah satu ciri khas desa ini adalah rumah panjang berbentuk Lamin, yaitu rumah adat Dayak Kenyah yang terbuat dari kayu ulin dan dihiasi dengan ukiran serta ornamen khas. Pengunjung dapat menyaksikan langsung kehidupan masyarakat Dayak yang harmonis dengan alam, serta belajar tentang filosofi hidup mereka yang kental dengan nilai-nilai kebersamaan dan pelestarian lingkungan. Selain arsitektur tradisional, Desa Pampang juga terkenal dengan pertunjukan seni dan budaya, seperti tarian Hudoq, Tari Kancet Ledo, dan musik tradisional menggunakan alat seperti sape’ (sejenis kecapi Dayak). Setiap akhir pekan, biasanya diadakan pertunjukan untuk wisatawan, memberikan pengalaman langsung tentang kekayaan budaya Dayak Kenyah. Pengunjung juga bisa melihat proses pembuatan kerajinan tangan, seperti manik-manik, tenun, dan anyaman, yang dijual sebagai cendera mata. Desa Budaya Pampang tidak hanya menjadi tempat wisata, tetapi juga pusat pelestarian budaya Dayak di tengah modernisasi. Dengan tiket masuk yang terjangkau (sekitar Rp10.000), pengunjung dapat mengeksplorasi keunikan budaya ini sambil mendukung keberlanjutan adat setempat. Lokasinya yang tidak terlalu jauh dari pusat kota Samarinda membuat desa ini mudah dikunjungi, baik untuk wisatawan domestik maupun mancanegara yang ingin mengenal lebih dalam kehidupan suku asli Kalimantan.",
    link: "https://www.nativeindonesia.com/desa-pampang-samarinda/",
    prices: 10000.0,
    district: "Samarinda",
    province: "Kalimantan Timur",
    latitude: -0.3701,
    longitude: 117.1726,
  },
  {
    name: "Teluk Sulaiman",
    date: new Date("2010-01-01"),
    location: "Kutai Timur",
    image:
      "https://img.merahputih.com/media/db/c0/fb/dbc0fbd77ee2a765eee76e58aabf8592.JPG",
    description:
      "Pantai tersembunyi yang terletak di Kabupaten Kutai Timur, Kalimantan Timur. Dikenal dengan pasir putihnya yang halus dan air laut yang jernih kebiruan, teluk ini menawarkan suasana tenang dan alami, jauh dari keramaian wisatawan. Dikelilingi oleh hutan tropis dan tebing karang, pemandangan di Teluk Sulaiman terlihat sangat eksotis, seolah terpisah dari dunia luar. Pantai ini cocok untuk kegiatan snorkeling dan menyelam karena perairannya yang jernih serta kekayaan biota lautnya, termasuk terumbu karang yang masih terjaga. Akses menuju Teluk Sulaiman tergolong cukup menantang, membutuhkan perjalanan darat dan laut, sehingga destinasi ini masih jarang dikunjungi. Namun, justru karena itulah keaslian alamnya tetap terpelihara. Pengunjung bisa menikmati aktivitas seperti berenang, memancing, atau sekadar bersantai di tepi pantai sambil menikmati panorama alam yang memukau. Dengan biaya masuk yang terjangkau, Teluk Sulaiman menjadi pilihan ideal bagi para pencinta alam yang ingin menikmati keindahan pantai tanpa gangguan keramaian. Selain keindahan alamnya, Teluk Sulaiman juga memiliki nilai sejarah. Konon, nama teluk ini diambil dari nama seorang tokoh setempat yang dihormati. Keunikan dan ketenangan yang ditawarkan membuat Teluk Sulaiman layak dikunjungi bagi mereka yang mencari pengalaman wisata yang berbeda dan lebih intim dengan alam.",
    link: "https://www.kompas.com/stori/read/2022/06/24/160000579/memikatnya-teluk-sulaiman-di-kutai-timur",
    prices: 5000.0,
    district: "Kutai Timur",
    province: "Kalimantan Timur",
    latitude: 1.0467,
    longitude: 118.2656,
  },

  // Kalimantan Barat
  {
    name: "Tugu Khatulistiwa",
    date: new Date("1938-01-01"),
    location: "Pontianak",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/Tugu_Khatulistiwa_Pontianak_2024_01.jpg",
    description:
      'Ikon wisata unik di Kota Pontianak, Kalimantan Barat, yang menandai titik nol garis khatulistiwa. Tugu ini dibangun pada tahun 1928 oleh tim ekspedisi Belanda dan kemudian direnovasi pada tahun 1990 dengan penambahan kubah pelindung. Keunikan utama Tugu Khatulistiwa terletak pada fenomena alam yang terjadi dua kali dalam setahun, yaitu pada 21–23 Maret dan 21–23 September, ketika matahari tepat berada di atas garis khatulistiwa. Saat itu, bayangan tugu dan benda-benda di sekitarnya akan menghilang selama beberapa detik, peristiwa yang dikenal sebagai "kulminasi matahari". Selain menjadi destinasi edukasi tentang astronomi dan geografi, tugu ini juga dilengkapi dengan museum kecil yang menyajikan informasi sejarah serta alat peraga tentang garis khatulistiwa. Pengunjung dapat melihat replika tugu asli, foto-foto dokumentasi, dan penjelasan ilmiah tentang fenomena kulminasi. Lokasinya yang strategis di Jalan Khatulistiwa membuatnya mudah diakses, baik dengan kendaraan pribadi maupun transportasi umum. Tugu Khatulistiwa tidak hanya menarik wisatawan domestik tetapi juga mancanegara, terutama para pecinta sains dan fotografi. Di sekitar kawasan tugu, terdapat taman yang tertata rapi serta spot foto menarik dengan tulisan "Khatulistiwa" sebagai latar. Meskipun tidak dikenakan biaya masuk, pengunjung biasanya menyempatkan diri untuk membeli cenderamata khas Pontianak di sekitar lokasi. Sebagai simbol persimpangan bumi utara dan selatan, Tugu Khatulistiwa menjadi bukti kekayaan alam Indonesia yang patut dilestarikan.',
    link: "https://id.wikipedia.org/wiki/Tugu_Khatulistiwa",
    prices: 0,
    district: "Pontianak",
    province: "Kalimantan Barat",
    latitude: 0.0026,
    longitude: 109.3333,
  },
  {
    name: "Danau Sentarum",
    date: new Date("1999-01-01"),
    location: "Kapuas Hulu",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/de/Danau_Sentarum_2006.jpg",
    description:
      "Sebuah taman nasional yang terletak di Kapuas Hulu, Kalimantan Barat, dan merupakan salah satu ekosistem lahan basah terpenting di Indonesia. Danau ini memiliki keunikan sebagai danau musiman yang mengering pada musim kemarau dan berubah menjadi hamparan rawa-rawa yang luas. Saat musim hujan, air dari Sungai Kapuas membanjiri wilayah ini, menciptakan sebuah danau besar yang menjadi habitat bagi berbagai spesies ikan air tawar, termasuk ikan arwana yang terkenal. Selain kekayaan hayati, Danau Sentarum juga menjadi rumah bagi masyarakat Dayak Iban yang tinggal di rumah panjang tradisional dan bergantung pada sumber daya alam sekitar untuk kehidupan sehari-hari. Kawasan ini terkenal dengan pemandangan alamnya yang memukau, terutama saat matahari terbit dan terbenam, ketika permukaan air dan langit seolah menyatu dalam gradasi warna jingga dan ungu. Pengunjung dapat menjelajahi danau dengan perahu tradisional (jukung) sambil mengamati burung-burung migran, monyet, dan satwa liar lainnya. Keberadaan hutan rawa gambut di sekitarnya juga menjadikan Danau Sentarum sebagai salah satu penyimpan karbon alami yang penting bagi keseimbangan iklim. Sebagai destinasi ekowisata, Danau Sentarum menawarkan pengalaman alam yang autentik, jauh dari keramaian kota. Namun, aksesnya yang terpencil membuat perjalanan ke sini membutuhkan persiapan ekstra. Wisatawan yang berkunjung tidak hanya menikmati keindahan alam tetapi juga belajar tentang kehidupan masyarakat adat yang harmonis dengan lingkungan. Dengan segala keunikannya, Danau Sentarum menjadi salah satu permata tersembunyi Kalimantan yang wajib dikunjungi bagi pecinta alam dan petualang sejati.",
    link: "https://id.wikipedia.org/wiki/Taman_Nasional_Danau_Sentarum",
    prices: 25000.0,
    district: "Kapuas Hulu",
    province: "Kalimantan Barat",
    latitude: 0.8583,
    longitude: 112.1419,
  },
  {
    name: "Bukit Kelam",
    date: new Date("1985-01-01"),
    location: "Sintang",
    image:
      "https://cdn.digitaldesa.com/uploads/profil/99.99.99.9999/berita/c20301c7f42309f46cced9c619931c30.jpg",
    description:
      "Sebuah monolit raksasa yang terletak di Kabupaten Sintang, Kalimantan Barat, dan dikenal sebagai salah satu batu terbesar di dunia. Dengan ketinggian sekitar 1.002 meter di atas permukaan laut, bukit ini menjulang tegak seperti dinding raksasa di tengah hamparan hutan dan perkebunan. Keberadaannya yang megah menjadikannya ikon wisata alam di Kalimantan Barat, menarik para pendaki, fotografer, dan pencinta petualangan. Selain keunikan bentuknya, Bukit Kelam juga memiliki nilai ekologis yang tinggi karena menjadi habitat bagi berbagai flora dan fauna endemik Kalimantan. Pendakian ke puncaknya menawarkan tantangan fisik sekaligus pemandangan spektakuler, terutama saat matahari terbit atau terbenam. Bagi masyarakat setempat, bukit ini memiliki nilai budaya dan mitos tersendiri, termasuk legenda tentang asal-usulnya yang dikaitkan dengan kisah-kisah rakyat. Dengan akses yang relatif mudah dari Kota Sintang, Bukit Kelam menjadi destinasi yang cocok untuk wisata alam, hiking, atau sekadar menikmati panorama alam Kalimantan yang masih asri. Pengunjung hanya perlu membayar tiket masuk yang terjangkau, menjadikannya salah satu tempat wisata unggulan di Kalimantan Barat.",
    link: "https://www.nativeindonesia.com/bukit-kelam-sintang/",
    prices: 10000.0,
    district: "Sintang",
    province: "Kalimantan Barat",
    latitude: 0.0667,
    longitude: 111.5,
  },
  {
    name: "Keraton Kadariah",
    date: new Date("1771-01-01"),
    location: "Pontianak",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/bb/Keraton_Kadariah_01.jpg",
    description:
      "Istana bersejarah peninggalan Kesultanan Pontianak yang dibangun pada tahun 1771 oleh Sultan Syarif Abdurrahman Alkadrie, pendiri Kota Pontianak. Berlokasi di tepi Sungai Kapuas, keraton ini menjadi simbol kejayaan Kesultanan Melayu di Kalimantan Barat dan pusat penyebaran Islam pada masanya. Arsitekturnya memadukan unsur tradisional Melayu, kolonial Belanda, dan Timur Tengah, dengan ciri khas seperti atap limas, ukiran kayu, serta warna dominan kuning keemasan yang melambangkan kemuliaan. Di dalam kompleks keraton, pengunjung dapat melihat berbagai koleksi benda pusaka, seperti senjata tradisional, perhiasan, Al-Qur'an tulisan tangan, serta foto-foto sultan yang pernah memimpin. Salah satu daya tarik utamanya adalah singgasana sultan yang masih terawat baik. Keraton ini juga dikelilingi oleh lingkungan yang asri, dengan pohon-pohon rindang dan pemandangan Sungai Kapuas yang menenangkan. Sebagai salah satu situs budaya terpenting di Kalimantan Barat, Keraton Kadariah tidak hanya menjadi destinasi wisata sejarah, tetapi juga tempat pelestarian adat dan tradisi Melayu Pontianak. Pengunjung dapat belajar tentang kebudayaan setempat, termasuk upacara adat dan kisah-kisah legenda yang terkait dengan kesultanan. Dengan nilai sejarah dan arsitekturnya yang kaya, keraton ini menjadi bukti keagungan masa lalu yang tetap dijaga hingga kini.",
    link: "https://id.wikipedia.org/wiki/Keraton_Kadariah",
    prices: 5000.0,
    district: "Pontianak",
    province: "Kalimantan Barat",
    latitude: -0.0333,
    longitude: 109.3333,
  },
  {
    name: "Pantai Temajuk",
    date: new Date("2005-01-01"),
    location: "Sambas",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Temajuk_Beach%2C_Paloh_District_Sambas_Regency%2C_West_Borneo_-_panoramio_%285%29.jpg",
    description:
      "Pantai Temajuk terletak di Kabupaten Sambas, Kalimantan Barat, dan merupakan salah satu pantai alami yang masih terjaga keasriannya. Pantai ini memiliki keunikan karena berada di perbatasan Indonesia-Malaysia, tepatnya berhadapan dengan Teluk Melano di Sarawak. Dengan hamparan pasir putih yang luas dan air laut yang jernih, Pantai Temajuk menawarkan suasana tenang dan jauh dari keramaian, cocok bagi pengunjung yang ingin menikmati ketenangan alam. Salah satu daya tarik utamanya adalah aktivitas penyu yang sering mendarat untuk bertelur di sekitar pantai, terutama pada malam hari. Pengunjung juga dapat menikmati pemandangan matahari terbenam yang memukau atau berkemah di tepi pantai dengan suasana yang masih alami. Selain keindahan alamnya, Pantai Temajuk dikelilingi oleh hutan mangrove yang menjadi habitat berbagai satwa liar, seperti burung-burung pantai dan kepiting. Akses menuju pantai ini masih cukup sederhana, sehingga cocok bagi pelancong yang menyukai petualangan off-the-beaten-path. Meskipun fasilitas wisata masih terbatas, keasrian Pantai Temajuk justru menjadi nilai tambah bagi mereka yang ingin melepaskan diri dari hiruk-pikuk kota. Pengunjung juga bisa menjelajahi perkampungan nelayan sekitar untuk melihat kehidupan tradisional masyarakat pesisir Kalimantan Barat. Pantai ini tidak dikenakan biaya masuk, sehingga menjadi destinasi yang ramah bagi backpacker dan wisatawan lokal. Waktu terbaik untuk berkunjung adalah pada musim kemarau (April–Oktober), ketika ombak tenang dan cuaca cerah. Dengan keunikan lokasinya yang berbatasan langsung dengan Malaysia dan keindahan alam yang masih perawan, Pantai Temajuk layak dimasukkan dalam daftar tujuan wisata di Kalimantan Barat bagi pecinta pantai alami dan pengalaman wisata yang autentik.",
    link: "https://www.nativeindonesia.com/pantai-temajuk/",
    prices: 0,
    district: "Sambas",
    province: "Kalimantan Barat",
    latitude: 1.2,
    longitude: 109.6667,
  },

  // Sulawesi Selatan
  {
    name: "Pantai Losari",
    date: new Date("1990-01-01"),
    location: "Makassar",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/45/Makassar_Sulawesi_Pantai_Losari.jpg",
    description:
      "Ikon wisata Kota Makassar yang terkenal dengan pemandangan matahari terbenam dan jajanan khas seperti pisang epe ikon wisata kota Makassar yang terkenal dengan pemandangan matahari terbenamnya yang spektakuler. Berlokasi di pusat kota, pantai ini menjadi tempat favorit warga lokal maupun turis untuk bersantai, berolahraga, atau sekadar menikmati suasana tepi laut. Meskipun tidak memiliki pasir pantai yang luas, Losari menawarkan jalan tepi pantai (corniche) sepanjang kurang lebih satu kilometer yang dilengkapi dengan taman, tempat duduk, dan berbagai kuliner khas Makassar. Salah satu yang paling terkenal adalah pisang epe—pisang bakar yang disajikan dengan saus gula merah dan berbagai topping. Selain sebagai tempat rekreasi, Pantai Losari juga memiliki nilai historis. Di sekitarnya terdapat beberapa landmark penting seperti Masjid Amirul Mukminin (masjid terapung) dan Monumen Mandala. Pada pagi hari, banyak pengunjung yang datang untuk berolahraga atau menikmati udara segar, sementara di malam hari, kawasan ini berubah menjadi pusat kuliner dengan deretan hidangan laut segar dan minuman khas Sulawesi Selatan. Pantai Losari tidak memungut biaya masuk, sehingga bisa dinikmati oleh semua kalangan. Meskipun tidak cocok untuk berenang karena ombak dan kedalamannya, pantai ini tetap menjadi simbol kebanggaan Makassar yang memadukan keindahan alam, budaya, dan kehidupan perkotaan..",
    link: "https://www.indonesiakaya.com/jelajah-indonesia/detail/pantai-losari/",
    prices: 0,
    district: "Makassar",
    province: "Sulawesi Selatan",
    latitude: -5.1442,
    longitude: 119.4086,
  },
  {
    name: "Tana Toraja",
    date: new Date("1984-01-01"),
    location: "Tana Toraja",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/34/Makale_%2850460596912%29.jpg",
    description:
      "Sebuah wilayah di Sulawesi Selatan yang terkenal dengan budaya tradisionalnya yang unik, pemandangan alam yang memukau, dan ritual adat yang mendalam. Destinasi ini menjadi salah satu tempat wisata budaya paling menarik di Indonesia, terutama karena masyarakat Toraja masih mempertahankan adat istiadat leluhur mereka dengan sangat kuat. Salah satu ciri khas Tana Toraja adalah rumah adat Tongkonan, dengan atap melengkung seperti perahu dan ukiran kayu yang sarat makna simbolis. Selain itu, pemandangan alamnya tidak kalah menakjubkan, berupa persawahan terasering, bukit batu kapur, dan lembah hijau yang memanjakan mata. Salah satu daya tarik utama Tana Toraja adalah upacara kematian Rambu Solo’, sebuah tradisi pemakaman megah yang bisa berlangsung selama berhari-hari. Ritual ini mencerminkan kepercayaan animisme Aluk Todolo, di mana kematian bukanlah akhir melainkan perjalanan menuju alam roh. Keluarga akan menyembelih kerbau dan babi sebagai persembahan, sementara jenazah disimpan di tebing batu atau kuburan kayu yang diukir dengan motif khas Toraja. Selain itu, terdapat juga kuburan bayi di pohon Tarra atau gua batu, yang menambah kesan mistis dari budaya Toraja. Selain wisata budaya, Tana Toraja juga menawarkan trekking ke bukit-bukit seperti Batu Tumonga, di mana pengunjung bisa melihat pemandangan Tongkonan dari ketinggian. Desa Kete Kesu dan Londa juga menjadi spot populer untuk melihat kuburan tebing dan patung-patung Tau-tau yang berdiri tegak di lereng bukit. Dengan keunikan budayanya yang autentik dan alam yang masih asri, Tana Toraja bukan sekadar destinasi wisata, melainkan pengalaman mendalam tentang kehidupan, kematian, dan harmoni antara manusia dengan alam.",
    link: "https://id.wikipedia.org/wiki/Tana_Toraja",
    prices: 50000.0,
    district: "Tana Toraja",
    province: "Sulawesi Selatan",
    latitude: -3.0667,
    longitude: 119.8333,
  },
  {
    name: "Taman Wisata Bantimurung",
    date: new Date("1995-01-01"),
    location: "Maros",
    image:
      "https://upload.wikimedia.org/wikipedia/id/6/64/Desa_Jenetaesa89.jpg",
    description:
      '**Taman Wisata Alam Bantimurung**, terletak di Kabupaten Maros, Sulawesi Selatan, adalah surga alam yang terkenal dengan julukan "Kingdom of Butterflies" karena kekayaan spesies kupu-kupunya yang mencapai ratusan jenis, termasuk beberapa yang endemik. Kawasan seluas 430 hektar ini menawarkan pemandangan spektakuler berupa air terjun setinggi 15 meter yang mengalir deras di antara tebing-tebing karst yang menjulang, menciptakan kolam alami yang jernih dan segar untuk berenang. Selain keindahan alamnya, Bantimurung juga menyimpan keunikan geologis dengan gua-gua kapur seperti Gua Batu yang dihiasi stalaktit dan stalagmit berusia ribuan tahun. Pengunjung dapat menjelajahi berbagai jalur trekking yang mengitari hutan tropis dengan vegetasi yang rimbun, sambil menikmati pemandangan kupu-kupu yang beterbangan bebas. Sebagai bagian dari Taman Nasional Bantimurung-Bulusaraung, kawasan ini tidak hanya menjadi destinasi wisata alam tetapi juga pusat penelitian dan konservasi, terutama untuk kupu-kupu langka. Fasilitas seperti museum kupu-kupu, area piknik, dan spot foto yang instagenik semakin melengkapi pengalaman berwisata di sini. Dengan jarak tempuh sekitar 40 km dari Makassar, Bantimurung menjadi pilihan ideal untuk pelarian singkat dari keramaian kota sambil menikmati pesona alam Sulawesi yang memukau.',
    link: "https://www.nativeindonesia.com/taman-nasional-bantimurung-bulusaraung/",
    prices: 25000.0,
    district: "Maros",
    province: "Sulawesi Selatan",
    latitude: -5.0019,
    longitude: 119.7333,
  },
  {
    name: "Pulau Samalona",
    date: new Date("2000-01-01"),
    location: "Makassar",
    image: "https://upload.wikimedia.org/wikipedia/id/4/49/Pulau_Samalona2.jpg",
    description:
      "Destinasi wisata bahari yang menawan, terletak sekitar 30 menit perjalanan perahu dari pusat Kota Makassar, Sulawesi Selatan. Pulau kecil ini terkenal dengan keindahan alamnya yang masih asri, pasir putih yang lembut, serta air laut biru jernih yang cocok untuk berenang, snorkeling, dan diving. Dengan luas sekitar 2,34 hektar, Pulau Samalona menawarkan suasana tenang dan eksklusif, jauh dari keramaian kota. Keindahan bawah lautnya menjadi daya tarik utama, dengan terumbu karang yang masih terjaga dan beragam ikan hias warna-warni. Spot snorkeling di sekitar pulau sangat mudah dijangkau, bahkan untuk pemula. Bagi penyelam, terdapat beberapa titik diving dengan kedalaman bervariasi, di mana pengunjung bisa menemukan karang sehat, ikan napoleon, hingga penyu laut. Fasilitas di pulau ini cukup sederhana, dengan beberapa pondok wisata dan warung makan yang menyajikan hidangan laut segar. Pulau Samalona juga memiliki mercusuar peninggalan Belanda yang menjadi ikon sejarah. Pengunjung bisa menikmati panorama laut lepas dari atas mercusuar atau sekadar bersantai di tepi pantai sambil menikmati sunset yang memukau. Karena jaraknya yang dekat dengan Makassar, pulau ini sering menjadi tujuan wisata harian, baik untuk liburan keluarga, rombongan, maupun fotografi. Dengan tiket masuk yang terjangkau, Pulau Samalona menjadi pilihan tepat bagi mereka yang ingin menikmati keindahan alam Sulawesi Selatan tanpa harus jauh berlayar.",
    link: "https://www.tripadvisor.com/Attraction_Review-g297720-d4176162-Reviews-Samalona_Island-Makassar_South_Sulawesi_Sulawesi.html",
    prices: 30000.0,
    district: "Makassar",
    province: "Sulawesi Selatan",
    latitude: -5.1114,
    longitude: 119.3628,
  },
  {
    name: "Pantai Apparalang",
    date: new Date("2005-01-01"),
    location: "Bulukumba",
    image:
      "https://jurnalpost.com/wp-content/uploads/2018/10/Pantai-Apparalang.jpg",
    description:
      "Destinasi wisata unggulan di Bulukumba, Sulawesi Selatan, yang menawarkan pesona alam menakjubkan dengan tebing karang tinggi yang menjulang di tepi laut. Pantai ini terkenal dengan pemandangan eksotisnya, di mana tebing-tebing curam berwarna putih kecokelatan kontras dengan air laut biru jernih yang menghampar di bawahnya. Ombaknya yang tenang dan pasir putihnya yang bersih membuat pantai ini cocok untuk berenang, berfoto, atau sekadar bersantai menikmati angin laut. Salah satu spot paling ikonik di sini adalah Tebing Apparalang, yang sering dijadikan latar belakang foto dramatis, terutama saat matahari terbenam ketika langit berubah warna kemerahan. Selain keindahan alamnya, Pantai Apparalang juga menjadi tempat yang ideal untuk snorkeling karena perairannya yang jernih dan kehidupan bawah laut yang beragam. Pengunjung dapat menyewa perahu nelayan setempat untuk menjelajahi area sekitar atau mengunjungi Pulau Liukang Loe, yang tak jauh dari pantai ini. Akses menuju Pantai Apparalang cukup mudah, hanya berjarak sekitar 40 km dari Kota Bulukumba, dengan jalan yang sudah cukup baik. Meskipun semakin populer, pantai ini masih terjaga keasriannya dan belum terlalu ramai oleh wisatawan, sehingga cocok bagi yang mencari ketenangan. Dengan keunikan tebing karangnya yang megah dan suasana pantai yang masih alami, Pantai Apparalang layak dimasukkan dalam daftar tujuan wisata wajib dikunjungi saat menjelajahi Sulawesi Selatan.",
    link: "https://www.nativeindonesia.com/tebing-apparalang/",
    prices: 10000.0,
    district: "Bulukumba",
    province: "Sulawesi Selatan",
    latitude: -5.5847,
    longitude: 120.4536,
  },

  // Sulawesi Utara
  {
    name: "Taman Nasional Bunaken",
    date: new Date("1991-01-01"),
    location: "Manado",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Bunaken_Marine_Park.JPG",
    description:
      "Taman Nasional Bunaken adalah salah satu destinasi wisata terbaik di Indonesia, terletak di Sulawesi Utara, tepatnya di dekat kota Manado. Ditetapkan sebagai taman nasional pada tahun 1991, kawasan ini terkenal dengan keindahan terumbu karangnya yang memukau dan keanekaragaman hayati laut yang luar biasa. Bunaken menjadi surga bagi para penyelam dan pecinta snorkeling karena memiliki lebih dari 20 titik penyelaman (dive spot) dengan visibilitas air yang mencapai 20–30 meter. Di sini, pengunjung dapat menemukan beragam spesies ikan tropis, penyu, hiu karang, hingga mamalia laut seperti dugong.Salah satu daya tarik utama Taman Laut Bunaken adalah dinding karang (wall diving) yang menjulang vertikal hingga kedalaman ratusan meter, menciptakan pemandangan bawah laut yang dramatis. Ekosistemnya yang masih terjaga juga menjadi rumah bagi sekitar 390 jenis karang keras dan soft coral, serta ribuan spesies biota laut. Selain menyelam, pengunjung bisa menikmati keindahan pantai pasir putih di sekitar pulau atau menjelajahi hutan mangrove yang menjadi habitat burung langka. Akses ke Bunaken relatif mudah, dengan perjalanan kapal cepat sekitar 40 menit dari Pelabuhan Manado. Meskipun dikenakan biaya masuk (sekitar Rp50.000 untuk wisatawan domestik), pengalaman menyaksikan langsung keajaiban bawah lautnya benar-benar sepadan. Untuk hasil terbaik, kunjungi Bunaken antara bulan Mei hingga Agustus ketika cuaca cerah dan ombak tenang. Sebagai bagian dari Segitiga Terumbu Karang Dunia, Bunaken tidak hanya menjadi kebanggaan Sulawesi Utara tetapi juga bukti kekayaan alam Indonesia yang patut dilestarikan.",
    prices: 50000.0,
    district: "Manado",
    province: "Sulawesi Utara",
    latitude: 1.6203,
    longitude: 124.7583,
  },
  {
    name: "Gunung Lokon",
    date: new Date("1980-01-01"),
    location: "Tomohon",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Lokon.JPG",
    description:
      "Gunung berapi aktif yang terletak di Tomohon, Sulawesi Utara, dengan ketinggian sekitar 1.580 meter di atas permukaan laut. Gunung ini terkenal karena keindahan alamnya serta aktivitas vulkanik yang menarik para pendaki dan peneliti. Meskipun statusnya masih aktif, Gunung Lokon menjadi destinasi populer bagi wisatawan yang menyukai tantangan trekking dan pemandangan alam yang spektakuler. Jalur pendakiannya relatif terjangkau, cocok untuk pemula maupun pendaki berpengalaman, dengan medan yang bervariasi mulai dari hutan tropis hingga lereng berbatu. Salah satu daya tarik utama Gunung Lokon adalah Danau Kawah yang terbentuk di puncaknya, menawarkan pemandangan dramatis dengan asap belerang yang terkadang mengepul. Dari puncak gunung, pengunjung dapat menikmati panorama kota Tomohon, Danau Tondano, serta Gunung Mahawu di kejauhan. Selain itu, kawasan sekitar gunung juga dikenal dengan perkebunan sayur dan bunga yang menghiasi lerengnya, menciptakan pemandangan hijau yang memesona. Meskipun indah, pendakian ke Gunung Lokon harus dilakukan dengan hati-hati karena aktivitas vulkaniknya yang tidak stabil. Pengunjung disarankan untuk memantau laporan terkini dari pihak berwenang sebelum melakukan pendakian. Dengan keunikan alam dan tantangannya, Gunung Lokon tidak hanya menjadi destinasi petualangan tetapi juga tempat untuk menikmati keindahan alam Sulawesi Utara yang masih alami.",
    link: "https://www.nativeindonesia.com/gunung-lokon/",
    prices: 15000.0,
    district: "Tomohon",
    province: "Sulawesi Utara",
    latitude: 1.3603,
    longitude: 124.7936,
  },
  {
    name: "Danau Linow",
    date: new Date("1995-01-01"),
    location: "Tomohon",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Danu_Linow.jpg",
    description:
      "Danau vulkanik yang terletak di Tomohon, Sulawesi Utara, terkenal karena keunikan airnya yang dapat berubah warna secara alami. Perubahan warna ini disebabkan oleh kandungan mineral belerang dan aktivitas vulkanik di dasar danau, menciptakan efek visual yang memukau—kadang hijau kebiruan, kuning, atau bahkan kemerahan tergantung pada sudut pandang dan kondisi cahaya. Dikelilingi oleh perbukitan hijau dan udara sejuk khas dataran tinggi, Danau Linow menawarkan suasana tenang dan pemandangan alam yang memanjakan mata. Selain keindahannya, danau ini juga menjadi habitat bagi beberapa jenis burung migran dan tumbuhan endemik. Pengunjung dapat menikmati suasana danau dari beberapa spot wisata yang dilengkapi dengan kafe atau restoran kecil, sambil menyeruput kopi khas Tomohon. Salah satu aktivitas populer adalah berjalan-jalan di sekitar danau melalui jalur trekking yang menyuguhkan panorama berbeda dari berbagai sudut. Pada pagi atau sore hari, kabut tipis sering menyelimuti permukaan danau, menambah kesan mistis dan fotogenik. Dengan tiket masuk yang terjangkau (sekitar Rp10.000), Danau Linow cocok dikunjungi sebagai bagian dari perjalanan eksplorasi Sulawesi Utara, terutama jika digabungkan dengan wisata lain seperti Gunung Lokon atau Bukit Kasih. Keunikan danau ini menjadikannya salah satu destinasi alam paling Instagramable di kawasan Minahasa.",
    link: "https://id.wikipedia.org/wiki/Danau_Linow",
    prices: 10000.0,
    district: "Tomohon",
    province: "Sulawesi Utara",
    latitude: 1.3132,
    longitude: 124.8133,
  },
  {
    name: "Pantai Paal",
    date: new Date("2000-01-01"),
    location: "Likupang",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/22/Pantai_Paal.jpg",
    description:
      'Pantai Paal adalah salah satu destinasi wisata unggulan di Likupang, Sulawesi Utara, yang terkenal dengan pesona alamnya yang masih asri dan menawan. Pantai ini menawarkan hamparan pasir putih yang lembut dan air laut biru jernih, dikelilingi oleh pepohonan hijau yang menambah kesan sejuk dan alami. Salah satu daya tarik utama Pantai Paal adalah pemandangan tebing karang yang menjulang di sekitarnya, menciptakan latar belakang yang dramatis dan instagramable. Pengunjung dapat menikmati berbagai aktivitas, seperti berenang, snorkeling, atau sekadar bersantai di tepi pantai sambil menikmati angin laut yang segar. Pantai Paal juga menjadi salah satu destinasi yang sedang naik daun di kawasan Likupang, yang kini dikembangkan sebagai "Super Priority Tourism Destination" oleh pemerintah Indonesia. Fasilitas di sekitar pantai terus diperbaiki, termasuk gazebo, warung makan, dan area parkir, sehingga semakin nyaman untuk dikunjungi. Selain itu, pantai ini cocok untuk melihat matahari terbenam yang memukau, dengan langit berwarna jingga keemasan yang memantul di permukaan air. Dengan jarak tempuh sekitar 1,5–2 jam dari Manado, Pantai Paal menjadi pilihan ideal untuk liburan sehari atau perjalanan akhir pekan yang menyenangkan. Keindahan Pantai Paal tidak hanya terletak pada alamnya yang memesona, tetapi juga pada suasana yang tenang dan jauh dari keramaian. Pantai ini cocok bagi mereka yang ingin melepas penat sambil menikmati keindahan alam Sulawesi Utara yang masih terjaga. Harga tiket masuknya pun terjangkau, membuatnya semakin menarik untuk dikunjungi. Jika Anda mencari pantai eksotis dengan nuansa pribadi dan pemandangan spektakuler, Pantai Paal adalah jawabannya.',
    link: "https://www.nativeindonesia.com/pantai-paal-likupang/",
    prices: 10000.0,
    district: "Minahasa Utara",
    province: "Sulawesi Utara",
    latitude: 1.6294,
    longitude: 125.085,
  },
  {
    name: "Pulau Lihaga",
    date: new Date("2010-01-01"),
    location: "Minahasa Utara",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/03/Keindahan_Pulau_Lihaga.jpg",
    description:
      "Destinasi eksotis yang tersembunyi di perairan Likupang, Kabupaten Minahasa Utara, Sulawesi Utara. Pulau kecil tak berpenghuni ini menawarkan pesona pantai tropis yang masih sangat alami, dengan pasir putih halus membentang di sepanjang pesisir dan air laut biru jernih yang memantulkan warna langit. Dikelilingi oleh terumbu karang yang sehat, Pulau Lihaga menjadi surga bagi para penyelam dan pecinta snorkeling yang ingin mengeksplorasi keindahan bawah lautnya. Berbagai jenis ikan tropis, bintang laut, dan biota laut lainnya dapat ditemukan dengan mudah di perairan dangkal sekitar pulau. Akses menuju Pulau Lihaga biasanya ditempuh dengan perahu dari Pelabuhan Likupang atau Pantai Paal, dengan waktu tempuh sekitar 30–45 menit. Karena belum banyak terjamah komersialisasi, pulau ini memberikan suasana tenang dan privat, cocok untuk wisatawan yang ingin menjauh dari keramaian. Fasilitas di pulau ini masih terbatas, sehingga pengunjung disarankan membawa perlengkapan sendiri seperti makanan, minuman, dan tenda jika ingin menginap. Beberapa operator tur lokal menyediakan paket wisata sehari dengan aktivitas seperti snorkeling, berjemur, atau sekadar menikmati sunset yang memukau. Keunikan Pulau Lihaga terletak pada keaslian alamnya yang belum banyak tersentuh, menjadikannya salah satu destinasi tersembunyi di Sulawesi Utara yang wajib dikunjungi bagi pencinta petualangan bahari. Dengan keindahan alam yang memesona dan suasana yang masih sangat alami, pulau ini menjadi tempat sempurna untuk melepas penat sambil menikmati keajaiban laut Indonesia.",
    link: "https://www.nativeindonesia.com/pulau-lihaga/",
    prices: 25000.0,
    district: "Minahasa Utara",
    province: "Sulawesi Utara",
    latitude: 1.6511,
    longitude: 124.9641,
  },

  // Papua
  {
    name: "Raja Ampat",
    date: new Date("2000-01-01"),
    location: "Raja Ampat",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/88/Raja_Ampat%2C_Mutiara_Indah_di_Timur_Indonesia.jpg",
    description:
      "Surga tropis yang terletak di ujung barat Pulau Papua, tepatnya di Provinsi Papua Barat Daya. Dikenal sebagai salah satu destinasi diving terbaik di dunia, kepulauan ini terdiri dari lebih dari 1.500 pulau kecil yang memukau dengan keindahan alam bawah laut yang luar biasa. Perairannya yang jernih menjadi rumah bagi 75% spesies karang dunia dan ribuan jenis ikan hias, termasuk ikan pari manta, hiu karang, dan kuda laut pigmi. Selain kekayaan biota laut, Raja Ampat juga menawarkan pemandangan daratan yang memesona, seperti tebing batu kapur yang menjulang, laguna tersembunyi, dan pantai berpasir putih yang masih perawan. Destinasi ini tidak hanya menarik penyelam dan pecinta alam, tetapi juga peneliti kelautan karena ekosistemnya yang masih sangat alami. Beberapa spot terkenal seperti Misool, Wayag, dan Arborek menjadi favorit para traveler untuk snorkeling, kayaking, atau sekadar menikmati sunset yang spektakuler. Meskipun aksesnya membutuhkan perjalanan panjang—biasanya melalui Sorong—keindahan Raja Ampat sepadan dengan usaha untuk mencapainya. Sebagai kawasan konservasi, pengunjung diharapkan menjaga kelestarian alam dengan tidak merusak terumbu karang atau membuang sampah sembarangan. Dengan kombinasi keajaiban bawah laut, budaya masyarakat lokal yang unik, dan panorama epik, Raja Ampat bukan sekadar destinasi wisata, melainkan pengalaman tak terlupakan yang memperlihatkan keagungan alam Indonesia.",
    link: "https://id.wikipedia.org/wiki/Raja_Ampat",
    prices: 150000.0,
    district: "Raja Ampat",
    province: "Papua Barat Daya",
    latitude: -0.2344,
    longitude: 130.5077,
  },
  {
    name: "Lembah Baliem",
    date: new Date("1960-01-01"),
    location: "Wamena",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c0/Vall%C3%A9e_de_Baliem_en_Papouasie_%28Indon%C3%A9sie%29_Trek.JPG",
    description:
      "Lembah subur di pegunungan tengah Papua yang menjadi tempat tinggal suku Dani, terkenal akan festival budayanya. Ini adalah destinasi wisata paling menakjubkan di Papua, terletak di ketinggian sekitar 1.600 meter di atas permukaan laut dan dikelilingi oleh pegunungan hijau yang menjulang tinggi. Lembah ini dikenal sebagai rumah bagi Suku Dani, salah satu kelompok etnis tradisional Papua yang masih mempertahankan cara hidup dan budaya asli mereka. Setiap tahun, Lembah Baliem menjadi tuan rumah Festival Lembah Baliem, sebuah acara spektakuler yang menampilkan perang-perangan simbolis (perang suku), tarian adat, musik tradisional, serta pameran kekayaan budaya suku-suku lokal seperti Dani, Lani, dan Yali. Selain kekayaan budayanya, Lembah Baliem menawarkan pemandangan alam yang memesona, dengan sawah terasering, sungai jernih, dan udara pegunungan yang sejuk. Pengunjung dapat menjelajahi desa-desa tradisional dengan rumah honai (rumah bundar beratap jerami), menyaksikan proses pembuatan alat-alat dari batu dan tulang, serta belajar tentang sistem pertanian tradisional yang telah berlangsung selama ratusan tahun. Trekking di sekitar lembah juga menjadi aktivitas populer, dengan rute yang melewati perkampungan adat, jembatan gantung, dan ngarai yang menakjubkan. Akses ke Lembah Baliem biasanya melalui kota Wamena, yang hanya bisa dicapai dengan penerbangan dari Jayapura. Meskipun infrastrukturnya masih sederhana, keindahan alam dan kedalaman budayanya menjadikan Lembah Baliem sebagai salah satu pengalaman wisata paling autentik di Indonesia. Destinasi ini cocok bagi para petualang dan pecinta budaya yang ingin melihat sisi lain dari Indonesia yang masih sangat alami dan penuh tradisi.",
    link: "https://id.wikipedia.org/wiki/Lembah_Baliem",
    prices: 50000.0,
    district: "Jayawijaya",
    province: "Papua",
    latitude: -4.0833,
    longitude: 138.95,
  },
  {
    name: "Danau Sentani",
    date: new Date("1950-01-01"),
    location: "Jayapura",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1a/Sentani_Lake.jpg",
    description:
      "Danau terbesar di Papua yang dikelilingi oleh perbukitan, tempat tinggal masyarakat adat yang hidup di rumah panggung. Terletak di Jayapura, Papua, dan merupakan danau terbesar di wilayah ini dengan luas sekitar 104 km². Dikelilingi oleh perbukitan hijau dan pemandangan alam yang memukau, danau ini menjadi salah satu destinasi wisata alam utama di Papua. Keunikan Danau Sentani tidak hanya terletak pada keindahan panoramanya, tetapi juga pada kehidupan budaya masyarakat adat yang tinggal di sekitarnya. Banyak penduduk lokal bermukim di rumah-rumah panggung tradisional di tepi danau, menjadikan kawasan ini sebagai tempat yang kaya akan warisan budaya dan tradisi. Selain menawarkan pemandangan yang menenangkan, Danau Sentani juga menjadi lokasi berbagai aktivitas wisata, seperti berperahu, memancing, dan mengunjungi pulau-pulau kecil di tengah danau. Salah satu daya tarik utamanya adalah Festival Danau Sentani, acara tahunan yang menampilkan tarian adat, ukiran khas Papua, serta perlombaan perahu tradisional. Air danau yang tenang dan jernih juga cocok untuk berenang atau sekadar bersantai menikmati suasana alam. Dengan keindahan alamnya yang masih alami dan kekayaan budayanya, Danau Sentani tidak hanya menjadi tempat wisata tetapi juga simbol harmoni antara manusia dan lingkungan. Pengunjung dapat merasakan kedamaian sekaligus mempelajari kehidupan tradisional masyarakat Papua yang masih menjaga kelestarian danau turun-temurun.",
    link: "https://id.wikipedia.org/wiki/Danau_Sentani",
    prices: 25000.0,
    district: "Jayapura",
    province: "Papua",
    latitude: -2.5667,
    longitude: 140.5,
  },
  {
    name: "Pantai Base-G",
    date: new Date("1970-01-01"),
    location: "Jayapura",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0c/Pantai_Base_G.jpg",
    description:
      "Pantai indah di dekat kota Jayapura yang terkenal karena sejarah Perang Dunia II dan panorama lautnya yang menawan. Salah satu destinasi wisata alam yang memukau di Jayapura, Papua. Pantai ini terkenal karena keindahan alamnya yang masih alami, dengan pasir putih yang lembut dan air laut biru jernih yang memantulkan cahaya matahari. Selain itu, Pantai Base-G juga memiliki nilai sejarah yang penting, karena dulunya menjadi lokasi pendaratan pasukan Sekutu pada masa Perang Dunia II. Bekas-bekas peninggalan perang, seperti reruntuhan bunker dan meriam, masih dapat ditemukan di sekitar pantai, menambah daya tariknya bagi para pecinta sejarah. Selain menawarkan pemandangan yang menakjubkan, Pantai Base-G juga menjadi tempat yang ideal untuk berenang, snorkeling, atau sekadar bersantai di tepi laut. Ombaknya yang tenang dan lingkungannya yang asri membuat pantai ini cocok untuk liburan keluarga maupun petualangan pribadi. Pengunjung juga bisa menikmati matahari terbenam yang spektakuler, dengan langit berwarna jingga keemasan yang memantul di permukaan air. Dengan tiket masuk yang terjangkau (sekitar Rp10.000), Pantai Base-G merupakan destinasi wajib bagi siapa pun yang berkunjung ke Jayapura. Keunikan Pantai Base-G terletak pada perpaduan antara keindahan alam dan nilai sejarahnya, menjadikannya salah satu spot wisata paling menarik di Papua. Jika Anda mencari pantai yang tenang, eksotis, dan sarat cerita, Pantai Base-G adalah pilihan yang sempurna.",
    link: "https://www.nativeindonesia.com/pantai-base-g/",
    prices: 10000.0,
    district: "Jayapura",
    province: "Papua",
    latitude: -2.5544,
    longitude: 140.7056,
  },
  {
    name: "Taman Nasional Lorentz",
    date: new Date("1997-01-01"),
    location: "Pegunungan Sudirman",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/23/Taman_Nasional_Lorentz.jpg",
    description:
      "Taman nasional terbesar di Asia Tenggara yang mencakup gletser tropis dan habitat satwa langka, termasuk burung cendrawasih. Taman Nasional Lorentz di Papua adalah salah satu kawasan konservasi terbesar di Asia Tenggara, membentang lebih dari 2,4 juta hektar dari puncak gunung bersalju hingga hutan bakau di pesisir. Dinamai dari penjelajah Belanda, Hendrikus Albertus Lorentz, taman nasional ini diakui UNESCO sebagai Situs Warisan Dunia karena keanekaragaman hayatinya yang luar biasa dan ekosistem yang masih perawan. Kawasan ini mencakup Pegunungan Sudirman dengan puncak tertinggi di Indonesia, yaitu Puncak Jaya (4.884 mdpl), yang memiliki gletser tropis langka. Selain itu, Taman Nasional Lorentz menjadi rumah bagi ratusan spesies endemik, termasuk burung cendrawasih yang ikonik, kanguru pohon, serta suku-suku asli seperti Amungme, Dani, dan Asmat yang hidup harmonis dengan alam. Keunikan Lorentz terletak pada variasi lanskapnya yang ekstrem, mulai dari padang rumput alpine, hutan hujan tropis, rawa sagu, hingga sungai-sungai besar seperti Sungai Memberamo. Bagi petualang, trekking ke Lembah Baliem atau ekspedisi ke Puncak Carstensz Pyramid menjadi tantangan yang memacu adrenalin. Namun, akses yang terbatas dan medan berat membuat kawasan ini hanya bisa dijelajahi dengan izin khusus dan pemandu lokal. Dengan nilai ekologis dan budaya yang tak ternilai, Taman Nasional Lorentz bukan sekadar destinasi wisata, melainkan laboratorium alam hidup yang menyimpan misteri evolusi dan keindahan purba Papua.",
    link: "https://id.wikipedia.org/wiki/Taman_Nasional_Lorentz",
    prices: 100000.0,
    district: "Mimika",
    province: "Papua Tengah",
    latitude: -4.0833,
    longitude: 137.1833,
  },

  // Maluku
  {
    name: "Pulau Bair",
    date: new Date("2010-01-01"),
    location: "Tual",
    image:
      "https://assets.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/indizone/2022/03/12/Yvsj6e4/pesona-pulau-bair-pulau-tak-berpenghuni-namun-cantik-bak-raja-ampat76.jpg",
    description:
      'Pulau kecil tak berpenghuni dengan dua teluk cantik dan tebing batu kapur, sering disamakan dengan Raja Ampat versi mini. Destinasi wisata yang tersembunyi di Maluku, tepatnya di dekat Kota Tual. Pulau kecil yang tidak berpenghuni ini sering disebut sebagai "Raja Ampat versi mini" karena keindahan alamnya yang memukau. Pulau ini dikelilingi oleh dua teluk cantik dengan air laut berwarna biru kehijauan yang jernih, membuatnya terlihat seperti surga tropis yang masih perawan. Tebing batu kapur yang menjulang tinggi menambah kesan dramatis pada pemandangan sekitarnya, sementara pasir putih halus membentang di sepanjang pantai, menciptakan kontras yang sempurna dengan birunya laut. Selain keindahan alamnya yang memesona, Pulau Bair juga menawarkan pengalaman snorkeling yang luar biasa. Terumbu karang yang sehat dan beragam biota laut, termasuk ikan-ikan warna-warni, dapat ditemukan di perairan dangkal sekitar pulau. Pengunjung juga bisa menjelajahi gua-gua kecil atau sekadar bersantai di bawah pohon kelapa yang teduh. Karena pulau ini belum banyak terjamah oleh wisatawan, suasana di sini sangat tenang dan alami, cocok bagi mereka yang ingin melarikan diri dari keramaian. Akses ke Pulau Bair biasanya dilakukan dengan menyewa perahu dari Tual, dengan waktu tempuh sekitar 1–2 jam, tergantung kondisi laut. Meskipun fasilitas di pulau ini masih sangat terbatas, keindahan alamnya yang masih alami menjadi daya tarik utama. Pulau Bair adalah destinasi sempurna bagi pecinta alam, fotografer, dan siapa pun yang ingin menikmati ketenangan di tengah keindahan alam Maluku yang memesona.',
    link: "https://www.nativeindonesia.com/pulau-bair/",
    prices: 20000.0,
    district: "Tual",
    province: "Maluku",
    latitude: -5.6261,
    longitude: 132.7318,
  },
  {
    name: "Benteng Amsterdam",
    date: new Date("1637-01-01"),
    location: "Hila, Ambon",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/Benteng_Amsterdam.jpg",
    description:
      "Situs bersejarah peninggalan kolonial Belanda yang terletak di Hila, Ambon, Maluku. Dibangun pada tahun 1637, benteng ini awalnya berfungsi sebagai pos perdagangan sekaligus pertahanan untuk menguasai perdagangan rempah-rempah, terutama cengkeh dan pala, yang menjadi komoditas berharga pada masa itu. Arsitekturnya yang kokoh dengan dinding tebal dan menara pengawas mencerminkan gaya bangunan Eropa abad ke-17, meskipun sebagian struktur telah mengalami pemugaran. Selain nilai sejarahnya, Benteng Amsterdam menawarkan pemandangan indah ke laut sekitarnya, yang dulunya menjadi jalur patroli kapal-kapal Belanda. Pengunjung dapat menjelajahi bagian dalam benteng, termasuk ruang penyimpanan meriam dan lorong-lorong yang menyimpan cerita dari masa lalu. Lokasinya yang berada di pesisir juga membuat benteng ini menjadi spot yang cocok untuk menikmati sunset sambil membayangkan bagaimana kehidupan pada era kolonial. Dengan tiket masuk yang sangat terjangkau (sekitar Rp5.000), benteng ini tidak hanya menarik pecinta sejarah tetapi juga wisatawan yang ingin mengeksplorasi warisan budaya Maluku. Keberadaannya menjadi bukti nyata betapa pentingnya Maluku dalam percaturan perdagangan dunia di masa lalu.",
    link: "https://id.wikipedia.org/wiki/Benteng_Amsterdam",
    prices: 5000.0,
    district: "Maluku Tengah",
    province: "Maluku",
    latitude: -3.6333,
    longitude: 128.1833,
  },
  {
    name: "Pantai Ngurtafur",
    date: new Date("2000-01-01"),
    location: "Kepulauan Kei",
    image:
      "https://www.rujukandesa.com/wp-content/uploads/2024/10/Pantai-Ngurtafur-1.jpg",
    description:
      "Terletak di Kepulauan Kei, Maluku, dan terkenal karena keunikannya yang memukau. Pantai ini memiliki hamparan pasir putih yang memanjang seperti lidah ke tengah laut, membentuk pemandangan spektakuler yang hanya muncul saat air surut. Saat ombak surut, pengunjung bisa berjalan di atas jalur pasir tersebut sambil dikelilingi air laut biru kehijauan yang jernih, menciptakan pengalaman seperti berjalan di atas laut. Keindahannya sering dibandingkan dengan Maldives atau Raja Ampat versi mini, menjadikannya salah satu destinasi tersembunyi terindah di Indonesia. Selain keunikan pasirnya, Pantai Ngurtafur juga menawarkan panorama alam yang masih sangat alami. Air lautnya yang tenang dan jernih cocok untuk berenang, snorkeling, atau sekadar menikmati ketenangan pantai yang jauh dari keramaian. Pengunjung juga bisa menyaksikan kehidupan bawah laut yang kaya akan terumbu karang dan ikan-ikan kecil yang berenang di sekitar perairan dangkal. Pantai ini dikelilingi oleh pepohonan hijau dan tebing karang yang menambah kesan eksotis, membuatnya sempurna untuk fotografi alam. Untuk mencapai Pantai Ngurtafur, pengunjung harus menempuh perjalanan dari Kota Tual menggunakan perahu sewaan. Meskipun lokasinya cukup terpencil, keindahannya sepadan dengan usaha untuk sampai ke sana. Pantai ini belum terlalu ramai dikunjungi wisatawan, sehingga suasana masih sangat privat dan alami. Jika ingin pengalaman terbaik, disarankan datang saat pagi atau sore hari untuk menghindari terik matahari sekaligus menikmati momen surut yang sempurna. Dengan pesona alamnya yang memesona, Pantai Ngurtafur merupakan destinasi wajib bagi para pencinta pantai yang ingin menikmati keindahan alam Maluku yang masih perawan. Pantai ini tidak hanya menawarkan pemandangan indah tetapi juga ketenangan yang sulit ditemukan di tempat lain.",
    link: "https://www.nativeindonesia.com/pantai-ngurtafur/",
    prices: 15000.0,
    district: "Maluku Tenggara",
    province: "Maluku",
    latitude: -5.7428,
    longitude: 132.7284,
  },
  {
    name: "Pantai Natsepa",
    date: new Date("1985-01-01"),
    location: "Suli, Ambon",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/81/Pantai_Natsepa.jpg",
    description:
      "Pantai indah dengan pasir putih yang luas dan air laut yang jernih. Terkenal dengan rujak natsepanya yang khas. Pantai Natsepa adalah salah satu destinasi wisata unggulan di Ambon, Maluku, yang terkenal dengan pesona alamnya yang menakjubkan. Pantai ini menawarkan hamparan pasir putih yang lembut dan air laut biru jernih, cocok untuk berenang, berjemur, atau sekadar bersantai menikmati angin pantai. Salah satu daya tarik utama Pantai Natsepa adalah rujak Natsepa, makanan khas yang menjadi ikon kuliner pantai ini. Rujak ini terbuat dari buah-buahan segar seperti mangga, nanas, dan bengkuang, disiram saus pedas manis yang menggugah selera. Selain keindahan alamnya, Pantai Natsepa juga dilengkapi dengan fasilitas wisata yang memadai, seperti gazebo, warung makan, dan area bermain anak. Pengunjung bisa menikmati pemandangan matahari terbenam yang memukau atau mencoba aktivitas air seperti snorkeling untuk melihat keindahan terumbu karang di sekitar pantai. Lokasinya yang hanya berjarak sekitar 15 km dari pusat kota Ambon membuat pantai ini mudah dijangkau, baik dengan kendaraan pribadi maupun transportasi umum. Dengan suasana yang tenang dan alam yang masih asri, Pantai Natsepa menjadi tempat yang sempurna untuk melepas penat sambil menikmati keindahan laut Maluku. Pantai ini cocok dikunjungi bersama keluarga, pasangan, atau sekadar sebagai tempat refleksi diri. Jika berkunjung ke Ambon, Pantai Natsepa adalah salah satu spot yang tidak boleh dilewatkan.",
    link: "https://phinemo.com/indahnya-pantai-natsepa-di-ambon/",
    prices: 10000.0,
    district: "Maluku Tengah",
    province: "Maluku",
    latitude: -3.6558,
    longitude: 128.2697,
  },
  {
    name: "Pantai Ora",
    date: new Date("1995-01-01"),
    location: "Seram Utara, Maluku Tengah",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Pantai_Ora_1.jpg",
    description:
      'Sebuah surga tersembunyi di Maluku Tengah, tepatnya di Pulau Seram, yang sering dijuluki sebagai "Maldives-nya Indonesia". Pantai ini menawarkan pemandangan menakjubkan dengan pasir putih halus, air laut sebening kristal berwarna biru kehijauan, dan deretan pepohonan kelapa yang menambah kesan eksotis. Yang membuat Pantai Ora begitu istimewa adalah pemandangan bawah lautnya yang memukau, dengan terumbu karang sehat dan beragam ikan tropis, menjadikannya tempat ideal untuk snorkeling dan diving. Selain keindahan alamnya, Pantai Ora juga dikelilingi oleh perbukitan hijau yang menciptakan latar belakang dramatis, terutama saat matahari terbenam. Pengunjung dapat menginap di resort-resort tepi pantai yang berbentuk rumah panggung tradisional, memberikan pengalaman menginap unik di tengah ketenangan alam. Aktivitas lain yang bisa dinikmati termasuk berperahu mengelilingi teluk, memancing, atau sekadar bersantai menikmati suasana pantai yang masih sangat alami. Pantai Ora relatif lebih sepi dibanding destinasi wisata populer lainnya, sehingga cocok bagi traveler yang mencari ketenangan dan keaslian alam. Untuk mencapainya, pengunjung harus menempuh perjalanan darat dan laut dari Ambon, tetapi semua usaha tersebut terbayar lunas begitu tiba di surga tropis yang memesona ini. Dengan keindahannya yang masih terjaga, Pantai Ora menjadi salah satu destinasi wajib bagi pecinta pantai dan petualang laut di Indonesia.',
    link: "https://www.nativeindonesia.com/pantai-ora/",
    prices: 25000.0,
    district: "Maluku Tengah",
    province: "Maluku",
    latitude: -2.9281,
    longitude: 129.2878,
  },

  // Banten
  {
    name: "Pantai Anyer",
    date: new Date("1920-01-01"),
    location: "Anyer, Serang",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/75/Anyer.jpeg",
    description:
      "Pantai dengan pasir putih paling populer di Banten, terletak di pesisir barat Pulau Jawa. Pantai ini terkenal dengan hamparan pasir putihnya yang luas dan pemandangan menakjubkan ke arah Selat Sunda, di mana Gunung Krakatau dapat terlihat di kejauhan pada hari yang cerah. Anyer menjadi favorit wisatawan lokal maupun mancanegara karena jaraknya yang relatif dekat dari Jakarta, membuatnya ideal untuk liburan akhir pekan atau trip singkat. Selain berjemur dan berenang, pengunjung bisa menikmati berbagai aktivitas seperti jetski, banana boat, atau sekadar bersantai di pinggir pantai sambil menikmati kelapa muda. Pada malam hari, Pantai Anyer berubah menjadi tempat yang romantis dengan gemerlap lampu dari restoran dan penginapan tepi pantai. Banyak resort dan hotel menawarkan pengalaman menginap dengan pemandangan langsung ke laut, dilengkapi fasilitas seperti kolam renang dan spa. Salah satu daya tarik utama Anyer adalah mercusuarnya yang ikonik, Mercusuar Cikoneng, yang dibangun pada masa kolonial Belanda dan masih berfungsi hingga kini. Pantai ini juga menjadi titik awal jalur lintas selatan Jawa yang terkenal dengan pemandangan alamnya. Dengan kombinasi keindahan alam, fasilitas wisata yang lengkap, dan aksesibilitas yang mudah, Pantai Anyer tetap menjadi salah satu destinasi pantai paling diminati di Jawa Barat. Selain itu, pantai ini sering menjadi lokasi acara musik atau festival kuliner, menambah daya tariknya sebagai tempat wisata yang serba bisa.",
    link: "https://www.nativeindonesia.com/pantai-anyer/",
    prices: 15000.0,
    district: "Serang",
    province: "Banten",
    latitude: -6.2994,
    longitude: 105.8688,
  },
  {
    name: "Taman Nasional Ujung Kulon",
    date: new Date("1992-01-01"),
    location: "Pandeglang",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/cb/TAMAN_NASIONAL_UJUNG_KULON.jpg",
    description:
      "Kawasan konservasi terpenting di Indonesia, terletak di ujung barat Pulau Jawa, tepatnya di Kabupaten Pandeglang, Banten. Sebagai situs warisan dunia UNESCO, taman nasional ini terkenal sebagai habitat terakhir badak Jawa (Rhinoceros sondaicus), salah satu mamalia paling langka di dunia. Selain badak, kawasan ini juga menjadi rumah bagi berbagai satwa dilindungi seperti banteng Jawa, owa Jawa, dan berbagai spesies burung. Ekosistemnya yang beragam mencakup hutan hujan tropis, padang rumput, mangrove, dan pantai berpasir putih yang masih alami. Salah satu daya tarik utama Taman Nasional Ujung Kulon adalah Pulau Peucang, sebuah pulau kecil dengan pantai eksotis dan air laut jernih yang ideal untuk snorkeling. Pengunjung juga dapat menjelajahi Semenanjung Handeuleum untuk melihat satwa liar atau menyusuri sungai di tengah hutan mangrove. Selain itu, terdapat Gunung Krakatau Junior yang terbentuk pasca-erupsi Krakatau pada 1883, menambah nilai geologis kawasan ini. Aktivitas wisata yang populer meliputi trekking, pengamatan satwa, dan eksplorasi pantai. Untuk masuk ke taman nasional, pengunjung perlu membayar tiket dan disarankan menggunakan pemandu lokal agar lebih aman dan informatif. Dengan keunikan alamnya yang masih terjaga, Taman Nasional Ujung Kulon tidak hanya menjadi destinasi ekoturisme tetapi juga laboratorium alami bagi penelitian dan konservasi keanekaragaman hayati.",
    link: "https://id.wikipedia.org/wiki/Taman_Nasional_Ujung_Kulon",
    prices: 25000.0,
    district: "Pandeglang",
    province: "Banten",
    latitude: -6.755,
    longitude: 105.3722,
  },
  {
    name: "Masjid Agung Banten",
    date: new Date("1566-01-01"),
    location: "Serang",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/69/Masjid_agung_banten_lama.jpg",
    description:
      "Masjid tertua di Indonesia yang memiliki nilai sejarah dan arsitektur yang khas. Dibangun pada tahun 1566 oleh Sultan Maulana Hasanuddin, putra Sunan Gunung Jati, masjid ini menjadi saksi bisu kejayaan Kesultanan Banten sebagai pusat penyebaran Islam di Jawa Barat. Arsitekturnya memadukan unsur tradisional Jawa, Eropa (Belanda), dan Tiongkok, menciptakan gaya unik yang tidak ditemukan di masjid-masjid lain di Nusantara. Salah satu ciri khasnya adalah menara setinggi 24 meter yang menyerupai mercusuar, digunakan dahulu sebagai tempat mengumandangkan azan sekaligus menara pengawas pelabuhan Banten. Selain sebagai tempat ibadah, Masjid Agung Banten juga menjadi destinasi wisata religi dan ziarah. Di kompleks masjid, terdapat makam sultan-sultan Banten, termasuk Sultan Ageng Tirtayasa, salah satu pahlawan nasional. Pengunjung dapat melihat peninggalan sejarah seperti bedug raksasa, kolam pemandian, dan serambi yang luas. Lokasinya yang terletak di pusat Kota Serang membuat masjid ini mudah diakses, baik untuk wisatawan maupun peziarah. Dengan nilai sejarah yang kuat dan keindahan arsitekturnya, Masjid Agung Banten tetap menjadi simbol keislaman dan kebudayaan Banten yang lestari hingga saat ini.",
    link: "https://id.wikipedia.org/wiki/Masjid_Agung_Banten",
    prices: 0,
    district: "Serang",
    province: "Banten",
    latitude: -6.0322,
    longitude: 106.1584,
  },
  {
    name: "Kampung Adat Baduy",
    date: new Date("1400-01-01"),
    location: "Lebak",
    image: "https://romansabandung.com/wp-content/uploads/2023/12/img_0948.jpg",
    description:
      "Terletak di wilayah Pegunungan Kendeng, Kabupaten Lebak, Banten, dan merupakan rumah bagi Suku Baduy, masyarakat adat yang masih mempertahankan tradisi leluhur secara ketat. Terbagi menjadi dua kelompok, yaitu Baduy Dalam (yang paling tradisional) dan Baduy Luar (lebih terbuka terhadap pengaruh luar), kampung ini menawarkan pengalaman wisata budaya yang autentik. Keunikan Kampung Baduy terletak pada gaya hidupnya yang sederhana, jauh dari teknologi modern seperti listrik, kendaraan bermotor, atau bahkan alas kaki. Rumah-rumah di sini dibangun dari bahan alami seperti bambu dan kayu, dengan atap dari daun ijuk, mencerminkan harmoni antara manusia dan alam. Masyarakat Baduy dikenal dengan kepercayaan Sunda Wiwitan, yang mengajarkan keseimbangan hidup dan larangan merusak lingkungan. Mereka menolak penggunaan pupuk kimia dalam bertani, sehingga hasil pertanian seperti padi, buah, dan sayuran ditanam secara organik. Pengunjung yang datang ke Kampung Baduy dapat merasakan pengalaman berjalan kaki menyusuri jalan setapak berbatu, menginap di rumah penduduk, atau menyaksikan aktivitas sehari-hari seperti menenun kain dari kapas dan membuat kerajinan tangan. Salah satu momen terbaik untuk berkunjung adalah saat upacara Seba Baduy, di mana masyarakat Baduy turun ke kota untuk menyerahkan hasil bumi kepada pemerintah setempat sebagai bentuk syukur. Meskipun terbuka untuk wisatawan, Kampung Baduy memiliki aturan ketat, seperti larangan memotret di wilayah Baduy Dalam atau membawa barang berbahan plastik. Tidak ada biaya masuk resmi, tetapi pengunjung disarankan membawa oleh-beras atau gula sebagai tanda hormat. Dengan ketenangan alamnya dan nilai-nilai tradisional yang masih terjaga, Kampung Adat Baduy menjadi destinasi yang sempurna bagi mereka yang ingin melepaskan diri dari keramaian kota dan belajar tentang kehidupan yang sederhana namun penuh makna.",
    link: "https://www.nativeindonesia.com/kampung-baduy/",
    prices: 0,
    district: "Lebak",
    province: "Banten",
    latitude: -6.5075,
    longitude: 106.3092,
  },
  {
    name: "Pulau Umang",
    date: new Date("2005-01-01"),
    location: "Pandeglang",
    image:
      "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/132/2023/11/30/Pulau-Umang-4262525368.png",
    description:
      'Resor wisata eksklusif yang terletak di lepas pantai Pandeglang, Banten. Dikelilingi oleh perairan biru jernih dan pasir putih yang lembut, pulau ini menawarkan suasana privat yang sempurna untuk berlibur, terutama bagi pasangan yang sedang berbulan madu atau traveler yang ingin menikmati ketenangan alam. Pulau ini dikembangkan sebagai kawasan resor mewah dengan fasilitas lengkap, termasuk villa berbentuk rumah panggung tradisional yang menghadap langsung ke laut, kolam renang infinity, spa, dan restoran yang menyajikan hidangan laut segar. Selain bersantai, pengunjung bisa menikmati berbagai aktivitas seperti snorkeling, kayaking, atau sekadar berjalan-jalan di sekitar pulau yang dipenuhi pepohonan tropis. Salah satu daya tarik utama Pulau Umang adalah jembatan kayu yang membentang di atas laut, menghubungkan pulau dengan sebuah bukit kecil yang menawarkan pemandangan panorama laut lepas yang memukau, terutama saat matahari terbenam. Akses ke pulau ini relatif mudah, hanya membutuhkan waktu sekitar 30 menit dengan perahu dari Pantai Sumur, Pandeglang. Dengan konsep "Private Island Getaway", Pulau Umang menggabungkan kemewahan modern dengan keindahan alam tropis yang masih asri, menjadikannya salah satu destinasi unggulan di Banten.',
    link: "https://www.tripadvisor.com/Attraction_Review-g8447003-d8414204-Reviews-Pulau_Umang-Pulau_Umang_Banten_Province_Java.html",
    prices: 50000.0,
    district: "Pandeglang",
    province: "Banten",
    latitude: -6.7171,
    longitude: 105.6722,
  },

  // Lampung
  {
    name: "Taman Nasional Way Kambas",
    date: new Date("1985-01-01"),
    location: "Lampung Timur",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/26/Way_Kambas.JPG",
    description:
      "Kawasan konservasi terpenting di Indonesia, terletak di Lampung Timur, Provinsi Lampung. Taman nasional ini terkenal sebagai pusat perlindungan gajah Sumatera (Elephas maximus sumatranus), yang merupakan spesies terancam punah. Selain gajah, Way Kambas juga menjadi habitat bagi berbagai satwa langka seperti harimau Sumatera, badak Sumatera, tapir, dan ratusan spesies burung. Kawasan seluas sekitar 1.300 km² ini terdiri dari hutan dataran rendah, rawa, dan sungai yang membentuk ekosistem unik. Salah satu daya tarik utama Taman Nasional Way Kambas adalah Pusat Konservasi Gajah (PKG), tempat pengunjung dapat melihat langsung pelatihan gajah, menyaksikan atraksi gajah yang terlatih, atau bahkan mencoba naik gajah dengan dipandu mahout (pawang gajah). Selain itu, terdapat fasilitas Sekolah Gajah yang bertujuan melatih gajah-gajah liar agar dapat berinteraksi dengan manusia tanpa kehilangan insting alaminya. Bagi pecinta alam, kegiatan seperti trekking, birdwatching, dan menyusuri sungai dengan perahu tradisional menjadi pengalaman yang tak terlupakan. Way Kambas juga memiliki nilai sejarah dan edukasi yang tinggi. Sejak didirikan pada tahun 1985, taman nasional ini telah menjadi pusat penelitian dan rehabilitasi satwa liar. Pengunjung dapat belajar tentang upaya penyelamatan gajah dan tantangan konservasi di Indonesia. Untuk menikmati suasana lebih eksklusif, tersedia penginapan sederhana di sekitar kawasan. Dengan keanekaragaman hayati dan perannya dalam pelestarian alam, Taman Nasional Way Kambas tidak hanya menjadi destinasi wisata, tetapi juga simbol penting dalam perlindungan satwa liar Sumatera. Kunjungan ke sini akan memberikan kesadaran lebih dalam tentang pentingnya menjaga keseimbangan ekosistem bagi generasi mendatang.",
    link: "https://id.wikipedia.org/wiki/Taman_Nasional_Way_Kambas",
    prices: 25000.0,
    district: "Lampung Timur",
    province: "Lampung",
    latitude: -5.1264,
    longitude: 105.6535,
  },
  {
    name: "Pantai Mutun",
    date: new Date("1990-01-01"),
    location: "Pesawaran",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/cd/Pantai_mutun.jpg",
    description:
      "Wisata pantai terpopuler di Lampung, terletak di Kecamatan Padang Cermin, Kabupaten Pesawaran. Pantai ini terkenal dengan pasir putihnya yang lembut dan air laut yang jernih, cocok untuk berenang, bermain air, atau sekadar bersantai di tepi pantai. Dikelilingi oleh bukit-bukit hijau, Pantai Mutun menawarkan pemandangan alam yang menenangkan dan udara segar yang jauh dari keramaian kota. Lokasinya yang hanya berjarak sekitar 25 km dari Bandar Lampung membuatnya mudah dijangkau, baik dengan kendaraan pribadi maupun transportasi umum. Selain keindahan alamnya, Pantai Mutun juga dilengkapi dengan berbagai fasilitas wisata, seperti gazebo, warung makan seafood, dan area bermain anak. Pengunjung dapat menikmati hidangan laut segar sambil menikmati pemandangan Teluk Lampung. Salah satu daya tarik utama pantai ini adalah Pulau Tangkil, sebuah pulau kecil di seberang Pantai Mutun yang bisa dikunjungi dengan menyewa perahu nelayan. Di Pulau Tangkil, pengunjung bisa snorkeling atau sekadar menikmati suasana pantai yang lebih sepi. Pantai Mutun juga menjadi tempat yang ideal untuk melihat matahari terbenam, dengan gradasi warna langit yang memukau. Meskipun ramai dikunjungi pada akhir pekan, pantai ini tetap nyaman karena luasnya area pantai yang bisa menampung banyak pengunjung. Dengan tiket masuk yang terjangkau, Pantai Mutun cocok untuk liburan keluarga, piknik, atau sekadar melepas penat setelah beraktivitas. Keindahan alamnya yang alami dan fasilitas yang memadai menjadikan Pantai Mutun salah satu destinasi wajib saat berkunjung ke Lampung.",
    link: "https://www.nativeindonesia.com/pantai-mutun/",
    prices: 10000.0,
    district: "Pesawaran",
    province: "Lampung",
    latitude: -5.5288,
    longitude: 105.315,
  },
  {
    name: "Puncak Mas",
    date: new Date("2017-01-01"),
    location: "Bandar Lampung",
    image:
      "https://storage.googleapis.com/seo-cms/assets/large_Wisata_Puncak_Mas_Lampung_66a3a55ac6/large_Wisata_Puncak_Mas_Lampung_66a3a55ac6.jpg",
    description:
      "Destinasi wisata kekinian yang populer di Bandar Lampung yang menawarkan pemandangan kota dari ketinggian. Terletak di perbukitan, tempat ini menjadi favorit wisatawan lokal maupun luar kota karena udaranya yang sejuk dan pemandangan alamnya yang memukau, terutama saat matahari terbit atau terbenam. Selain itu, Puncak Mas juga dilengkapi dengan berbagai spot foto instagramable, seperti ayunan di tepi bukit, rumah pohon, dan dekorasi taman yang menarik. Pengunjung dapat menikmati suasana santai sambil menyeruput kopi atau makanan ringan di kafe-kafe yang tersedia. Dengan tiket masuk yang terjangkau, Puncak Mas menjadi pilihan tepat untuk bersantai, berfoto, atau sekadar menikmati keindahan alam Lampung dari atas. Tempat ini semakin ramai dikunjungi pada akhir pekan dan hari libur, sehingga disarankan datang lebih awal untuk menghindari keramaian.",
    link: "https://www.nativeindonesia.com/puncak-mas-lampung/",
    prices: 20000.0,
    district: "Bandar Lampung",
    province: "Lampung",
    latitude: -5.4024,
    longitude: 105.2654,
  },
  {
    name: "Pantai Tanjung Setia",
    date: new Date("1980-01-01"),
    location: "Pesisir Barat",
    image:
      "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/583/2024/01/27/Picsart_24-01-27_16-30-47-809-1843991925.jpg",
    description:
      "Pantai Tanjung Setia terletak di Kabupaten Pesisir Barat, Lampung, dan dikenal sebagai salah satu destinasi selancar terbaik di Indonesia. Salah satu pantai terbaik di Indonesia untuk berselancar dengan ombak tinggi yang menarik wisatawan mancanegara. Pantai ini menawarkan ombak tinggi dan konsisten sepanjang tahun, terutama pada musim tertentu, sehingga menarik para peselancar lokal maupun internasional. Ombaknya bisa mencapai ketinggian 4–6 meter, menjadikannya tempat yang ideal untuk mereka yang mencari tantangan. Selain itu, pantai ini masih relatif sepi dan alami, dengan hamparan pasir putih yang luas dan pemandangan laut lepas yang memukau. Selain aktivitas selancar, Pantai Tanjung Setia juga cocok untuk menikmati sunset yang spektakuler atau sekadar bersantai di tepi pantai. Udara yang segar dan suasana tenang menjadikannya tempat yang sempurna untuk melepas penat. Pengunjung juga bisa menjelajahi area sekitar, termasuk perkebunan kelapa dan pemukiman nelayan tradisional yang menambah nuansa kearifan lokal. Fasilitas di sekitar pantai masih terbatas, sehingga disarankan membawa perlengkapan sendiri. Namun, justru kesederhanaan inilah yang menjaga keaslian pantai dan membuatnya semakin istimewa. Dengan keindahan alamnya yang memesona dan ombak yang menantang, Pantai Tanjung Setia tidak hanya menjadi surga bagi peselancar tetapi juga destinasi wisata yang cocok bagi pencinta alam dan petualangan. Jika berkunjung, pastikan untuk memerhatikan kondisi cuaca dan keselamatan, terutama jika ingin berselancar di ombak yang besar.",
    link: "https://ksmtour.com/informasi/tempat-wisata/indonesia/sumatera/lampung/pantai-tanjung-setia.html",
    prices: 5000.0,
    district: "Pesisir Barat",
    province: "Lampung",
    latitude: -5.2034,
    longitude: 104.4056,
  },
  {
    name: "Pulau Pahawang",
    date: new Date("2000-01-01"),
    location: "Pesawaran",
    image: "https://bantentv.com/wp-content/uploads/2024/02/Pulau-Pahwang.jpg",
    description:
      'Pulau Pahawang adalah salah satu destinasi wisata bahari terindah di Lampung, terletak di Kecamatan Punduh Pidada, Kabupaten Pesawaran. Pulau ini terkenal dengan kejernihan air lautnya yang membiru dan pasir putih yang halus, menciptakan pemandangan pantai tropis yang memukau. Dikelilingi oleh terumbu karang yang masih alami, Pulau Pahawang menjadi surga bagi para penyelam dan pecinta snorkeling. Kehidupan bawah lautnya sangat kaya, dengan beragam jenis ikan hias, koral warna-warni, dan bahkan penyu hijau yang sering terlihat berenang di perairan dangkal. Pulau ini terbagi menjadi dua bagian, yaitu Pahawang Besar dan Pahawang Kecil, masing-masing menawarkan keunikan tersendiri. Pahawang Kecil lebih populer di kalangan wisatawan karena pantainya yang landai dan spot snorkeling terbaiknya, sementara Pahawang Besar memiliki pemukiman penduduk dan suasana yang lebih tenang. Salah satu daya tarik utama di sini adalah "Pasir Timbul", sebuah hamparan pasir putih yang muncul saat air laut surut, menciptakan pemandangan seperti pulau mini di tengah laut. Selain menikmati keindahan alam bawah laut, pengunjung juga bisa melakukan berbagai aktivitas seperti berenang, kayaking, atau sekadar bersantai di tepi pantai sambil menikmati kelapa muda segar. Pulau Pahawang juga kerap menjadi lokasi camping bagi para backpacker yang ingin menikmati malam di bawah bintang dengan suasana pantai yang tenang. Akses menuju Pulau Pahawang biasanya dimulai dari Dermaga Ketapang di Bandar Lampung atau Dermaga Hanura di Pesawaran, dengan perjalanan menggunakan kapal speedboat sekitar 1–1,5 jam. Waktu terbaik untuk berkunjung adalah pada musim kemarau (April–September) ketika ombak tenang dan visibilitas air laut sangat jernih. Dengan keindahan alamnya yang masih terjaga, Pulau Pahawang tidak hanya menjadi kebanggaan Lampung tetapi juga salah satu destinasi wisata bahari terbaik di Sumatera.',
    link: "https://id.wikipedia.org/wiki/Pulau_Pahawang",
    prices: 30000.0,
    district: "Pesawaran",
    province: "Lampung",
    latitude: -5.6046,
    longitude: 105.2232,
  },

  // Riau
  {
    name: "Pulau Rupat",
    date: new Date("1995-01-01"),
    location: "Rupat",
    image:
      "https://ppid.bengkaliskab.go.id/asset/berita/original/22058223865-48693877203-pulau-rupat-riau_medium.jpg",
    description:
      "Pulau Rupat adalah sebuah pulau yang terletak di pesisir timur Provinsi Riau. Pulau ini terkenal dengan keindahan pantainya yang masih alami, dengan pasir putih yang bersih dan air laut yang jernih. Pulau Rupat juga memiliki keanekaragaman hayati yang melimpah, termasuk hutan mangrove yang menjadi habitat bagi berbagai spesies burung dan ikan. Pengunjung dapat menikmati kegiatan snorkeling, berenang, atau hanya berjemur di pantai. Selain keindahan alamnya, Pulau Rupat juga dikenal dengan keramahan masyarakat setempat yang menjaga kearifan lokal.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fppid.bengkaliskab.go.id%2Fweb%2Fdetailberita%2F3490%2Fpulau-rupat-bakal-dijadikan-beranda-pariwisata-indonesia-&psig=AOvVaw1CkBOY4w7BiD-X-ByF95Aq&ust=1744640299061000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCMDPqtuZ1YwDFQAAAAAdAAAAABAv",
    prices: 50000,
    district: "Rupat",
    province: "Riau",
    latitude: 1.4144,
    longitude: 103.4653,
  },
  {
    name: "Taman Nasional Bukit Tiga Puluh",
    date: new Date("1995-01-01"),
    location: "Riau",
    image:
      "https://ruangriau.com/assets/berita/original/39148604908-bukit-30.jpg",
    description:
      "Taman Nasional Bukit Tiga Puluh adalah salah satu kawasan konservasi terbesar di Riau. Taman ini terkenal dengan keberagaman flora dan fauna yang sangat kaya, termasuk spesies langka seperti harimau sumatera, gajah, dan orangutan. Taman Nasional Bukit Tiga Puluh juga merupakan salah satu tempat terbaik untuk melakukan trekking, birdwatching, dan camping bagi para pecinta alam. Dengan berbagai ekosistem yang meliputi hutan hujan tropis dan savana, taman ini menjadi destinasi penting bagi wisatawan yang ingin menikmati keindahan alam Indonesia sambil berkontribusi dalam konservasi alam.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fruangriau.com%2Fnews%2Fdetail%2F1350%2Fsurga-yang-tersembunyi-di-taman-nasional-bukit-tiga-puluh-riau&psig=AOvVaw3kNpJMfrDRFIF2-grBIR6v&ust=1744640333819000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDnnuyZ1YwDFQAAAAAdAAAAABAI",
    prices: 25000,
    district: "Riau",
    province: "Riau",
    latitude: 0.8297,
    longitude: 101.7134,
  },
  {
    name: "Danau Bawah",
    date: new Date("2000-01-01"),
    location: "Riau",
    image:
      "https://asset.kompas.com/crops/1Xh_puF-fhwDubBbBy-EndDJ3p8=/0x75:1000x575/1200x800/data/photo/2022/09/13/632070ac052e4.jpg",
    description:
      "Danau Bawah adalah danau yang terletak di kawasan perbukitan di Riau. Danau ini menawarkan pemandangan alam yang luar biasa dengan air yang jernih, dikelilingi oleh hutan tropis yang masih alami. Danau Bawah menjadi tempat yang ideal untuk kegiatan trekking, berkemah, atau sekedar menikmati keindahan alam sekitar. Dengan suasana yang tenang dan jauh dari keramaian, Danau Bawah menjadi salah satu destinasi favorit bagi wisatawan yang ingin menikmati ketenangan alam.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fregional.kompas.com%2Fread%2F2023%2F02%2F12%2F144539978%2Fdanau-diatas-dan-danau-dibawah-pesona-danau-kembar-di-sumatera-barat%3Fpage%3Dall&psig=AOvVaw1zI-LLg-yMRmnyono2AWCh&ust=1744640356391000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKiJ8PaZ1YwDFQAAAAAdAAAAABAE",
    prices: 20000,
    district: "Riau",
    province: "Riau",
    latitude: 0.5898,
    longitude: 101.4591,
  },
  {
    name: "Pantai Selat Baru",
    date: new Date("2005-01-01"),
    location: "Riau",
    image:
      "https://bengkaliskab.go.id/upload/direktori/2023/cw34iYgKUo/2023-02-10-094640-62720178114-selatbaru.jpg",
    description:
      "Pantai Selat Baru adalah salah satu destinasi wisata pantai yang terkenal di Riau, terletak di daerah Bengkalis. Pantai ini dikenal dengan pasir putih yang halus, air laut yang jernih, dan pemandangan matahari terbenam yang spektakuler. Pantai Selat Baru menjadi tempat yang populer untuk wisatawan yang ingin bersantai, berenang, atau berkemah di tepi pantai. Selain keindahan alamnya, kawasan ini juga memiliki berbagai fasilitas wisata seperti restoran seafood, homestay, dan tempat-tempat untuk menikmati kuliner khas Riau.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbengkaliskab.go.id%2Findex.php%2Fdirektori%2Fpantai-selat-baru&psig=AOvVaw1ZLw06WTnoc0GJBXLd_jO_&ust=1744640395707000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLju1oqa1YwDFQAAAAAdAAAAABAY",
    prices: 10000,
    district: "Bengkalis",
    province: "Riau",
    latitude: 1.3956,
    longitude: 101.4353,
  },
  {
    name: "Kepulauan Karimun",
    date: new Date("2000-01-01"),
    location: "Karimun, Riau",
    image:
      "https://asset-2.tstatic.net/tribunnewswiki/foto/bank/images/Kepulauan-Karimunjawa-0987.jpg",
    description:
      "Kepulauan Karimun adalah gugusan pulau yang terletak di Selat Malaka dan merupakan bagian dari Provinsi Riau. Kepulauan ini menawarkan keindahan alam yang luar biasa dengan pantai-pantai yang masih alami dan ekosistem laut yang kaya. Karimun juga dikenal dengan tempat snorkeling dan diving yang menarik, dengan berbagai biota laut yang dapat ditemukan di sekitar pulau-pulau kecilnya. Sebagai destinasi wisata yang sedang berkembang, Karimun menjadi pilihan yang tepat bagi wisatawan yang ingin menikmati suasana pantai tropis yang tenang.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tribunnewswiki.com%2F2022%2F12%2F27%2Fkepulauan-karimunjawa&psig=AOvVaw0y0F06BHlfROJzznKWvob6&ust=1744640431420000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCeu5ua1YwDFQAAAAAdAAAAABAE",
    prices: 50000,
    district: "Karimun",
    province: "Riau",
    latitude: 0.8912,
    longitude: 103.3845,
  },

  // Sumatera Utara
  {
    name: "Danau Toba",
    date: new Date("2001-01-01"),
    location: "Sumatera Utara",
    image:
      "https://www.kemenparekraf.go.id/_next/image?url=https%3A%2F%2Fapi2.kemenparekraf.go.id%2Fstorage%2Fapp%2Fuploads%2Fpublic%2F662%2F87a%2Fac6%2F66287aac6107a814688976.jpg&w=3840&q=75",
    description:
      "Danau Toba adalah danau vulkanik terbesar di dunia yang terletak di Sumatera Utara. Terbentuk akibat letusan supervulkan yang terjadi ribuan tahun yang lalu, Danau Toba memiliki panjang sekitar 100 km dan lebar 30 km. Keindahannya tak tertandingi, dengan air yang jernih dan pemandangan sekitar yang dikelilingi perbukitan hijau dan pegunungan. Di tengah danau ini terdapat Pulau Samosir, yang menjadi salah satu destinasi wisata utama di kawasan tersebut. Pulau Samosir menawarkan pemandangan alam yang luar biasa, serta budaya Batak yang sangat kental. Anda bisa mengunjungi desa-desa tradisional Batak di Samosir, yang memiliki rumah adat dan proses pembuatan kain tenun Ulos yang merupakan simbol pemberian berkah dalam masyarakat Batak. Selain itu, Danau Toba juga dikenal dengan berbagai aktivitas wisata, seperti berperahu, memancing, bersepeda, dan trekking di sekitar danau. Aktivitas berperahu sangat populer karena memungkinkan pengunjung menikmati pemandangan danau yang luas dan pemandangan alam sekitarnya. Pulau Samosir memiliki banyak tempat wisata yang menarik, seperti makam Raja Sidabutar di Tomok, air terjun Situmurun yang mengesankan, serta objek wisata sejarah lainnya. Keindahan alam, budaya lokal yang unik, dan berbagai aktivitas outdoor menjadikan Danau Toba sebagai salah satu destinasi wisata paling terkenal di Indonesia. Selain keindahannya, Danau Toba juga memiliki nilai sejarah yang sangat penting, karena letusan besar yang membentuk danau ini diperkirakan sebagai salah satu letusan terbesar dalam sejarah bumi. Dengan segala keindahan alam dan nilai sejarahnya, Danau Toba tidak hanya menjadi tempat wisata, tetapi juga tempat untuk merefleksikan kekuatan alam dan budaya yang sangat dalam.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kemenparekraf.go.id%2Fhasil-pencarian%2Ffakta-menarik-tentang-pulau-samosir-punya-ritual-yang-unik&psig=AOvVaw1GuRd1gRxo2HwUaOodjqP_&ust=1744640453069000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLDf_aSa1YwDFQAAAAAdAAAAABAI",
    prices: 20000,
    district: "Toba Samosir",
    province: "Sumatera Utara",
    latitude: 2.115,
    longitude: 98.9,
  },
  {
    name: "Bukit Lawang",
    date: new Date("2001-01-01"),
    location: "Sumatera Utara",
    image: "https://bolumenara.co.id/uploads/8/2023-10/bukit_lawang.png",
    description:
      "Bukit Lawang adalah desa kecil yang terletak di tepi Sungai Bohorok, Kabupaten Langkat, Sumatera Utara. Bukit Lawang terkenal sebagai pintu masuk menuju Taman Nasional Gunung Leuser, yang merupakan salah satu kawasan konservasi terbesar di dunia dan rumah bagi orangutan Sumatera. Taman Nasional Gunung Leuser juga terkenal dengan keberagaman hayatinya yang sangat kaya, termasuk harimau sumatera, gajah, dan berbagai spesies langka lainnya. Bukit Lawang menawarkan pengalaman trekking yang luar biasa, di mana pengunjung dapat berjalan melalui hutan tropis yang lebat dan menikmati keindahan alam yang masih alami. Salah satu kegiatan utama yang sangat populer di Bukit Lawang adalah trekking untuk melihat orangutan Sumatera di habitat aslinya. Dalam trekking ini, pengunjung dapat melihat orangutan yang dilatih untuk kembali ke alam liar setelah rehabilitasi. Bukit Lawang juga menawarkan pengunjung kesempatan untuk belajar lebih banyak tentang upaya konservasi orangutan dan pentingnya melindungi habitat alami mereka. Selain trekking, pengunjung juga dapat menikmati kegiatan seperti tubing di Sungai Bohorok, yang memberikan pengalaman menyegarkan saat menyusuri sungai yang jernih dan berkelok-kelok di tengah hutan. Bukit Lawang adalah tempat yang sempurna bagi mereka yang ingin menikmati petualangan alam, sekaligus memberi dukungan pada konservasi spesies yang terancam punah. Selain keindahan alam, Bukit Lawang juga memiliki banyak penginapan yang ramah wisatawan, restoran, dan warung yang menyajikan makanan tradisional. Desa ini juga menjadi tempat yang cocok bagi para pencinta alam yang ingin menikmati ketenangan dan keindahan alam Indonesia.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbolumenara.co.id%2Fartikel%2Fdetail%2Fbukit-lawang-daya-tarik-lokasi-harga-tiket-dan-fasilitas&psig=AOvVaw3R71jsUBEAP_DwHVn2Ennz&ust=1744640476660000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPCHjrCa1YwDFQAAAAAdAAAAABAQ",
    prices: 30000,
    district: "Langkat",
    province: "Sumatera Utara",
    latitude: 3.6206,
    longitude: 98.1994,
  },
  {
    name: "Pulau Samosir",
    date: new Date("2001-01-01"),
    location: "Sumatera Utara",
    image:
      "https://assets-a1.kompasiana.com/items/album/2021/09/22/images-11-614b19b506310e21c01a14a6.jpeg",
    description:
      "Pulau Samosir adalah pulau yang terletak di tengah Danau Toba, Sumatera Utara. Pulau ini terkenal dengan keindahan alamnya yang luar biasa serta kekayaan budaya Batak yang masih terjaga dengan baik. Pulau Samosir memiliki berbagai destinasi wisata yang menarik, mulai dari desa-desa tradisional Batak hingga tempat-tempat sejarah yang penting dalam budaya Batak Toba. Salah satu tempat paling terkenal di Pulau Samosir adalah makam Raja Sidabutar yang terletak di Tomok. Di sana, pengunjung dapat melihat makam raja-raja Batak yang dikelilingi oleh patung-patung batu yang memiliki makna simbolis. Selain itu, pengunjung juga dapat menikmati pemandangan indah dari pantai dan bukit yang menghadap ke Danau Toba. Pulau Samosir juga terkenal dengan rumah adat Batak yang masih digunakan oleh masyarakat setempat. Rumah adat Batak Toba memiliki bentuk atap yang khas dan dihiasi dengan ukiran-ukiran yang penuh makna filosofis. Aktivitas lain yang populer di Pulau Samosir adalah bersepeda mengelilingi pulau, berjalan kaki di sekitar desa-desa adat, dan mengunjungi beberapa air terjun yang terletak di sekitar pulau. Pulau ini juga menjadi tempat yang sangat cocok bagi wisatawan yang ingin belajar lebih dalam tentang budaya Batak Toba, yang dikenal dengan tradisi ulosnya yang merupakan kain tenun tradisional yang digunakan dalam berbagai upacara adat. Dengan pemandangan yang mempesona, kekayaan budaya yang mendalam, dan berbagai aktivitas wisata yang menyenangkan, Pulau Samosir adalah destinasi yang wajib dikunjungi bagi siapa saja yang ingin merasakan pesona Danau Toba dan budaya Batak Toba.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kompasiana.com%2Fakhmadf%2F614b283206310e29201dd522%2Fpulau-samosir-keindahan-alam-dan-kekayaan-warisan-budayanya-menjadi-magnet-bagi-para-wisatawan-baik-dari-dalam-negeri-maupun-mancanegara&psig=AOvVaw09THSpwz0kejF_TQJZPt41&ust=1744640508858000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLDD37-a1YwDFQAAAAAdAAAAABAE",
    prices: 15000,
    district: "Samosir",
    province: "Sumatera Utara",
    latitude: 2.6,
    longitude: 98.5,
  },
  {
    name: "Air Terjun Sipiso-Piso",
    date: new Date("2001-01-01"),
    location: "Sumatera Utara",
    image:
      "https://ik.imagekit.io/tvlk/blog/2018/10/Medan-Sipiso-piso-Waterfall-279303131.jpg",
    description:
      "Air Terjun Sipiso-Piso adalah salah satu air terjun paling terkenal di Sumatera Utara, terletak di daerah Kabanjahe, Kabupaten Karo. Air terjun ini memiliki ketinggian sekitar 120 meter, menjadikannya salah satu air terjun tertinggi di Indonesia. Air Terjun Sipiso-Piso memiliki keindahan yang luar biasa, dengan air yang jernih mengalir deras dari tebing batu yang curam, menciptakan pemandangan alam yang sangat dramatis. Di sekitar air terjun, pengunjung dapat menikmati pemandangan alam yang memukau, dengan latar belakang pegunungan yang hijau dan udara yang sejuk. Air Terjun Sipiso-Piso juga menjadi salah satu tempat terbaik untuk menikmati suasana alam yang tenang dan damai, sambil menikmati panorama yang sangat indah. Aktivitas yang populer di sekitar air terjun ini adalah trekking menuju dasar air terjun, di mana pengunjung dapat merasakan sensasi berada di dekat air terjun yang memancar dengan deras. Selain itu, di dekat air terjun, terdapat berbagai fasilitas wisata seperti area parkir, warung makanan, dan tempat beristirahat yang membuat pengunjung merasa nyaman. Air Terjun Sipiso-Piso juga merupakan destinasi yang populer bagi para fotografer dan pecinta alam yang ingin mengabadikan momen indah di sekitar air terjun ini. Dengan pemandangan alam yang luar biasa, Air Terjun Sipiso-Piso adalah tempat yang sangat direkomendasikan bagi siapa saja yang ingin menikmati keindahan alam Sumatera Utara.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.traveloka.com%2Fid-id%2Fexplore%2Fdestination%2Fpesona-air-terjun-sipiso-piso-destinasi-andalan-sumatera-utara-acc%2F183720&psig=AOvVaw3p983ByIlAUfL7A4s6mty8&ust=1744640530241000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKC4_sma1YwDFQAAAAAdAAAAABAJ",
    prices: 10000,
    district: "Karo",
    province: "Sumatera Utara",
    latitude: 3.0875,
    longitude: 98.3778,
  },
  {
    name: "Taman Simalem Resort",
    date: new Date("2001-01-01"),
    location: "Sumatera Utara",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHHUB_f3iOMmFghgVwxlOVC0w7FSS3SzFEmA&s",
    description:
      "Taman Simalem Resort adalah destinasi wisata yang terletak di kawasan perbukitan di Kabupaten Karo, Sumatera Utara. Resort ini menawarkan pemandangan alam yang menakjubkan, dengan latar belakang Gunung Sinabung yang masih aktif. Taman Simalem Resort dikenal dengan keindahan alamnya yang mempesona, serta berbagai fasilitas wisata yang cocok untuk liburan keluarga, acara perusahaan, atau kegiatan alam. Resort ini memiliki berbagai fasilitas, termasuk restoran dengan menu masakan lokal dan internasional, kolam renang, serta jalur trekking yang memungkinkan pengunjung menjelajahi keindahan alam sekitar. Selain itu, Taman Simalem Resort juga menawarkan berbagai aktivitas outdoor, seperti berkuda, bersepeda, dan flying fox yang memberikan pengalaman petualangan yang seru. Pemandangan alam di sekitar Taman Simalem Resort sangat menakjubkan, dengan perkebunan kopi yang hijau, area yang dipenuhi dengan bunga-bunga, dan udara yang segar. Resort ini juga memiliki tempat untuk relaksasi dan meditasi, sehingga cocok bagi mereka yang ingin melarikan diri dari keramaian kota dan menikmati kedamaian alam. Taman Simalem Resort juga berfokus pada pelestarian alam, dengan mengelola kawasan resort dengan cara yang ramah lingkungan. Pengunjung dapat belajar tentang keberagaman flora dan fauna di kawasan ini dan berpartisipasi dalam kegiatan edukasi yang diselenggarakan oleh resort.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tamansimalem.com%2F&psig=AOvVaw17U5BfNwH1Y1EOrR8LoYq-&ust=1744640554885000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLi_1dWa1YwDFQAAAAAdAAAAABAE",
    prices: 50000,
    district: "Karo",
    province: "Sumatera Utara",
    latitude: 3.2296,
    longitude: 98.3771,
  },

  // Sumatera Barat
  {
    name: "Danau Singkarak",
    date: new Date("2001-01-01"),
    location: "Sumatera Barat",
    image:
      "https://ik.imagekit.io/tvlk/blog/2020/03/Danau-Singkarak-Wikipedia.jpg",
    description:
      "Danau Singkarak adalah danau terbesar di Sumatera Barat, terletak di perbatasan antara Kabupaten Solok dan Kabupaten Tanah Datar. Dengan luas sekitar 130,1 km², danau ini menawarkan pemandangan alam yang memukau dan menjadi habitat bagi ikan bilih, spesies endemik yang hanya ditemukan di danau ini. Selain menikmati keindahan alam, pengunjung dapat melakukan aktivitas seperti memancing, berperahu, atau sekadar bersantai di tepi danau sambil menikmati kuliner khas setempat.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.traveloka.com%2Fid-id%2Fexplore%2Fdestination%2Ffakta-unik-dan-menarik-danau-singkarak-ternyata-mengandung-mitos-juga-lho-acc%2F182048&psig=AOvVaw0-n-gAZL7yDbdRlGqgNtfP&ust=1744640809003000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCKi4886b1YwDFQAAAAAdAAAAABAY",
    prices: 0,
    district: "Kabupaten Solok",
    province: "Sumatera Barat",
    latitude: -0.5,
    longitude: 100.7,
  },
  {
    name: "Lembah Harau",
    date: new Date("2001-01-01"),
    location: "Sumatera Barat",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Lembah_harau_50_kota.jpg/800px-Lembah_harau_50_kota.jpg",
    description:
      "Lembah Harau adalah lembah yang terletak di Kabupaten Lima Puluh Kota, dikenal dengan tebing-tebing granitnya yang menjulang tinggi hingga 150 meter dan dikelilingi oleh sawah hijau yang menenangkan. Selain pemandangan alam yang menakjubkan, lembah ini juga menawarkan beberapa air terjun yang populer, seperti Air Terjun Aka Barayun dan Sarasah Bunta. Lembah Harau menjadi favorit bagi pecinta panjat tebing dan wisata alam.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fid.wikipedia.org%2Fwiki%2FLembah_Harau&psig=AOvVaw2zch-kocgiBXWf8_oDsAIJ&ust=1744640834313000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODnx9qb1YwDFQAAAAAdAAAAABAE",
    prices: 5000,
    district: "Kabupaten Lima Puluh Kota",
    province: "Sumatera Barat",
    latitude: -0.2,
    longitude: 100.6167,
  },
  {
    name: "Jam Gadang",
    date: new Date("2001-01-01"),
    location: "Sumatera Barat",
    image:
      "https://minangtourism.com/wp-content/uploads/2024/08/Jam-Gadang-Bukittinggi-Dari-Sejarah-Hingga-Daya-Tarik-Wisata.jpg",
    description:
      "Jam Gadang adalah menara jam ikonik yang terletak di pusat Kota Bukittinggi. Dibangun pada masa penjajahan Belanda pada tahun 1926, menara ini memiliki arsitektur khas dengan atap berbentuk tanduk kerbau, simbol budaya Minangkabau. Di sekitar Jam Gadang terdapat taman yang nyaman untuk bersantai, serta pasar tradisional dan berbagai kuliner khas yang dapat dinikmati oleh pengunjung.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fminangtourism.com%2Fjam-gadang-bukittinggi%2F&psig=AOvVaw1i6-xemc9sdc587Y2wTeB1&ust=1744640852482000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOiOreOb1YwDFQAAAAAdAAAAABAE",
    prices: 0,
    district: "Kota Bukittinggi",
    province: "Sumatera Barat",
    latitude: -0.3064,
    longitude: 100.3611,
  },
  {
    name: "Pantai Air Manis",
    date: new Date("2001-01-01"),
    location: "Sumatera Barat",
    image:
      "https://cdn.antaranews.com/cache/1200x800/2019/06/13/pembenahan-pantai-air-manis-pm105n-prv.jpg",
    description:
      "Pantai Air Manis terkenal dengan batu Malin Kundang, yang diyakini sebagai tokoh legenda yang dikutuk menjadi batu karena durhaka kepada ibunya. Selain batu tersebut, pantai ini juga menawarkan pemandangan alam yang menawan dengan ombak yang tenang, cocok untuk berenang. Pengunjung juga dapat mengunjungi Pulau Pisang Kecil dan Pisang Besar yang terletak tidak jauh dari pantai.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsumbar.antaranews.com%2Fberita%2F271819%2Fjalan-menuju-pantai-air-manis-bakal-dilebarkan&psig=AOvVaw09b3-sC65J4wQ3lui0hr2c&ust=1744640870796000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPCCo-yb1YwDFQAAAAAdAAAAABAY",
    prices: 0,
    district: "Kota Padang",
    province: "Sumatera Barat",
    latitude: -0.9167,
    longitude: 100.3667,
  },
  {
    name: "Ngarai Sianok",
    date: new Date("2001-01-01"),
    location: "Sumatera Barat",
    image:
      "https://halaltourism.visitbeautifulwestsumatra.id/wp-content/uploads/2023/06/1jgngaraiDestinasi.jpg",
    description:
      "Ngarai Sianok adalah lembah sempit yang terletak di perbatasan Kota Bukittinggi dan Kabupaten Agam. Pemandangan ngarai yang dihiasi oleh tebing curam ini sering disebut sebagai 'Grand Canyon-nya Sumatra'. Di dasar ngarai mengalir Sungai Batang Sianok yang menambah keindahan tempat ini. Wisatawan bisa menikmati pemandangan Ngarai Sianok dari Taman Panorama di Bukittinggi atau melakukan trekking di sekitar ngarai.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhalaltourism.visitbeautifulwestsumatra.id%2Fngarai-sianok-jam-gadang%2F&psig=AOvVaw1uYwOilVD0QbgBrKxmCojh&ust=1744640895196000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOCj2veb1YwDFQAAAAAdAAAAABAI",
    prices: 0,
    district: "Kota Bukittinggi",
    province: "Sumatera Barat",
    latitude: -0.3,
    longitude: 100.3667,
  },

  // Jawa Tengah
  {
    name: "Goa Jatijajar",
    date: new Date("2001-01-01"),
    location: "Kebumen, Jawa Tengah",
    image:
      "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p2/207/2024/08/04/goa-jatijajar-882261190.jpg",
    description:
      "Goa Jatijajar adalah gua alam yang terletak di Kabupaten Kebumen, Jawa Tengah, dan menjadi salah satu destinasi wisata alam yang terkenal di daerah ini. Gua ini menawarkan pemandangan stalaktit dan stalagmit yang menakjubkan, yang terbentuk selama ribuan tahun akibat proses geologis alami. Selain keindahan alamnya, Goa Jatijajar juga memiliki nilai spiritual dan mitos yang telah melekat dalam budaya lokal. Menurut cerita yang beredar di masyarakat setempat, gua ini memiliki kaitan dengan legenda dan mitos yang dipercaya oleh warga sekitar. Salah satu hal yang paling menarik tentang Goa Jatijajar adalah sungai bawah tanah yang mengalir di dalam gua. Sungai ini memberi kesan misterius, mengingat tidak banyak gua yang memiliki sungai aktif di dalamnya. Pengunjung dapat menyusuri bagian gua yang lebih dalam sambil menikmati pemandangan stalaktit dan stalagmit yang tumbuh dengan sangat indah, menciptakan formasi batuan yang beragam dan mengagumkan. Goa Jatijajar juga memiliki beberapa sendang (sumber air) yang dipercaya memiliki khasiat tertentu, terutama yang terkait dengan keberuntungan dan kesehatan. Sebagai salah satu destinasi wisata yang memiliki daya tarik alam dan spiritual, Goa Jatijajar menjadi salah satu tujuan wisata yang populer di Kebumen dan Jawa Tengah. Pengunjung dapat mempelajari lebih banyak tentang geologi gua, flora, fauna yang ada di sekitar gua, serta mitos yang telah berkembang di masyarakat sekitar. Gua ini juga memiliki berbagai fasilitas wisata seperti area parkir, warung makan, dan spot foto yang menambah kenyamanan pengunjung. Goa Jatijajar tidak hanya menarik bagi mereka yang tertarik pada geologi dan alam, tetapi juga bagi mereka yang ingin merasakan suasana mistis dan menikmati ketenangan yang ditawarkan oleh lingkungan sekitar. Dengan keindahan alam, cerita-cerita rakyat, dan pengalaman yang tak terlupakan, Goa Jatijajar tetap menjadi salah satu ikon wisata alam di Jawa Tengah.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.panturapost.com%2Fwisata%2F2074937671%2Fgoa-jatijajar-keindahan-estetiknya-memikat-jutaan-wisatawan&psig=AOvVaw0iAF84228HmitrklI5XYob&ust=1744641710617000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIifyfye1YwDFQAAAAAdAAAAABAE",
    prices: 10000,
    district: "Kebumen",
    province: "Jawa Tengah",
    latitude: -7.6736,
    longitude: 109.6667,
  },
  {
    name: "Candi Borobudur",
    date: "new Date('800-01-01')",
    location: "Magelang, Jawa Tengah",
    image:
      "https://asset.kompas.com/crops/PDHy7SIS-aHhUFWL0xFBiRleceU=/0x100:1430x1053/1200x800/data/photo/2022/03/07/6225c0669e6d2.jpg",
    description:
      "Candi Borobudur adalah candi Buddha terbesar dan terkenal di dunia yang terletak di Magelang, Jawa Tengah. Dibangun pada abad ke-8 oleh Dinasti Syailendra, candi ini merupakan salah satu keajaiban dunia dan telah diakui oleh UNESCO sebagai situs warisan dunia. Borobudur dibangun sebagai tempat ibadah dan tempat ziarah bagi umat Buddha, dan hingga sekarang tetap menjadi tujuan utama wisata religi dan budaya di Indonesia. Keindahan arsitektur Candi Borobudur sangat mengagumkan, dengan sembilan platform bertingkat yang menampilkan relief-relief yang menggambarkan ajaran dan perjalanan hidup Buddha. Candi ini juga memiliki lebih dari 500 patung Buddha yang diletakkan di berbagai titik pada setiap platform. Struktur candi ini sangat rumit dan artistik, dengan kombinasi arsitektur yang menggabungkan unsur-unsur Buddha dan Hindu, serta nilai filosofis yang mendalam. Pada puncaknya, terdapat stupa besar yang melambangkan pencapaian pencerahan Buddha, dikelilingi oleh stupa-stupa kecil yang masing-masing memiliki makna tersendiri. Relief-relief yang ada di dinding Candi Borobudur menggambarkan kisah hidup Buddha, dari kelahiran, pencapaian pencerahan, hingga pembebasan dari siklus kelahiran kembali. Selain itu, relief ini juga menggambarkan kehidupan masyarakat pada masa itu, memberikan gambaran tentang sosial, budaya, dan teknologi yang ada pada zaman tersebut. Setiap tahun, Borobudur menjadi tempat perayaan Waisak, sebuah perayaan penting dalam agama Buddha yang menarik ribuan peziarah dari seluruh dunia. Banyak pengunjung yang datang ke Borobudur untuk menyaksikan matahari terbit, di mana pemandangan matahari yang terbit di atas candi memberikan kesan magis dan mistis. Di luar keindahan arsitektur dan relief-reliefnya, Candi Borobudur juga menyimpan nilai-nilai spiritual yang mendalam dan menginspirasi banyak orang untuk menjalani hidup dengan lebih bijaksana. Sebagai situs bersejarah dan pusat kebudayaan, Candi Borobudur tidak hanya menarik bagi wisatawan dari Indonesia, tetapi juga bagi wisatawan mancanegara yang tertarik untuk mempelajari lebih dalam tentang sejarah, budaya, dan agama Buddha.",
    link: "https://www.google.com/imgres?q=candi%20borobudur&imgurl=https%3A%2F%2Fasset.kompas.com%2Fcrops%2Fqs7lqo0UsFE7TXqwfxF7RAaYYA0%3D%2F1x0%3A1024x682%2F1200x800%2Fdata%2Fphoto%2F2020%2F05%2F11%2F5eb950a1c8fb3.jpeg&imgrefurl=https%3A%2F%2Ftravel.kompas.com%2Fread%2F2021%2F05%2F26%2F100704127%2F5-fakta-menarik-candi-borobudur-candi-buddha-terbesar-di-dunia%3Fpage%3Dall&docid=Bd8kTGOfGd5a0M&tbnid=vRRuYNOQydTIMM&vet=12ahUKEwj4lJaFn9WMAxXJ1jgGHW-7OgYQM3oECGYQAA..i&w=1200&h=800&hcb=2&ved=2ahUKEwj4lJaFn9WMAxXJ1jgGHW-7OgYQM3oECGYQAA",
    prices: 50000,
    district: "Magelang",
    province: "Jawa Tengah",
    latitude: -7.6079,
    longitude: 110.2037,
  },
  {
    name: "Candi Prambanan",
    date: new Date("850-01-01"),
    location: "Klaten, Jawa Tengah",
    image:
      "https://prambanan.injourneydestination.id/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-13-at-13.37.22_f4268807.jpg",
    description:
      "Candi Prambanan adalah kompleks candi Hindu terbesar di Indonesia yang terletak di perbatasan antara Jawa Tengah dan Yogyakarta. Dibangun pada abad ke-9 oleh Raja Rakai Pikatan, candi ini didedikasikan untuk Trimurti, yaitu dewa-dewa utama Hindu: Brahma, Wisnu, dan Siwa. Candi utama di Prambanan memiliki arsitektur yang sangat megah dan dihiasi dengan relief-relief yang menggambarkan kisah-kisah epik dari Hindu, seperti Ramayana dan Mahabharata. Candi Prambanan dikenal dengan kemegahan arsitekturnya, yang terdiri dari tiga candi utama yang masing-masing didedikasikan untuk Trimurti. Selain candi utama, terdapat banyak candi-candi kecil yang tersebar di sekitar kompleks candi. Salah satu daya tarik utama di Candi Prambanan adalah keindahan relief-relief yang ada di dinding candi, yang menggambarkan kisah-kisah yang sangat populer dalam mitologi Hindu. Candi Prambanan juga sering menjadi tempat pertunjukan seni, seperti Sendratari Ramayana, yang dipentaskan di luar area candi pada malam hari. Candi Prambanan telah menjadi situs warisan dunia yang dilindungi oleh UNESCO dan menjadi destinasi wisata yang sangat populer di Indonesia. Dengan keindahan arsitektur dan sejarah yang sangat kaya, Candi Prambanan tidak hanya menjadi tempat ibadah tetapi juga simbol dari kebudayaan Hindu yang berkembang di Indonesia pada masa lampau. Seiring waktu, Prambanan juga telah menjadi pusat penelitian dan pembelajaran bagi mereka yang tertarik mempelajari sejarah peradaban Hindu dan arsitektur kuno. Setiap tahunnya, Prambanan menarik ribuan wisatawan dari seluruh dunia yang datang untuk menikmati keindahan dan kemegahan candi ini.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fprambanan.injourneydestination.id%2Fdestination-info%2F&psig=AOvVaw0bVo8uwee0-o-mGr9kKDO0&ust=1744641760934000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPCZppef1YwDFQAAAAAdAAAAABAR",
    prices: 35000,
    district: "Klaten",
    province: "Jawa Tengah",
    latitude: -7.7511,
    longitude: 110.4925,
  },
  {
    name: "Dieng Plateau",
    date: new Date("2001-01-01"),
    location: "Wonosobo, Jawa Tengah",
    image:
      "https://theworldtravelguy.com/wp-content/uploads/2019/10/DJI_0978.jpg",
    description:
      "Dieng Plateau adalah dataran tinggi vulkanik yang terletak di Wonosobo, Jawa Tengah, dengan ketinggian sekitar 2.000 meter di atas permukaan laut. Dieng dikenal dengan udara sejuk dan pemandangan alam yang menakjubkan. Kawasan ini memiliki banyak objek wisata alam dan sejarah, seperti kawah vulkanik, telaga warna, dan kompleks candi kuno. Salah satu daya tarik utama di Dieng adalah Kawah Sikidang, sebuah kawah aktif yang mengeluarkan uap dan gas belerang, menciptakan pemandangan yang sangat unik dan menarik. Telaga Warna, yang dikenal dengan perubahan warna airnya yang dapat berubah-ubah, juga merupakan tempat yang sangat populer di Dieng. Selain itu, kompleks candi Dieng yang terdiri dari beberapa candi Hindu kuno seperti Candi Arjuna juga menjadi tempat wisata sejarah yang menarik. Dieng juga memiliki festival budaya tahunan, yaitu Dieng Culture Festival, yang menampilkan pertunjukan seni, musik, dan budaya tradisional yang melibatkan masyarakat setempat. Festival ini menarik ribuan wisatawan yang ingin merasakan kekayaan budaya dan keindahan alam Dieng. Dengan keindahan alam, udara segar, serta berbagai objek wisata yang ada, Dieng Plateau menjadi salah satu destinasi wisata yang wajib dikunjungi bagi mereka yang mencintai alam dan budaya.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftheworldtravelguy.com%2Fdieng-plateau-in-java-indonesia-epic-sunrise-volcanoes-lakes%2F&psig=AOvVaw1xnrfabE2lCJ7KN9oFXJ9S&ust=1744641807583000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMCm6Kuf1YwDFQAAAAAdAAAAABAE",
    prices: 20000,
    district: "Wonosobo",
    province: "Jawa Tengah",
    latitude: -7.15,
    longitude: 109.9167,
  },
  {
    name: "Taman Nasional Karimunjawa",
    date: new Date("2001-01-01"),
    location: "Jepara, Jawa Tengah",
    image:
      "https://4dmincentral.pdipkreatif.id/api/files/flora/601ea6ae7d14a.jpg",
    description:
      "Taman Nasional Karimunjawa adalah gugusan 27 pulau tropis yang terletak di Laut Jawa, di lepas pantai Jepara, Jawa Tengah. Destinasi ini menawarkan keindahan pantai berpasir putih, air laut yang jernih, dan terumbu karang yang kaya akan kehidupan bawah laut. Karimunjawa sangat terkenal di kalangan penyelam dan pecinta snorkeling, karena terumbu karangnya yang masih alami dan kaya akan biota laut yang eksotis. Selain itu, Karimunjawa juga dikenal dengan keberagaman hayatinya yang meliputi berbagai spesies burung, ikan, dan penyu yang dapat ditemukan di sekitar pulau-pulau tersebut. Di Karimunjawa, pengunjung dapat menikmati aktivitas seperti berlayar, memancing, berenang, atau berkeliling dengan kapal untuk menikmati keindahan pulau-pulau kecil yang tersebar. Karimunjawa juga menawarkan pengalaman ekowisata yang mengedepankan pelestarian alam dan konservasi terumbu karang. Selain keindahan alamnya, Karimunjawa juga memiliki nilai budaya yang tinggi, dengan masyarakat lokal yang menjaga tradisi dan cara hidup yang telah ada sejak lama. Sebagai kawasan konservasi, Karimunjawa telah dilindungi dan dikelola untuk memastikan kelestariannya bagi generasi mendatang.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpdipkreatif.id%2Fdetail%2Fflora%2F1038%2Ftaman-nasional-karimunjawa&psig=AOvVaw2pwo6CfjX5nmmsOkN06Fie&ust=1744641825093000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIDAibOf1YwDFQAAAAAdAAAAABAE",
    prices: 50000,
    district: "Jepara",
    province: "Jawa Tengah",
    latitude: -5.65,
    longitude: 110.4167,
  },

  // Jawa Timur
  {
    name: "Taman Nasional Bromo Tengger Semeru",
    date: new Date("2001-01-01"),
    location: "Probolinggo, Jawa Timur",
    image:
      "https://mediaim.expedia.com/destination/1/66d99acd4458975fd20093b957605830.jpg",
    description:
      "Taman Nasional Bromo Tengger Semeru adalah salah satu taman nasional paling terkenal di Indonesia yang terletak di kawasan Jawa Timur. Taman ini dikenal dengan keindahan alamnya yang luar biasa, terutama Gunung Bromo yang terkenal dengan kawah vulkaniknya yang aktif dan pemandangan matahari terbit yang memukau. Selain Bromo, Taman Nasional ini juga mencakup Gunung Semeru, yang merupakan gunung tertinggi di Pulau Jawa. Taman ini juga menjadi rumah bagi suku Tengger, yang masih mempertahankan tradisi dan kebudayaan mereka. Salah satu daya tarik utama di kawasan ini adalah Pasir Berbisik, sebuah padang pasir luas di sekitar Gunung Bromo yang sering digunakan sebagai lokasi syuting film. Pengunjung dapat menikmati pemandangan spektakuler matahari terbit di Bromo, trekking di sekitar kawah, atau menjelajahi keindahan alam lainnya yang ada di taman nasional ini. Dengan pemandangan yang menakjubkan, serta budaya dan tradisi suku Tengger yang kaya, Taman Nasional Bromo Tengger Semeru menjadi destinasi wisata yang wajib dikunjungi bagi para pecinta alam dan budaya.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.expedia.co.id%2FTaman-Nasional-Bromo-Tengger-Semeru-Senduro.d6106302.Tamasya&psig=AOvVaw2fPNJr-JZlsaExkDkWMB5_&ust=1744642129705000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjFtsSg1YwDFQAAAAAdAAAAABAE",
    prices: 22000,
    district: "Probolinggo",
    province: "Jawa Timur",
    latitude: -7.9421,
    longitude: 112.9531,
  },
  {
    name: "Pantai Balekambang",
    date: new Date("2001-01-01"),
    location: "Malang, Jawa Timur",
    image:
      "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/74/2024/03/27/Pantai-Balekambang-1601454064.png",
    description:
      "Pantai Balekambang terletak di Kabupaten Malang, Jawa Timur, dan dikenal sebagai salah satu pantai terindah di Indonesia. Pantai ini memiliki pemandangan yang sangat memukau dengan pasir putih yang bersih dan air laut yang jernih. Salah satu ciri khas Pantai Balekambang adalah adanya pura yang terletak di atas sebuah pulau kecil yang terhubung dengan daratan utama melalui sebuah jembatan. Pura ini dikenal dengan nama Pura Amerta Jati, dan sering kali menjadi tempat perayaan keagamaan bagi masyarakat setempat. Selain menikmati pemandangan indah, pengunjung juga dapat melakukan aktivitas seperti berenang, berjemur, atau bermain air di pantai. Pantai Balekambang juga menawarkan berbagai fasilitas wisata, termasuk area parkir, restoran, dan penginapan. Dikenal dengan keindahan alamnya, Pantai Balekambang juga sering digunakan sebagai tempat untuk melakukan berbagai kegiatan fotografi dan video, baik untuk tujuan pribadi maupun profesional.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fradarmadura.jawapos.com%2Ffood-travel%2F744486415%2Fpesona-pantai-balekambang-surga-tersembunyi-di-pesisir-selatan-malang&psig=AOvVaw1UAZaEtevZFqHjKtjoXLtD&ust=1744642149600000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLDuwc6g1YwDFQAAAAAdAAAAABAJ",
    prices: 10000,
    district: "Malang",
    province: "Jawa Timur",
    latitude: -8.3656,
    longitude: 112.5359,
  },
  {
    name: "Goa Cina",
    date: new Date("2001-01-01"),
    location: "Malang, Jawa Timur",
    image:
      "https://atourin.obs.ap-southeast-3.myhuaweicloud.com/images/destination/malang/pantai-goa-cina-profile1653621442.jpeg?x-image-process=image/resize,p_100,limit_1/imageslim",
    description:
      "Goa Cina adalah salah satu destinasi wisata alam yang terletak di kawasan pesisir selatan Malang, Jawa Timur. Goa ini dikenal karena keindahan alamnya, serta pantainya yang bersih dengan pasir putih yang halus. Goa Cina mendapatkan nama dari cerita legenda tentang seorang biarawan Cina yang pernah tinggal di gua ini. Pengunjung yang datang ke Goa Cina dapat menjelajahi gua dengan pemandangan stalaktit dan stalagmit yang menakjubkan, serta menikmati keindahan laut di sekitar pantai. Selain itu, Goa Cina juga menawarkan suasana yang tenang dan damai, cocok untuk mereka yang ingin beristirahat dan menikmati alam bebas. Banyak wisatawan yang datang ke Goa Cina untuk bersantai di pantai, berkemah, atau sekadar menikmati pemandangan matahari terbenam. Sebagai salah satu destinasi wisata alam, Goa Cina menjadi tempat yang populer bagi para wisatawan yang ingin menikmati ketenangan sambil mengeksplorasi keindahan alam Jawa Timur.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fatourin.com%2Fdestination%2Fmalang%2Fpantai-goa-cina&psig=AOvVaw0zFx3flqZI0O9ofS2iOcY3&ust=1744642172499000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjtjtmg1YwDFQAAAAAdAAAAABAE",
    prices: 10000,
    district: "Malang",
    province: "Jawa Timur",
    latitude: -8.4625,
    longitude: 112.5322,
  },
  {
    name: "Taman Safari Indonesia",
    date: new Date("2001-01-01"),
    location: "Prigen, Jawa Timur",
    image:
      "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2024/08/14/594c6072-d53a-4eef-9285-6d69ef1f725a-1723625448894-4199040f8fc0597a41415949abcfef1b.jpg",
    description:
      "Taman Safari Indonesia adalah salah satu taman safari terbesar di Indonesia yang terletak di Prigen, Pasuruan, Jawa Timur. Taman ini menawarkan pengalaman wisata alam yang berbeda dengan memungkinkan pengunjung untuk melihat berbagai jenis satwa liar dari dekat dalam habitat yang mirip dengan alam aslinya. Taman Safari Indonesia memiliki area yang luas dengan berbagai zona yang terbagi berdasarkan jenis satwa, seperti zona Afrika, zona Amerika, dan zona Asia. Di sini, pengunjung dapat melihat hewan-hewan langka seperti harimau Sumatera, orangutan, gajah, dan berbagai spesies satwa lainnya yang dilindungi. Selain menikmati pemandangan satwa, pengunjung juga dapat menikmati berbagai atraksi yang disediakan, seperti pertunjukan satwa, safari malam, dan berinteraksi langsung dengan beberapa satwa di area petting zoo. Taman Safari Indonesia juga berfungsi sebagai pusat konservasi satwa dan edukasi lingkungan, di mana pengunjung dapat mempelajari lebih lanjut tentang pentingnya menjaga keberagaman hayati dan melindungi satwa-satwa yang terancam punah. Taman ini menjadi tempat yang sangat populer bagi keluarga yang ingin menghabiskan waktu bersama anak-anak sambil belajar tentang alam dan satwa. Dengan berbagai fasilitas, taman bermain, dan restoran, Taman Safari Indonesia juga menawarkan kenyamanan bagi pengunjung yang ingin menikmati waktu lebih lama di sana.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tiket.com%2Fto-do%2Ftaman-safari-indonesia-bogor&psig=AOvVaw1jEliahrJHo9RrVVRpzBGW&ust=1744642192716000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKisiOSg1YwDFQAAAAAdAAAAABAE",
    prices: 120000,
    district: "Pasuruan",
    province: "Jawa Timur",
    latitude: -7.6167,
    longitude: 112.867,
  },
  {
    name: "Pantai Pulau Sempu",
    date: new Date("2001-01-01"),
    location: "Malang, Jawa Timur",
    image:
      "https://nagantour.com/wp-content/uploads/2024/05/pulau-sempu-scaled.webp",
    description:
      "Pantai Pulau Sempu adalah salah satu pantai yang terletak di kawasan selatan Pulau Jawa, tepatnya di Kabupaten Malang, Jawa Timur. Pulau Sempu dikenal dengan pantainya yang masih sangat alami dan keindahan alamnya yang luar biasa. Pantai ini dikelilingi oleh hutan tropis yang rimbun dan pemandangan laut yang jernih dengan pasir putih yang bersih. Pulau Sempu sebenarnya adalah sebuah cagar alam yang dilindungi oleh pemerintah, sehingga akses menuju pulau ini terbatas dan hanya dapat dicapai dengan menggunakan perahu dari pantai Sendang Biru. Salah satu daya tarik utama Pulau Sempu adalah Telaga Sempu, sebuah laguna alami yang terletak di tengah pulau dan dihubungkan dengan laut melalui sebuah saluran kecil. Telaga ini memiliki air yang jernih dan biasanya digunakan untuk berenang atau sekadar menikmati keindahan alam. Selain menikmati keindahan alam, Pulau Sempu juga menawarkan trekking melalui hutan tropis untuk mencapai telaga, memberikan pengalaman petualangan yang menyenangkan bagi para wisatawan yang gemar beraktivitas di alam bebas. Pantai Pulau Sempu adalah tempat yang sangat cocok bagi mereka yang ingin menikmati ketenangan, jauh dari keramaian, dan merasakan keindahan alam yang masih terjaga. Sebagai salah satu destinasi wisata alam yang tersembunyi, Pulau Sempu menjadi tempat yang sangat direkomendasikan bagi para pecinta alam dan pengunjung yang ingin menikmati keindahan alam Indonesia.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnagantour.com%2Fpulau-sempu-dan-faktanya%2F&psig=AOvVaw1oDEpPVjDuI8jpQtohNPws&ust=1744642217507000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLi9qO6g1YwDFQAAAAAdAAAAABAE",
    prices: 5000,
    district: "Malang",
    province: "Jawa Timur",
    latitude: -8.4333,
    longitude: 112.5833,
  },

  // Jawa Barat
  {
    name: "Taman Safari Indonesia Cisarua",
    date: new Date("2001-01-01"),
    location: "Cisarua, Bogor, Jawa Barat",
    image:
      "https://yoexplore.co.id/wp-content/uploads/2020/03/taman-safari-indonesia-cisarua-yoexplore-liburan-keluarga-vokamo.jpg",
    description:
      "Taman Safari Indonesia Cisarua adalah taman safari terbesar di Indonesia yang terletak di Cisarua, Bogor, Jawa Barat, menawarkan pengalaman unik berinteraksi dengan berbagai satwa liar dalam habitat yang mirip dengan alam aslinya. Taman ini memiliki luas lebih dari 170 hektar, yang terbagi dalam beberapa zona berdasarkan wilayah geografis, seperti zona Afrika, zona Amerika, dan zona Asia. Salah satu daya tarik utama dari taman safari ini adalah safari perjalanan menggunakan kendaraan pribadi atau bus yang disediakan, di mana pengunjung dapat melihat berbagai macam satwa liar seperti gajah, harimau, singa, zebra, jerapah, dan banyak lainnya dari dekat. Dalam safari, satwa-satwa tersebut dapat dilihat bebas bergerak di alam terbuka, memberikan pengalaman yang lebih nyata bagi pengunjung. Taman Safari Indonesia juga memiliki area petting zoo, di mana pengunjung bisa memberi makan hewan-hewan jinak seperti kelinci, kambing, dan domba. Selain itu, taman ini juga menyediakan fasilitas edukasi yang mengajarkan pengunjung tentang pentingnya konservasi dan pelestarian satwa langka. Pertunjukan satwa yang melibatkan berbagai jenis hewan seperti lumba-lumba, singa laut, dan burung juga menjadi salah satu daya tarik utama. Salah satu pertunjukan yang sangat dinantikan adalah pertunjukan harimau, yang menunjukkan kecerdasan dan keahlian pelatih dalam bekerja dengan hewan-hewan besar. Taman Safari Indonesia Cisarua juga memiliki berbagai wahana permainan yang menyenangkan, baik untuk anak-anak maupun orang dewasa, seperti wahana kereta gantung, kolam renang, dan taman bermain. Dengan suasana yang sejuk dan pemandangan alam yang indah, Taman Safari Indonesia Cisarua menjadi tempat yang ideal untuk berlibur bersama keluarga dan teman-teman. Selain itu, taman ini juga menyediakan fasilitas akomodasi seperti hotel dan restoran, yang memungkinkan pengunjung untuk menghabiskan waktu lebih lama menikmati keindahan alam dan keunikan satwa yang ada di sana. Dengan berbagai aktivitas yang menyenangkan dan edukatif, taman ini menjadi salah satu destinasi wisata keluarga yang paling terkenal di Indonesia.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fyoexplore.co.id%2Ftaman-safari-indonesia-cisarua%2F&psig=AOvVaw19XrrAHJi1xyVJgV90rvpL&ust=1744642594976000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjB4q6i1YwDFQAAAAAdAAAAABAR",
    prices: 150000,
    district: "Bogor",
    province: "Jawa Barat",
    latitude: -6.7,
    longitude: 106.75,
  },
  {
    name: "Pantai Pangandaran",
    date: new Date("2001-01-01"),
    location: "Pangandaran, Jawa Barat",
    image:
      "https://appback.pangandarankab.go.id/public/images/destinasi/22012021110634.jpg",
    description:
      "Pantai Pangandaran adalah pantai yang terletak di ujung barat daya Pulau Jawa, tepatnya di Kabupaten Pangandaran, Jawa Barat. Pantai ini terkenal dengan pasir putihnya yang luas dan ombak yang cocok untuk surfing, menjadikannya sebagai destinasi wisata pantai yang sangat populer, tidak hanya bagi wisatawan domestik, tetapi juga wisatawan mancanegara. Pantai Pangandaran memiliki berbagai daya tarik yang membuatnya menjadi salah satu tujuan wisata utama di Jawa Barat. Selain berjemur di bawah matahari atau bermain pasir, pengunjung juga dapat menikmati kegiatan olahraga air seperti surfing, banana boat, jetski, atau sekadar berenang di perairan yang tenang. Salah satu hal yang sangat menarik dari Pantai Pangandaran adalah pemandangan matahari terbit dan terbenam yang memukau. Setiap pagi, wisatawan dapat menikmati keindahan langit yang berubah warna dan memantulkan cahaya matahari di atas laut yang tenang. Pada sore hari, panorama matahari terbenam dengan latar belakang laut yang berkilau menambah keindahan pantai ini. Selain aktivitas di pantai, Pangandaran juga memiliki daya tarik alam lainnya. Salah satunya adalah Green Canyon, sebuah ngarai dengan tebing tinggi dan aliran Sungai Cijulang yang jernih. Pengunjung dapat menyusuri sungai dengan perahu dan menikmati pemandangan tebing-tebing hijau yang indah serta gua-gua yang terdapat di sepanjang sungai. Green Canyon adalah salah satu tempat yang sangat populer untuk berfoto dan menikmati keindahan alam. Selain itu, Pangandaran juga memiliki Cagar Alam Pananjung, yang merupakan hutan tropis yang dihuni oleh berbagai flora dan fauna. Di sini, pengunjung bisa melakukan trekking dan menjelajahi alam sambil menikmati kesejukan udara dan melihat berbagai jenis satwa liar. Pantai Pangandaran juga terkenal dengan kuliner laut yang lezat, di mana pengunjung dapat menikmati hidangan seperti ikan bakar, udang, cumi, dan kepiting yang segar. Berbagai restoran dan warung makan di sekitar pantai menyajikan makanan laut yang menggugah selera dengan harga yang terjangkau. Untuk penginapan, Pantai Pangandaran menyediakan berbagai pilihan, mulai dari hotel berbintang hingga penginapan sederhana di sekitar pantai, yang memudahkan wisatawan untuk menemukan akomodasi sesuai dengan anggaran mereka. Dengan berbagai aktivitas yang menyenangkan, pemandangan alam yang indah, dan fasilitas yang lengkap, Pantai Pangandaran menjadi tempat yang sangat cocok untuk berlibur bersama keluarga atau teman-teman.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fportal.pangandarankab.go.id%2Fdestinasi%2Fpantai-barat-pangandaran&psig=AOvVaw1mx01SmoE96rIocP-rk5H1&ust=1744642650413000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNDX7r-i1YwDFQAAAAAdAAAAABAE",
    prices: 0,
    district: "Pangandaran",
    province: "Jawa Barat",
    latitude: -7.7,
    longitude: 108.6,
  },
  {
    name: "Taman Nasional Gunung Gede Pangrango",
    date: new Date("2001-01-01"),
    location: "Cianjur, Jawa Barat",
    image:
      "https://asset.kompas.com/crops/0aTsOk_DrsfPpqr1bpEfkpeN-2o=/0x0:750x500/750x500/data/photo/2021/10/08/615fc2f2064c2.jpg",
    description:
      "Taman Nasional Gunung Gede Pangrango adalah taman nasional yang terletak di provinsi Jawa Barat, mencakup dua gunung besar, yaitu Gunung Gede dan Gunung Pangrango. Taman ini menawarkan keindahan alam yang luar biasa, dengan hutan tropis yang lebat, air terjun yang menakjubkan, dan pemandangan gunung yang memukau. Gunung Gede dan Pangrango adalah dua gunung berapi aktif yang sering dijadikan tujuan pendakian bagi para pendaki gunung, baik pemula maupun yang berpengalaman. Pendakian menuju puncak Gunung Gede dan Pangrango memberikan tantangan yang menyenangkan, dengan pemandangan alam yang mempesona sepanjang perjalanan. Di sepanjang jalur pendakian, pengunjung dapat menikmati keindahan hutan montana dan subalpine, serta bertemu dengan berbagai jenis flora dan fauna yang langka dan dilindungi. Taman Nasional Gunung Gede Pangrango juga terkenal dengan keanekaragaman hayatinya, yang meliputi berbagai jenis burung, mamalia, dan tumbuhan langka. Salah satu daya tarik utama dari taman ini adalah air terjun Cilember yang memiliki tujuh tingkat, di mana pengunjung dapat menikmati keindahan alam sambil beristirahat dan berenang di kolam yang terbentuk di bawah air terjun. Selain pendakian, taman ini juga menawarkan berbagai kegiatan alam lainnya seperti camping, trekking, dan birdwatching. Taman Nasional Gunung Gede Pangrango juga menjadi tujuan wisata bagi para pecinta alam dan mereka yang ingin merasakan kedamaian di tengah alam yang masih asri dan alami. Selain itu, Taman Nasional ini juga memiliki beberapa pusat informasi dan fasilitas edukasi tentang konservasi alam dan pentingnya pelestarian lingkungan.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbandung.kompas.com%2Fread%2F2022%2F02%2F10%2F123000578%2Ftaman-nasional-gunung-gede-pangrango--sejarah-flora-dan-fauna-hingga-tempat%3Fpage%3Dall&psig=AOvVaw3DAQVJj4lpnT_xK6NlPcIj&ust=1744642675258000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMCumsmi1YwDFQAAAAAdAAAAABAE",
    prices: 25000,
    district: "Cianjur",
    province: "Jawa Barat",
    latitude: -6.71,
    longitude: 106.93,
  },
  {
    name: "Kampung Naga",
    date: new Date("2001-01-01"),
    location: "Tasikmalaya, Jawa Barat",
    image:
      "https://tvdesanews.id/wp-content/uploads/2024/10/Pesona-Kampung-Naga_-Desa-Adat-yang-Tak-Lekang-oleh-Zaman.jpg",
    description:
      "Kampung Naga adalah sebuah desa adat yang terletak di kaki Gunung Salak, Tasikmalaya, Jawa Barat. Desa ini terkenal dengan keasliannya, di mana masyarakatnya masih menjaga dan mempertahankan tradisi serta cara hidup yang telah ada sejak berabad-abad yang lalu. Kampung Naga dikenal dengan rumah adatnya yang terbuat dari bahan alami seperti bambu dan alang-alang, yang dibangun dengan tata letak yang sangat teratur dan mengikuti prinsip-prinsip arsitektur tradisional Sunda. Salah satu daya tarik utama dari Kampung Naga adalah keberlanjutan budaya dan adat istiadat yang masih dipertahankan oleh masyarakat setempat. Di sini, pengunjung dapat melihat bagaimana kehidupan sehari-hari masyarakat Kampung Naga yang sangat bergantung pada alam dan kearifan lokal. Masyarakat Kampung Naga sangat menjaga kelestarian alam, dengan memperhatikan keseimbangan antara manusia, lingkungan, dan alam sekitar. Kampung ini juga memiliki banyak ritual adat yang masih dilakukan hingga saat ini, seperti upacara ritual dan pesta panen yang melibatkan seluruh masyarakat desa. Selain itu, Kampung Naga juga memiliki berbagai tradisi seni yang dipertunjukkan dalam bentuk tarian, musik, dan seni kerajinan tangan, yang diwariskan turun-temurun dari nenek moyang mereka. Pengunjung yang datang ke Kampung Naga akan disambut dengan keramahan masyarakat yang dengan senang hati menjelaskan tentang kehidupan adat mereka dan menjelaskan tentang berbagai tradisi dan upacara yang dilakukan. Kampung Naga tidak hanya menjadi tujuan wisata yang menarik bagi mereka yang ingin melihat dan mempelajari kehidupan tradisional, tetapi juga menjadi tempat yang tepat untuk merasakan kedamaian dan ketenangan alam, jauh dari keramaian kota.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftvdesanews.id%2Fpesona-kampung-naga-desa-adat-yang-tak-lekang-oleh-zaman%2F&psig=AOvVaw2rgSQSxD6M-VxfZkx-k8d8&ust=1744642696450000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICok9Oi1YwDFQAAAAAdAAAAABAJ",
    prices: 0,
    district: "Tasikmalaya",
    province: "Jawa Barat",
    latitude: -7.2861,
    longitude: 108.2014,
  },
  {
    name: "Taman Wisata Alam Pangkalan",
    date: new Date("2001-01-01"),
    location: "Karawang, Jawa Barat",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/09/66/72/visitor-centre-kumai.jpg?w=1100&h=1100&s=1",
    description:
      "Taman Wisata Alam Pangkalan adalah destinasi wisata alam yang terletak di Karawang, Jawa Barat. Tempat ini menawarkan suasana yang sangat tenang dan sejuk, cocok untuk mereka yang ingin melarikan diri dari hiruk-pikuk kota dan menikmati keindahan alam. Taman ini terkenal dengan hutan tropisnya yang rimbun, serta berbagai jenis flora dan fauna yang langka dan dilindungi. Taman Wisata Alam Pangkalan memiliki berbagai jalur trekking yang memungkinkan pengunjung untuk menjelajahi hutan, melihat berbagai jenis tumbuhan langka, dan menikmati udara segar di tengah hutan yang asri. Selain itu, taman ini juga memiliki beberapa spot untuk berkemah, memancing, dan beristirahat sambil menikmati keindahan alam. Di sini, pengunjung dapat menikmati pemandangan yang luar biasa dari puncak bukit, serta menikmati panorama alam yang sangat menenangkan. Taman Wisata Alam Pangkalan menjadi pilihan yang ideal bagi pecinta alam dan mereka yang ingin menikmati ketenangan dan kedamaian di alam bebas.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.co.id%2FTourism-g680187-Pangkalan_Bun_Central_Kalimantan_Kalimantan-Vacations.html&psig=AOvVaw2wzMWiqg58R8cycTffMTSo&ust=1744642723414000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjP6-Gi1YwDFQAAAAAdAAAAABAE",
    prices: 15000,
    district: "Karawang",
    province: "Jawa Barat",
    latitude: -6.32,
    longitude: 107.3145,
  },

  // Jakarta
  {
    name: "Taman Mini Indonesia Indah (TMII)",
    date: new Date('2001-01-01'),
    location: "Jakarta Timur, DKI Jakarta",
    image: "https://www.nowjakarta.co.id/wp-content/uploads/2023/01/Taman-Mini-Indonesia-Jakarta-1.jpg",
    description:
      "Taman Mini Indonesia Indah (TMII) adalah sebuah taman rekreasi dan budaya yang terletak di Jakarta Timur. TMII dibangun pada tahun 1975 dan kini menjadi salah satu destinasi wisata budaya terbesar di Jakarta. Taman ini memiliki luas lebih dari 145 hektar dan dirancang untuk memberikan gambaran tentang keberagaman budaya dan tradisi di seluruh Indonesia. Salah satu daya tarik utama TMII adalah berbagai paviliun provinsi yang menampilkan arsitektur khas dan koleksi seni serta kebudayaan dari masing-masing provinsi di Indonesia. Di TMII, pengunjung dapat menjelajahi keanekaragaman budaya Indonesia, mulai dari pakaian adat, rumah tradisional, hingga berbagai alat musik dan seni tari yang ditampilkan di masing-masing paviliun. Selain paviliun provinsi, TMII juga menawarkan berbagai fasilitas wisata seperti museum, taman hiburan, dan danau buatan. Museum yang ada di TMII termasuk Museum Indonesia, Museum Transportasi, Museum Listrik dan Energi Baru, serta banyak lagi yang memberikan wawasan tentang sejarah dan perkembangan Indonesia dalam berbagai bidang. Pengunjung juga dapat menikmati wahana bermain, seperti kereta gantung yang menghubungkan berbagai bagian taman, serta berbagai area bermain untuk anak-anak. TMII juga menjadi tempat yang populer untuk perayaan budaya dan festival, seperti perayaan Hari Kemerdekaan Indonesia dan festival seni tradisional yang sering diadakan sepanjang tahun. Dengan keindahan alam, fasilitas lengkap, dan kekayaan budaya yang ditawarkan, TMII menjadi tempat yang ideal untuk keluarga, wisatawan domestik, dan internasional untuk mengenal lebih dalam tentang Indonesia dalam satu lokasi.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nowjakarta.co.id%2Fthe-new-face-of-taman-mini-indonesia-indah%2F&psig=AOvVaw0-Z-78JLIV8IeLqP6f5PMC&ust=1744643120942000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCq0Z6k1YwDFQAAAAAdAAAAABAE",
    prices: 25000,
    district: "Jakarta Timur",
    province: "DKI Jakarta",
    latitude: -6.3025,
    longitude: 106.8931,
  },
  {
    name: "Monumen Nasional (Monas)",
    date: new Date('2001-01-01'),
    location: "Central Jakarta, DKI Jakarta",
    image: "https://www.iwarebatik.org/wp-content/uploads/2019/11/monas.jpg",
    description:
      "Monumen Nasional (Monas) adalah landmark paling terkenal di Jakarta dan menjadi simbol kemerdekaan Indonesia. Diresmikan pada tahun 1975, Monas memiliki tinggi 132 meter dan terletak di Lapangan Merdeka, Jakarta Pusat. Monas dibangun untuk memperingati perjuangan kemerdekaan Indonesia dan sebagai simbol semangat perjuangan rakyat Indonesia dalam meraih kemerdekaan. Di puncak Monas terdapat api yang dilapisi dengan emas, yang melambangkan semangat juang yang tidak pernah padam. Pengunjung dapat naik ke puncak Monas untuk menikmati pemandangan kota Jakarta dari ketinggian. Monas juga memiliki museum yang terletak di dasar monumen yang menyimpan berbagai koleksi yang menceritakan sejarah kemerdekaan Indonesia. Di dalam museum, pengunjung dapat melihat berbagai diorama yang menggambarkan peristiwa-peristiwa penting dalam sejarah perjuangan Indonesia, mulai dari pertempuran kemerdekaan hingga proklamasi kemerdekaan pada tahun 1945. Selain itu, pengunjung juga dapat menikmati taman yang indah di sekitar Monas, yang sering dijadikan tempat bersantai dan berolahraga oleh warga Jakarta. Setiap tahun, Monas menjadi tempat bagi berbagai acara penting, seperti perayaan Hari Kemerdekaan Indonesia dan peringatan-peringatan besar lainnya. Sebagai pusat simbolis dan sejarah negara, Monas tidak hanya menjadi destinasi wisata populer, tetapi juga tempat untuk menghormati dan mengenang perjuangan para pahlawan kemerdekaan Indonesia.",
    link: "https://www.google.com/imgres?q=monumen%20nasional%20(monas)&imgurl=https%3A%2F%2Fstorage.jakarta-tourism.go.id%2Fpublic%2Fimages%2Farticle%2F8437415341664213099.jpg&imgrefurl=https%3A%2F%2Fjakarta-tourism.go.id%2Farticle%2Fdetail%2Fmonumen-nasional-monas&docid=fklhlVz0_v681M&tbnid=q-EoOgh5uX8z3M&vet=12ahUKEwjds6SnpNWMAxWazDgGHWSaKIMQM3oECGYQAA..i&w=1024&h=577&hcb=2&ved=2ahUKEwjds6SnpNWMAxWazDgGHWSaKIMQM3oECGYQAA",
    prices: 5000,
    district: "Central Jakarta",
    province: "DKI Jakarta",
    latitude: -6.1754,
    longitude: 106.8272,
  },
  {
    name: "Kota Tua Jakarta",
    date: new Date('2001-01-01'),
    location: "Jakarta Barat, DKI Jakarta",
    image: "https://backend.sas-hospitality.com//uploads/artikel/jakarta2.jpg",
    description:
      "Kota Tua Jakarta, juga dikenal sebagai Old Batavia, adalah kawasan bersejarah yang terletak di Jakarta Barat. Kawasan ini merupakan peninggalan masa kolonial Belanda dan memiliki berbagai bangunan bersejarah yang sangat terawat dengan baik. Kota Tua Jakarta menjadi salah satu destinasi wisata utama di Jakarta, yang menawarkan pemandangan masa lalu Jakarta sebagai pusat perdagangan dan pemerintahan pada zaman kolonial. Di kawasan ini, pengunjung dapat menikmati jalan-jalan yang dikelilingi oleh bangunan-bangunan bersejarah yang sebagian besar masih mempertahankan arsitektur asli dari zaman Belanda. Beberapa bangunan yang terkenal di Kota Tua Jakarta antara lain Museum Fatahillah, yang dulunya adalah Balai Kota Batavia, dan Museum Wayang, yang menampilkan koleksi wayang kulit dan boneka dari berbagai daerah di Indonesia. Selain itu, pengunjung juga dapat menikmati suasana di Café Batavia, sebuah kafe legendaris yang telah berdiri sejak era kolonial dan menjadi tempat pertemuan yang populer di kalangan wisatawan. Kota Tua Jakarta juga memiliki berbagai pasar tradisional dan toko-toko antik yang menjual berbagai barang bernilai sejarah, seperti uang logam kuno, barang-barang seni, dan berbagai cenderamata yang mencerminkan budaya Jakarta. Selain itu, pengunjung dapat menyusuri kanal-kanal yang membelah kawasan Kota Tua, yang dahulu digunakan untuk jalur transportasi dan perdagangan. Dengan atmosfer yang penuh sejarah dan nuansa masa lalu yang kental, Kota Tua Jakarta menawarkan pengalaman yang tidak hanya menarik bagi wisatawan lokal, tetapi juga wisatawan asing yang ingin mengenal lebih dalam tentang sejarah Jakarta dan Indonesia.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.grandtjokro.com%2Fblog%2Fwisata-kota-tua-yang-digandrungi-kaum-muda&psig=AOvVaw3v2IFD5mepdBClDPvMumMv&ust=1744643178181000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPCkubik1YwDFQAAAAAdAAAAABAE",
    prices: 0,
    district: "Jakarta Barat",
    province: "DKI Jakarta",
    latitude: -6.139,
    longitude: 106.8101,
  },
  {
    name: "Ancol Dreamland",
    date: new Date('2001-01-01'),
    location: "Jakarta Utara, DKI Jakarta",
    image: "https://lirp.cdn-website.com/61d4ea87/dms3rep/multi/opt/jakarta-dream-world-tour_ec54ae21e2d0809362e7d29013d2530d32f78910-1920w.jpg",
    description:
      "Ancol Dreamland adalah taman hiburan terbesar di Jakarta dan merupakan salah satu destinasi wisata utama di ibukota. Terletak di Jakarta Utara, Ancol menawarkan berbagai wahana permainan yang menyenangkan bagi semua usia, mulai dari taman hiburan, pantai, taman air, hingga dunia fantasi yang menyajikan berbagai atraksi menarik. Ancol Dreamland memiliki berbagai zona, seperti Dunia Fantasi (Dufan), yang merupakan taman hiburan terbesar di Indonesia, dengan berbagai roller coaster, wahana permainan ekstrem, dan atraksi-atraksi seru yang dapat dinikmati oleh pengunjung dari segala usia. Selain itu, Ancol juga memiliki SeaWorld Ancol, sebuah akuarium besar yang menampilkan berbagai jenis ikan laut, dari yang kecil hingga yang besar seperti ikan hiu dan pari. Bagi pengunjung yang ingin menikmati suasana pantai, Ancol memiliki pantai pasir putih yang bersih dan nyaman untuk berjemur, berenang, atau sekadar berjalan-jalan di sepanjang tepi laut. Taman ini juga menyediakan fasilitas untuk olahraga air seperti jet ski dan banana boat. Selain wahana hiburan, Ancol juga memiliki berbagai restoran dan kafe yang menawarkan berbagai jenis makanan lokal dan internasional, serta pusat perbelanjaan yang menjual berbagai barang dan cenderamata. Sebagai taman hiburan yang terkenal, Ancol Dreamland selalu ramai dikunjungi oleh wisatawan domestik dan internasional, terutama pada musim liburan dan akhir pekan. Ancol juga sering menjadi tempat untuk berbagai acara besar, seperti konser musik, festival, dan acara olahraga. Dengan berbagai pilihan hiburan, Ancol Dreamland menjadi tempat yang sangat cocok untuk menghabiskan waktu bersama keluarga, teman, atau pasangan.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fm7hotel.com%2Fancol-dream-land&psig=AOvVaw1Gf0yiL5IeAxfW-nS02k_S&ust=1744643195895000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOj-88Ck1YwDFQAAAAAdAAAAABAE",
    prices: 25000,
    district: "Jakarta Utara",
    province: "DKI Jakarta",
    latitude: -6.1254,
    longitude: 106.8,
  },
  {
    name: "Ragunan Zoo",
    date: new Date('2001-01-01'),
    location: "Jakarta Selatan, DKI Jakarta",
    image: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit800600gsm/eventThirdParty/2024/11/08/e0935495-9ce2-4dd0-a9da-f82e9d95c6b2-1731060322146-a36a23f6e44746578835ebe077cf769c.jpg",
    description:
      "Kebun Binatang Ragunan adalah salah satu kebun binatang terbesar dan tertua di Jakarta. Terletak di Jakarta Selatan, Ragunan memiliki koleksi berbagai spesies satwa yang berasal dari Indonesia maupun luar negeri. Kebun binatang ini berdiri sejak 1864 dan hingga kini terus berkembang menjadi salah satu destinasi wisata edukatif yang paling populer di Jakarta. Ragunan Zoo memiliki lebih dari 3.600 satwa dari lebih dari 300 spesies, termasuk satwa langka yang dilindungi seperti orangutan, harimau Sumatera, dan berbagai jenis burung endemik Indonesia. Pengunjung dapat berjalan-jalan di area kebun binatang yang luas dan menikmati pemandangan satwa-satwa yang dibiarkan hidup dalam habitat yang mirip dengan alam aslinya. Salah satu bagian yang sangat menarik di Ragunan adalah Taman Primata, yang menampilkan berbagai spesies primata seperti orangutan, gorila, dan berbagai jenis monyet. Selain itu, Ragunan juga memiliki taman bermain dan area piknik yang cocok untuk keluarga, serta berbagai fasilitas edukasi yang mengajarkan anak-anak dan pengunjung tentang pentingnya konservasi dan perlindungan satwa. Ragunan Zoo juga menjadi tempat yang baik untuk menghabiskan waktu sambil belajar tentang keberagaman hayati Indonesia, serta mempromosikan kesadaran akan pentingnya menjaga kelestarian alam. Setiap tahun, kebun binatang ini juga mengadakan berbagai kegiatan edukasi, seperti pertunjukan satwa dan kampanye konservasi untuk meningkatkan pengetahuan pengunjung mengenai perlindungan satwa langka dan habitatnya.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tiket.com%2Fto-do%2Ftiket-private-tour-ragunan-zoo-natural-life-of-animals&psig=AOvVaw3s9zrkPe-pI6mtRVxuoJbD&ust=1744643215484000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOCmic2k1YwDFQAAAAAdAAAAABAJ",
    prices: 4000,
    district: "Jakarta Selatan",
    province: "DKI Jakarta",
    latitude: -6.3096,
    longitude: 106.8262,
  },
];

export default tours;
