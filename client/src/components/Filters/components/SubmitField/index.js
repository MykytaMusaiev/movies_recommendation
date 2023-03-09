import {FormattedMessage} from "react-intl";
import {Button} from "@mui/material";

const SubmitField = () => {
    return (
        <>
            <Button type="submit" variant="contained" sx={{marginX: "0.5rem"}}><FormattedMessage id="filters.submit"/></Button>
        </>
    );
};

export default SubmitField;