import {bindActionCreators} from 'redux';
import {routerActions} from 'react-router-redux';
import * as AuthActions from '../actions/auth';
import * as UserActions from '../actions/user';

export default dispatch => {
  return {
    router: bindActionCreators(routerActions, dispatch),
    auth: bindActionCreators(AuthActions, dispatch),
    user: bindActionCreators(UserActions, dispatch),
  };
};