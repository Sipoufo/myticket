FROM node:18.13.0

# Docker Build Stage
WORKDIR /opt/app
COPY package.json .
RUN npm install

# Run reactJs in Docker
COPY . .
CMD ["npm","run","start:prod"]
