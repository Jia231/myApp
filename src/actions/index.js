import { LOG_USER, USER_LOGOUT } from "../types";
import api from "../api";

export const logInUser = user => ({
  type: LOG_USER,
  user
});
export const userLogout = () => ({
  type: USER_LOGOUT
});

export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    localStorage.token = user.token;
    dispatch(logInUser(user));
  });

export const logout = () => dispatch => {
  console.log("logout");
  localStorage.removeItem("token");
  dispatch(userLogout());
};

export const signup = user => dispatch =>
  api.user.signup(user).then(user => {
    localStorage.token = user.token;
    dispatch(logInUser(user))
  });
