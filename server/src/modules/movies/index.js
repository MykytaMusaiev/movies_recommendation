const axios = require('axios')
const {Movies} = require("./entities/Movies");
const {API_KEY, API_BASE_URL} = require('../../config');

const getPopularMovies = async (page = 1, language = "en-US") => {

    const searchParams = new URLSearchParams({
        api_key: API_KEY,
        language: language,
        page: page,
    })

    const result = await axios.get(`${API_BASE_URL}/movie/popular?${searchParams}`)

    return new Movies(result.data)
}

const getDetails = (id, language = "en-US") => {
    const searchParams = ({
        api_key: API_KEY,
        language: language,
    })
    return axios.get(`${API_BASE_URL}/movie/${id}?${searchParams}`)
}

// TODO: ID:112
const getByFilters = async (language = "en-US", sort_by, year, with_genres, without_genres, page = 1) => {

    const searchParams = new URLSearchParams({
        api_key: API_KEY  ,
        language: language,
        page: page,
        sort_by: sort_by,
        with_genres: with_genres,
        without_genres: without_genres,
    });

    const result = await axios.get(`${API_BASE_URL}/discover/movie?${searchParams.toString()}`)
    return new Movies(result.data)
}

const getGenres = async (language = "en-US") => {

    const searchParams = new URLSearchParams({
        api_key: API_KEY  ,
        language: language
        });

    const result = await axios.get(`${API_BASE_URL}/genre/movie/list?${searchParams.toString()}`);

    return result.data.genres
}

module.exports = {
    getPopularMovies,
    getDetails,
    getByFilters,
    getGenres
}