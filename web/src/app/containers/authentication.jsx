import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {routerActions} from 'react-router-redux';


class AuthContainer extends Component {
  render() {
    return (
      <div className="auth-container">
          {this.props.children}
      </div>
    )
  }
}

export default connect(
  state => ({
  }),
  dispatch => ({
  }),
)(AuthContainer);
