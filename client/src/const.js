import {FormattedMessage} from "react-intl";

export const MAX_SELECTED_MOVIES = 20;
export const CONFIRM_TIMEOUT = 1500;
export const STORAGE_KEY_LOCALE = 'locale';
export const STORAGE_KEY_THEME = 'theme';

export const SORT_OPTIONS = [
    {name: <FormattedMessage id="filters.sort.popularity"/>, value: "popularity"},
    {name: <FormattedMessage id="filters.sort.release_date"/>, value: "release_date"},
    {name: <FormattedMessage id="filters.sort.vote_average"/>, value: "vote_average"},
    {name: <FormattedMessage id="filters.sort.original_title"/>, value: "original_title"},
    {name: <FormattedMessage id="filters.sort.primary_release_date"/>, value: "primary_release_date"}
]

export const SORT_DIRECTION = {
    DESC: "desc",
    ASC: "asc"
}
