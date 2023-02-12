import {renderHook, act} from '@testing-library/react-hooks'
import {useMovies} from "./index";
import {MAX_SELECTED_MOVIES} from "../../const";

describe('useMovies hook', () => {
    const basicMovie = {
        id: 1,
        title: "movieTitle"
    }

    it('should select movie', () => {
        const {result} = renderHook(() => useMovies())

        act(() => {
            result.current.selectMovie(basicMovie)
        })

        expect(result.current.selectedMovies.length).toBe(1)
        expect(result.current.selectedMovies[0].id).toBe(basicMovie.id)
    });

    it('should delete movie',() => {

        const {result} = renderHook(() => useMovies())

        act(() => {
            result.current.selectMovie(basicMovie)
        })
        expect(result.current.selectedMovies.length).toBe(1)

        act(() => {
            result.current.deleteMovie(basicMovie)
        })
        expect(result.current.selectedMovies.length).toBe(0)
    })

    it('should select movie with same id only once',() => {
        const {result} = renderHook(() => useMovies())

        act(() => {
            result.current.selectMovie(basicMovie)
        })
        act(() => {
            result.current.selectMovie(basicMovie)
        })

        expect(result.current.selectedMovies.length).toBe(1)
        expect(result.current.selectedMovies[0].id).toBe(basicMovie.id)

    })

    it('should add no more movies that allowed', () => {
        const {result} = renderHook(() => useMovies())

        for(let i=0; i< MAX_SELECTED_MOVIES; i++){
            act(() => {
                result.current.selectMovie({
                    ...basicMovie,
                    id: i,
                    title: `title numero ${i}`
                })
            })
        }

        expect(result.current.selectedMovies.length).toBe(MAX_SELECTED_MOVIES)


        act(() => {
            result.current.selectMovie({
                ...basicMovie,
                id: 21,
                title: `title numero 21`
            })
        })
        expect(result.current.selectedMovies.length).toBe(MAX_SELECTED_MOVIES)
    })

    it('should delete movie with provided id', () => {
        const {result} = renderHook(() => useMovies())

        for(let i=0; i< 5; i++){
            act(() => {
                result.current.selectMovie({
                    ...basicMovie,
                    id: i,
                    title: `title numero ${i}`
                })
            })
        }

        act(() => {
            result.current.deleteMovie({
                ...basicMovie,
                id: 1
            })
        })

        expect(result.current.selectedMovies.some((movie) => movie.id === 1)).toBe(false)
        expect(result.current.selectedMovies.length).toBe(4)


    })

})