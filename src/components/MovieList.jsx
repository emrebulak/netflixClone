import React, { useEffect, useState } from 'react'
import api from '../utils/api'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { baseImgUrl } from '../constants';
import { Link } from 'react-router-dom';

const MovieList = ({ data }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const params = {
      with_genres: data.id,
    };

    api.get('/discover/movie', { params })
      .then((response) => {
        setMovies(response.data.results)
      })
      .catch((error) => {
        console.log("MovieList", error)
      })

  }, [])

  return (
    <div className="my-10">
      <h1 className="text-3xl font-semibold mb-3">{data.name}</h1>

      <Splide
        options={{
          autoWidth: true,
          gap: '10px',
          pagination: false,
          lazyLoad: true,
        }}
      >
        {movies.length > 0 && movies.map((movie) => (
          <SplideSlide key={movie.id}>
            <Link to={`/detail/${movie.id}`}>
              <img
                className="max-w-[300px] h-full cursor-pointer rounded"
                src={baseImgUrl + movie.poster_path}
                alt={movie.title}
              />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}

export default MovieList