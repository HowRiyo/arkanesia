"use client";
import prisma from "@/lib/prisma";
import HomeClient from "./HomeClient";


export default async function HomePage() {
    const events = await prisma.event.findMany();
    const tours = await prisma.tour.findMany();
    return <HomeClient events={events} tours={tours} />;
}