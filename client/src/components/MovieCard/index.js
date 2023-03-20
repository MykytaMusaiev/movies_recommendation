import * as React from 'react';
import {Card, CardContent, CardMedia, styled, Typography, Box} from '@mui/material';
import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';


const CardInfo = styled(CardContent)(({theme}) => ({
    '&:last-child': {
        paddingBottom: theme.spacing(2),
    }
}))

const CardStyled = styled(Card)(({}) => ({
    "&:hover .cardMedia": {
        opacity: "0.3",
        transition: "all 0.5s"

    },
    "&:hover .hiddenIcon": {
        visibility: "visible",
        opacity: 1,
    }
}))

const MovieCard = ({movie, onCardSelect, isPreviewMode = false}) => {
    return (
        <CardStyled sx={{
            position: "relative",
        }}>
            <Box className="Boxxx">

                {movie.image === "https://image.tmdb.org/t/p/w300null" ?
                    <CardMedia
                        className="cardMedia"
                        component="img"
                        height="250"
                        image="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                        alt={movie.title}
                        sx={{
                            margin: "auto",
                            height: "250px",
                            maxWidth: "200px"
                        }}
                    />
                    :
                    <CardMedia
                        className="cardMedia"
                        component="img"
                        height="250"
                        image={movie.image}
                        alt={movie.title}
                        sx={{
                            margin: "auto",
                            height: "250px",
                            maxWidth: "75%"
                        }}
                    />

                }

                {isPreviewMode ? (
                    <AddIcon
                        className="hiddenIcon"
                        onClick={() => onCardSelect(movie)}
                        sx={{
                            color: "#19A7CE",
                            position: "absolute",
                            cursor: "pointer",
                            top: "100px",
                            width: "100%",
                            fontSize: "404%",
                            visibility: "hidden",
                            opacity: "0",
                            transition: "visibility 1s, opacity 0.5s linear"
                        }}
                    />
                ) : null}

                <CardInfo>
                    <Typography variant="h5" gutterBottom component="div"
                                sx={{
                                    textAlign: "center",
                                    marginBottom: "0,5rem"
                                }}
                    >
                        {movie.title}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div"
                                sx={{
                                    textAlign: "center",
                                    fontWeight: "lighter"
                                }}
                    >
                        {movie.releaseDate}
                    </Typography>
                </CardInfo>
            </Box>
        </CardStyled>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        releaseDate: PropTypes.string
    }).isRequired,
    onCardSelect: PropTypes.func,
    isPreviewMode: PropTypes.bool
}

export default MovieCard