# Use the official Node.js image
FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies including axios and react-router-dom
RUN npm install

RUN npm install @fortawesome/fontawesome-free

# Copy the React app files into the container
COPY . .

# Expose React development server port
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]

