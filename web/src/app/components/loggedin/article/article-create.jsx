import React, {Component, PropTypes} from 'react';
import ArticleCreateForm from './article-create-form';

class ArticleCreate extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    const {actions} = this.context;

    actions.article.create(data);
  }

  render() {
    return (
      <div className="article-create">
        <h3>Article Create</h3>
        <ArticleCreateForm onSubmit={this.handleSubmit.bind(this)}/>
      </div>
    );
  }
}

ArticleCreate.contextTypes = {
  actions: PropTypes.object.isRequired,
};

export default ArticleCreate;
