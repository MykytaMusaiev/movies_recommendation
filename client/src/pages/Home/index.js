import {Box, Grid} from "@mui/material";
import {SelectedMoviesSection, MovieFilter, MovieList} from "../../components";
import {useMovies} from "../../hooks/useMovies";

const Home = () => {
    const {selectedMovies, selectMovie, deleteMovie} = useMovies();

    return (
        <>
            <Box sx={{flexGrow: 1, marginTop: 2}}>
                <Grid container spacing={2}>

                    <MovieFilter/>
                    <MovieList selectMovie={selectMovie} />
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