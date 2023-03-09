import * as React from 'react';
import {Box} from "@mui/material";
import {useFilters} from "../../hooks/useFilters";
import {GenresField, IncludeAdultField, SortDirectionField, SortField, SubmitField, YearField, ClearFilters} from "./components";
import {useQuery} from "@apollo/client";
import {GENRES_QUERY} from "./query";
import {SORT_DIRECTION} from "../../const";

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
        console.log(`Adult: ${filter.includeAdult}`)
        console.log(`Sort Order: ${filter.sortOrder}`)
        onFiltersSubmit(filter)
    }

    const onClear = () => {
        setFilter({
            ...filter,
            withGenres: [],
            withoutGenres: [],
            sortBy: 'popularity',
            year: "2023",
            includeAdult: false,
            sortOrder: SORT_DIRECTION.ASC,
        })
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
                    xl: "row",
                    lg: "row",
                    md: "row",
                    sm: "column",
                    xs: "column"
                },
                justifyContent: "space-between"
            }}>
                <Box sx={{display: "flex", alignContent: "center"}}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: {
                            xl: "row",
                            lg: "row",
                            md: "row",
                            sm: "column",
                            xs: "column"
                        }
                    }}>
                        <YearField
                            handleChange={handleChange}
                            YearValue={filter.year}
                        />
                        <IncludeAdultField
                            handleChange={handleChange}
                            checked={filter.includeAdult}
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
                    <SortDirectionField
                        handleChange={handleChange}
                        sortOrder={filter.sortOrder}
                    />
                </Box>
            </Box>
            <Box sx={{margin: "10px auto"}}>
                <SubmitField/>
                <ClearFilters onClear={onClear}/>
            </Box>
        </Box>
    )
}

export default Filters;