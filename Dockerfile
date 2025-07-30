FROM node:slim AS builder

WORKDIR /app
COPY src ./src
COPY public ./public
COPY astro.config.mjs .
COPY package.json .
RUN corepack enable
RUN pnpm install
RUN pnpm build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist/* .
