FROM node:15-alpine3.10  as build

RUN npm install -g @quasar/cli

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package* /usr/src/app/

RUN npm ci

COPY . /usr/src/app

RUN quasar build

FROM nginx:alpine

COPY --from=build /usr/src/app/dist/spa /usr/share/nginx/html/
