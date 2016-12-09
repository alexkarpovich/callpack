import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class General extends Component {
  render() {
    return (
      <div>
        General
      </div>
    )
  }
}

export default connect(
  state => ({
  }),
  dispatch => ({
  }),
)(General);
