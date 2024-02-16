# My-component-library

## How to run component library build with Storybook in a Docker container

### Prerequisites
- Make sure you have Docker installed on your system.
- Clone this repository to your local machine.

### Build and Run
1. Navigate to the root directory of the project.

2. Build the Docker image using the following command:
docker build -t lastName_firstName_coding_assignment12 .

3. Once the build is complete, run the Docker container with the following command:
docker run -p 8083:80 lastName_firstName_coding_assignment12

4. From your Docker Desktop, start your newly built container and try to run it.

### Access
This setup will host your React component library built with Storybook inside a Docker container and make it accessible at [http://localhost:8083](http://localhost:8083) on your local machine.

## Steps to create a component library

#### 1. Initialize your project
npm init

#### 2. Install necessary packages
npm install react typescript @types/react --save-dev

#### 3. Create components
~Each component should contain the following files:
-Component_name.stories.tsx
-Component_name.types.tsx
-Component_name_test.tsx
-Component_name.tsx
-index.tsx

#### 4. Add Rollup for your project
npm install rollup @rollup/plugin-node-resolve @rollup/plugin-typescript @rollup/plugin-commonjs rollup-plugin-dts --save-dev
npm run rollup

#### 5. Add tests for your components
npm install @testing-library/react jest @types/jest --save-dev
npm install @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-jest --save-dev
npm install identity-obj-proxy --save-dev

#### Then, run tests:
npm run test

#### 6. Initialize Storybook in your project
npx sb init --builder webpack5

#### 7. Run Storybook
npm run storybook

## Creating a GitHub repository
Follow the steps to create a GitHub repository for your project.

## References
Tutorial on creating and publishing a React component library (https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe)
