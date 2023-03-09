import {gql} from '@apollo/client'

export const MOVIES_QUERY  = gql`
    query getMovies($filter: MoviesFilterInput){
        movies(filter: $filter){
            page
            totalResults
            totalPages
            results {
                id
                title
                image: posterPath
                releaseDate(format: "d mmm, yyyy")  
                voteAverage
                runtime
            }
        }
    }
`