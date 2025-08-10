# Project 1: Timestamp Microservice

This is a solution to the Timestamp Microservice project, which is part of the freeCodeCamp "Back End Development and APIs" curriculum. The primary goal is to build an API that handles date and time conversions.

## Core Functionality

*   **API Endpoint:** `GET /api/:date?`
*   **Valid Date:** When a valid date string (e.g., `2015-12-25`) or a Unix timestamp (in milliseconds) is provided, the API returns a JSON object with `unix` and `utc` keys.
*   **Empty Date:** If the `date` parameter is omitted, the API returns a JSON object representing the current time.
*   **Invalid Date:** If the input date is invalid, the API returns a JSON object with an error message: `{ "error": "Invalid Date" }`.

## Technologies Used

*   **Runtime:** Node.js
*   **Framework:** Express.js
*   **Package Manager:** npm

## How to Run This Project

1.  Clone the parent repository to your local machine.
2.  Navigate to this project's directory:
    ```bash
    cd 01-timestamp-microservice
    ```
3.  Install the required dependencies:
    ```bash
    npm install
    ```
4.  Start the local server:
    ```bash
    npm start
    ```
5.  The application will be accessible at `http://localhost:3000`.

## API Usage Examples

*   **Get time from a date string:**
    `GET /api/2015-12-25`

*   **Get time from a Unix timestamp:**
    `GET /api/1451001600000`

*   **Get the current time:**
    `GET /api`