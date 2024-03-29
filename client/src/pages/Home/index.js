import {Box, Grid, Pagination, Paper} from "@mui/material";
import {useFilters} from "../../hooks/useFilters";
import {useQuery} from "@apollo/client";
import {MOVIES_QUERY} from "./queries";
import {useMovies} from "../../hooks/useMovies";
import {Filters, MovieCard, SelectedMoviesSection} from "../../components";
import React from 'react';

const Home = () => {
    const {filter, setPage, setFilter} = useFilters();
    const {loading, error, data} = useQuery(MOVIES_QUERY, {variables: {filter}});
    const {selectedMovies, selectMovie, deleteMovie} = useMovies();

    if (error) {
        return 'Error'
    }

    const paginationHandler = (event, page) => {
        setPage(page)
        window.scrollTo(0, 0);
    }

    const onFiltersSubmit = (data) => {
        setFilter(data)
    }

    const pagesCount = data?.movies?.totalPages <= 500 ? data?.movies?.totalPages : 500;

    return (
        <>
            <Box sx={{flexGrow: 1, marginTop: 2}}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper sx={{padding: "16px"}} elevation={6}>
                            <Filters onFiltersSubmit={onFiltersSubmit} initialValues={filter}/>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Paper elevation={6}>
                            <Box sx={{flexGrow: 1, padding: 1}}>
                                {loading && 'Loading..'}

                                {data && (
                                    <Grid container spacing={2}>

                                        {data.movies.results.map((movie) => (
                                            <Grid key={movie.id}
                                                  item xs={12} sm={6} md={4} lg={3}
                                                  sx={{
                                                      display: "flex",
                                                      justifyContent: "center"
                                                  }}>
                                                <MovieCard movie={movie} onCardSelect={selectMovie} isPreviewMode/>
                                            </Grid>
                                        ))}

                                    </Grid>
                                )}
                            </Box>

                            <Box spacing={2} className="pagBox">
                                <Pagination
                                    count={pagesCount}
                                    color="primary"
                                    page={filter.page}
                                    onChange={paginationHandler}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        padding: "10px 0"
                                    }}
                                />
                            </Box>
                        </Paper>
                    </Grid>

                    <SelectedMoviesSection
                        selectedMovies={selectedMovies}
                        deleteMovie={deleteMovie}
                    />


                </Grid>
            </Box>

        </>
    );
};

export default Home;