import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';

import config from '../config';

class App extends Component {

  getChildContext() {
    return {
      config: config,
      routerActions: this.props.routerActions,
      //userProvider: this.props.userProvider,
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

App.childContextTypes = {
  config: PropTypes.object.isRequired,
  routerActions: PropTypes.object.isRequired,
  //userProvider: PropTypes.object.isRequired,
}

App.contextTypes = {
}

App.propTypes = {
  routerActions: PropTypes.object.isRequired,
  //user: PropTypes.object,
}

export default connect(
  state => ({
    //user: state.user.view,
  }),
  dispatch => ({
    routerActions: bindActionCreators(routerActions, dispatch),
  }),
)(App);
