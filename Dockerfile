FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/*

WORKDIR /usr/share/nginx/html

COPY index.html .
COPY style.css .
COPY script.js .
COPY robots.txt .
COPY public public
