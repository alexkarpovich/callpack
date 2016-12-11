import React, {Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import Nav from '../components/nav';
import Progress from '../components/common/progress';


class AppContainer extends Component {
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

export default connect(
  state => ({
  }),
  dispatch => ({
  }),
)(AppContainer);
