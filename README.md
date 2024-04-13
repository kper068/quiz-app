# Quiz App

This project features a web application with the goal of providing a local platform to create, store, and play a variety of multiple choice quizzes. This web app was developed using the MERN Stack + TypeScript with key dependencies such as Material UI for the SOFTENG 750 Tech Demo Assignment. The tool chosen to reflect learning beyond the scope of this course was TypeScript, a web development language built ontop on JavaScript providing type safety and modern features such as interfaces and optionals.

## Functionalities

These are the key functionalities of this web app which are visible and usable by the user:

- Quiz Browsing Catalogue
- Creating New Quizzes
- Playing Quizzes
- Displaying Quiz Results
- Editing Existing Quizzes

To assist the implementation of these user features, there are many support functionalities present in the project to facilitate the web app:

- Local Database Connection
- Backend Server for Data Communication

## Technology Stack

These are the major languages, software tools and technologies used during development for this web app.

**Front-End**

- Initialized React+TypeScript project with Vite
- Material UI for component design
- Axios for easier HTTP requests implementation

**Back-End**

- Initialized TypeScript project
- Express.js for server implementation
- Mongoose/MongoDB for database communication

**Database**

- MongoDB document database used with MongoDBCompass

## Important Elements & Concepts

Most of the important elements and concepts of utilizing TypeScript instead of JavaScript has been detailed in the video presentation which includes an introduction to TypeScript, the pros and cons of TypeScript, a demo of this web app, and a showcase of the codebase alongside relevant examples of the usage of TypeScript. The key element for this project would be the introduction of type safety into the development codebase which highlights easier code comprehension through backtracking variables and functions, improved error detection and faster debugging and ease of maintanability which did occur during this project but would be highlighted further in a group environment. Other key concepts would be the decrease in coding time used to create JSDocs if JavaScript were to be used as having understandable variable and function names alongside the typing introduced by TypeScript eliminates most needs for adding comments to supplement code comprehension.

Despite TypeScript introducing many benefits for developers during project development, there exists some downsides compared to vanilla JavaScript. This includes the risk of dependencies not upholding clear type definitions in their codebases resulting in types such as `unknown` and `any` which would reduce code comprehension. Another issue present in TypeScript would be overcomplicated types with little documentation causing understability concerns such as react events which has many different types alongside even more modifiers which can be hard to understand.

## How to Get Started?

The terminal commands in the instructions below were written for window OS machines, please use the MacOS or Linux versions of these commands to setup the web app locally.

### Pre-requisites

- You will need [Node.js](https://nodejs.org/en/download) installed to use NPM which is installed alongside Node.js (Recommended to use any `LTS` versions of Node.js)
- You will need [MongoDB Community Server](https://www.mongodb.com/try/download/community) installed to setup the database required for this web app
- You will also need [MongoDBCompass](https://www.mongodb.com/products/tools/compass) to start and see the database

### Step 1 | Cloning the Repository

```
# Clone the repository
git clone https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-kper068.git

# Navigate to the root directory of repository
cd cs732-assignment-kper068
```

### Step 2 | Installing Dependencies

Different dependencies will need to be installed in the root, frontend and backend directories.

```
# Installing dependencies in root directory
npm install

# Installing dependencies in frontend directory
cd frontend
npm install

# Installing dependencies in backend directory
cd ../backend
npm install
```

### Step 3 | Creating Environment Variables

A `.env` file will need to be created in both the frontend and backend directories storing different environment variables necessary for the web app to launch.

1. Create a file named `.env` with no other extensions in the current directory

2. Copy and paste the following variables into the file and save:

```
# URL to MongoDB
DB_URL=mongodb://127.0.0.1:27017/quizRegistry

# Localhost port for API server
PORT=3000
```

3. Navigate to the front end directory via command line:

```
cd ../frontend
```

4. Create a file named `.env` with no other extensions in the current directory

5. Copy and paste the following variables into the file and save:

```
# Localhost URL for API server
VITE_API_BASE_URL=http://localhost:3000
```

### Step 4 | Start MongoDB Database

1. Open the MongoDBCompass application downloaded from the pre-requisites section and copy `mongodb://127.0.0.1:27017/quizRegistry` into the URI section.

2. Press the button labelled `Save & Connect` and enter a name and select a colour to remember this connection.

### Step 5 | Start the Web App

```
# Navigate to the root directory again
cd ..

# Launch the web app and copy the URL address given into a browser of your choice
npm run dev
```

### Using the App

Enjoy exploring the various features available on the web app! Remember since this is a SPA (Single Page Application) created with React, reloading pages other than the home page would not display any content.
