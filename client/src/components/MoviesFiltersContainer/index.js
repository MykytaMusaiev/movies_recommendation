import React from 'react';
import {Filters, MovieList, SelectedMoviesSection} from "../index";
import {useMovies} from "../../hooks/useMovies";
import {useQuery} from "@apollo/client";
import {MOVIES_QUERY} from "../../pages/Home/queries";

const MoviesFiltersContainer = () => {
    const {selectedMovies, selectMovie, deleteMovie} = useMovies();
    const {loading, error, data, refetch} = useQuery(MOVIES_QUERY);
    if (error) {
        return 'Error'
    }

    const onFiltersSubmit =(data) => {
        // TODO add query using data
        console.log(data)
    }

    return (
        <>

            <Filters onFiltersSubmit={onFiltersSubmit}/>

            <MovieList selectMovie={selectMovie} data={data} refetch={refetch} loading={loading}/>

            <SelectedMoviesSection
                selectedMovies={selectedMovies}
                deleteMovie={deleteMovie}
            />

        </>
    );
};

export default MoviesFiltersContainer;