import React, {Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import Nav from '../components/nav';


class AppContainer extends Component {

  render() {
    return (
      <div className="app-container">
        <Nav auth={this.props.auth} />
        {this.props.children}
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
