import * as React from 'react';
import {Box} from "@mui/material";
import {useFilters} from "../../hooks/useFilters";
import {GenresField, IncludeAdultField, SortDirectionField, SortField, SubmitField, YearField} from "./components";
import {useQuery} from "@apollo/client";
import {GENRES_QUERY} from "./query";

const Filters = ({onFiltersSubmit}) => {
    const {loading, error, data} = useQuery(GENRES_QUERY);
    const {filter, setFilter} = useFilters()

    if (loading) return null;
    if (error) return `Error! ${error}`;

    const handleChange = (e) => {
        let {name, value} = e.target;
        if (name === "includeAdult") {
            value = e.target.checked
        }

        setFilter({
            ...filter,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (filter.withGenres.some(r => filter.withoutGenres.includes(r))) {
            return alert("recheck genres")
        }
        console.log(filter)
        onFiltersSubmit(filter)
    }

    return (
        <Box component="form"
             onSubmit={onSubmit}
             className="mainForm"
             sx={{
                 display: "flex",
                 flexDirection: "column"
             }}
        >
            <Box sx={{
                display: "flex",
                flexBasis: "100%",
                flexDirection: {
                    xs: "column",
                    lg: "row"
                },
                justifyContent: "space-between"
            }}>
                <Box sx={{display: "flex", alignContent: "center"}}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: {
                            lg: "row",
                            xs: "column"
                        }
                    }}>
                        <YearField
                            handleChange={handleChange}
                        />
                        <IncludeAdultField
                            handleChange={handleChange}
                        />
                    </Box>
                    <GenresField
                        handleChange={handleChange}
                        genre_list={data.genres}
                        withGenres={filter.withGenres}
                        withoutGenres={filter.withoutGenres}
                    />
                </Box>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-around",
                }}>
                    <SortField handleChange={handleChange} sortBy={filter.sortBy}/>
                    <SortDirectionField handleChange={handleChange}/>
                </Box>
            </Box>
            <Box sx={{margin: "10px auto"}}>
                <SubmitField/>
                <SubmitField/>
            </Box>
        </Box>
    )
}

export default Filters;