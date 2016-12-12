import UserConst from '../constants/auth';
import api from '../utils/api';


export function user(id) {
  return dispatch => {
    dispatch({type: UserConst.GET_USER_REQUEST});

    api({url: `user/${id}/`}).then(data => {
      dispatch({type: UserConst.GET_USER_SUCCESS, user: data});
    }, error => {
      dispatch(requestError(error, UserConst.GET_USER));
    });
  }
}

function requestError(errors, type) {
  return {
    type: type + '_FAILURE',
    errors
  }
}
