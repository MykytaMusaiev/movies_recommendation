const { getPopularMovies, getDetails } = require('../modules/movies')
const { Movie } = require('../modules/movies/entities/Movie')

async function movies(parent, args, { locale }) {

    return await getPopularMovies(args.pageNumber, locale);
}

async function moviesByIds(paren, {ids}, { locale }){
    const requests = ids.map((id) => getDetails(id, locale))

    const data = await Promise.all(requests)

    return data.map(({data}) => new Movie(data))
}

module.exports = {
    movies,
    moviesByIds
}