import { Prisma, PrismaClient } from "../src/app/generated/prisma";

const prisma = new PrismaClient();

const cultures: Prisma.CultureCreateInput[] = [
    {
        title: "Culture 2",
        year: 2024,
        location: "Location 2",
        image: "https://placehold.co/600x400",
        langtitude: 0,
        longitude: 0,
        description: "Description 2",
    }
]

const events: Prisma.EventCreateInput[] = [
    {
        name: "Event 1",
        date: new Date(),
        location: "Location 1",
        image: "https://placehold.co/600x400",
        description: "Description 1",
        link: "https://example.com",
    }
]

export async function culture() {
    for (const culture of cultures) {
        await prisma.culture.create({
            data: culture,
        });
    }
}

export async function event() {
    for (const event of events) {
        await prisma.event.create({
            data: event,
        });
    }
}

culture()
event()