import {Checkbox, FormControlLabel} from "@mui/material";
import {FormattedMessage} from "react-intl";

const IncludeAdult = ({handleChange}) => {
    return (
        <>
            <FormControlLabel
                sx={{
                    margin: "auto"
                }}
                name="includeAdult" onChange={handleChange}
                              control={<Checkbox defaultChecked={false}/>}
                              label={<FormattedMessage id="filters.include_adult"/>}
            />

        </>
    );
};

export default IncludeAdult;