FROM oven/bun:1.3-alpine

WORKDIR /app

# Copy package files
COPY package.json bun.lock* ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

EXPOSE 5175

# Build for production
RUN bun run build

# Start Vite dev server with host binding
CMD ["bun", "run", "dev", "--host"]
