import React, {Component, PropTypes} from 'react';
import SigninForm from './signin-form';

class Signin extends Component {
  handleSubmit(data) {
    const {actions} = this.context;
console.log(data);
    actions.signin(data);
  }

  render() {
    return (
      <div className="signin">
        <h3>Sign in</h3>
        <SigninForm onSubmit={this.handleSubmit.bind(this)}/>
      </div>
    );
  }
}

Signin.contextTypes = {
  actions: PropTypes.object.isRequired,
};

export default Signin;
