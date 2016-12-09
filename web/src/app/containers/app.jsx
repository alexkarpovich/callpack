import React, {Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {routerActions} from 'react-router-redux';
import Nav from '../components/nav';


class App extends Component {
  render() {
    return (
      <div className="app">
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
)(App);
