import React, {Component, PropTypes} from 'react';
import SignupForm from './signup-form';

class Signup extends Component {
  handleSubmit(data) {
    const {actions} = this.context;

    actions.signup(data);
  }

  render() {
    return (
      <div className="signup">
        <h3>Sign up</h3>
        <SignupForm onSubmit={this.handleSubmit.bind(this)}/>
      </div>
    );
  }
}

Signup.contextTypes = {
  actions: PropTypes.object.isRequired,
};

export default Signup;
