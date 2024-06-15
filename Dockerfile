FROM nginx
MAINTAINER thiagoaugustsouza@gmail.com

RUN apt-get update && apt-get install -y vim

COPY ./app /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]