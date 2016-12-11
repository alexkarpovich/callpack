export default function validateContact(data, props) {
  const errors = {};
  if(!data.email) {
    errors.email = 'Required';
  }
  if(!data.password) {
    errors.password = 'Required';
  }
  if(!data.confirmPassword) {
    errors.confirmPassword = 'Required';
  }
  return errors;
}