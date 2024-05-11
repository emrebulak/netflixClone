import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPopularMovies } from "../store/actions/movieActions"
import { baseImgUrl } from "../constants"
import Loader from './Loader'
import Error from './Error'

const Hero = () => {

    const dispatch = useDispatch()
    const { isLoading, error, movies } = useSelector((state) => state.movies)

    const randomMovie = Math.floor(Math.random() * movies.length)

    const getMovies = () => {
        dispatch(getPopularMovies())
    }

    useEffect(() => {
        getMovies()
    }, [])

    const movie = movies[randomMovie]

    if (isLoading) {
        return <Loader />
    }

    if (error) {
        return <Error message={error.message} event={getMovies} />
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2  md:max-h-[400px] gap-5 mb-10">
            <div className="flex flex-col gap-6 items-center justify-center">
                <h1 className="text-3xl font-bold">{movie?.title}</h1>
                <p className="text-start">{movie?.overview}</p>
                <p>
                    <span>IMDB:</span>
                    <span className="text-yellow-400 ms-2 font-semibold">
                        {movie?.vote_average?.toFixed(1)}
                    </span>
                </p>
                <div className="flex gap-5">
                    <button className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition">Filmi İzle</button>
                    <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Listeye Ekle</button>
                </div>
            </div>
            <div className="flex justify-center">
                <img className="hero-img my-4 object-contain rounded max-h-[300px]" src={baseImgUrl + movie?.backdrop_path} alt={movie?.title} />
            </div>
        </div>
    )
}

export default Hero