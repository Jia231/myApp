import { LOG_USER, USER_LOGOUT } from "../types";

export default function user(state = {}, action = {}) {
  switch (action.type) {
    case LOG_USER:
      return action.user;
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
}
