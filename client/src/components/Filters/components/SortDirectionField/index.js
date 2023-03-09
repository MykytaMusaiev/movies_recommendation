import React from 'react';
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {SORT_DIRECTION} from "../../../../const";
import {FormattedMessage} from "react-intl";

const SortDirection = ({handleChange}) => {
    return (
        <>
            <FormControl>
                <RadioGroup
                    defaultValue="asc"
                    name="radio-buttons-group"
                    onChange={handleChange}
                >
                    <FormControlLabel name="sortOrder" value={SORT_DIRECTION.ASC} control={<Radio/>}
                                      label={<FormattedMessage id="filters.sort_direction_options.asc"/>}
                                      sx={{marginY: "-5px"}}
                    />
                    <FormControlLabel name="sortOrder" value={SORT_DIRECTION.DESC} control={<Radio/>}
                                      label={<FormattedMessage id="filters.sort_direction_options.desc"/>}
                                      sx={{marginY: "-5px"}}
                    />
                </RadioGroup>
            </FormControl>

        </>
    );
};

export default SortDirection;