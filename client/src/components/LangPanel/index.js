import {useCallback, useContext} from "react";
import {AppContext} from "../../providers/context/appContext";
import {Button, Stack} from "@mui/material";
import {LOCALES} from "../../providers/i18n";
import {blueGrey} from "@mui/material/colors";

const LangPanel = () => {
    const {state, dispatch} = useContext(AppContext)
    const changeLang = useCallback((locale) => {
        dispatch({
            type: "setLocale",
            locale: locale
        })
    })

    return (
        <Stack sx={{
            display: "flex",
            flexDirection: "row",
        }}>
            <Button
                sx={{
                    my: 2, color: "white",
                    '&.Mui-disabled': {
                        color: '#01579b',
                    }
                }}
                onClick={() => changeLang(LOCALES.ENGLISH)}
                disabled={state.locale === LOCALES.ENGLISH}
            >
                EN
            </Button>
            <Button
                sx={{
                    my: 2, color: "white",
                    '&.Mui-disabled': {
                        color: '#01579b',
                    }
                }}
                onClick={() => changeLang(LOCALES.UKRAINIAN)}
                disabled={state.locale === LOCALES.UKRAINIAN}>
                УКР
            </Button>
        </Stack>
    )
}

export default LangPanel;