import {gql} from '@apollo/client'

export const MOVIE_FAVORITED_QUERY = gql`
    query getMovieDetails($ids:[Int!]){
        moviesByIds(ids: $ids){
            id
            title
            image: posterPath
            releaseDate(format: "d mmm, yyyy")
        }
    }
`

