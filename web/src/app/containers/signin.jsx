import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as AuthActions from '../actions/auth';
import Signin from '../components/signin';

class SigninContainer extends Component {
  getChildContext() {
    return {
      actions: this.props.actions,
    }
  }

  componentDidMount() {
    this.redirectLoggedIn(this.props.auth.isLoggedIn);
  }

  componentWillReceiveProps(nextProps) {
    this.redirectLoggedIn(nextProps.auth.isLoggedIn);
  }

  redirectLoggedIn(isLoggedIn) {
    const {routerActions} = this.context;

    if (isLoggedIn) {
      routerActions.push('/')
    }
  }

  render() {
    return (
      <div className="signin-container">
        <Signin />
      </div>
    )
  }
}

SigninContainer.childContextTypes = {
  actions: PropTypes.object.isRequired,
};

SigninContainer.contextTypes = {
  routerActions: PropTypes.object.isRequired,
};

SigninContainer.propTypes = {
  auth: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default connect(
  state => state,
  dispatch => ({
    actions: bindActionCreators({
      ...AuthActions
    }, dispatch)
  }),
)(SigninContainer);
