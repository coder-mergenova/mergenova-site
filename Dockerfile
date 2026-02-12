# ---- 1) Build stage (glibc) ----
FROM node:20-bullseye AS builder
WORKDIR /src/app

# Sadece manifestleri kopyala
COPY package*.json ./

# Lock file ile tekrarlanabilir kurulum (package-lock.json korunur)
RUN npm ci

# Kaynaklar
COPY . .

# Üretim derlemesi
RUN npm run build

# Build çıktısını tek klasöre normalize et
RUN mkdir -p /app/out \
    && if [ -d "dist" ]; then mv dist/* /app/out/; fi \
    && if [ -d "build" ]; then mv build/* /app/out/; fi \
    && test -n "$(ls -A /app/out)" || (echo "❌ Build output not found (dist/ or build/ yok)" && exit 1)

# ---- 2) Runtime (Nginx) ----
FROM nginx:alpine

RUN printf 'server {\n\
  listen 80;\n\
  server_name _;\n\
  root /usr/share/nginx/html;\n\
  index index.html;\n\
  location ~* \\.(?:ico|css|js|gif|jpe?g|png|svg|woff2?|ttf|map)$ { expires 7d; access_log off; try_files $uri =404; }\n\
  location / { try_files $uri $uri/ /index.html; }\n\
  gzip on; gzip_types text/plain text/css application/javascript application/json image/svg+xml; gzip_min_length 256;\n\
}\n' > /etc/nginx/conf.d/default.conf

COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
