import { applyMiddleware, combineReducers, createStore } from "redux";
import genreReducer from "./reducers/genreReducer";
import movieReducer from "./reducers/movieReducer";
import { thunk } from "redux-thunk";

const rootReducers = combineReducers({
    movies: movieReducer,
    genres: genreReducer
});

export default createStore(rootReducers, applyMiddleware(thunk))