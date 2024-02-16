# My-component-library

# How to run component library build with the storybook in a docker container

# React Component Library with Storybook
1. Make sure you have Docker installed on your system.
2. Clone this repository to your local machine.
3. Navigate to the root directory of the project.
4. Build the Docker image using the following command:
docker build -t lastName_firstName_coding_assignment12 .
5. Once the build is complete, run the Docker container with the following command:
docker run -p 8083:80 lastName_firstName_coding_assignment12
6. From your Docker Deskstop start your newely build container and try to run it. 

# This setup will host your React component library built with Storybook inside a Docker container and make it accessible at http://localhost:8083 on your local machine.

# Steps to create a component library

# Create your own component library by watching the tutorial in the given link 
link (https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe)

# Initialize your project using command:
npm init

# Add necessary code for creating components
npm install react typescript @types/react --save-dev

# Create components
# Each components should contain the five files of the code namely
# Component_name.stories.tsx, Component_name.types.tsx, Component_name_test.tsx, Component_name.tsx, index.tsx

# Add rollup for your project 
npm install rollup @rollup/plugin-node-resolve @rollup/plugin-typescript @rollup/plugin-commonjs rollup-plugin-dts --save-dev
npm run rollup

# Add test for your components by running following commands
npm install @testing-library/react jest @types/jest --save-dev
npm install @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-jest --save-dev
npm install identity-obj-proxy --save-dev 

# Finally run test
npm run test

# Initializing Storybook in your project
npx sb init --builder webpack5

# Run the storybook 
npm run storybook

# Creating a GitHub repository 





