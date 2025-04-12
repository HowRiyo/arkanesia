import prisma from "@/lib/prisma";
import EventClient from "./EventClient";


export default async function EventPage() {
  const events = await prisma.event.findMany();
  const tours = await prisma.tour.findMany();
  return <EventClient events={events} tours={tours} />;
}

