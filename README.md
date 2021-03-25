# Diabetes Mobile App

### Project description

A mobile application for diabetic type 1 users to keep a record of the food and the inlusin they take.

![Alt text](client/assets/app.gif)

### Tech Stack

- JavaScript
- React Native
- Node.js
- Express.js
- MongoDB
- Expo CLI


### Client app

#### Depencencies

- React Navigation - To create routing and navigation for the app
- React Native Calendars - To display calendar views and populate them with data
- Axios - To make requests to the server
- Async Storage - Persistent storage

#### Installation

- cd client
- npm install
- npm start

### Server app

#### Dependencies

- Express - Nodejs framework
- Mongoose - MongoDB framework
- Cors - Enables CROSS-origin resource sharing
- Dotenv - Accessing environment variables

#### Installation

- cd server
- npm install
- npm start

DB_URI is an environment variable used by the server.js file. DB_URI needs to be replaced by your MongoDB database URI. Make sure you create a file .env and add the URI in here: DB_URI=your-db-uri

### APIs

- Edamam Food API - https://developer.edamam.com/

#### Created by Gustavo Zapata and James Newton