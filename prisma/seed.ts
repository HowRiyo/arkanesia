import axios from "axios";
import { Prisma, PrismaClient } from "../src/app/generated/prisma";

const prisma = new PrismaClient();

// Ini Dataset nya
const API_URL = "https://your-ml-api.com/blablabla";

// Ini Data Biasa
const cultures: Prisma.CultureCreateInput[] = [
  {
    title: "Culture 1",
    year: 2024,
    location: "Location 1",
    image: "https://placehold.co/600x400",
    langtitude: 0,
    longitude: 0,
    description: "Description 1",
  },
  {
    title: "Culture 2",
    year: 2024,
    location: "Location 2",
    image: "https://placehold.co/600x400",
    langtitude: 0,
    longitude: 0,
    description: "Description 2",
  },
  {
    title: "Culture 3",
    year: 2024,
    location: "Location 3",
    image: "https://placehold.co/600x400",
    langtitude: 0,
    longitude: 0,
    description: "Description 3",
  },
  {
    title: "Culture 4",
    year: 2024,
    location: "Location 4",
    image: "https://placehold.co/600x400",
    langtitude: 0,
    longitude: 0,
    description: "Description 4",
  },
  {
    title: "Culture 5",
    year: 2024,
    location: "Location 5",
    image: "https://placehold.co/600x400",
    langtitude: 0,
    longitude: 0,
    description: "Description 5",
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
  {
    name: "Tour 1",
    date: new Date(),
    location: "Location 1",
    image: "https://placehold.co/600x400",
    description: "Description 1",
    link: "https://example.com",
    prices: 200000,
  },
  {
    name: "Tour 2",
    date: new Date(),
    location: "Location 2",
    image: "https://placehold.co/600x400",
    description: "Description 2",
    link: "https://example.com",
    prices: 200000,
  },
  {
    name: "Tour 3",
    date: new Date(),
    location: "Location 3",
    image: "https://placehold.co/600x400",
    description: "Description 3",
    link: "https://example.com",
    prices: 200000,
  },
  {
    name: "Tour 4",
    date: new Date(),
    location: "Location 4",
    image: "https://placehold.co/600x400",
    description: "Description 4",
    link: "https://example.com",
    prices: 200000,
  },
  {
    name: "Tour 5",
    date: new Date(),
    location: "Location 5",
    image: "https://placehold.co/600x400",
    description: "Description 5",
    link: "https://example.com",
    prices: 200000,
  },
  {
    name: "Tour 6",
    date: new Date(),
    location: "Location 6",
    image: "https://placehold.co/600x400",
    description: "Description 6",
    link: "https://example.com",
    prices: 200000,
  },
  {
    name: "Tour 7",
    date: new Date(),
    location: "Location 7",
    image: "https://placehold.co/600x400",
    description: "Description 7",
    link: "https://example.com",
    prices: 200000,
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
