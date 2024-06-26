FROM node:20.12.2-alpine3.19

WORKDIR /app

COPY package*.json /app/
COPY tsconfig.json /app/
COPY src /app/src

RUN npm install 
RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]
