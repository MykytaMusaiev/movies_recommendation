import * as React from 'react';
import {Box, Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select} from "@mui/material";
import {FormattedMessage} from "react-intl";
import {MenuProps} from "./const";


const PickGenres = ({genre_list, withGenres, withoutGenres, handleChange}) => {
    const genres = genre_list.map(g => g)

    const genresByIds = {}

    for (const singleGenreEntity of genres) {
        genresByIds[singleGenreEntity.id] = singleGenreEntity
    }
    return (
        <Box>
            <FormControl sx={{m: 1, width: 160}}>
                <InputLabel id="demo-multiple-checkbox-label"><FormattedMessage
                    id="filters.with_genres"/></InputLabel>
                <Select
                    name="withGenres"
                    id="demo-multiple-checkbox"
                    multiple
                    value={withGenres}
                    onChange={handleChange}
                    input={<OutlinedInput label={<FormattedMessage id="filters.with_genres"/>}/>}
                    renderValue={(selected) => selected.map((genreId) => genresByIds[genreId].name).join(", ")}
                    MenuProps={MenuProps}
                >
                    {genres.map((genre) => (
                        <MenuItem key={genre.id} value={genre.id}>
                            <Checkbox checked={withGenres.indexOf(genre.id) > -1}/>
                            <ListItemText primary={genre.name}/>
                        </MenuItem>
                    ))}

                </Select>
            </FormControl>

            <FormControl sx={{m: 1, width: 160}}>
                <InputLabel id="demo-multiple-checkbox-label"><FormattedMessage
                    id="filters.without_genres"/></InputLabel>
                <Select
                    name="withoutGenres"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={withoutGenres}
                    onChange={handleChange}
                    input={<OutlinedInput label={<FormattedMessage id="filters.without_genres"/>}/>}
                    renderValue={(selected) => selected.map((genreId) => genresByIds[genreId].name).join(", ")}
                    MenuProps={MenuProps}
                >
                    {genres.map((genre) => (
                        <MenuItem key={genre.id} value={genre.id}>
                            <Checkbox checked={withoutGenres.indexOf(genre.id) > -1}/>
                            <ListItemText primary={genre.name}/>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}

export default PickGenres;