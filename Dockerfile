#base image 
FROM node:16-alpine as build

#container dir
WORKDIR /app

#copy package.json and yarn.lock
COPY package.json .

COPY yarn.lock .

#installing yarn 
RUN yarn install

#copy necessary modules
COPY . ./app

#base image for production
FROM nginx:1.15.0-alpine as production

#removing default conf file
RUN rm -rf /etc/nginx/conf.d 

#copy build from build stage to production
COPY --from=build /usr/src/app/build /usr/share/nginx/html

#builing packages
RUN yarn start 

#set container port 
EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]


