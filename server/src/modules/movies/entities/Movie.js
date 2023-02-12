const {IMAGE_BASE_PATH} = require('../../../config');

const dateFormat = require("dateformat");

class Movie {
    constructor(movie) {
        this.tempReleaseDate = movie.release_date
        this.id = movie.id;
        this.title = movie.title;
        this.posterPath = `${IMAGE_BASE_PATH}${movie.poster_path}`;
        this.genreIds = movie.genre_ids;
        this.adult = movie.adult;
        this.overview = movie.overview;
        this.originalTitle = movie.original_title;
        this.originalLanguage = movie.original_language;
        this.backdropPath = `${IMAGE_BASE_PATH}${movie.backdrop_path}`;
        this.popularity = movie.popularity;
        this.voteCount = movie.vote_count;
        this.video = movie.video;
        this.voteAverage = movie.vote_average;

        this.belongToCollection = movie.belongs_to_collection;
        this.budget = movie.budget;
        this.genres = movie.genres;
        this.homepage = movie.homepage;
        this.imdbId = movie.imdb_id;
        this.productionCompanies = movie.production_companies;
        this.productionCountries = movie.production_countries;
        this.revenue = movie.revenue
        this.runtime = movie.runtime
        this.spokenLanguages = movie.spoken_languages
        this.status = movie.status
        this.tagline = movie.tagline
        this.vote_count = movie.vote_count

    }

    releaseDate(params) {
        try {
            const date = params.format
                ? dateFormat((this.tempReleaseDate), params.format)
                : this.tempReleaseDate;

            return date
        } catch (e) {
            console.error(e);
            return this.tempReleaseDate;
        }

    }
}

module.exports = {
    Movie
}