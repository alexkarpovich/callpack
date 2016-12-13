import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import initActions from '../utils/init-actions';
import Auth from '../utils/auth';

class InitContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {isLoading: true};
  }

  getChildContext() {
    const {actions} = this.props;

    return {
      actions: actions
    };
  }

  componentDidMount() {
    const {actions} = this.props;

    if (Auth.token) {
      actions.auth.getAuthUser();
    } else {
      actions.router.push('/signin');
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

InitContainer.childContextTypes = {
  actions: PropTypes.object.isRequired,
};

InitContainer.propTypes = {
  auth: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default connect(
  state => state,
  dispatch => ({
    actions: initActions(dispatch),
  }),
)(InitContainer);
