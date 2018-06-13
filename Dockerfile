FROM mhart/alpine-node:9.11.1

WORKDIR /src

COPY package.json ./
RUN apk add --no-cache make gcc g++ python
RUN npm install --production
COPY . ./

EXPOSE 3000
CMD ["npm", "start"]
