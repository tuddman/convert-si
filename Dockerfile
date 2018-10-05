FROM node:8-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src /app

EXPOSE 3000

CMD [ "node", "index.js" ]
