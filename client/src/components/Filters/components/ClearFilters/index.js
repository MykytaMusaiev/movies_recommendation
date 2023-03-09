import {FormattedMessage} from "react-intl";
import {Button} from "@mui/material";

const ClearFilters = ({onClear}) => {
    return (
        <>
            <Button
                onClick={onClear}
                variant="contained"
                sx={{marginX: "0.5rem"}}>
                <FormattedMessage id="filters.clear"/>
            </Button>
        </>
    )
}

export default ClearFilters;