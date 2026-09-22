FROM node:20-bookworm-slim
WORKDIR /app
COPY website/package*.json ./
RUN npm install --omit=dev
COPY website/ ./
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node","server.js"]
