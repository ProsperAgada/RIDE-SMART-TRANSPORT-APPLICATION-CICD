FROM node:16-alpine as production

#set con.dir
WORKDIR /app

#copy build file to con.dir
COPY dist ./app

#start app in con
CMD ["node","dist/index.js"]~