# Project 5: File Metadata Microservice

This is the final project for the freeCodeCamp "Back End Development and APIs" certification. This microservice provides an API endpoint that allows users to upload a file and receive JSON-formatted metadata about it.

## Core Functionality

The service has a single purpose: to analyze a file uploaded via a form and return its essential metadata. The file itself is not stored on the server.

The returned metadata includes:
*   **`name`**: The original filename of the uploaded file.
*   **`type`**: The MIME type of the file.
*   **`size`**: The size of the file in bytes.

This project utilizes the `multer` middleware to handle `multipart/form-data`, which is primarily used for uploading files.

## API Endpoint

*   **Analyze a file:** `POST /api/fileanalyse`

## How to Use

1.  Navigate to the main page.
2.  Use the form to select a file from your local machine.
3.  Submit the form.
4.  The API will respond with a JSON object containing the name, type, and size of your file.