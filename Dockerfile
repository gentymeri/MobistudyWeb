FROM node:14.16.1-alpine3.10  as build

RUN apk update

# install python (needed by some dev deps)
RUN apk add --no-cache --virtual .gyp \
    python \
    make \
    g++

# create local folder where to keep the src code
RUN mkdir -p /usr/src/app
COPY . /usr/src/app

# build
WORKDIR /usr/src/app
RUN npm install
RUN npx quasar build

FROM caddy:2-alpine

COPY --from=build /usr/src/app/dist/spa /var/www
