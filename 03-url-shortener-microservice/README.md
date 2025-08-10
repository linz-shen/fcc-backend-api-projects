# Project 3: URL Shortener Microservice

This is the third project for the freeCodeCamp "Back End Development and APIs" certification. It is a microservice that takes a long URL and returns a shorter, redirecting URL.

## Core Functionality

1.  **URL Shortening (`POST`):**
    *   Accepts a `POST` request to `/api/shorturl` with a `url` field in the request body.
    *   Validates if the submitted URL has a valid structure and points to a real site using DNS lookup.
    *   If valid, it stores the original URL and assigns it a short integer ID.
    *   Returns a JSON response containing the original URL and its new short URL ID.
    *   If the URL is invalid, it returns a JSON error.

2.  **URL Redirection (`GET`):**
    *   When a `GET` request is made to `/api/shorturl/<short_url_id>`, the service looks up the ID.
    *   If the ID is found, it redirects the client to the corresponding original URL.
    *   If the ID is not found, it returns a JSON error.

## API Endpoints

*   **Create a short URL:** `POST /api/shorturl`
*   **Redirect to original URL:** `GET /api/shorturl/:id`

## How to Use

1.  Navigate to the main page.
2.  Submit a valid URL (e.g., `https://www.freecodecamp.org`) in the form.
3.  The API will respond with an object like: `{ "original_url": "https://www.freecodecamp.org", "short_url": 1 }`.
4.  You can then visit `your-app-url/api/shorturl/1` to be redirected to the original site.