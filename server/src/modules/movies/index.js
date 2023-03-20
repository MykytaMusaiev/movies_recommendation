const axios = require('axios')
const {Movies} = require("./entities/Movies");
const {API_KEY, API_BASE_URL} = require('../../config');

const getDetails = (id, language = "en-US") => {
    const searchParams = new URLSearchParams({
        api_key: API_KEY,
        language: language,
    })
    return axios.get(`${API_BASE_URL}/movie/${id}?${searchParams}`)
}

const DiscoverMovies = async (filter, language) => {

    let filteredParams = {
        api_key: API_KEY,
        language: language,
        page: filter.page,
        sort_by: `${filter.sortBy}.${filter.sortOrder}`,
        include_adult: filter.includeAdult,
        primary_release_year: filter.year
    }

    if ((filter.withGenres?.length || 0) >= 1) {
        filteredParams = {
            ...filteredParams,
            with_genres: filter.withGenres
        }
    }

    if ((filter.withoutGenres?.length || 0) >= 1) {
        filteredParams = {
            ...filteredParams,
            without_genres: filter.withoutGenres
        }
    }


    const searchParams = new URLSearchParams(filteredParams)
    const result = await axios.get(`${API_BASE_URL}/discover/movie?${searchParams.toString()}`)
    console.log(`${API_BASE_URL}/discover/movie?${searchParams.toString()}`)
    console.log(result.data)
    return new Movies(result.data)
}

module.exports = {
    getDetails,
    DiscoverMovies
}