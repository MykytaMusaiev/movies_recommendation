import { getFromStorage } from "../../../utils/localStorage";
import { LOCALES } from "../../i18n"
import { THEMES } from "../../theme/themeslist"
import { STORAGE_KEY_LOCALE } from "../../../const";
import { STORAGE_KEY_THEME } from "../../../const";

export default {
    locale: getFromStorage(STORAGE_KEY_LOCALE) || LOCALES.ENGLISH,
    theme: getFromStorage(STORAGE_KEY_THEME) || THEMES.LIGHT
}