import config from '../config';
import jwtdecode from 'jwt-decode';

const AuthService = {
  setToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token);
    return token;
  },
  getToken() {
    return window.localStorage.getItem(config.TOKEN_KEY);
  },
  getIdFromToken(token) {
    const { user_id } = jwtdecode(token);
    return user_id;
  }
};

export default AuthService;
