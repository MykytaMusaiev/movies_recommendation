import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {FormattedMessage} from "react-intl";
import {SORT_OPTIONS} from "../../../../const";

const SortBy = ({sortBy, handleChange}) => {
    return (
        <>
            <FormControl sx={{m: 1, width: 100}}>
                <InputLabel id="demo-simple-select-label"><FormattedMessage id="filters.sort_by"/></InputLabel>
                <Select
                    name="sortBy"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sortBy}
                    label={<FormattedMessage id="filters.sort_by"/>}
                    onChange={handleChange}
                >
                    {SORT_OPTIONS.map(i => <MenuItem key={i.value} value={i.value}>{i.name}</MenuItem>)}
                </Select>
            </FormControl>
        </>
    );
};

export default SortBy;