import jwtDecode from 'jwt-decode';
import AuthConst from '../constants/auth';
import Auth from '../utils/auth';
import api from '../utils/api';


export function signin(credentials) {
  return dispatch => {
    dispatch({type: AuthConst.SIGNIN_REQUEST});

    api({url: 'signin/', method: 'post', data: credentials}).then(data => {
      Auth.token = data.token;

      dispatch({type: AuthConst.SIGNIN_SUCCESS});
      dispatch(getAuthUser(data.token));
    }, error => {
      Auth.removeToken();

      dispatch(requestError(error, AuthConst.SIGNIN));
    });
  }
}

export function getAuthUser() {
  return dispatch => {
    dispatch({type: AuthConst.GET_AUTH_USER_REQUEST});

    api({url: `user/${Auth.user._id}/`}).then(data => {
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

      if (/*data.user && */data.token) {
        Auth.token = data.token;
        let authUser = Auth.getUser(data.token);

        dispatch({type: AuthConst.SET_AUTH_USER, authUser/*: data.user*/});
      }
    }, error => {
      dispatch(requestError(error.errors, AuthConst.SIGNUP));
    });
  }
}

export function signout() {
  Auth.removeToken();

  return {
    type: AuthConst.SIGNOUT
  }
}

function requestError(errors, type) {
  return {
    type: type + '_FAILURE',
    errors
  }
}
