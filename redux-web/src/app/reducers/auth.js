import jwtDecode from 'jwt-decode'
import AuthConst from '../constants/auth';

const initialAuthState = {
    user: null,
    isLoggedIn: false
};

export default function auth(state = initialAuthState, action) {
    switch (action.type) {
        case AuthConst.SIGNIN_SUCCESS:
            return Object.assign({}, state, {
                isLoggedIn: true
            });

        case AuthConst.SIGNIN_FAILURE:
            return Object.assign({}, state, {
                user: null,
                isLoggedIn: false
            });

        case AuthConst.SIGNUP_FAILURE:
            return Object.assign({}, state, {
                user: null,
                isLoggedIn: false,
                errors: action.errors
            });

        case AuthConst.GET_AUTH_USER_SUCCESS:
            return Object.assign({}, state, {
                user: action.authUser,
                isLoggedIn: true
            });

        case AuthConst.GET_AUTH_USER_FAILURE:
            return Object.assign({}, state, {
                user: null,
                isLoggedIn: false
            });

        case AuthConst.SET_AUTH_USER:
            return Object.assign({}, state, {
                user: action.authUser,
                isLoggedIn: true
            });

        case AuthConst.SIGNOUT:
            return Object.assign({}, state, {
                user: null,
                isLoggedIn: false
            });

        default:
            return state
    }
}
