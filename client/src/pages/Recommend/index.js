import {useSearchParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {MOVIE_FAVORITED_QUERY} from "./queries";
import {Grid, Typography} from "@mui/material";
import {MovieCard} from "../../components";
import {FormattedMessage} from "react-intl";

const Recommend = () => {
    let [searchParams] = useSearchParams()
    const {loading, error, data} = useQuery(MOVIE_FAVORITED_QUERY, {
        variables: {
            ids: searchParams.get('ids').split(',').map((id) => +id)
        }
    });

    if (error) {
        return <div>Error</div>
    }

    return (
        <>
            {(loading) ? <div>loading</div> : null}

            <Typography variant="h2" component="h1" gutterBottom>
                <FormattedMessage id="recommended_page.list_name" /> {searchParams.get('title')}
            </Typography>

            {data?.moviesByIds && (
                <Grid container spacing={2}>
                    {data.moviesByIds.map((movie) => (
                        <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
                            <MovieCard movie={movie} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </>
    )
}
export default Recommend;