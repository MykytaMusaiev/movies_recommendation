import {LOCALES} from '../constants'

export default {
    [LOCALES.UKRAINIAN]: {
        navbar: {
            main_title: "ФільмоРадник",
            home: "Головна сторінка",
            settings: "Налаштування"
        },
        settingsTitle: "Налаштування",
        moviesRec: "ФільмоРадник",
        addSome: "Додайте декілька фільмів",
        required: "required",
        copied: "Скопійовано!",
        share: "Поділитись:",
        filters: {
            sort_by: "Сортувати за",
            sort_direction: "",
            include_adult: "Додати дорослі",
            year: "Рік",
            release_year: "Рік випуску",
            with_genres: "З жанрами",
            without_genres: "Без жанрів",
            submit: "Пошук",
            clear: "Очистити",
            sort: {
                "popularity": "Популярністю",
                "release_date": "Дата випуску",
                "vote_average": "Середньою оцінкою",
                "original_title": "Оригінальною назвою",
                "primary_release_date": "Першочергова дата випуску",
            },
            sort_direction_options: {
                asc: "Зрост.",
                desc: "Зменш."
            }
        },
        selected_movies :{
            vote_average: "Середня оцінка: ",
            movie_length: "Тривалість фільму: ",
            delete_movie: "Видалити",
        },
        recommended_page: {
            list_name: "Назва добірки:"
        },
        settings_page: {
            lang: "Оберіть мову"
        }
    }
}