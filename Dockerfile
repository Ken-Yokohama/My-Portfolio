FROM node:18-alpine

WORKDIR /client

COPY package.json .

RUN npm i

COPY . .         

EXPOSE 5173

CMD ["npm", "run", "dev"]