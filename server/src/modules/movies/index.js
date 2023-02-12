const axios = require('axios')
const {Movies} = require("./entities/Movies");
const { API_KEY, API_BASE_URL } = require('../../config');

const getPopularMovies = async (page=1, language = "en-US") => {
    const result = await axios.get(`${API_BASE_URL}movie/popular?api_key=${API_KEY}&language=${language}&page=${page}`)

    return new Movies(result.data)
}

const getDetails = (id, language = "en-US") => {

    return axios.get(`${API_BASE_URL}movie/${id}?api_key=${API_KEY}&language=${language}`)


}

module.exports = {
    getPopularMovies,
    getDetails
}