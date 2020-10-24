FROM node:10.13.0-alpine

WORKDIR /usr/src/app

ADD . /usr/src/app
RUN npm install
RUN node ace migration:run
CMD [ "npm", "start"]

EXPOSE 3333
