import {Box, Grid, Paper, styled, Typography} from "@mui/material";
import {MovieCard, MoviesPagination} from "../index";
import {useQuery} from "@apollo/client";
import {MOVIES_QUERY} from "../../pages/Home/queries";

const MovieList = ({selectMovie}) => {

    const {loading, error, data, refetch} = useQuery(MOVIES_QUERY);
    if (error) {
        return 'Error'
    }

    return (
        <Grid item xs={12} md={8}>
            <Paper elevation={6}>
                <Box sx={{flexGrow: 1, padding: 1}}>
                    {loading && 'Loading..'}

                    {data && (
                        <Grid container spacing={2}>

                            {data.movies.results.map((movie) => (
                                <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
                                    <MovieCard movie={movie} onCardSelect={selectMovie} isPreviewMode/>
                                </Grid>
                            ))}

                        </Grid>
                    )}
                </Box>
                <MoviesPagination refetch={refetch}/>
            </Paper>

        </Grid>
    )
}

export default MovieList;