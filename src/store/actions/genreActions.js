import ActionTypes from "../actionTypes"
import api from "../../utils/api"

export const getGenres = () => (dispatch) => {
    dispatch({
        type : ActionTypes.GENRE_LOADING
    })

    api.get('/genre/movie/list')
    .then((response) => {
        dispatch({
            type : ActionTypes.GENRE_SUCCESS,
            payload : response.data
        })
    })
    .catch((error) => {
        dispatch({
            type : ActionTypes.GENRE_ERROR,
            payload : error
        })
    })
}
