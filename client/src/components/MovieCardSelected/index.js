import {Box, Card, CardContent, CardMedia, MenuItem, Typography} from "@mui/material";
import {CardMenu} from "../index"

import * as PropTypes from "prop-types";
import {FormattedMessage} from "react-intl";

const MovieCardSelected = ({movie, onCardDelete}) => {
    return (
        <Card  sx={{display: 'flex', padding: "10px", marginTop: "10px", maxHeight: "210px",minHeight: '164px' }}>

            {movie.image === "https://image.tmdb.org/t/p/w300null"
                ?
                <CardMedia
                    component="img"
                    sx={{width: 100}}
                    image="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                    alt={movie.title}
                />
                :
                <CardMedia
                    component="img"
                    sx={{width: 100}}
                    image={movie.image}
                    alt={movie.title}
                />
            }
            <Box sx={{display: 'flex', flexDirection: 'column', width: "100%", position: "relative"}}>
                <CardContent sx={{flex: '1 0 auto'}}>
                    <Typography component="div" variant="h5">
                        {movie.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {movie.releaseDate}
                    </Typography>
                </CardContent>
                <Box sx={{p: 2, pt: 0}}>
                    {/*<Typography variant="subtitle1" color="text.secondary" component="div">*/}
                    {/*    <FormattedMessage id="selected_movies.vote_average" />*/}
                    {/*    /!*TODO add here average vote*!/*/}
                    {/*</Typography>*/}
                    {/*<Typography variant="subtitle1" color="text.secondary" component="div">*/}
                    {/*    <FormattedMessage id="selected_movies.movie_length" />*/}
                    {/*    /!*TODO add here movie length*!/*/}
                    {/*</Typography>*/}
                </Box>
                <CardMenu>
                    <MenuItem onClick={() => onCardDelete(movie)}>
                        <FormattedMessage id="selected_movies.delete_movie"/>
                    </MenuItem>
                </CardMenu>
            </Box>
        </Card>
    );
};

MovieCardSelected.propTypes = {
    movie: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        releaseDate: PropTypes.string,
        genres: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string
        })),
        runtime: PropTypes.number
    }).isRequired,
}

export default MovieCardSelected;