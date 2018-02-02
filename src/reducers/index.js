import {
  LOG_USER, USER_LOGOUT, SHOW_POPULAR_MOVIES,
  MOVIE_FETCHED, MOVIE_SAVED, SHOW_USER_COLLECTION
} from "../types";

export function user(state = {}, action = {}) {
  switch (action.type) {
    case LOG_USER:
      return action.user;
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
}


export function movies(state = {}, action = {}) {
  switch (action.type) {
    case SHOW_POPULAR_MOVIES:
      return action.movies;
    case MOVIE_FETCHED:
      return action.movie;
    case SHOW_USER_COLLECTION:
      return action.movies;
    case MOVIE_SAVED:
      return state;
    default:
      return state;
  }
}