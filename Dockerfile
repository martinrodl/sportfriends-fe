# Use an official Node runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the content of the local src directory to the working directory
COPY . .

# Build the app
RUN npm run build

# Use an official lightweight Node image to run the app
FROM node:14-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Install serve to serve the app
RUN npm install -g serve

# Copy the build folder from the build image
COPY --from=0 /usr/src/app/dist ./dist

# Specify the command to run on container start
CMD ["serve", "-s", "dist", "-l", "3000"]
