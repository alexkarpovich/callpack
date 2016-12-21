import React, {Component, PropTypes } from 'react';
import TransitionGroup from 'react-addons-css-transition-group';
import {connect} from 'react-redux';
import Nav from '../components/nav';


class AppContainer extends Component {

  render() {
    return (
      <div className="app-container">
        <Nav auth={this.props.auth} />
        <TransitionGroup
          transitionName="example"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
          {this.props.children}
        </TransitionGroup>
      </div>
    )
  }
}

AppContainer.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default connect(
  state => state,
  dispatch => ({}),
)(AppContainer);
