# Use the official image as a parent image
FROM mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm

# Set the working directory
WORKDIR /workspace

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install project dependencies (use yarn local)
COPY . .
RUN yarn install

# Expose the port the app runs on
EXPOSE 4200
