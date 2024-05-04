// test-prisma.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

async function testPrisma() {
  try {
    console.log("DATABASE_URL:", process.env.DATABASE_URL);
    console.log("Connected to database:", prisma.$datasourceInfo);
    const documents = await prisma.document.findMany();
    console.log("Documents:", documents);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

testPrisma();