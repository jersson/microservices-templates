FROM node:lts-alpine3.11
#Friendly reminder: alpine is just for fun (not for production :)

WORKDIR /usr/services/books

COPY package*.json ./

RUN npm install --only=prod

COPY ./dist .

EXPOSE 3000