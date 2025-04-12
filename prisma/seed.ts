import axios from "axios";
import { Prisma, PrismaClient } from "../src/app/generated/prisma";

const prisma = new PrismaClient();

// Ini Dataset nya
const API_URL = "https://your-ml-api.com/blablabla";

// Ini Data Biasa
const cultures: Prisma.CultureCreateInput[] = [
  // Bali
  {
    title: "Ngaben",
    year: 900,
    location: "Gianyar",
    image:
      "https://kesrasetda.bulelengkab.go.id/uploads/konten/100-upacara-ngaben-dalam-agama-hindu.jpg",
    description:
      "Ngaben adalah upacara pembakaran jenazah yang menjadi bagian penting dari tradisi Hindu Bali. Upacara ini bertujuan membebaskan roh orang yang telah meninggal dari belenggu duniawi agar dapat kembali ke asalnya atau bereinkarnasi. Berdasarkan sejarah, tradisi ini sudah dilakukan sejak abad ke-10 ketika ajaran Hindu mulai menyatu dengan budaya lokal Bali. Upacara Ngaben bukan hanya sekadar ritual, melainkan juga merupakan simbol penghormatan kepada leluhur dan ekspresi artistik masyarakat Bali. Prosesi Ngaben biasanya dimulai dengan persiapan pembuatan 'bade' (menara pembakaran), dan lembu simbolis yang akan dibakar bersama jenazah. Keluarga akan menggelar upacara dengan iringan gamelan, doa-doa suci, dan arak-arakan yang meriah, menunjukkan bagaimana kematian dipandang bukan sebagai kesedihan, melainkan pelepasan yang suci. Bagi masyarakat Bali, Ngaben mencerminkan hubungan erat antara manusia, leluhur, dan alam semesta. Upacara ini juga menjadi bukti betapa kuatnya nilai kebersamaan, karena seluruh banjar (lingkungan adat) turut serta membantu. Sampai hari ini, Ngaben tetap dilestarikan dan sering dilakukan dalam bentuk massal agar lebih terjangkau bagi masyarakat.",
    district: "Gianyar",
    province: "Bali",
  },
  {
    title: "Perang Pandan",
    year: 1400,
    location: "Desa Tenganan, Karangasem",
    image:
      "https://cdn2.gnfi.net/gnfi/uploads/articles/tradisi-mekare-kare-sebuah-perang-penghormatan-kepada-dewa-indra-di-desa-tenganan-bal.jpg",
    description:
      "Perang Pandan, atau yang dikenal juga dengan nama Mekare-kare, adalah tradisi unik dari Desa Tenganan, Karangasem, Bali. Tradisi ini merupakan bentuk penghormatan kepada Dewa Indra, dewa perang dalam ajaran Hindu, yang diyakini telah melindungi manusia dari kekuatan jahat. Perang Pandan sudah dilaksanakan sejak abad ke-15 oleh masyarakat Bali Aga (Bali Mula), yaitu penduduk asli Bali sebelum masuknya pengaruh Majapahit. Tradisi ini dilaksanakan setiap tahun dalam rangkaian upacara Dewa Indra. Dua pria bertelanjang dada akan saling bertarung menggunakan daun pandan berduri dan perisai rotan. Luka yang muncul dianggap sebagai berkah dan simbol keberanian. Prosesi ini bukanlah bentuk kekerasan, melainkan ritual sakral penuh makna spiritual. Setelah bertarung, peserta akan dirawat menggunakan ramuan tradisional berbahan daun sirih dan kunyit. Selain sebagai ritual keagamaan, Perang Pandan juga menjadi daya tarik wisata budaya yang memperlihatkan keberanian, solidaritas, dan semangat kekeluargaan masyarakat Tenganan.",
    district: "Karangasem",
    province: "Bali",
  },
  {
    title: "Makepung",
    year: 1920,
    location: "Jembrana",
    image:
      "https://hypeabis.id/assets/photo/20211205173120000000IDewaPutuAriKresnaArthaNegara081229727107TradisiMakepungcopy.jpg",
    description:
      "Makepung adalah tradisi balap kerbau yang berasal dari Kabupaten Jembrana, Bali. Kata 'Makepung' berarti berkejaran atau berpacu, di mana sepasang kerbau yang dihias akan dipacu oleh joki di atas bajak yang dimodifikasi. Tradisi ini lahir pada awal abad ke-20 sebagai bentuk hiburan masyarakat petani setelah panen. Balapan dilakukan di sawah yang telah dikeringkan dengan panjang lintasan sekitar 100 meter. Makepung lebih dari sekadar olahraga tradisional—ia merupakan simbol kerja sama antara manusia dan hewan, serta representasi dari kehidupan agraris Bali. Setiap tahunnya, Makepung diadakan dalam skala besar yang disebut 'Makepung Governor’s Cup', di mana ratusan kerbau berkompetisi dalam suasana meriah. Kerbau yang ikut balapan dilatih dan dirawat khusus selama berbulan-bulan. Tradisi ini menggambarkan kekuatan budaya lokal dan tetap eksis hingga kini karena diwariskan lintas generasi dan didukung pemerintah daerah sebagai ikon pariwisata budaya.",
    district: "Jembrana",
    province: "Bali",
  },
  {
    title: "Omed-Omedan",
    year: 1800,
    location: "Banjar Kaja, Denpasar",
    image:
      "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/70/2024/03/11/omedan-2865557365.jpg",
    description:
      "Omed-Omedan adalah tradisi unik yang dilakukan oleh pemuda-pemudi di Banjar Kaja, Sesetan, Denpasar setiap hari Ngembak Geni, sehari setelah Nyepi. Tradisi ini diperkirakan telah ada sejak abad ke-19 dan bertujuan untuk mempererat tali persaudaraan dan mengusir energi negatif dari lingkungan. Dalam prosesi Omed-Omedan, para pemuda dan pemudi yang belum menikah akan saling tarik-menarik, berpelukan, dan bahkan berciuman di tengah jalan, disaksikan oleh ratusan warga dan wisatawan. Air akan disiramkan ke peserta untuk menciptakan suasana riuh dan seru. Menurut kepercayaan lokal, Omed-Omedan tidak boleh ditiadakan karena dipercaya dapat mendatangkan hal buruk. Tradisi ini juga menjadi simbol regenerasi sosial, tempat pemuda berkenalan dan mempererat komunitas. Walaupun pernah dilarang, Omed-Omedan tetap dilestarikan karena nilai historis, budaya, dan kearifan lokalnya. Kini, tradisi ini menjadi atraksi budaya tahunan yang menyedot perhatian wisatawan domestik dan mancanegara.",
    district: "Denpasar Selatan",
    province: "Bali",
  },
  {
    title: "Mesabatan Biu",
    year: 1700,
    location: "Bangli",
    image:
      "https://balifactualnews.com/wp-content/uploads/2023/05/perang-pisang-tenganan-dauh-tukad-1.jpg",
    description:
      "Mesabatan Biu adalah tradisi saling lempar pisang yang dilakukan oleh masyarakat di Bangli, Bali. Kata 'biu' dalam bahasa Bali berarti pisang. Tradisi ini merupakan simbol penyucian dan keseimbangan alam, serta dilakukan sebagai bagian dari perayaan Hari Raya Nyepi. Mesabatan Biu diperkirakan telah ada sejak abad ke-18 dan dilaksanakan oleh pemuda desa sebagai sarana pelepasan emosi dan konflik secara simbolik. Dalam prosesi ini, dua kelompok pemuda saling melempar buah pisang kepok yang sudah matang, sambil tertawa dan bersorak. Walau terlihat seperti permainan, namun tradisi ini memiliki makna mendalam: mengembalikan keseimbangan sosial serta membuang sial dari desa. Setelah ritual selesai, para peserta akan saling bersalaman sebagai simbol perdamaian. Tradisi ini mencerminkan filosofi Tri Hita Karana—keharmonisan antara manusia, alam, dan Tuhan. Mesabatan Biu terus dilestarikan karena selain memperkuat kebersamaan antarwarga, juga menjadi daya tarik budaya yang unik dari Bangli.",
    district: "Bangli",
    province: "Bali",
  },

  // Yogyakarta
  {
    title: "Sekaten",
    year: 1443,
    location: "Keraton Yogyakarta",
    image:
      "https://mmc.tirto.id/image/2024/09/14/sekaten-keraton-ngayogyakarta--3_ratio-16x9.jpg",
    description:
      "Sekaten adalah tradisi tahunan masyarakat Yogyakarta yang dilaksanakan untuk memperingati Maulid Nabi Muhammad SAW. Tradisi ini memiliki akar sejarah panjang dan merupakan perpaduan antara nilai-nilai Islam dan budaya Jawa. Istilah 'Sekaten' berasal dari kata 'Syahadatain', yaitu dua kalimat syahadat, dan diyakini sebagai media dakwah yang diperkenalkan oleh Wali Songo, khususnya Sunan Kalijaga, pada abad ke-15 untuk menarik minat masyarakat Jawa yang saat itu masih memeluk kepercayaan animisme dan Hindu-Buddha agar tertarik kepada Islam. Dalam pelaksanaannya, Sekaten digelar selama seminggu dan diawali dengan iring-iringan gamelan pusaka Keraton, yakni gamelan 'Kyai Gunturmadu' dan 'Kyai Nogowilogo', yang dibawa dari dalam Keraton menuju Masjid Gedhe Kauman. Gamelan ini dibunyikan secara terus-menerus setiap malam selama perayaan Sekaten, dan masyarakat percaya bahwa mendengarkan gamelan Sekaten dapat membawa berkah dan keselamatan. Puncak dari perayaan ini adalah upacara 'Grebeg Maulud' yang ditandai dengan kirab Gunungan, yaitu tumpukan hasil bumi seperti sayur, buah, dan makanan tradisional yang disusun menyerupai gunung. Gunungan kemudian dibawa dari Keraton menuju Masjid Gedhe Kauman dan dibagikan kepada masyarakat. Tradisi ini sarat dengan makna simbolis; gunungan melambangkan kemakmuran dan berbagi rezeki, sementara proses iring-iringannya mencerminkan kekuatan spiritual dan nilai-nilai kolektivitas masyarakat. Di samping upacara keagamaan, perayaan Sekaten juga dimeriahkan dengan pasar malam rakyat yang dikenal sebagai 'Pasar Malam Perayaan Sekaten'. Di sini, pengunjung dapat menikmati berbagai hiburan tradisional seperti komidi putar, permainan anak-anak, pertunjukan wayang, serta berbagai kuliner khas Yogyakarta. Hal ini menciptakan suasana semarak yang tidak hanya bernuansa religius, tetapi juga sosial dan ekonomi, karena menjadi ajang bagi pelaku UMKM dan pedagang lokal untuk menawarkan produk mereka. Sekaten juga menjadi ajang silaturahmi dan reuni masyarakat dari berbagai daerah. Banyak warga Yogyakarta yang merantau akan menyempatkan diri pulang kampung untuk mengikuti tradisi ini bersama keluarga. Ini memperkuat ikatan sosial antarwarga dan menjaga kesinambungan budaya. Meskipun sempat mengalami berbagai perubahan seiring perkembangan zaman, esensi dari Sekaten tetap dijaga oleh pihak Keraton dan masyarakat. Tradisi ini telah diakui sebagai warisan budaya tak benda oleh pemerintah dan terus menjadi bagian penting dalam kalender budaya Yogyakarta. Sekaten bukan hanya sekadar ritual, melainkan juga cermin dari keberagaman budaya Nusantara yang tetap harmonis dalam bingkai spiritualitas Islam dan kearifan lokal Jawa.",
    district: "Kraton",
    province: "Yogyakarta",
  },
  {
    title: "Grebeg Maulud",
    year: 1755,
    location: "Keraton Yogyakarta",
    image:
      "https://img.antarafoto.com/cache/1200x799/2023/09/28/grebeg-maulud-keraton-yogyakarta-18bvu-dom.webp",
    description:
      "Grebeg Maulud adalah salah satu tradisi budaya dan keagamaan yang paling menonjol di Yogyakarta, yang diselenggarakan setiap tahun oleh Keraton Yogyakarta untuk memperingati kelahiran Nabi Muhammad SAW. Acara ini merupakan puncak dari rangkaian perayaan Sekaten dan dilaksanakan pada tanggal 12 Rabiul Awal dalam kalender Hijriah. Tradisi ini memiliki akar sejarah yang panjang dan merupakan perpaduan antara nilai-nilai Islam dan budaya Jawa. Prosesi Grebeg Maulud dimulai dengan kirab Gunungan, yaitu tumpukan hasil bumi seperti sayur, buah, dan makanan tradisional yang disusun menyerupai gunung. Gunungan ini melambangkan kemakmuran dan berkah yang diharapkan dapat dibagikan kepada masyarakat. Kirab dimulai dari Keraton Yogyakarta dan diiringi oleh pasukan prajurit Keraton yang mengenakan pakaian tradisional, serta diiringi oleh musik gamelan. Gunungan kemudian dibawa menuju Masjid Gedhe Kauman dan dibagikan kepada masyarakat yang telah menunggu. Masyarakat percaya bahwa mendapatkan bagian dari Gunungan akan membawa keberkahan dan keselamatan. Selain prosesi kirab, Grebeg Maulud juga diisi dengan berbagai kegiatan keagamaan seperti pembacaan riwayat Nabi dan ceramah agama yang dilaksanakan pada malam tanggal 12 Rabiul Awal. Tradisi ini tidak hanya menjadi sarana dakwah, tetapi juga mempererat hubungan antara Keraton dan rakyat. Grebeg Maulud merupakan simbol harmonisasi antara nilai-nilai Islam dan budaya lokal, serta menjadi bukti kekayaan budaya Yogyakarta yang terus dilestarikan hingga kini.",
    district: "Kraton",
    province: "Yogyakarta",
  },
  {
    title: "Wayang Kulit",
    year: 1000,
    location: "Yogyakarta",
    image: "https://tribratanews.polri.go.id/web/image/blog.post/55721/image",
    description:
      "Wayang Kulit adalah seni pertunjukan tradisional Jawa yang menggunakan boneka kulit datar untuk menceritakan kisah-kisah epik seperti Ramayana dan Mahabharata. Pertunjukan ini dilakukan oleh seorang dalang yang duduk di belakang layar dan menggerakkan wayang dengan menggunakan tongkat, sambil menceritakan kisah yang dibawakan. Wayang Kulit tidak hanya menjadi hiburan, tetapi juga sarana pendidikan moral dan spiritual bagi masyarakat. Di Yogyakarta, Wayang Kulit memiliki gaya khas yang dikenal dengan 'gagrag Yogyakarta', yang memiliki ciri khas dalam bentuk wayang, gaya penceritaan, dan musik pengiringnya. Pertunjukan Wayang Kulit biasanya diiringi oleh gamelan dan diselenggarakan pada malam hari hingga dini hari. Selain itu, Wayang Kulit juga sering dipentaskan dalam acara-acara penting seperti pernikahan, khitanan, dan upacara adat lainnya. Seni ini telah diakui oleh UNESCO sebagai warisan budaya tak benda dan terus dilestarikan oleh masyarakat Yogyakarta melalui berbagai pertunjukan dan pendidikan seni tradisional.",
    district: "Kota Yogyakarta",
    province: "Yogyakarta",
  },
  {
    title: "Tari Bedhaya",
    year: 1755,
    location: "Keraton Yogyakarta",
    image:
      "https://pariwisataindonesia.id/wp-content/uploads/2020/10/Tari-Bedhaya-foto-by-3.bp_.blogspot.com_.jpg",
    description:
      "Tari Bedhaya adalah tarian sakral yang dipentaskan di Keraton Yogyakarta, biasanya oleh sembilan penari wanita, dan memiliki makna spiritual serta simbolik yang mendalam. Tarian ini merupakan bagian dari upacara adat Keraton dan hanya dipentaskan pada acara-acara tertentu yang bersifat sakral. Gerakan dalam Tari Bedhaya sangat halus dan penuh makna, mencerminkan nilai-nilai kesopanan, keanggunan, dan keharmonisan. Musik pengiringnya adalah gamelan dengan tempo lambat yang menambah suasana khidmat dan sakral. Setiap gerakan dalam tarian ini memiliki filosofi tersendiri yang berkaitan dengan ajaran spiritual dan nilai-nilai kehidupan. Tari Bedhaya tidak hanya menjadi simbol keindahan seni tari Jawa, tetapi juga sebagai media pelestarian nilai-nilai budaya dan spiritual Keraton Yogyakarta. Hingga kini, Tari Bedhaya tetap dilestarikan dan diajarkan kepada generasi muda sebagai bagian dari upaya menjaga warisan budaya yang berharga.",
    district: "Kraton",
    province: "Yogyakarta",
  },
  {
    title: "Upacara Labuhan",
    year: 1600,
    location: "Gunung Merapi dan Pantai Parangkusumo",
    image:
      "https://t-2.tstatic.net/jogja/foto/bank/images/Prosesi-Labuhan-Keraton-Ngayogyakarta-Selasa-2122023.jpg",
    description:
      "Upacara Labuhan adalah ritual persembahan kepada penguasa alam, dilakukan oleh Keraton Yogyakarta di Gunung Merapi dan Pantai Parangkusumo untuk memohon keselamatan dan kesejahteraan. Ritual ini merupakan bentuk penghormatan dan permohonan kepada kekuatan alam agar memberikan perlindungan dan keseimbangan bagi kehidupan masyarakat. Di Gunung Merapi, upacara dilakukan dengan membawa sesaji yang terdiri dari berbagai hasil bumi dan barang-barang simbolik lainnya, yang kemudian dilarung atau ditanam sebagai bentuk persembahan. Sementara di Pantai Parangkusumo, sesaji dilarung ke laut sebagai simbol pengembalian kepada alam. Upacara Labuhan biasanya dilaksanakan pada waktu-waktu tertentu yang telah ditentukan oleh Keraton, dan melibatkan abdi dalem serta masyarakat sekitar. Tradisi ini mencerminkan hubungan harmonis antara manusia dan alam, serta menjadi bagian penting dalam sistem kepercayaan dan budaya masyarakat Yogyakarta. Hingga kini, Upacara Labuhan tetap dilestarikan sebagai warisan budaya yang sarat makna dan nilai spiritual.",
    district: "Sleman dan Bantul",
    province: "Yogyakarta",
  },
  // Aceh
  {
    title: "Tari Saman",
    year: 1300,
    location: "Gayo Lues",
    image:
      "https://www.blibli.com/friends-backend/wp-content/uploads/2022/07/60dacbf4238f5.jpg",
    description:
      "Tari Saman adalah salah satu tarian tradisional yang berasal dari suku Gayo di Aceh. Tarian ini memiliki sejarah panjang yang telah ada sejak abad ke-14 dan hingga kini tetap dijaga dan dilestarikan. Tari Saman dikenal dengan gerakan yang sangat dinamis, cepat, dan penuh kekompakan. Biasanya, tari ini dibawakan oleh sekelompok pria yang duduk berbaris rapat. Dalam pertunjukan tari ini, penari akan melakukan serangkaian gerakan tangan, tubuh, dan kepala secara serempak dan ritmis. Kekuatan dalam Tari Saman terletak pada kekompakan gerakan yang harus dilakukan dengan tepat oleh seluruh penari. Gerakan tangan yang cepat dan bervariasi, disertai dengan ketukan tubuh dan tepukan tangan, menciptakan irama yang sangat memukau. Tari Saman sering kali dipertunjukkan dalam berbagai acara adat dan perayaan penting di Aceh, termasuk perayaan Hari Raya, pernikahan, dan acara kebudayaan lainnya. Selain itu, tari ini juga digunakan dalam acara yang melibatkan masyarakat umum sebagai bentuk rasa syukur atas keberhasilan atau sebagai bentuk penghormatan kepada leluhur. Tari Saman memiliki makna yang sangat dalam, baik dalam hal religi maupun sosial. Beberapa makna yang terkandung dalam tarian ini antara lain mengajarkan tentang kedisiplinan, kerjasama, kekompakan, dan rasa kebersamaan antar sesama. Tarian ini tidak hanya sekadar pertunjukan seni, tetapi juga merupakan bentuk penghormatan terhadap Tuhan dan alam semesta. Tari Saman bahkan telah diakui oleh UNESCO sebagai Warisan Budaya Takbenda yang perlu dilestarikan, yang semakin menegaskan betapa pentingnya budaya ini dalam memperkaya khasanah budaya Indonesia, khususnya budaya Aceh.",
    district: "Gayo Lues",
    province: "Aceh",
  },
  {
    title: "Peusijuek",
    year: 1600,
    location: "Seluruh Aceh",
    image:
      "https://cdn.rri.co.id/berita/Sabang/o/1714478661367-zf38xdjyu25qc5i/nr71fnw5sex25uq.jpeg",
    description:
      "Peusijuek adalah sebuah upacara adat yang sudah menjadi bagian dari kehidupan masyarakat Aceh sejak berabad-abad yang lalu. Peusijuek sering dilakukan dalam berbagai acara penting dalam kehidupan masyarakat Aceh, seperti pernikahan, kelahiran, serta ketika seseorang memulai suatu usaha baru atau saat seseorang ingin memulai perjalanan penting. Prosesi Peusijuek ini memiliki makna yang sangat dalam karena dipercaya bahwa air yang digunakan dalam prosesi ini telah diberkahi dan dapat memberikan keberkahan serta keselamatan bagi yang menerimanya. Upacara ini melibatkan pemercikan air yang telah dibacakan doa oleh orang yang lebih tua atau ulama kepada individu yang akan menerima berkah tersebut. Prosesi Peusijuek dapat dilakukan di rumah, di tempat ibadah, atau di tempat-tempat tertentu yang dianggap sakral. Terkadang, setelah prosesi Peusijuek dilakukan, masyarakat juga mengadakan syukuran atau jamuan makan sebagai ungkapan rasa syukur. Selain itu, Peusijuek juga berfungsi sebagai pengikat hubungan sosial antar anggota masyarakat. Dalam kehidupan sehari-hari, Peusijuek menjadi simbol bahwa masyarakat Aceh hidup dalam kebersamaan, saling mendukung, dan selalu berharap agar diberikan perlindungan oleh Tuhan. Seiring berjalannya waktu, meskipun banyak adat istiadat yang mulai terkikis oleh perkembangan zaman, Peusijuek tetap dipertahankan dan menjadi salah satu simbol kuat dari budaya Aceh.",
    district: "Banda Aceh",
    province: "Aceh",
  },
  {
    title: "Meugang",
    year: 1600,
    location: "Seluruh Aceh",
    image:
      "https://acehtourism.travel/wp-content/uploads/2019/04/fmgtlzlqrz.jpg",
    description:
      "Meugang adalah salah satu tradisi yang sangat kental dengan masyarakat Aceh, terutama menjelang datangnya bulan Ramadan, Idul Fitri, dan Idul Adha. Tradisi ini sudah dilakukan sejak berabad-abad lalu dan masih dipraktikkan hingga saat ini. Meugang berasal dari kata 'meu' yang berarti 'memasak' dan 'gang' yang berarti 'daging', sehingga Meugang secara harfiah berarti memasak daging. Tradisi Meugang biasanya dilakukan dengan membeli daging sapi atau kambing yang kemudian dimasak bersama keluarga, tetangga, atau kerabat. Tujuan dari tradisi ini adalah untuk menjalin hubungan silaturahmi antara masyarakat, serta untuk berbagi rezeki, terutama pada saat-saat perayaan besar. Selain itu, Meugang juga menjadi ajang untuk menunjukkan rasa syukur atas nikmat yang diberikan oleh Tuhan. Daging yang dimasak dalam tradisi Meugang biasanya diolah menjadi berbagai hidangan khas Aceh, seperti gulai, rendang, dan kari. Meugang menjadi momen yang sangat dinantikan oleh masyarakat Aceh, karena selain menjadi waktu untuk berkumpul bersama keluarga, acara ini juga sering kali diikuti dengan doa-doa khusus, sebagai harapan agar kehidupan masyarakat selalu diberikan berkah dan keselamatan. Bahkan, ada tradisi bagi masyarakat Aceh yang tidak mampu membeli daging, akan mendapat daging sebagai bentuk sumbangan dari masyarakat yang lebih mampu, sehingga menciptakan rasa kebersamaan yang sangat kuat antar anggota masyarakat. Dalam Meugang, tidak hanya daging yang dimasak, tetapi juga ada berbagai hidangan lain yang menggambarkan betapa pentingnya kebersamaan dan saling memberi dalam kehidupan sosial masyarakat Aceh.",
    district: "Banda Aceh",
    province: "Aceh",
  },
  {
    title: "Uroe Tulak Bala",
    year: 1600,
    location: "Seluruh Aceh",
    image: "https://parksidehotels.co.id/wp-content/uploads/2024/07/tulak.jpg",
    description:
      "Uroe Tulak Bala adalah sebuah upacara adat yang dilakukan oleh masyarakat Aceh untuk menolak bala atau musibah yang bisa menimpa diri atau komunitas mereka. Upacara ini biasanya diadakan pada bulan Safar, yang merupakan bulan kedua dalam kalender Hijriyah. Uroe Tulak Bala diyakini dapat melindungi masyarakat dari bahaya atau malapetaka yang bisa datang kapan saja. Dalam upacara ini, masyarakat berkumpul dan melakukan doa bersama, serta berbagai kegiatan sosial untuk memohon perlindungan dari Tuhan. Prosesi ini sering kali diikuti dengan pemberian makanan atau minuman sebagai simbol rasa syukur dan harapan akan keselamatan. Uroe Tulak Bala bukan hanya sebuah upacara spiritual, tetapi juga merupakan momen untuk mempererat hubungan sosial antar anggota masyarakat Aceh. Acara ini sering kali dilaksanakan dengan melibatkan masyarakat dari berbagai lapisan, tanpa memandang status sosial. Selain doa bersama, dalam upacara ini juga terdapat tradisi yang melibatkan bunyi-bunyian, seperti drum atau alat musik tradisional Aceh, yang dipercaya dapat mengusir energi negatif dan membawa keberkahan. Upacara ini memiliki makna yang sangat mendalam bagi masyarakat Aceh, karena merupakan bentuk kepercayaan mereka terhadap kekuatan doa dan harapan agar Tuhan memberikan perlindungan dan kedamaian bagi mereka.",
    district: "Banda Aceh",
    province: "Aceh",
  },
  {
    title: "Hadrah Aceh",
    year: 1400,
    location: "Aceh",
    image:
      "https://acehbesarkab.go.id/thumbnail/1200x630/media/2023.03/08895497-7a9a-4784-bafd-f60ba8bd5c5b1.jpeg",
    description:
      "Hadrah Aceh adalah musik tradisional yang sangat lekat dengan budaya Aceh. Hadrah menggunakan alat musik perkusi, seperti rebana, kendang, dan alat musik lainnya yang dipukul untuk menciptakan irama yang khas dan penuh semangat. Hadrah sering digunakan dalam berbagai acara keagamaan dan adat, seperti pengajian, pernikahan, dan acara keagamaan lainnya. Musik ini memiliki makna yang sangat spiritual bagi masyarakat Aceh, karena dianggap sebagai cara untuk mendekatkan diri kepada Tuhan dan memohon berkah serta keselamatan. Melalui irama yang ritmis dan syahdu, Hadrah dapat memberikan rasa ketenangan serta kekuatan dalam menghadapi tantangan hidup. Hadrah Aceh biasanya dibawakan oleh kelompok musik yang terdiri dari beberapa orang, baik pria maupun wanita, yang memainkan alat musik rebana dan kendang secara bersama-sama. Setiap ketukan dan irama dalam Hadrah memiliki makna tertentu, dan penampilannya sering kali diiringi dengan nyanyian atau doa yang bertujuan untuk memperkuat ikatan spiritual dengan Tuhan. Selain itu, Hadrah Aceh juga menjadi simbol kebersamaan dan persatuan antar masyarakat. Masyarakat Aceh memandang Hadrah sebagai alat untuk menjaga nilai-nilai budaya dan agama, serta untuk mengajak orang lain untuk hidup dalam kedamaian dan harmoni.",
    district: "Aceh Besar",
    province: "Aceh",
  },
];

