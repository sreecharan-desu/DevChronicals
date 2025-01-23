FROM node:latest

# Create app directory

WORKDIR /app

# Install app dependencies

RUN npm install express

# Bundle app source

COPY . .

EXPOSE 3000

CMD [ "node","index.js" ]