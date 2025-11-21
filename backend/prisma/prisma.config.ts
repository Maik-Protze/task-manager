export default {
  datasources: {
    db: {
      provider: "postgresql",
      // PostgreSQL connection string from environment
      // Prisma v7 empfiehlt, die URL hier zu setzen statt im Schema
      url: process.env.DATABASE_URL ?? "postgresql://postgres:password@localhost:5433/reiseinfo_db?schema=public",
    },
  },
  generator: {
    client: {
      provider: "prisma-client-js",
    },
  },
};