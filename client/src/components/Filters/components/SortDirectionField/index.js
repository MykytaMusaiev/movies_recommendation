import React from 'react';
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {SORT_DIRECTION} from "../../../../const";
import {FormattedMessage} from "react-intl";

const SortDirection = ({handleChange, sortOrder}) => {
    let [asc, desc] = [true, false]
    if (sortOrder === "asc"){
        asc = true
        desc = false
    }else{
        asc = false
        desc = true
    }
    return (
        <>
            <FormControl>
                <RadioGroup
                    defaultValue="asc"
                    name="radio-buttons-group"
                    onChange={handleChange}
                >
                    <FormControlLabel
                        name="sortOrder"
                        value={SORT_DIRECTION.ASC}
                        control={<Radio checked={asc}/>}
                        sx={{marginY: "-5px"}}
                        label={<FormattedMessage id="filters.sort_direction_options.asc"
                        />}
                    />
                    <FormControlLabel
                        name="sortOrder"
                        value={SORT_DIRECTION.DESC}
                        control={<Radio checked={desc}/>}
                        sx={{marginY: "-5px"}}
                        label={
                            <FormattedMessage id="filters.sort_direction_options.desc"/>
                        }

                    />
                </RadioGroup>
            </FormControl>

        </>
    );
};

export default SortDirection;