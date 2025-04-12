import prisma from "@/lib/prisma";
import HomeClient from "./HomeClient";

export default async function Home() {
    const events = await prisma.event.findMany();
    const tours = await prisma.tour.findMany();
    const cultures = await prisma.culture.findMany();
    return <HomeClient events={events} tours={tours} cultures={cultures} />;
}
