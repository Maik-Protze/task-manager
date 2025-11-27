import { config } from 'dotenv'

config()

export default {
  datasourceUrl: process.env.DATABASE_URL || 'file:./prisma/dev.db'
}