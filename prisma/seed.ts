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
    image: "https://kesrasetda.bulelengkab.go.id/uploads/konten/100-upacara-ngaben-dalam-agama-hindu.jpg",
    description: "Ngaben adalah upacara pembakaran jenazah yang menjadi bagian penting dari tradisi Hindu Bali. Upacara ini bertujuan membebaskan roh orang yang telah meninggal dari belenggu duniawi agar dapat kembali ke asalnya atau bereinkarnasi. Berdasarkan sejarah, tradisi ini sudah dilakukan sejak abad ke-10 ketika ajaran Hindu mulai menyatu dengan budaya lokal Bali. Upacara Ngaben bukan hanya sekadar ritual, melainkan juga merupakan simbol penghormatan kepada leluhur dan ekspresi artistik masyarakat Bali. Prosesi Ngaben biasanya dimulai dengan persiapan pembuatan 'bade' (menara pembakaran), dan lembu simbolis yang akan dibakar bersama jenazah. Keluarga akan menggelar upacara dengan iringan gamelan, doa-doa suci, dan arak-arakan yang meriah, menunjukkan bagaimana kematian dipandang bukan sebagai kesedihan, melainkan pelepasan yang suci. Bagi masyarakat Bali, Ngaben mencerminkan hubungan erat antara manusia, leluhur, dan alam semesta. Upacara ini juga menjadi bukti betapa kuatnya nilai kebersamaan, karena seluruh banjar (lingkungan adat) turut serta membantu. Sampai hari ini, Ngaben tetap dilestarikan dan sering dilakukan dalam bentuk massal agar lebih terjangkau bagi masyarakat.",
    district: "Gianyar",
    province: "Bali"
  },
  {
    title: "Perang Pandan",
    year: 1400,
    location: "Desa Tenganan, Karangasem",
    image: "https://cdn2.gnfi.net/gnfi/uploads/articles/tradisi-mekare-kare-sebuah-perang-penghormatan-kepada-dewa-indra-di-desa-tenganan-bal.jpg",
    description: "Perang Pandan, atau yang dikenal juga dengan nama Mekare-kare, adalah tradisi unik dari Desa Tenganan, Karangasem, Bali. Tradisi ini merupakan bentuk penghormatan kepada Dewa Indra, dewa perang dalam ajaran Hindu, yang diyakini telah melindungi manusia dari kekuatan jahat. Perang Pandan sudah dilaksanakan sejak abad ke-15 oleh masyarakat Bali Aga (Bali Mula), yaitu penduduk asli Bali sebelum masuknya pengaruh Majapahit. Tradisi ini dilaksanakan setiap tahun dalam rangkaian upacara Dewa Indra. Dua pria bertelanjang dada akan saling bertarung menggunakan daun pandan berduri dan perisai rotan. Luka yang muncul dianggap sebagai berkah dan simbol keberanian. Prosesi ini bukanlah bentuk kekerasan, melainkan ritual sakral penuh makna spiritual. Setelah bertarung, peserta akan dirawat menggunakan ramuan tradisional berbahan daun sirih dan kunyit. Selain sebagai ritual keagamaan, Perang Pandan juga menjadi daya tarik wisata budaya yang memperlihatkan keberanian, solidaritas, dan semangat kekeluargaan masyarakat Tenganan.",
    district: "Karangasem",
    province: "Bali"
  },
  {
    title: "Makepung",
    year: 1920,
    location: "Jembrana",
    image: "https://hypeabis.id/assets/photo/20211205173120000000IDewaPutuAriKresnaArthaNegara081229727107TradisiMakepungcopy.jpg",
    description: "Makepung adalah tradisi balap kerbau yang berasal dari Kabupaten Jembrana, Bali. Kata 'Makepung' berarti berkejaran atau berpacu, di mana sepasang kerbau yang dihias akan dipacu oleh joki di atas bajak yang dimodifikasi. Tradisi ini lahir pada awal abad ke-20 sebagai bentuk hiburan masyarakat petani setelah panen. Balapan dilakukan di sawah yang telah dikeringkan dengan panjang lintasan sekitar 100 meter. Makepung lebih dari sekadar olahraga tradisional—ia merupakan simbol kerja sama antara manusia dan hewan, serta representasi dari kehidupan agraris Bali. Setiap tahunnya, Makepung diadakan dalam skala besar yang disebut 'Makepung Governor’s Cup', di mana ratusan kerbau berkompetisi dalam suasana meriah. Kerbau yang ikut balapan dilatih dan dirawat khusus selama berbulan-bulan. Tradisi ini menggambarkan kekuatan budaya lokal dan tetap eksis hingga kini karena diwariskan lintas generasi dan didukung pemerintah daerah sebagai ikon pariwisata budaya.",
    district: "Jembrana",
    province: "Bali"
  },
  {
    title: "Omed-Omedan",
    year: 1800,
    location: "Banjar Kaja, Denpasar",
    image: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/70/2024/03/11/omedan-2865557365.jpg",
    description: "Omed-Omedan adalah tradisi unik yang dilakukan oleh pemuda-pemudi di Banjar Kaja, Sesetan, Denpasar setiap hari Ngembak Geni, sehari setelah Nyepi. Tradisi ini diperkirakan telah ada sejak abad ke-19 dan bertujuan untuk mempererat tali persaudaraan dan mengusir energi negatif dari lingkungan. Dalam prosesi Omed-Omedan, para pemuda dan pemudi yang belum menikah akan saling tarik-menarik, berpelukan, dan bahkan berciuman di tengah jalan, disaksikan oleh ratusan warga dan wisatawan. Air akan disiramkan ke peserta untuk menciptakan suasana riuh dan seru. Menurut kepercayaan lokal, Omed-Omedan tidak boleh ditiadakan karena dipercaya dapat mendatangkan hal buruk. Tradisi ini juga menjadi simbol regenerasi sosial, tempat pemuda berkenalan dan mempererat komunitas. Walaupun pernah dilarang, Omed-Omedan tetap dilestarikan karena nilai historis, budaya, dan kearifan lokalnya. Kini, tradisi ini menjadi atraksi budaya tahunan yang menyedot perhatian wisatawan domestik dan mancanegara.",
    district: "Denpasar Selatan",
    province: "Bali"
  },
  {
    title: "Mesabatan Biu",
    year: 1700,
    location: "Bangli",
    image: "https://balifactualnews.com/wp-content/uploads/2023/05/perang-pisang-tenganan-dauh-tukad-1.jpg",
    description: "Mesabatan Biu adalah tradisi saling lempar pisang yang dilakukan oleh masyarakat di Bangli, Bali. Kata 'biu' dalam bahasa Bali berarti pisang. Tradisi ini merupakan simbol penyucian dan keseimbangan alam, serta dilakukan sebagai bagian dari perayaan Hari Raya Nyepi. Mesabatan Biu diperkirakan telah ada sejak abad ke-18 dan dilaksanakan oleh pemuda desa sebagai sarana pelepasan emosi dan konflik secara simbolik. Dalam prosesi ini, dua kelompok pemuda saling melempar buah pisang kepok yang sudah matang, sambil tertawa dan bersorak. Walau terlihat seperti permainan, namun tradisi ini memiliki makna mendalam: mengembalikan keseimbangan sosial serta membuang sial dari desa. Setelah ritual selesai, para peserta akan saling bersalaman sebagai simbol perdamaian. Tradisi ini mencerminkan filosofi Tri Hita Karana—keharmonisan antara manusia, alam, dan Tuhan. Mesabatan Biu terus dilestarikan karena selain memperkuat kebersamaan antarwarga, juga menjadi daya tarik budaya yang unik dari Bangli.",
    district: "Bangli",
    province: "Bali"
  }  
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
    image: "https://labirutour.com/wp-content/uploads/2020/09/Keindahan-Pantai-Kuta-Bali-yang-sanggup-menarik-ribuan-wisatawan-setiap-tahunnya-1.jpg",
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
    image: "https://awsimages.detik.net.id/community/media/visual/2022/06/22/pura-ulun-danu-di-tabanan-bali-5.jpeg?w=1200",
    description: "Pura Ulun Danu Beratan adalah pura air yang terletak di tepi Danau Beratan, Bedugul. Dikelilingi oleh pegunungan, pura ini menawarkan pemandangan yang menakjubkan dan sering menjadi ikon pariwisata Bali.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftravel.detik.com%2Fdomestic-destination%2Fd-6146124%2Fterpukau-dengan-keindahan-pura-ulun-danu&psig=AOvVaw2kEmgvaJRWxzxtF8tWzvxY&ust=1744558913455000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCPiaksjq0owDFQAAAAAdAAAAABAE",
    prices: 50000.0,
    district: "Baturiti",
    province: "Bali",
    latitude: -8.2750,
    longitude: 115.1675
  },
  {
    name: "Tegallalang Rice Terrace",
    date: new Date("1800-01-01"),
    location: "Tegallalang, Gianyar",
    image: "https://media.cntraveler.com/photos/5e35bdf00e2bfd0008a03691/16:9/w_2560,c_limit/Tegallalang-GettyImages-515480864.jpg",
    description: "Tegallalang Rice Terrace terkenal dengan pemandangan sawah terasering yang indah dan hijau. Terletak di utara Ubud, tempat ini menawarkan pengalaman budaya dan alam yang autentik bagi para pengunjung.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cntraveler.com%2Factivities%2Fbali%2Fbali%2Ftegalang-rice-terrace&psig=AOvVaw33TBvgWFsM9QIjx1bG1Qr6&ust=1744558954006000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCKC-tdzq0owDFQAAAAAdAAAAABAY",
    prices: 25000.0,
    district: "Tegallalang",
    province: "Bali",
    latitude: -8.4366,
    longitude: 115.2790
  },
  {
    name: "Gunung Batur",
    date: new Date("1804-01-01"),
    location: "Kintamani, Bangli",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Mount_Batur.JPG",
    description: "Gunung Batur adalah gunung berapi aktif yang populer untuk kegiatan pendakian, terutama untuk menyaksikan matahari terbit. Terletak di Kintamani, gunung ini menawarkan pemandangan alam yang spektakuler.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftravel.okezone.com%2Fread%2F2023%2F04%2F12%2F406%2F2797503%2Fwisata-gunung-batur-bali-segera-dilengkapi-hiking-centre-pendakian-makin-nyaman%3Fpage%3Dall&psig=AOvVaw2lu7o-2fcnZSVbfzz7ppKo&ust=1744559005368000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCNDBvfPq0owDFQAAAAAdAAAAABAE",
    prices: 30000.0,
    district: "Kintamani",
    province: "Bali",
    latitude: -8.2390,
    longitude: 115.3750
  },  
  {
    name: "Pantai Pandawa",
    date: new Date("2011-01-01"),
    location: "Kutuh, Badung",
    image: "https://cozzy.id/uploads/0000/630/2024/09/04/cozzyid-hotel-murah-hotel-terdekat-penginapan-murah-penginapan-terdekat-booking-hotel-pantai-pandawa-bali-surga-tersembunyi-di-pulau-dewata-sumber-gambar-tenuedeattire.jpg",
    description: "Pantai Pandawa dikenal dengan pasir putihnya yang bersih dan tebing kapur yang mengesankan. Terletak di daerah Kutuh, pantai ini menawarkan suasana yang lebih tenang dan cocok untuk keluarga.",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcozzy.id%2Fnews%2Fpantai-pandawa-bali-surga-tersembunyi-di-pulau-dewata&psig=AOvVaw2pqNZ211Tt8OYEGI157yez&ust=1744559078704000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCKih9JTr0owDFQAAAAAdAAAAABAJ",
    prices: 15000.0,
    district: "Kutuh",
    province: "Bali",
    latitude: -8.8486,
    longitude: 115.1889
  }  
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
