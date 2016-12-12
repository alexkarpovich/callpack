import jwtDecode from 'jwt-decode'
import AuthConst from '../constants/auth';

const initialAuthState = {
    authUser: null,
    isAuthenticated: false
};

export default function auth(state = initialAuthState, action) {
    switch (action.type) {
        case AuthConst.SIGNIN_SUCCESS:
            return Object.assign({}, state, {
                isAuthenticated: true
            });

        case AuthConst.SIGNIN_FAILURE:
            return Object.assign({}, state, {
                authUser: null,
                isAuthenticated: false
            });

        case AuthConst.SIGNUP_FAILURE:
            return Object.assign({}, state, {
                authUser: null,
                isAuthenticated: false,
                errors: action.errors
            });

        case AuthConst.GET_AUTH_USER_SUCCESS:
            return Object.assign({}, state, {
                authUser: action.authUser,
                isAuthenticated: true
            });

        case AuthConst.GET_AUTH_USER_FAILURE:
            return Object.assign({}, state, {
                authUser: null,
                isAuthenticated: false
            });

        case AuthConst.SET_AUTH_USER:
            return Object.assign({}, state, {
                authUser: action.authUser,
                isAuthenticated: true
            });

        case AuthConst.SIGNOUT:
            return Object.assign({}, state, {
                authUser: null,
                isAuthenticated: false
            });

        default:
            return state
    }
}
