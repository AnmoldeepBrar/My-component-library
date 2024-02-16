# Use Node.js as the base image
FROM node:latest AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies using npm
RUN npm install

# Copy the entire project directory into the container
COPY . .

# Build the React app and Storybook
RUN npm run build-storybook

# Start NGINX server to serve the built React app and Storybook
FROM nginx:latest
COPY --from=build /app/storybook-static /usr/share/nginx/html
EXPOSE 80

# Command to start NGINX and keep it running in the foreground
CMD ["nginx", "-g", "daemon off;"]
