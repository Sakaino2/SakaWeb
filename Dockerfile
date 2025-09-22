FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine AS production

WORKDIR /usr/src/app

RUN npm install -g serve

COPY --from=builder /app/dist ./

EXPOSE 3355

CMD ["serve", "-s", "-p", "3355"]