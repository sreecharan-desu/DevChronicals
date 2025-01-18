# Use official Node.js image
FROM node:16

# Set working directory in the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port 3000 for the Node.js server
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]
