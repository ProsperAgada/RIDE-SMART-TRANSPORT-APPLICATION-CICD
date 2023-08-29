FROM nginx:latest

#removing default conf file
RUN rm -rf /etc/nginx/conf.d 

#copy build from build stage to production
COPY ./build/ /usr/share/nginx/html

#set container port 
EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
