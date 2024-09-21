const axios = require('axios');
const Movie = require('../models/Movie');

const SECRET_API_KEY_OMDI = process.env.SECRET_API_KEY_OMDI
exports.getMovieByTitle = async (title) => {
    try {
        const response = await axios.get(`http://www.omdbapi.com/?t=${title}&apikey=${SECRET_API_KEY_OMDI}`);
        
        // Check if the response indicates a "Movie not found" error
        if (response.data.Response === 'False' && response.data.Error === "Movie not found!") {
            // Throw a specific error message for "Movie not found"
            throw new Error("Movie Not Found");
        }

        // Return the movie data from the API response
        return Movie.fromApiResponse(response.data);

    } catch (error) {
        // If the error message is "Movie Not Found", rethrow it as is
        if (error.message === "Movie Not Found") {
            console.error('Error in API Calling:', error.message);
            throw new Error(`Movie do not exist with this name:  ${title}`);
        }

        console.error('Error in API Calling:', error.message || error);
        throw new Error("Server Error");
    }
};
