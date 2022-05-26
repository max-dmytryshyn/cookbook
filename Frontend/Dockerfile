FROM node:16.10-alpine
WORKDIR /usr/src/cookbook_frontend
COPY . .
RUN apk update && apk add bash
RUN cd cookbook &&\
    npm ci