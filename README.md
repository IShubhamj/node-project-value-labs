# Project Setup

## To run this project

1. Create a `.env` file in the root of this directory.
2. Add the following environment variables in `.env` (template provided in `.env.example`):

3. Install dependencies:
```sh
npm i
```
4. Run Project
```sh
npm start
```

## Endpoints

```sh
Request -

POST - http://localhost:8000/api/auth
{
  "userId": "admin",
  "password": "admiN@123"
}

Response - 
200: {
    "message": "Admin logged in successfully.",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJBQkMiLCJyb2xlIjoiYWRtaW4iLCJzdWIiOlsiYWRtaW4iLCJzdGFmZiJdfSwiaWF0IjoxNzQzMjUyODY1LCJleHAiOjE3NDMyNTY0NjV9.WV0iVIZyBQGgxxrgp9i2L9-_7OXqqeTCae8vGhcKnb8"
    }
}

401: {
    "message": "Invalid userId or password.",
    "data": {
        "token": null
    }
}
```

```sh
Request -
GET - http://localhost:8000/api/add?num1=10&num2=20

Response -
200: {
    "data": 30
}

400: {
    "errors": [
        "num2 must be a number"
    ]
}
```