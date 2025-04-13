import { Prisma } from "@/app/generated/prisma";

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

export default events;