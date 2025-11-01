FROM node:22.21-slim AS builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:mainline-alpine3.22-slim

COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist/* .
