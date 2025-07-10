import { PrismaClient } from "../src/generated/prisma";
import { seedClassifieds } from "./classifieds.seed";
import { seedTaxonomy } from "./taxonomy.seed";

const prisma = new PrismaClient();

async function main() {
  //   await prisma.$executeRaw`TRUNCATE TABLE "makes" RESTART IDENTITY CASCADE;`;
  //   await seedTaxonomy(prisma);
  await seedClassifieds(prisma);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
