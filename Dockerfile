# syntax=docker/dockerfile:1.7
FROM node:20-alpine

# Optional: install OS deps (e.g. sharp needs python3 + build tools). Add as needed.
RUN apk add --no-cache libc6-compat

# Set working directory
WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json pnpm-lock.yaml ./
# If using yarn: COPY yarn.lock package.json ./
# If using pnpm: corepack enable && COPY pnpm-lock.yaml package.json ./
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

# Copy the rest of the source (for one-off build commands; in dev we will mount)
# You may skip this now; mount handles live code. Still useful for build steps.
COPY . .

# Expose Next.js default port
EXPOSE 3000

# Use host's NODE_ENV=development to keep dev features
ENV NODE_ENV=development

# If you rely on polling (WSL/VM file change issues), uncomment:
# ENV CHOKIDAR_USEPOLLING=true

# Start dev server; --turbo if you want Turbopack (Next 13.4+)
CMD ["pnpm", "run", "dev"]
