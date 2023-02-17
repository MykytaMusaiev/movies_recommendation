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
    TextField, RadioGroup, FormControlLabel, Radio
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
    {name: "Popularity", querySortName: "popularity"},
    {name: "Release Date", querySortName: "release_date"},
    {name: "Vote", querySortName: "vote_average"},
    {name: "Title", querySortName: "original_title"},
    {name: "Release Date", querySortName: "primary_release_date"}
]


const Filters = ({onFiltersSubmit}) => {
    const {loading, error, data} = useQuery(GENRES_QUERY);
    const [inputForm, setInputForm] = React.useState({
        year: 0,
        sort_by: '',
        sort_order: 'asc',
        with_genres: [],
        without_genres: [],
        adult: false

    })


    if (loading) return null;
    if (error) return `Error! ${error}`;

    const genres = data.moviesGenres.map(g => g.name)

    const handleChange = (e) => {
        let {name, value} = e.target;
        if(name === "adult"){ value = e.target.checked}

        setInputForm({
            ...inputForm,
            [name]:  value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (inputForm.with_genres.some(r => inputForm.without_genres.includes(r))) {
            return alert("recheck genres")
        }

        onFiltersSubmit(inputForm)
    }


    return (
        <Grid item xs={12}>
            <Box component="form"
                 onSubmit={onSubmit}
                 sx={{
                     display: "flex",
                     fleDirection: "column",
                     alignItems: "center",
                     justifyContent: "center"
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



                <FormControl sx={{m: 1, width: 160}}>
                    <InputLabel id="demo-multiple-checkbox-label">Include genres</InputLabel>
                    <Select
                        name="with_genres"
                        id="demo-multiple-checkbox"
                        multiple
                        value={inputForm.with_genres}
                        onChange={handleChange}
                        input={<OutlinedInput label="Include genres"/>}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                    >
                        {genres.map((genre) => (
                            <MenuItem key={genre} value={genre}>
                                <Checkbox checked={inputForm.with_genres.indexOf(genre) > -1}/>
                                <ListItemText primary={genre}/>
                            </MenuItem>
                        ))}

                    </Select>
                </FormControl>

                <FormControl sx={{m: 1, width: 160}}>
                    <InputLabel id="demo-multiple-checkbox-label">Exclude genres</InputLabel>
                    <Select
                        name="without_genres"
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={inputForm.without_genres}
                        onChange={handleChange}
                        input={<OutlinedInput label="Exclude genres"/>}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                    >
                        {genres.map((genre) => (
                            <MenuItem key={genre} value={genre}>
                                <Checkbox checked={inputForm.without_genres.indexOf(genre) > -1}/>
                                <ListItemText primary={genre}/>
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControlLabel name="adult" onChange={handleChange} control={<Checkbox defaultChecked={false} />} label="Include adult" />

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
                <FormControl>
                    <RadioGroup
                        defaultValue="asc"
                        name="radio-buttons-group"
                        onChange={handleChange}
                    >
                        <FormControlLabel name="sort_order"  value="asc" control={<Radio />} label="Asc" />
                        <FormControlLabel name="sort_order" value="desc" control={<Radio />} label="Desc" />
                    </RadioGroup>

                </FormControl>

                <Button type="submit" variant="contained">Confirm</Button>
            </Box>
        </Grid>
    )
}

export default Filters;