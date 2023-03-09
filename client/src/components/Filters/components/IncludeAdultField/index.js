import {Checkbox, FormControlLabel} from "@mui/material";
import {FormattedMessage} from "react-intl";

const IncludeAdult = ({handleChange, checked}) => {
    return (
        <>
            <FormControlLabel
                sx={{
                    margin: "auto"
                }}
                name="includeAdult"
                onChange={handleChange}
                control={<Checkbox checked={checked}/>}
                label={<FormattedMessage id="filters.include_adult"/>}
            />

        </>
    );
};

export default IncludeAdult;