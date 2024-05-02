FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install \
&& npm init -y \
&& npm install express

COPY . .

EXPOSE 3002

CMD ["node", "index.js"]
