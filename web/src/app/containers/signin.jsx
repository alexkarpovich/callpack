import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Signin from '../components/signin';

class SigninContainer extends Component {

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
      <div className="signin-container">
        <Signin />
      </div>
    )
  }
}

SigninContainer.contextTypes = {
  actions: PropTypes.object.isRequired,
};

SigninContainer.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default connect(
  state => state,
  dispatch => ({}),
)(SigninContainer);
