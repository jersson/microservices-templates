FROM node:lts-alpine3.11
#Friendly reminder: alpine is just for fun (not for production :)

WORKDIR /usr/src/services/books

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

COPY . .

EXPOSE 3000