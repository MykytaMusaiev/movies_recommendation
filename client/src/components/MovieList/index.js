import {Box, Grid, Paper} from "@mui/material";
import {MovieCard, MoviesPagination} from "../index";

const MovieList = ({selectMovie, loading, data, refetch}) => {

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