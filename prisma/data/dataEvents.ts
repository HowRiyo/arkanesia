import { Prisma } from "@/app/generated/prisma";

const events: Prisma.EventCreateInput[] = [
    {
      name: "Festival Sriwijaya",
      date: new Date("2025-6-21"),
      location: "Kota Palembang, Sumatra Selatan",
      image: "https://eventdaerah.kemenparekraf.go.id/storage/app/uploads/public/67c/53b/7e4/67c53b7e4e546610224495.jpg",
      description: "Festival Sriwijaya adalah event yang menyatukan segenap masyarakat di bawah Kerajaan Sriwijaya, khususnya di Palembang dan umumnya di Sumatera Selatan. Festival Sriwijaya menampilkan pertunjukan seni budaya dari 17 Kabupaten/Kota se-Provinsi Sumatera Selatan di pusat Kota Palembang, yaitu Benteng Kuto Besak (BKB). Penyelenggaraan Festival Sriwijaya 2025 mengusung tema \“The Kingdom of Achipelago\", yang merupakan sebutan untuk kumpulan pulau atau gugusan beberapa pulau dari Laut Indo-China sampai dengan kepulauan Nusantara. Tema \"The Kingdom of Achipelago\" diangkat dengan tujuan untuk memberikan kilas balik atau rekam jejak kekuasaan dan kejayaan Kerajaan Sriwijaya sebagai kerajaan maritim terbesar di Indonesia pada masa lampau yang meliputi kemajuan perekonomian, ilmu pengetahuan dan sejarah serta seni dan budaya. Adapun konsep event Festival Sriwijaya terdiri dari: 1. Ilmu Pengetahuan dan Sejarah 2. Kongres Kebudayaan Sumatera Selatan 3. Sriwijaya Heritage Exhibition 4. Sriwijaya Writer Festival 5. Tapak Jejak Sriwijaya 6. Bazar dan Pameran Ekonomi Kreatif.",
      link: "https://eventdaerah.kemenparekraf.go.id/detail-event/festival-sriwijaya-3",
    },

    {
      name: "Festival Rimpu Mantika",
      date: new Date("2025-4-24"),
      location: "Kab. Bima, Nusa Tenggara Barat",
      image: "https://eventdaerah.kemenparekraf.go.id/storage/app/uploads/public/67c/a5d/b19/67ca5db19eee2320290723.jpg",
      description: "Festival Rimpu Mantika merupakan promosi pariwisata melalui pelestarian budaya yang disertai peran serta para pelaku ekonomi kreatif guna meningkatkan perekonomian masyarakat dan kunjungan wisatawan. Tema event tahun ini: Aesthetic of Bima Konsep event: berfokus pada pelestarian keindahan budaya Bima dari anak-anak TK dan SD yang ikut serta dalam permainan tradisional anak tempo dulu hingga orang dewasa yang memainkan musik tradisional Bima yang dipercantik dengan tampilan peragaan busana dari Kota Bima, Kabupaten Bima dan Kabupaten Dompu yang menggunakan kain khas Bima serta kuliner tradisional yang berkolaborasi dari berbagai daerah seperti Sumbawa, Lombok, NTT, Bali, Jawa, Sunda, Minang, Palembang, Medan, Sulawesi Selatan dan Maluku.",
      link: "https://eventdaerah.kemenparekraf.go.id/detail-event/festival-rimpu-mantika-2",
    },

    {
      name: "Festival Bakar Tongkang",
      date: new Date("2025-6-10"),
      location: "Kab. Rokan Hilir, Riau",
      image: "https://eventdaerah.kemenparekraf.go.id/storage/app/uploads/public/67c/523/2e4/67c5232e4c490612250626.jpg",
      description: "Festival Bakar Tongkang adalah perayaan tradisi yang kaya akan sejarah dan budaya, memperingati kedatangan para pemukim Tionghoa pertama di Muara Rokan. Diselenggarakan setiap tahun di Bagansiapiapi, festival ini menampilkan ritual pembakaran tongkang yang sarat dengan doa dan harapan untuk keselamatan serta keberuntungan. Puncaknya, adalah saat melihat arah jatuhnya tiang layar tongkang yang terbakar, yang diyakini menentukan keberuntungan usaha, apakah dari laut atau darat. Festival ini juga menjadi daya tarik wisata nasional yang tak boleh dilewatkan, dengan harapan dapat menarik lebih banyak wisatawan ke Rokan Hilir. Dengan berbagai acara budaya yang meriah, Festival Bakar Tongkang memberikan kesempatan bagi para pengunjung untuk merasakan kekayaan tradisi sekaligus mendorong perekonomian lokal. Ayo, jangan lewatkan kesempatan untuk menikmati keunikan dan keindahan festival ini!",
      link: "https://eventdaerah.kemenparekraf.go.id/detail-event/festival-bakar-tongkang-3",
    },

    {
      name: "Kenduri Riau",
      date: new Date("2025-9-19"),
      location: "Kota Pekanbaru, Riau",
      image: "https://eventdaerah.kemenparekraf.go.id/storage/app/uploads/public/67c/525/3b4/67c5253b43503303742363.jpg",
      description: "Kenduri Riau adalah acara tahunan yang dirancang untuk menyatukan dan memamerkan pertumbuhan industri kreatif di Pekanbaru, ibu kota provinsi Riau. Seiring dengan perkembangan kota ini, yang ditandai dengan bertambahnya jumlah hotel, mal, kafe, dan infrastruktur yang semakin baik seperti jalan tol dan bandara internasional, Pekanbaru semakin berkembang menjadi pusat kreativitas dan sentra untuk Meetings, Incentives, Conventions, and Exhibitions (MICE). Kenduri Riau memberikan platform bagi industri lokal, pariwisata, dan komunitas untuk berkolaborasi, bertukar ide, dan memamerkan pencapaian mereka. Acara ini juga berfungsi sebagai barometer bagi perkembangan sektor-sektor tersebut, sekaligus mempromosikan budaya lokal, mendidik, dan menginspirasi seniman serta pengusaha untuk memperkenalkan merek-merek lokal dengan percaya diri.",
      link: "https://eventdaerah.kemenparekraf.go.id/detail-event/kenduri-riau-3",
    },

    {
      name: "Gelar Melayu Serumpun",
      date: new Date("2025-5-24"),
      location: "Kota Medan, Sumatera Utara",
      image: "https://eventdaerah.kemenparekraf.go.id/storage/app/uploads/public/67c/517/091/67c5170916cd1061484712.jpg",
      description: "Gelar Melayu Serumpun merupakan event yang bertujuan untuk melestarikan seni budaya Melayu sebagai unsur penting kekuatan budaya nasional sekaligus wadah silaturahmi antar daerah Melayu serumpun baik daerah dalam dan luar provinsi maupun negara tetangga.  Berlangsung selama lima hari, Gelar Melayu Serumpun dimeriahkan dengan tim kesenian dari dalam dan luar negeri seperti dari Malaysia, Singapura, Brunei, Thailand, India, dan lainnya dengan menampilkan atraksi seni dan budaya. Gelar Melayu Serumpun 2025 akan dimeriahkan dengan berbagai kegiatan menarik mulai dari penampilan Tari Gelar Melayu Serumpun, penampilan musik orchestra, hingga atraksi memasak makanan khas Melayu. Mengusung tema \"Merajut Asa Menjadi Saudara\", Gelar Melayu Serumpun akan diselenggarakan di Istana Maimoon sebagai simbol kejayaan budaya Melayu di Kota Medan.",
      link: "https://eventdaerah.kemenparekraf.go.id/detail-event/gelar-melayu-serumpun-gms",
    },

    {
      name: "Tubaba Art Festival",
      date: new Date("2025-6-24"),
      location: "Kab. Tulang Bawang Barat, Lampung",
      image: "https://eventdaerah.kemenparekraf.go.id/storage/app/uploads/public/67c/90b/b5a/67c90bb5a0e68565502671.jpg",
      description: "Tubaba Art Festival (TAF) adalah festival berbasis kreativitas warga Tubaba yang diselenggarakan setiap tahun.  Mengapungkan nilai-nilai baik berdasarkan falsafah Tubaba: Nemen (bekerja keras) Nedes (tahan banting), Nerimo  (Ikhlas), juga Setara, Sederhana dan Lestari (SLL). Pada awal penyelenggaraannya festival ini merupakan media  presentasi akhir kelas-kelas kesenian bagi warga (kemudian dikenal sebagai Sekolah Seni Tubaba). Tidak semata mementaskan dan memamerkan karya seni para murid, festival mengajak seniman dari lingkungan Tubaba,  Lampung, seniman nasional bahkan internasional. Menghadirkan para seniman dari lingkungan yang lebih luas,  merupakan upaya agar murid-murid belajar pada seniman yang lebih berpengalaman. Hasrat belajar diyakini sebagai  substansi bagi perkembangan ekosistem seni, kebudayaan dan pariwisata yang lebih kuat. Lebih jauh penciptaan ekosistem yang kuat memerlukan elemen-elemen lain sebagai pendukungnya. Sebagai kota yang  baru saja memulai kerja kebudayaan (sejak delapan tahun silam), festival ini selalu berupaya menciptakan penonton.  Setiap tahun kuantitas penonton semakin bertambah, juga kualitasnya. Penonton TAF Merupakan penonton yang plural,  baik dari segi usia, gender maupun tingkatan ekonomi. Secara kewilayahan penonton TAF bukan hanya dari kalangan  warga Tubaba, tapi juga merupakan warga dari kota-kota sekitarnya.",
      link: "https://eventdaerah.kemenparekraf.go.id/detail-event/tubaba-art-festival-3",
    },

    {
      name: "Solo Menari",
      date: new Date("2025-4-26"),
      location: "Kota Surakarta, Jawa Tengah",
      image: "https://eventdaerah.kemenparekraf.go.id/storage/app/uploads/public/67c/52a/bad/67c52abadc388926779163.jpg",
      description: "Solo Menari 2025 hadir dengan tema Daun Menari, sebuah perayaan keindahan alam dan seni tari yang menginspirasi. Mengangkat simbol daun yang memberi manfaat bagi kehidupan, festival ini mengajak kita untuk lebih peduli terhadap alam dan lingkungannya. Event ini juga menjadi momen penting peringatan Hari Tari Dunia pada 29 April, yang dirayakan secara meriah di Kota Solo. Dengan menghidupkan kreativitas tari yang tumbuh di masyarakat, Solo Menari 2025 bertujuan mendorong sektor ekonomi kreatif dan memperkenalkan potensi pariwisata Solo ke dunia. Melalui karya tari yang terinspirasi oleh alam, acara ini memperkuat posisi Kota Solo sebagai Kota Kreatif di bidang Craft dan Folk Art, yang baru saja diakui oleh UNESCO. Jangan lewatkan kesempatan untuk merayakan seni tari dan merawat alam bersama di Solo Menari 2025!",
      link: "https://eventdaerah.kemenparekraf.go.id/detail-event/solo-menari-3",
    },

    {
      name: "Festival Gelar dan Budaya Hari Nelayan Palabuhanratu",
      date: new Date("2025-4-20"),
      location: "Kab. Sukabumi, Jawa Barat",
      image: "https://eventdaerah.kemenparekraf.go.id/storage/app/uploads/public/67c/a5a/317/67ca5a3175597099050239.jpg",
      description: "Festival Dan Gelar Budaya Hari Nelayan Ke – 64 Tahun 2024 Palabuhanratu – Sukabumi ” yang merupakan usaha mewujudkan serta pengembangan konsep dari berbagai kegiatan dan pertunjukan yang diadakan di pesisir Palabuhanratu dalam rangka pelestarian budaya lokal masyarakat nelayan palabuhanratu Dengan diselenggarakannya kegiatan ini semoga menjadi titik temu untuk berkompetisi dalam ruang lingkup pariwisata, budaya, perikanan dan membuka jalan untuk kegiatan sejenis lainnya antar masyarakat nelayan. Bahkan tidak menutup kemungkinan kegiatan ini menjadi cikal bakal untuk menyerap wisatawan dalam maupun luar negeri.",
      link: "https://eventdaerah.kemenparekraf.go.id/detail-event/festival-gelar-dan-budaya-hari-nelayan-palabuhanratu",
    },

    {
      name: "Makassar Culinary Night",
      date: new Date("2025-4-25"),
      location: "Kota Makassar, Sulawesi Selatan",
      image: "https://eventdaerah.kemenparekraf.go.id/storage/app/uploads/public/67c/a67/b18/67ca67b1869c7640497171.jpeg",
      description: "Makassar Culinary Night hadir sebagai wadah dan warna yang baru dalam festival kuliner, festival kuliner dengan konsep street food pertama yang hadir di kota Makassar, hadir sebagai wadah bagi para UMKM. memilih pertama kali di adakan di jalan Balaikota, tepatnya bersampingan dengan Taman Macan & Museum Kota yang merupakan icon dari Kota Makassar. Makassar Culinary Night telah melahirkan beberapa tenant-tenant baru sejak tahun 2015. Melakukan simulasi dan menentukan market jualan pada pertama kali di Makassar Culinary Night, yang hingga saat ini beberapa tenant telah membuka beberapa outlet dengan berbagai cabang.  ",
      link: "https://eventdaerah.kemenparekraf.go.id/detail-event/makassar-culinary-night",
    },


    {
      name: "Festival Tabut",
      date: new Date("2025-6-27"),
      location: "Kota Bengkulu, Bengkulu",
      image: "https://eventdaerah.kemenparekraf.go.id/storage/app/uploads/public/67c/909/612/67c909612204e470498657.jpg",
      description: "Festival Tabut merupakan event budaya ikonik Provinsi Bengkulu yang menampikan tradisional kemeriahan perayaan tahun barus Islam dengan karnaval bangunan tabut yang sangat unik diiringi atraksi Dhol Bengkulu yang sudah mendunia ditambah bahwa Provinsi Bengkulu merupakan salah satu pemilik heritage terbanyak di Indonesia dan pemilik habitat Bunga Rafflesia Arnoldii terbesar di dunia. Festival Tabut dilaksanakan bertepatan Tahun Baru Islam tanggal 1 Muharam yang berlangsung selama 10 hari. Tabut berupa bangunan bertingkat-tingkat seperti menara masjid, dengan ukuran yang beragam dan berhiaskan lapisan kertas warna warni dengan bentuk dan filosofis yang sangat bervariasi sesuai dengan posisi dan kedudukan tabut tersebut secara kesakralan. Puncaknya adalah pada hari ke-10 yaitu arakan/karnaval tabut tebuang dengan menempuh rute sepanjang 3,4 km. Bulan Tabut telah menjadi tradisi otentik Bengkulu yang diselenggarakan secara turun-temurun sejak abad 14. Selama 10 hari diisi dengan prosesi upacara adat tabut yang sangat unik yang menjadi nilai-nilai luhur budaya serta pertunjukan seni & budaya asli Bengkulu seperti permainan rakyat telong-telong, ikan-ikan, atraksi tokok dhol dan tari kreasi tabut. Pengalaman ini hanya dapat ditemukan di Provinsi Bengkulu.",
      link: "https://eventdaerah.kemenparekraf.go.id/detail-event/festival-tabut-3",
    },
];

export default events;