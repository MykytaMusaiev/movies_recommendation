import * as React from 'react';
import {Card, CardContent, CardMedia, styled, Typography} from '@mui/material';
import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';


const CardInfo = styled(CardContent)(({theme}) => ({
    '&:last-child': {
        paddingBottom: theme.spacing(2),
    }
}))

const CardStyled = styled(Card)(({}) => ({
    "&:hover .cardMedia": {
        opacity: "1",

    },
    "&:hover .hiddenIcon": {
        display: "inline-block",
        opacity: "1"
    }
}))

const MovieCard = ({movie, onCardSelect, isPreviewMode = false}) => {
    return (
        <CardStyled sx={{maxWidth: 175, position: "relative"}}>

            <CardMedia
                className="cardMedia"
                component="img"
                height="250"
                image={movie.image}
                alt={movie.title}
            />

            {isPreviewMode ? (
                <AddIcon
                    className="hiddenIcon"
                    onClick={ () => onCardSelect(movie)}
                    sx={{
                        color:"#f5f5f5",
                        display: "none",
                        fontSize: "15rem",
                        position: "absolute",
                        top: "0",
                        left: "-30px",
                        cursor: "pointer",
                    }}
                />
            ):null}

            <CardInfo>
                <Typography variant="h5" gutterBottom component="div">
                    {movie.title}
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div">
                    {movie.releaseDate}
                </Typography>
            </CardInfo>
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