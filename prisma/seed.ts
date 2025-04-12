import { Prisma, PrismaClient } from "../src/app/generated/prisma";

const prisma = new PrismaClient();

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
]

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

export async function tour() {
    for (const tour of tours) {
        await prisma.tour.create({
            data: tour,
        });
    }
}

culture()
event()
tour()