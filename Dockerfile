# alpine is used for base image
FROM node:alpine


#set working directory
WORKDIR /usr/src/app

# caching package file for better performance (caching layer)
COPY package*.json ./

RUN npm i -g pnpm

RUN pnpm install


COPY  . .

RUN npm run build


EXPOSE 5001


CMD ["node", "dist/app.js"]
