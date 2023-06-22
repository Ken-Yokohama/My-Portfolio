FROM node:14.19.3-alpine

WORKDIR /client

COPY package.json .

RUN npm i

COPY . .         

EXPOSE 5173

CMD ["npm", "run", "dev"]