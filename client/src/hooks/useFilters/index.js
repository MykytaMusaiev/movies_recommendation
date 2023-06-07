import { useState, useCallback } from 'react';
import { SORT_DIRECTION } from '../../const'

export const useFilters = () => {
    const [filter, setFilterFields] = useState({
        page: 1,
        year: 2020,
        sortBy: 'popularity',
        sortOrder: SORT_DIRECTION.ASC,
        withGenres: [],
        withoutGenres: [],
        includeAdult: false
    })

    const setPage = useCallback((page) => {
        setFilterFields({
            ...filter,
            page
        })
    }, [filter])

    const setFilter = useCallback((filterFields) => {
        setFilterFields({
        ...filter,
        ...filterFields,
        year: +filterFields.year
        })
    }, [filter])

    return {
        filter,
        setPage,
        setFilter
    }
}