import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../utils/api"
import { baseImgUrl } from "../constants"
import millify from "millify";
import DetailDisplay from "../components/DetailDisplay";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ActorCard from "../components/ActorCard";
import Loader from "../components/Loader";

const DetailPage = () => {

    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()


    useEffect(() => {
        setLoading(true)
        const params = {
            append_to_response: 'credits,videos'
        }
        api.get(`movie/${id}`, { params })
            .then((response) => setMovie(response.data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [id])

    if (loading) {
        return <Loader />
    }

    return (
        <div>
            <div className="relative h-[20vh]">
                <img className="h-full w-full object-cover" src={baseImgUrl + movie?.backdrop_path} alt={movie?.title} />
                <h1 className="absolute inset-0 bg-[#0000006c] flex items-center justify-center text-3xl font-semibold">{movie?.title}</h1>
            </div>

            <div className="my-10 grid grid-cols-1 md:grid-cols-2">
                <div>
                    <DetailDisplay title={'Kategoriler'} data={movie?.genres}/>
                    <DetailDisplay title={'Konuşulan Diller'} data={movie?.spoken_languages}/>
                    <DetailDisplay title={'Yapımcı Şirketler'} data={movie?.production_companies}/>
                    <DetailDisplay title={'Yapımcı Ülkeler'} data={movie?.production_countries}/>
                </div>
                <div className="flex flex-col gap-3">
                    <p>{movie?.overview}</p>
                    {
                        movie?.budget > 0 && (
                            <p className="flex gap-3">
                                <span>Bütçe:</span>
                                <span className="text-green-500">{millify(movie?.budget)} $</span>
                            </p>
                        )
                    }

                    {
                        movie?.revenue > 0 && (
                            <p className="flex gap-3">
                                <span>Hasılat:</span>
                                <span className="text-green-500">{millify(movie?.revenue)} $</span>
                            </p>
                        )
                    }

                </div>
            </div>

            <div>
            <Splide
              options={{
                autoWidth: true,
                gap: '10px',
                pagination: false,
                lazyLoad: true,
              }}
            >
              {movie?.credits?.cast.map((actor, i) => (
                <SplideSlide key={i}>
                  <ActorCard actor={actor} key={i} />
                </SplideSlide>
              ))}
            </Splide>
            </div>
        </div>
    )
}

export default DetailPage