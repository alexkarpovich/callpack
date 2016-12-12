import React, {Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {routerActions} from 'react-router-redux';
import Nav from '../components/nav';
import Progress from '../components/common/progress';


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
        <Progress color="blue" active={false} value={100} />
        <Nav />
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
  state => ({
  }),
  dispatch => ({
    routerActions: bindActionCreators(routerActions, dispatch)
  }),
)(AppContainer);
