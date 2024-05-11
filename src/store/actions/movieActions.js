import api from "../../utils/api"
import ActionTypes from "../actionTypes"

const params = {
    page: '1', region: 'TUR'
}

export const getPopularMovies = () => (dispatch) => {
    dispatch({
        type: ActionTypes.MOVIE_LOADING
    })

    api.get('/movie/popular', { params })
        .then((response) => {
            dispatch({
                type: ActionTypes.MOVIE_SUCCESS,
                payload: response.data
            })
        })
        .catch((error) => {
            dispatch({
                type: ActionTypes.MOVIE_ERROR,
                payload: error
            })
        })
}