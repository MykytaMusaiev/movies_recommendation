import {gql} from '@apollo/client'

export const MOVIES_QUERY  = gql`
    query getMovies($pageNumber: Int){
        movies(pageNumber: $pageNumber){
            page(pageNumber: $pageNumber)
            totalResults
            totalPages
            results {
                id
                title
                image: posterPath
                releaseDate(format: "d mmm, yyyy")                
            }
        }
    }
`