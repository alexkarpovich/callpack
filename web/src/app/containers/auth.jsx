import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {routerActions} from 'react-router-redux';
import * as AuthActions from '../actions/auth';
import Auth from '../utils/auth';

class AuthContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {isLoading: true};
  }

  componentDidMount() {
    const {actions, routerActions} = this.props;

    if (Auth.token) {
      actions.getAuthUser();
    } else {
      routerActions.push('/signin');
      this.setState({isLoading: false});
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.auth.user != nextProps.auth.user) {
      this.setState({isLoading: false});
    }
  }

  render() {
    const {isLoading} = this.state;

    return (
      <div className="auth-container">
        {isLoading ? 'Loading...' : this.props.children}
      </div>
    )
  }
}

AuthContainer.propTypes = {
  auth: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  routerActions: PropTypes.object.isRequired,
};

export default connect(
  state => state,
  dispatch => ({
    routerActions: bindActionCreators(routerActions, dispatch),
    actions: bindActionCreators({
      ...AuthActions
    }, dispatch)
  }),
)(AuthContainer);
