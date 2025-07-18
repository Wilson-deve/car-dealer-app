import { PrismaClient } from "../generated/prisma";

declare global {
  var prisma: PrismaClient | undefined;
}

function makeClient() {
  return new PrismaClient({
    log: ["query", "info", "warn", "error"],
  });
}

export const prisma = globalThis.prisma || makeClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}

process.on("beforeExit", async () => {
  await prisma.$disconnect();
});
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});
process.on("SIGTERM", async () => {
  await prisma.$disconnect();
  process.exit(0);
});

