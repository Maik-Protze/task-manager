FROM oven/bun:1.3-alpine

WORKDIR /app

# Install packages needed for Prisma
RUN apk add --no-cache openssl

# Copy package files
COPY package.json bun.lock* ./
COPY prisma ./prisma/

# Install dependencies
RUN bun install --frozen-lockfile

# Generate Prisma client
RUN bun prisma generate

# Copy source code
COPY . .

EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/ || exit 1

# Start the server
CMD ["bun", "run", "start"]
