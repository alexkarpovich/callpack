import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class LoggedinContainer extends Component {
  render() {
    return (
      <div className="loggedin-container">
        {this.props.children}
      </div>
    )
  }
}

export default connect(
  state => state,
  dispatch => ({}),
)(LoggedinContainer);
