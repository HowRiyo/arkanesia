import axios from "axios";
import { Prisma, PrismaClient } from "../src/app/generated/prisma";
import cultures from "./data/dataCultures";
import events from "./data/dataEvents";
import tours from "./data/dataTours";

const prisma = new PrismaClient();

const API_URL = "http://localhost:5001";



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
