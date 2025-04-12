import axios from "axios";
import { Prisma, PrismaClient } from "../src/app/generated/prisma";

const prisma = new PrismaClient();

// Ini Dataset nya
const API_URL = "https://your-ml-api.com/blablabla";

// Ini Data Biasa
const cultures: Prisma.CultureCreateInput[] = [
  {
    title: "Ngaben",
    year: 900,
    location: "Gianyar",
    image: "https://authentic-indonesia.com/wp-content/uploads/2018/05/Ngaben.jpg",
    description: "Ngaben adalah upacara pembakaran jenazah yang menjadi bagian penting dari tradisi Hindu Bali. Upacara ini bertujuan membebaskan roh orang yang telah meninggal dari belenggu duniawi agar dapat kembali ke asalnya atau bereinkarnasi. Berdasarkan sejarah, tradisi ini sudah dilakukan sejak abad ke-10 ketika ajaran Hindu mulai menyatu dengan budaya lokal Bali. Upacara Ngaben bukan hanya sekadar ritual, melainkan juga merupakan simbol penghormatan kepada leluhur dan ekspresi artistik masyarakat Bali. Prosesi Ngaben biasanya dimulai dengan persiapan pembuatan 'bade' (menara pembakaran), dan lembu simbolis yang akan dibakar bersama jenazah. Keluarga akan menggelar upacara dengan iringan gamelan, doa-doa suci, dan arak-arakan yang meriah, menunjukkan bagaimana kematian dipandang bukan sebagai kesedihan, melainkan pelepasan yang suci. Bagi masyarakat Bali, Ngaben mencerminkan hubungan erat antara manusia, leluhur, dan alam semesta. Upacara ini juga menjadi bukti betapa kuatnya nilai kebersamaan, karena seluruh banjar (lingkungan adat) turut serta membantu. Sampai hari ini, Ngaben tetap dilestarikan dan sering dilakukan dalam bentuk massal agar lebih terjangkau bagi masyarakat.",
    district: "Gianyar",
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
  {
    name: "Pantai Kuta",
    date: new Date("2025-04-12"),
    location: "Kuta, Badung",
    image: "https://images.unsplash.com/photo-1549887534-3b1f5c6e1c0f",
    description:
      "Pantai Kuta adalah salah satu destinasi wisata paling terkenal di Bali, dikenal dengan pasir putihnya yang lembut dan ombak yang cocok untuk berselancar. Pantai ini juga menawarkan pemandangan matahari terbenam yang memukau, menjadikannya tempat favorit bagi wisatawan lokal maupun mancanegara.",
    link: "https://unsplash.com/photos/3b1f5c6e1c0f",
    prices: 0.0,
    district: "Kuta",
    province: "Bali",
    latitude: -8.7177,
    longitude: 115.1682,
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
