import * as React from 'react';
import {
    Checkbox,
    FormControl,
    Grid,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select,
    Button,
    Box,
    TextField
} from "@mui/material";

import {useQuery} from "@apollo/client";
import {GENRES_QUERY} from "./query";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const sortedByArgs = [
    {name: "Popularity Asc", querySortName: "popularity.asc"},
    {name: "Popularity Desc", querySortName: "popularity.desc"},
    {name: "Release Date Asc", querySortName: "release_date.asc"},
    {name: "Release Date Desc", querySortName: "release_date.desc"},
    {name: "Vote Asc", querySortName: "vote_average.asc"},
    {name: "Vote Desc", querySortName: "vote_average.desc"}
]


const Filters = () => {
    const {loading, error, data} = useQuery(GENRES_QUERY);
    const [includedGenres, setIncludedGenres] = React.useState([]);
    const [excludedGenres, setExludedGenres] = React.useState([]);

    const [inputForm, setInputForm] = React.useState({
        year: 0,
        sort_by: '',
        include: [],
        exclude: []
    })

    if (loading) return null;
    if (error) return `Error! ${error}`;

    const genres = data.moviesGenres.map(g => g.name)


    const handleChangeInclude = (event) => {
        const {value, name} = event.target;

        setIncludedGenres(
            typeof value === 'string' ? value.split(',') : value,
        );

        setInputForm({
            ...inputForm,
            include: value

        })
    };

    const handleChangeExclude = (event) => {
        const {target: {value}} = event;

        setExludedGenres(
            (typeof value === 'string') ? value.split(',') : value,
        );
        setInputForm({
            ...inputForm,
            exclude: value
        })

    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputForm({
            ...inputForm,
            [name]:[value]
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (excludedGenres.some(r => includedGenres.includes(r))) {
            return alert("recheck genres")
        }
        console.log(inputForm)
    }


    return (
        <Grid item xs={12}>
            <Box component="form"
                 onSubmit={onSubmit}
                 sx={{
                     display: "flex",
                     fleDirection: "column",
                     alignItems: "center"
                 }}
            >
                <FormControl sx={{m: 1, width: 100}}>
                    <TextField
                        name="year"
                        id="outlined-basic"
                        label="Year"
                        variant="outlined"
                        onChange={handleChange}
                    />
                </FormControl>

                <FormControl sx={{m: 1, width: 100}}>
                    <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                    <Select
                        name="sort_by"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={inputForm.sort_by}
                        label="Sort by"
                        onChange={handleChange}
                    >
                        {sortedByArgs.map(i => <MenuItem key={i.querySortName} value={i.querySortName}>{i.name}</MenuItem> )}
                    </Select>
                </FormControl>

                <FormControl sx={{m: 1, width: 160}}>
                    <InputLabel id="demo-multiple-checkbox-label">Include genres</InputLabel>
                    <Select
                        name="include"
                        id="demo-multiple-checkbox"
                        multiple
                        value={includedGenres}
                        onChange={handleChangeInclude}
                        input={<OutlinedInput label="Include genres"/>}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                    >
                        {genres.map((genre) => (
                            <MenuItem key={genre} value={genre}>
                                <Checkbox checked={includedGenres.indexOf(genre) > -1}/>
                                <ListItemText primary={genre}/>
                            </MenuItem>
                        ))}

                    </Select>
                </FormControl>

                <FormControl sx={{m: 1, width: 160}}>
                    <InputLabel id="demo-multiple-checkbox-label">Exclude genres</InputLabel>
                    <Select
                        name="exclude"
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={excludedGenres}
                        onChange={handleChangeExclude}
                        input={<OutlinedInput label="Exclude genres"/>}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                    >
                        {genres.map((genre) => (
                            <MenuItem key={genre} value={genre}>
                                <Checkbox checked={excludedGenres.indexOf(genre) > -1}/>
                                <ListItemText primary={genre}/>
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <Button type="submit" variant="contained">Confirm</Button>
            </Box>
        </Grid>
    )
}

export default Filters;