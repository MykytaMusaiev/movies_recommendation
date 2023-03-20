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
        transitionDelay: "1.5s",
        transition: "3s",
        display: "inline-block",
        opacity: "1"
    }
}))

const MovieCard = ({movie, onCardSelect, isPreviewMode = false}) => {
    return (
        <CardStyled sx={{
            position: "relative",
        }}>
            <Box>

                {movie.image === "https://image.tmdb.org/t/p/w300null" ?
                    <CardMedia
                        className="cardMedia"
                        component="img"
                        height="250"
                        image="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                        alt={movie.title}
                        sx={{margin: "auto"}}
                    />
                    :
                    <CardMedia
                        className="cardMedia"
                        component="img"
                        height="250"
                        image={movie.image}
                        alt={movie.title}
                        sx={{margin: "auto"}}
                    />


                }

                {isPreviewMode ? (
                    <AddIcon
                        className="hiddenIcon"
                        onClick={() => onCardSelect(movie)}
                        sx={{
                            color: "#aaaaaa",
                            display: "none",
                            fontSize: "15rem",
                            position: "absolute",
                            top: "0",
                            left: "-30px",
                            cursor: "pointer",
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