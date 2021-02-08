FROM node:15-alpine3.10  as build

# install python (needed by some dev deps)
RUN apk add --no-cache --virtual .gyp \
    python \
    make \
    g++

RUN npm install -g @quasar/cli

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy package json and install dependencies
COPY package* /usr/src/app/
RUN npm ci

# copy source code and build
COPY . /usr/src/app
RUN quasar build

FROM caddy:2-alpine

COPY --from=build /usr/src/app/dist/spa /var/www
