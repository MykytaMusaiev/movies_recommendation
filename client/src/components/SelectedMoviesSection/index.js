import React, {useContext, useState} from 'react';
import {Grid, Paper, Stack, styled} from "@mui/material";
import {ConfirmModal, MovieCardSelected, SelectedMovieForm} from "../index";
import {FormattedMessage} from "react-intl";
import {AppContext} from "../../providers/context/appContext";

const SelectedMovies = styled(Paper)(({theme}) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    height: 'calc(100vh - 140px)',
    position: 'sticky',
    top: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column'
}));
const MoviesList = styled(Stack)(({theme}) => ({
    overflowY: 'auto',
    height: '100%'
}))

const SelectedMoviesSection = ({selectedMovies, deleteMovie}) => {
    const [listName, setListName] = useState('');
    const [link, setLink] = useState('')
    const [moviesCount, setMoviesCount] = useState((''))
    const {state} = useContext(AppContext)


    const shareSelectedList = ({listName}) => {
        const moviesIds = selectedMovies.map(({id}) => id);
        const moviesCount = selectedMovies.length;
        const link = `${window.location.host}/recommend?title=${listName}&${state.locale}&ids=${moviesIds.join()}`

        setLink(link)
        setListName(listName)
        setMoviesCount(moviesCount)
    }


    const onCloseConfirmModal = () => {
        setLink('')
    }

    return (
        <Grid item xs={12} md={4}>
            <SelectedMovies>
                <MoviesList spacing={2}>

                    {(!selectedMovies.length)
                        ? (<FormattedMessage id="addSome"/>)
                        : null
                    }

                        {selectedMovies.map((movie) => (
                        <MovieCardSelected
                            key={movie.id}
                            movie={movie}
                            onCardDelete={deleteMovie}
                        />
                    ))}

                </MoviesList>

                {(selectedMovies.length)
                    ? <SelectedMovieForm onSubmit={shareSelectedList}/>
                    : null
                }

                <ConfirmModal
                    title={listName}
                    url={link}
                    open={!!link}
                    moviesCount={moviesCount}
                    onClose={onCloseConfirmModal}
                />
            </SelectedMovies>

        </Grid>
    )
}

export default SelectedMoviesSection;

