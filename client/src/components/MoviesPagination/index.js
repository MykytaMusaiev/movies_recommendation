import {Pagination, Stack} from "@mui/material";

const MoviesPagination = ({refetch}) => {

    const onClick = (e) => {
        refetch({pageNumber: Number(e.target.innerText)});
    }
    return (
        <Stack spacing={2}>
            <Pagination count={500} color="primary"  onClick={onClick}/>
        </Stack>
    )
}

export default MoviesPagination