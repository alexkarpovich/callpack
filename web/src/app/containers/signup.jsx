import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Signup from '../components/signup';

class SignupContainer extends Component {

  componentDidMount() {
    this.redirectLoggedIn(this.props.auth.isLoggedIn);
  }

  componentWillReceiveProps(nextProps) {
    this.redirectLoggedIn(nextProps.auth.isLoggedIn);
  }

  redirectLoggedIn(isLoggedIn) {
    const {actions} = this.context;

    if (isLoggedIn) {
      actions.router.push('/')
    }
  }

  render() {
    return (
      <div className="signup-container">
        <Signup />
      </div>
    )
  }
}

SignupContainer.contextTypes = {
  actions: PropTypes.object.isRequired,
};

SignupContainer.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default connect(
  state => state,
  dispatch => ({}),
)(SignupContainer);
