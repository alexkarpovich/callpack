import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as AuthActions from '../actions/auth';
import Signup from '../components/signup';

class SignupContainer extends Component {
  getChildContext() {
    return {
      actions: this.props.actions,
    }
  }

  render() {
    console.log(this.props.authUser);
    return (
      <div className="signup-container">
        <Signup />
      </div>
    )
  }
}

SignupContainer.childContextTypes = {
  actions: PropTypes.object.isRequired,
};

export default connect(
  state => ({
    authUser: state.auth,
  }),
  dispatch => ({
    actions: bindActionCreators({
      ...AuthActions
    }, dispatch)
  }),
)(SignupContainer);
