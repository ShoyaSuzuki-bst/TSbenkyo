FROM node:latest

WORKDIR /usr/src/

RUN npm install -g create-react-app

COPY . .

WORKDIR /usr/src/app