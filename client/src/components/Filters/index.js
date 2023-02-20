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
import { FormattedMessage } from "react-intl";

import {useQuery} from "@apollo/client";
import {GENRES_QUERY} from "./query";
import {SORT_DIRECTION, SORT_OPTIONS} from "../../const"
import {useFilters} from "../../hooks/useFilters";


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


const Filters = ({onFiltersSubmit}) => {
    const {loading, error, data} = useQuery(GENRES_QUERY);
    const { filter, setFilter } = useFilters()

    if (loading) return null;
    if (error) return `Error! ${error}`;

    const genres = data.genres.map(g => g)
    const genresByIds = {}

    for(const singleGenreEntity of genres){
        genresByIds[singleGenreEntity.id] = singleGenreEntity
    }

    const handleChange = (e) => {
        let {name, value} = e.target;
        if(name === "includeAdult"){ value = e.target.checked}

        setFilter({
            ...filter,
            [name]:  value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (filter.withGenres.some(r => filter.withoutGenres.includes(r))) {
            return alert("recheck genres")
        }
        onFiltersSubmit(filter)
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
                        label={<FormattedMessage id="filters.release_year"/>}
                        variant="outlined"
                        onChange={handleChange}
                    />
                </FormControl>

                <FormControl sx={{m: 1, width: 160}}>
                    <InputLabel id="demo-multiple-checkbox-label"><FormattedMessage id="filters.with_genres"/></InputLabel>
                    <Select
                        name="withGenres"
                        id="demo-multiple-checkbox"
                        multiple
                        value={filter.withGenres}
                        onChange={handleChange}
                        input={<OutlinedInput label={<FormattedMessage id="filters.with_genres"/>}/>}
                        renderValue={(selected) =>  selected.map((genreId) => genresByIds[genreId].name).join(", ")}
                        MenuProps={MenuProps}
                    >
                        {genres.map((genre) => (
                            <MenuItem key={genre.id} value={genre.id}>
                                <Checkbox checked={filter.withGenres.indexOf(genre.id) > -1}/>
                                <ListItemText primary={genre.name}/>
                            </MenuItem>
                        ))}

                    </Select>
                </FormControl>

                <FormControl sx={{m: 1, width: 160}}>
                    <InputLabel id="demo-multiple-checkbox-label"><FormattedMessage id="filters.without_genres"/></InputLabel>
                    <Select
                        name="withoutGenres"
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={filter.withoutGenres}
                        onChange={handleChange}
                        input={<OutlinedInput label={<FormattedMessage id="filters.without_genres"/>}/>}
                        renderValue={(selected) => selected.map((genreId) => genresByIds[genreId].name).join(", ")}
                        MenuProps={MenuProps}
                    >
                        {genres.map((genre) => (
                            <MenuItem key={genre.id} value={genre.id}>
                                <Checkbox checked={filter.withoutGenres.indexOf(genre.id) > -1}/>
                                <ListItemText primary={genre.name}/>
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControlLabel name="includeAdult" onChange={handleChange} control={<Checkbox defaultChecked={false} />} label={<FormattedMessage id="filters.include_adult"/>} />

                <FormControl sx={{m: 1, width: 100}}>
                    <InputLabel id="demo-simple-select-label"><FormattedMessage id="filters.sort_by"/></InputLabel>
                    <Select
                        name="sortBy"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={filter.sortBy}
                        label={<FormattedMessage id="filters.sort_by"/>}
                        onChange={handleChange}
                    >
                        {SORT_OPTIONS.map(i => <MenuItem key={i.value} value={i.value}>{i.name}</MenuItem> )}

                    </Select>
                </FormControl>

                <FormControl>
                    <RadioGroup
                        defaultValue="asc"
                        name="radio-buttons-group"
                        onChange={handleChange}
                    >
                        <FormControlLabel name="sortOrder"  value={SORT_DIRECTION.ASC} control={<Radio />} label={<FormattedMessage id="filters.sort_direction_options.asc"/>} />
                        <FormControlLabel name="sortOrder" value={SORT_DIRECTION.DESC} control={<Radio />} label={<FormattedMessage id="filters.sort_direction_options.desc"/>} />
                    </RadioGroup>

                </FormControl>

                <Button type="submit" variant="contained"><FormattedMessage id="filters.submit" /></Button>
            </Box>
        </Grid>
    )
}

export default Filters;