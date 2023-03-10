# Use Node.js v18 as base image
FROM node:14

# Set the npm version
RUN npm install -g npm@7.6.0

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD ["node", "app.js"]
