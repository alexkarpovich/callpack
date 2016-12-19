import React, {Component} from 'react';
import {reduxForm } from 'redux-form';
import validateSignin from '../utils/validateSignin';

class SigninForm extends Component {
  render() {
    const {fields: {email, password}, handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="text" className="form-input" {...email} />
          {email.error && email.touched && <div>{email.error}</div>}
        </div>
        <div>
          <label>Password</label>
          <input type="password" className="form-input" {...password} />
          {password.error && password.touched && <div>{password.error}</div>}
        </div>

        <button onClick={handleSubmit}>Submit</button>
      </form>
    );
  }
}

SigninForm = reduxForm({
  form: 'signin',

  fields: [
    'email',
    'password',
  ],

  validate: validateSignin
})(SigninForm);

export default SigninForm;
