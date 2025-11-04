# Use an official Node.js runtime as a parent image
FROM node:20-alpine AS base

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json ./
# Use --frozen-lockfile if you have a package-lock.json
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use a smaller, non-root image for production
FROM node:20-alpine AS runner
WORKDIR /app

# Set user and group
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy built assets from the builder stage
COPY --from=base /app/.next ./.next
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json ./package.json

# Create public directory if it doesn't exist
RUN mkdir -p public

USER nextjs

EXPOSE 9002

ENV PORT=9002

CMD ["npm", "start"]
