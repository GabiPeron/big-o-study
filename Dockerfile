FROM node:24-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g nodemon && npm install

COPY . .

CMD ["npm", "run", "dev"]