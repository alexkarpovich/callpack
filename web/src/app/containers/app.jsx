import React, {Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {routerActions} from 'react-router-redux';
import Nav from '../components/nav';


class AppContainer extends Component {

  getChildContext() {
    const {routerActions} = this.props;

    return {
      routerActions,
    };
  }

  render() {
    return (
      <div className="app-container">
        <Nav auth={this.props.auth} />
        {this.props.children}
      </div>
    )
  }
}

AppContainer.childContextTypes = {
  routerActions: PropTypes.object.isRequired,
};

AppContainer.propTypes = {
  routerActions: PropTypes.object.isRequired,
};

export default connect(
  state => state,
  dispatch => ({
    routerActions: bindActionCreators(routerActions, dispatch)
  }),
)(AppContainer);
