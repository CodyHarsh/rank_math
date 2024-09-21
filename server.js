const express = require('express');
const path = require('path');


// .env Setup:
require('dotenv').config()

// All Routes
const movieRoutes = require('./routes/movieRoutes');

const app = express();
const port = process.env.PORT || 5000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Use movie routes
app.use('/', movieRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});