import {createContext, useReducer} from "react";
import defaultContext from "./defaultContext"
import {saveToStorage} from "../../../utils/localStorage";
import {STORAGE_KEY_LOCALE} from "../../../const";
import {STORAGE_KEY_THEME} from "../../../const";


const AppContext = createContext();

let reducer = (state, action) => {
    switch(action.type){
        case "reset":
            return defaultContext;
        case "setLocale":
            saveToStorage(STORAGE_KEY_LOCALE, action.locale)
            return { ...state, locale: action.locale}
        case 'setTheme':
            saveToStorage(STORAGE_KEY_THEME, action.themeName)
            return { ...state, themeName: action.themeName}

    }
}

const AppContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, defaultContext)
    const value = { state, dispatch }
    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppContextProvider}