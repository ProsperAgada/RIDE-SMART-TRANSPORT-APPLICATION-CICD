#base image for build stage
FROM node:16-alpine as build

#set container dir
WORKDIR /app 

#copy pakage.json and yarn.lock to con. dir
COPY package.json ./app

COPY yarn.lock ./app

#install yarn
RUN yarn 

#copy necessary modules to con.
COPY . ./app

#building package
RUN yarn build

#base image for production
FROM node:16-alpine as production

#set con.dir
WORKDIR /app

#copy build file to con.dir
COPY --from=build /app/dist ./app

#start app in con
CMD ["node","dist/index.js"]~