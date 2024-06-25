# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application's code
COPY . .

# Expose the port your API service will run on
EXPOSE 3000

# Define the command to run your application
CMD [ "npm","start"]