const events: Prisma.EventCreateInput[] = [
  {
    name: "Event 1",
    date: new Date(),
    location: "Location 1",
    image: "https://placehold.co/600x400",
    description: "Description 1",
    link: "https://example.com",
  },
  {
    name: "Event 2",
    date: new Date(),
    location: "Location 2",
    image: "https://placehold.co/600x400",
    description: "Description 2",
    link: "https://example.com",
  },
  {
    name: "Event 3",
    date: new Date(),
    location: "Location 3",
    image: "https://placehold.co/600x400",
    description: "Description 3",
    link: "https://example.com",
  },
  {
    name: "Event 4",
    date: new Date(),
    location: "Location 4",
    image: "https://placehold.co/600x400",
    description: "Description 4",
    link: "https://example.com",
  },
  {
    name: "Event 5",
    date: new Date(),
    location: "Location 5",
    image: "https://placehold.co/600x400",
    description: "Description 5",
    link: "https://example.com",
  },
  {
    name: "Event 6",
    date: new Date(),
    location: "Location 6",
    image: "https://placehold.co/600x400",
    description: "Description 6",
    link: "https://example.com",
  },
  {
    name: "Event 7",
    date: new Date(),
    location: "Location 7",
    image: "https://placehold.co/600x400",
    description: "Description 7",
    link: "https://example.com",
  },
];

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
];

