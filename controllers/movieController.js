const movieService = require('../services/movieService');

exports.getHomePage = (req, res) => {
    res.render('index', { movie: null, error: null });
};

exports.searchMovie = async (req, res) => {
    const movieName = req.body.movieName;
    try {
        const movie = await movieService.getMovieByTitle(movieName);
        res.render('index', { movie, error: null });
    } catch (error) {
        console.error('Error fetching movie data:', error);
        res.render('index', { movie: null, error: error.message });
    }
};