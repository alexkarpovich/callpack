import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class GeneralContainer extends Component {
  render() {
    return (
      <div className="general-container">
        General
      </div>
    )
  }
}

export default connect(
  state => state,
  dispatch => ({}),
)(GeneralContainer);
