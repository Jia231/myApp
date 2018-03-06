import {
  LOG_USER, USER_LOGOUT, SHOW_POPULAR_MOVIES,
  MOVIE_FETCHED, MOVIE_SAVED, SHOW_USER_COLLECTION, DELETE_MOVIE
} from "../types";
import api from "../api";
import _ from 'lodash';
import cookie from 'react-cookie';

export const logInUser = user => ({
  type: LOG_USER,
  user
});
export const userLogout = () => ({
  type: USER_LOGOUT
});

export const movieSaved = () => ({
  type: MOVIE_SAVED
})

const showPopularMovies = movies => ({
  type: SHOW_POPULAR_MOVIES,
  movies
})

const userCollection = movies => ({
  type: SHOW_USER_COLLECTION,
  movies
})

const fetchMovie = movie => ({
  type: MOVIE_FETCHED,
  movie
})

const deleteMovie = movies => ({
  type: DELETE_MOVIE,
  movies
})

/*export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    localStorage.token = user.token;
    dispatch(logInUser(user));
  });*/
export const login = credentials => dispatch =>
  api.user.login(credentials).then(() => {
    console.log('getting the cookie')
    const userCookie = cookie.load('user');
    console.log(userCookie);
  });

export const logout = () => dispatch => {
  localStorage.removeItem("token");
  dispatch(userLogout());
};

export const loadPopularMovies = () => dispatch => {
  api.movies.init().then(
    movies => dispatch(showPopularMovies(movies))
  )
}

export const saveMovie = movie => dispatch =>
  api.movies.saveMovie(movie)
    .then(() => dispatch(movieSaved()))


export const searchMovie = id => dispatch => {
  api.movies.searchMovie(id)
    .then(movie => dispatch(fetchMovie(movie)))
}

export const signup = user => dispatch =>
  api.user.signup(user)
    .then(user => {
      localStorage.token = user.token;
      dispatch(logInUser(user))
    });

export const loadUserCollection = userId => dispatch =>
  api.movies.personalCollection(userId)
    .then(movies =>
      movies => {
        if (movies.movies.length == 0) {
          dispatch(loadPopularMovies())
        }
        else {
          dispatch(userCollection(movies))
        }
      }
    )

export const removeMovie = (id, userId) => dispatch =>
  api.movies.deleteMovie(id, userId)
    .then(movies => {
      if (movies.movies.length == 0) {
        dispatch(loadPopularMovies())
      }
      else {
        dispatch(userCollection(movies))
      }
    })
