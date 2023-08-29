FROM node:16-alpine as build

WORKDIR /app

COPY package.json yarn.lock .

RUN yarn install

COPY . .

FROM nginx:alpine as production

WORKDIR /app

COPY --from=build /usr/share/nginx/html

EXPOSE 3000