async function fetchMLCultures(): Promise<Prisma.CultureCreateInput[]> {
  try {
    const response = await axios.get(API_URL);
    const data = response.data;

    const formatted = data.map((item: any) => ({
      title: item.title,
      year: item.year || 2024,
      location: item.location,
      image: item.image || "https://placehold.co/600x400",
      langtitude: item.langtitude || 0,
      longitude: item.longitude || 0,
      description: item.description || "",
    }));

    return formatted;
  } catch (error) {
    console.error("❌ Gagal mengambil data dari API ML:", error);
    return [];
  }
}

export async function main() {
  console.log("🌱 Seeding started...");

  const mlCultures = await fetchMLCultures();
  const allCultures = [...cultures, ...mlCultures];

  await seedCultures(allCultures);
  await seedEvents();
  await seedTours();

  console.log("✅ Seeding selesai.");
}

async function seedCultures(data: Prisma.CultureCreateInput[]) {
  for (const culture of data) {
    await prisma.culture.upsert({
      where: { title: culture.title },
      update: {},
      create: culture,
    });
  }
}

async function seedEvents() {
  for (const event of events) {
    await prisma.event.create({
      data: event,
    });
  }
}

async function seedTours() {
  for (const tour of tours) {
    await prisma.tour.create({
      data: tour,
    });
  }
}

main()
  .catch((e) => {
    console.error("❌ Error saat seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
