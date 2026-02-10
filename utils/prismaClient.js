import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.PORT,
});

const prisma = new PrismaClient({
  adapter,
});

export default prisma;
