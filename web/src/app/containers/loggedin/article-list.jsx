import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import ArticleList from '../../components/loggedin/article/article-list';

class ArticleListContainer extends Component {
  componentDidMount() {
    const {actions} = this.context;

    actions.article.page();
  }

  render() {
    const {article} = this.props;

    return (
      <div className="article-list-container">
        <ArticleList data={article.page.items} />
      </div>
    )
  }
}

ArticleListContainer.contextTypes = {
  actions: PropTypes.object.isRequired,
};

export default connect(
  state => state,
  dispatch => ({}),
)(ArticleListContainer);
