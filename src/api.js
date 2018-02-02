import axios from "axios";
import baseURL from './config';

const baseURLMovieDB = "https://api.themoviedb.org/3/movie";
const api_key = "?api_key=2a562783dd6f691cf5e7f97ecc5f9726";
export default {
  user: {
    login: credentials =>
      axios.post(`${baseURL}/api/auth`, { credentials }).then(res => res.data.user),
    signup: user => axios.post(`${baseURL}/api/user`, { user }).then(res => res.data.user)
  },
  movies: {
    init: () => axios
      .get(`${baseURLMovieDB}/popular${api_key}&&sort_by=popularity.desc`)
      .then(res => res.data.results),
    searchMovie: id => axios.get(`${baseURLMovieDB}/${id}${api_key}`)
      .then(res => res.data),
    saveMovie: movie => axios.post(`${baseURL}/api/movie`, { movie })
      .then(res => res.data.movie),
    personalCollection: userId => axios
      .post(`${baseURL}/api/movie/userCollection`, { userId })
      .then(res => res.data)
  }
};
