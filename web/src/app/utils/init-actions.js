import {bindActionCreators} from 'redux';
import {routerActions} from 'react-router-redux';
import * as AuthActions from '../actions/auth';
import * as UserActions from '../actions/user';

const actionCreators = {
  router: routerActions,
  auth: AuthActions,
  user: UserActions,
};

export default dispatch => {
  let bound = {};

  Object.keys(actionCreators).forEach(key =>
    bound[key] = bindActionCreators(actionCreators[key], dispatch)
  );

  return bound;
};