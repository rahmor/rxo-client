import config from '../config';

const AuthService = {
  setToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token);
    return token;
  },
  getToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token);
  }
};

export default AuthService;
