import { DARK, LIGHT, BASIC } from "./themes"
import {THEMES} from "./themeslist";

export const getTheme = themeName => {
    switch(themeName){
        case THEMES.DARK: return DARK;
        case THEMES.LIGHT: return LIGHT;
        default: return BASIC;
    }
}