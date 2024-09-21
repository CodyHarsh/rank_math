# Movie Search App

This is a server-side web application that allows users to search for movies and view their details using the OMDB API. The application uses server-side rendering to generate and serve HTML pages.

## Live Demo

You can check out the live version of this application here: [https://rank-math.onrender.com/](https://rank-math.onrender.com/)

## Application Type

This is a server-side application built with Node.js and Express. It uses server-side rendering with EJS templates to generate HTML pages. The application does not have a separate client-side component or use client-side JavaScript frameworks.

Key characteristics:
- Server-side rendering using EJS templates
- No client-side JavaScript framework (like React, Vue, or Angular)
- All processing and data fetching occurs on the server
- Pages are fully rendered on the server before being sent to the client

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/codyharsh/rank_math.git
   cd rank_math
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Copy the `.env.example` file to a new file named `.env`:
     ```
     cp .env.example .env
     ```
   - Open the `.env` file and replace the placeholder values with your actual values:
     ```
     PORT=3000
     SECRET_API_KEY_OMDI=your_actual_omdb_api_key
     ```

4. Start the server:
   ```
   nodemon server.js 
   ```
   Or
   ```
   node server.js 
   ```

6. Open your browser and navigate to `http://localhost:3000` (or whatever port you specified in the .env file).

## Project Structure

```
movie-search-app/
│
├── public/
│   ├── styles/
│   │   └── index.css
│   └── assets/
│       └── imageNotFound.png
│
├── views/
│   └── index.ejs
│
├── routes/
│   └── movieRoutes.js
│
├── controllers/
│   └── movieController.js
│
├── models/
│   └── Movie.js
│
├── services/
│   └── movieService.js
│
├── .env
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── server.js
```

## Architecture Design

This application follows the Model-View-Controller (MVC) architecture pattern:

1. **Model** (`models/Movie.js`): Represents the data structure of a movie.

2. **View** (`views/index.ejs`): The EJS template that renders the HTML for the user interface.

3. **Controller** (`controllers/movieController.js`): Handles the logic for processing requests and responses.

4. **Service** (`services/movieService.js`): Contains the business logic and interacts with external APIs (OMDB in this case).

5. **Routes** (`routes/movieRoutes.js`): Defines the application's endpoints and links them to controller methods.

6. **Server** (`server.js`): The main entry point of the application. It sets up the Express server and middleware.

The application flow is as follows:
1. The user submits a search query through the web interface.
2. The request is sent to the server and routed to the appropriate controller method.
3. The controller uses the movie service to fetch data from the OMDB API.
4. The movie service returns the data, which is then passed to the view.
5. The view (EJS template) renders the data into HTML on the server.
6. The fully rendered HTML page is sent back to the user's browser.

## Environment Variables

The application uses the following environment variables:

- `PORT`: The port number on which the server will run.
- `SECRET_API_KEY_OMDI`: Your OMDB API key for fetching movie data.

Make sure to set these in your `.env` file before running the application.

## UI Images:

<img width="833" alt="Frame 7" src="https://github.com/user-attachments/assets/f310aa6e-e196-4e4d-becf-15f5d7dbd02d">
<img width="833" alt="Frame 8" src="https://github.com/user-attachments/assets/a6dca179-37d0-4acb-8ea6-b0b955d7dfdf">

## How it is working:

<img width="609" alt="Frame 5 (1)" src="https://github.com/user-attachments/assets/fe51d656-3e8d-4646-b9ee-50f0ea190aba">


![Group 2](https://github.com/user-attachments/assets/67e3de98-afa5-4a50-99e9-b15fe9f50c14)
