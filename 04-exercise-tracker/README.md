# Project 4: Exercise Tracker

This project is the fourth of five microservices for the freeCodeCamp "Back End Development and APIs" certification. It is a REST API that allows users to create user profiles, log exercises, and retrieve their exercise history.

## Core Functionality

This microservice manages users and their exercise logs through several API endpoints. It uses MongoDB for data persistence.

*   **User Management:**
    *   Create new users.
    *   Retrieve a list of all existing users.

*   **Exercise Logging:**
    *   Add a new exercise session (description, duration, date) for a specific user.
    *   If no date is provided, the current date is used automatically.

*   **Log Retrieval:**
    *   Fetch a user's full exercise log.
    *   Filter the log by date range (`from`, `to`).
    *   Limit the number of returned logs (`limit`).

## API Endpoints

*   `POST /api/users`: Create a new user.
*   `GET /api/users`: Get a list of all users.
*   `POST /api/users/:_id/exercises`: Add an exercise for a user.
*   `GET /api/users/:_id/logs`: Retrieve a user's exercise log.

## How to Run This Project Locally

1.  Ensure you have a MongoDB database and have its connection URI.
2.  Create a `.env` file in this project's root directory.
3.  Add your MongoDB connection string to the `.env` file as `MONGO_URI=your_connection_string`.
4.  Install dependencies: `npm install`.
5.  Start the server: `npm start`.