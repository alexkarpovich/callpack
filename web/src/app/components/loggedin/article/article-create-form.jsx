import React, {Component} from 'react';
import {reduxForm } from 'redux-form';
import validateArticleCreate from '../../../utils/validateArticleCreate';

class ArticleCreateForm extends Component {
  render() {
    const {fields: {title, short, content}, handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" className="form-input" {...title} />
          {title.error && title.touched && <div>{title.error}</div>}
        </div>
        <div>
          <label>Short</label>
          <textarea className="form-input" {...short}></textarea>
          {short.error && short.touched && <div>{short.error}</div>}
        </div>
        <div>
          <label>Content</label>
          <textarea className="form-input" {...content}></textarea>
          {content.error && content.touched && <div>{content.error}</div>}
        </div>

        <button onClick={handleSubmit}>Submit</button>
      </form>
    );
  }
}

ArticleCreateForm = reduxForm({
  form: 'article-create',

  fields: [
    'title',
    'short',
    'content',
  ],

  validate: validateArticleCreate
})(ArticleCreateForm);

export default ArticleCreateForm;
