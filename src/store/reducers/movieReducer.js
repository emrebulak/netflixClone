import ActionTypes from "../actionTypes";

const initialState = {
    isLoading: false,
    error: null,
    movies: []
}

const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.MOVIE_LOADING:
            return { ...state, isLoading: true };

        case ActionTypes.MOVIE_SUCCESS:
            return { ...state, isLoading: false, error: null, movies: payload.results };

        case ActionTypes.MOVIE_ERROR:
            return { ...state, isLoading: false, error: payload };
        default:
            return state
    }
}

export default movieReducer