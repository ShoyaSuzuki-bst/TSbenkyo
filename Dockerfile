FROM node:latest

WORKDIR /usr/src/

RUN npm install -g create-react-app
RUN npm install

COPY . .

WORKDIR /usr/src/app
