import {FormattedMessage} from "react-intl";
import {LangPanel} from "../../components";
import {Paper, Typography} from "@mui/material";

const Settings = () => {
    return (
        <>
            <Typography variant="h4" component="h2"
                        sx={{
                            textAlign: "center",
                            margin: "1rem"
                        }}>
                <FormattedMessage id="navbar.settings"/>
            </Typography>

            <Typography variant="h5" component="h3"
                        sx={{
                            textAlign: "center",
                            margin: "0.5rem"
                        }}>
                <FormattedMessage id="settings_page.lang"/>
            </Typography>
            <Paper sx={{
                background: "#bae8e8",
                display: "flex",
                justifyContent: "center",
                width: "50%",
                margin: "auto"
            }}>
                <LangPanel/>
            </Paper>

        </>
    );
};

export default Settings;