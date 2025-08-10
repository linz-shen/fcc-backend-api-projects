# Project 2: Request Header Parser Microservice

This project is the second of five microservices for the freeCodeCamp "Back End Development and APIs" certification. Its purpose is to analyze the HTTP request header and return key information about the client making the request.

## Core Functionality

The API has a single endpoint that, when accessed, returns a JSON object containing three specific pieces of information from the user's request header:

1.  **IP Address:** The IP address of the client.
2.  **Preferred Language:** The `accept-language` header value.
3.  **Software:** The `user-agent` header value, which contains information about the browser and operating system.

## API Endpoint

*   **Get requester's information:** `GET /api/whoami`

## Example Response

```json
{
  "ipaddress": "159.20.14.100",
  "language": "en-US,en;q=0.5",
  "software": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
}