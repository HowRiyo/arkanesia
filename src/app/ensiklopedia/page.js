import prisma from "@/lib/prisma";
import EnsiklopediaClient from "./EnsiklopediaClient";

export default async function EnsiklopediaPage() {
  const cultures = await prisma.culture.findMany();
  return <EnsiklopediaClient cultures={cultures} />;
}