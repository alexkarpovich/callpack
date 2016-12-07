import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';


class Authentication extends Component {
  render() {
    return (
      <div>
          {this.props.children}
      </div>
    )
  }
}

Authentication.childContextTypes = {
}

Authentication.propTypes = {
}

export default connect(
  state => ({
    serverErrors: state.serverErrors,
  }),
  dispatch => ({
    routerActions: bindActionCreators(routerActions, dispatch),
  }),
)(Authentication);
