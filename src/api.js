import axios from "axios";
import baseURL from './config';
import Cookies from 'js-cookie';

const baseURLMovieDB = "https://api.themoviedb.org/3/movie";
const api_key = "?api_key=2a562783dd6f691cf5e7f97ecc5f9726";
const axiosInstance = axios.create();
axiosInstance.defaults.withCredentials = true;
const axiosInstanceForMovieDB = axios.create();
axiosInstanceForMovieDB.defaults.withCredentials = false;
export default {
  user: {
    login: credentials => axiosInstance.post(`${baseURL}/api/auth`, { credentials }).then(res => res.data.user),
    signup: user => axiosInstance.post(`${baseURL}/api/user`, { user }).then(res => res.data.user)
  },
  movies: {
    init: () => axiosInstanceForMovieDB
      .get(`${baseURLMovieDB}/popular${api_key}&&sort_by=popularity.desc`)
      .then(res => res.data.results),
    searchMovie: id => axiosInstanceForMovieDB.get(`${baseURLMovieDB}/${id}${api_key}`)
      .then(res => res.data),
    saveMovie: movie => axiosInstance.post(`${baseURL}/api/movie`, { movie })
      .then(res => res.data.movie),
    personalCollection: userId => axiosInstance
      .post(`${baseURL}/api/movie/userCollection`, { userId })
      .then(res => res.data),
    deleteMovie: (_id, userId) => axiosInstance.post(`${baseURL}/api/movie/delete/${_id}`, { userId })
      .then(res => res.data)
  }
};
