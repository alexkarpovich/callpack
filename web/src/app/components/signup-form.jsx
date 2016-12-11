import React, {Component} from 'react';
import {reduxForm } from 'redux-form';
import validateContact from '../utils/validateSignup';

class SignupForm extends Component {
  render() {
    const {fields: {email, password, confirmPassword}, handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <li>
        <label>Email</label>
        <input type="text" className="form-input" {...email} />
        {email.error && email.touched && <div>{email.error}</div>}
        </li>
        <li>
        <label>Password</label>
        <input type="text" className="form-input" {...password} />
        {password.error && password.touched && <div>{password.error}</div>}
        </li>
        <li>
        <label>Confirm Password</label>
        <input type="text" className="form-input" {...confirmPassword}/>
        {confirmPassword.error && confirmPassword.touched && <div>{confirmPassword.error}</div>}
        </li>

        <button onClick={handleSubmit}>Submit</button>
      </form>
    );
  }
}

SignupForm = reduxForm({
  form: 'signup',

  fields: [
    'email',
    'password',
    'confirmPassword',
  ],

  validate: validateContact
})(SignupForm);

export default SignupForm;