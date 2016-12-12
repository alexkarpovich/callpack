import {combineReducers} from 'redux';
import UserConst from '../constants/user';


function item(state = {}, action) {
    switch(action.type) {
        case UserConst.GET_USER_REQUEST:
            return {...state, isFetching: true, error: null};

        case UserConst.GET_USER_SUCCESS:
            return {...state, ...action.data, isFetching: false};

        case UserConst.GET_USER_FAILURE:
            return {...state, error: action.error, isFetching: false};

        default:
            return state;
    }
}

export default combineReducers({
    item,
});