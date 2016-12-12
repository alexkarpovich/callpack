import jwtDecode from 'jwt-decode';
import config from '../config';


class Auth {
  static set token(token) {
    localStorage.setItem(config.tokenKey, token);
  }

  static get token() {
    return localStorage.getItem(config.tokenKey);
  }

  static get user() {
    return jwtDecode(localStorage.getItem(config.tokenKey));
  }

  static getUser(token) {
    return jwtDecode(token);
  }

  static removeToken() {
    localStorage.removeItem(config.tokenKey);
  }
}

export default Auth;
