import { LOCALES } from '../constants'

export default {
    [LOCALES.ENGLISH]: {
        navbar: {
            main_title: "Movies Recommendation",
            home: "Homepage",
            settings: "Settings"
        },
        addSome: "Add some movies",
        required: "Required",
        copied: "Copied!",
        share: "Share:",
        delete: "delete",
        filters: {
            sort_by: "Sort by",
            sort_direction: "Sort direction",
            include_adult: "Include adult",
            year: "Year",
            release_year: "Release year",
            with_genres: "Include genres",
            without_genres: "Exclude genres",
            submit: "Search",
            sort: {
                "popularity": "Popularity",
                "release_date": "Release daye",
                "vote_average": "Vote average",
                "original_title": "Original Title",
                "primary_release_date": "Першочергова дата випуску",
            },
            sort_direction_options: {
                asc: "ASC",
                desc: "DESC"
            }
        },
        selected_form :{
        },
        recommended_page: {
            list_name: "Your list name:"
        },
        selected_movies: {
            vote_average: "Vote average",
            movie_length: "movie length"
        }
    }
}