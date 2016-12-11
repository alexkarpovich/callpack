import jwtDecode from 'jwt-decode'
import {AuthConst} from '../constants/auth'
import api from '../utils/api'


export function signin(credentials) {
  return dispatch => {
    dispatch({type: AuthConst.SIGNIN_REQUEST});

    api({url: 'signin/', method: 'post', data: credentials}).then(data => {
      setAuthToken(data.token);

      dispatch({type: AuthConst.SIGNIN_SUCCESS});
      dispatch(getAuthUser(data.token));
    }, error => {
      removeAuthToken();

      dispatch(requestError(error, AuthConst.SIGNIN));
    });
  }
}

export function getAuthUser(token) {
  return dispatch => {
    let authUser = jwtDecode(token);

    dispatch({type: AuthConst.GET_AUTH_USER_REQUEST});

    api({url: `user/${authUser.user_id}/`}).then(data => {
      dispatch({type: AuthConst.GET_AUTH_USER_SUCCESS, authUser: data});
    }, error => {
      dispatch(requestError(error, AuthConst.GET_AUTH_USER));
    });
  }
}

export function signup(credentials) {
  return dispatch => {
    dispatch({type: AuthConst.SIGNUP_REQUEST});

    api({url: 'signup/', method: 'post', data: credentials}).then(data => {
      dispatch({type: AuthConst.SIGNUP_SUCCESS});

      if (data.user && data.token) {
        setAuthToken(data.token);

        dispatch({type: AuthConst.SET_AUTH_USER, authUser: data.user});
      }
    }, error => {
      dispatch(requestError(error.errors, AuthConst.SIGNUP_USER));
    });
  }
}

export function signout() {
  removeAuthToken();

  return {
    type: AuthConst.SIGNOUT
  }
}

function setAuthToken(token) {
  localStorage.setItem('token', token);
}

function removeAuthToken() {
  localStorage.removeItem('token');
}

function requestError(errors, type) {
  return {
    type: type + '_FAILURE',
    errors
  }
}