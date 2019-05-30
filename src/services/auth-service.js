import config from '../config';

const AuthService = {
  setToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token);
    return token;
  },
  getToken() {
    return window.localStorage.getItem(config.TOKEN_KEY);
  }
};

export default AuthService;
