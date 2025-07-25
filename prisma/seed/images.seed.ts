import { imageSources } from "@/config/constants";
import { faker } from "@faker-js/faker";
import type { Prisma, PrismaClient } from "../../src/generated/prisma";
import { createPngDataUri } from "unlazy/thumbhash";
import { PrismaClient as PrismaClientType } from "../../src/generated/prisma";

export async function seedImages(prisma: PrismaClient) {
  const classifieds = await prisma.classified.findMany();

  const classifiedIds = classifieds.map((classified) => classified.id);

  for (const classifiedId of classifiedIds) {
    const image: Prisma.ImageCreateInput = {
      src: imageSources.classifiedPlaceholder,
      alt: faker.lorem.words(2),
      classified: { connect: { id: classifiedId } },
      blurHash: createPngDataUri("jPcJDYCndnZwl4h6Z2eYhWZ/c/VI"),
    };

    await prisma.image.create({ data: image });
  }
}

