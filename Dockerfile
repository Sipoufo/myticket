FROM node:18.13.0

WORKDIR /code

COPY package.json .
RUN npm install

EXPOSE 5000

COPY . .
CMD ["npm","run","start:prod"]