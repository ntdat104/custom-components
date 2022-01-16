FROM node:latest as Builder
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest
COPY --from=Builder /app/build /usr/share/nginx/html