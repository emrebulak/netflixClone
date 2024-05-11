import axios from 'axios';

const params = { language: 'tr-TR' }

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
    }

});

export default api;