FROM node:22-alpine
WORKDIR /app

COPY ./apps/backend/package.json /app
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install

COPY ./apps/backend/tsconfig.json /app
COPY ./apps/backend/vitest.config.ts /app
COPY ./apps/backend/tsup.config.ts /app
# COPY apps/backend/knexfile.ts /app/
# COPY apps/backend/migrations /app/migrations/
# COPY apps/backend/seeds /app/seeds/
COPY ./apps/backend/tests /app/tests
COPY ./apps/backend/src /app/src

EXPOSE 3000

CMD ["pnpm", "dev"]
