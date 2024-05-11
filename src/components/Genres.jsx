import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getGenres } from "../store/actions/genreActions"
import MovieList from "./MovieList"
import Loader from "./Loader"
import Error from "./Error"

const Genres = () => {

    const dispatch = useDispatch()
    const { isLoading, error, genres } = useSelector((state) => state.genres)

    useEffect(() => {
        dispatch(getGenres())
    }, [])

    if (isLoading) {
        return <Loader />
    }

    if (error) {
        return <Error message={error.message} event={getGenres} />
    }

    return (
        genres.map((genre) => <MovieList key={genre.id} data={genre}/>)
    )
}

export default Genres