FROM node:8.11.1-alpine as Builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest
COPY --from=Builder /app/build /usr/share/nginx/html