class Movie {
    constructor(data) {
        this.title = data.Title;
        this.year = data.Year;
        this.rated = data.Rated === 'N/A' ? "Rating Unavailable" : data.Rated;
        this.released = data.Released === 'N/A' ? "Released Date Unavailable" : data.Released;
        this.runtime = data.Runtime === 'N/A' ? "Runtime Unavailable" : data.Runtime;
        this.genre = data.Genre === 'N/A' ? "Genre Unavailable" : data.Genre;
        this.director = data.Director === 'N/A' ? "Director Details Unavailable" : data.Director;
        this.writer = data.Writer === 'N/A' ? "Writer Details Unavailable" : data.Writer;
        this.actors = data.Actors === 'N/A' ? "Actors Details Unavailable" : data.Actors;
        this.plot = data.Plot === 'N/A' ? "Plot is Unavailable" : data.Plot;
        this.language = data.Language === 'N/A' ? "Language Data is Not Unavailable" : data.Language;
        this.country = data.Country === 'N/A' ? "Country Unavailable" : data.Country;
        this.awards = data.Awards === 'N/A' ? "No Awards" : data.Awards;
        this.poster = data.Poster;
        this.ratings = data.Ratings;
        this.imdbRating = data.imdbRating === 'N/A' ? "IMDB Raring Unavailable" : data.imdbRating;
        this.boxOffice = data.BoxOffice === 'N/A' ? "Box Office Collection Unavailable" : data.BoxOffice;
    }

    static fromApiResponse(data) {
        return new Movie(data);
    }
}

module.exports = Movie;