import ActionTypes from "../actionTypes";

const initialState = {
    isLoading: false,
    error: null,
    genres: []
}

const genreReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GENRE_LOADING:
            return { ...state, isLoading: true };
        case ActionTypes.GENRE_SUCCESS:
            return { ...state, isLoading: false, error: null, genres: payload.genres };
        case ActionTypes.GENRE_ERROR:
            return { ...state, isLoading: false, error: payload };
        default:
            return state
    }
}

export default genreReducer