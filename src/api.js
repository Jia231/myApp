import axios from "axios";
import baseURL from './config'
export default {
  user: {
    login: credentials =>
      axios.post(`${baseURL}/api/auth`, { credentials }).then(res => res.data.user),
    signup: user => axios.post(`${baseURL}/api/user`, { user }).then(res => res.data.user)
  }
};
