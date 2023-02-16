import {Box, Grid} from "@mui/material";
import MoviesFiltersContainer from "../../components/MoviesFiltersContainer";

const Home = () => {

    return (
        <>
            <Box sx={{flexGrow: 1, marginTop: 2}}>
                <Grid container spacing={2}>

                    <MoviesFiltersContainer/>

                </Grid>
            </Box>

        </>
    );
};

export default Home;