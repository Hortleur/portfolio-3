import { prisma } from "$lib/utils/prismaClient";

export async function load() {
  let techs = await prisma.technos.findMany({
    orderBy: {
      level: "desc",
    },
  });
  return { techs };
}
