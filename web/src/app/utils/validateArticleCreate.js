export default function validateArticleCreate(data, props) {
  const errors = {};

  if(!data.title) {
    errors.title = 'Required';
  }

  if(!data.content) {
    errors.content = 'Required';
  }

  return errors;
}