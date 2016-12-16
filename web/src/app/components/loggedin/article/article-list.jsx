import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class ArticleList extends Component {
  render() {
    const {data} = this.props;

    return (
      <div className="article-list">
        <h3>Article</h3>
        <Link to={'/article/create'}>+ article</Link>
        <div>
        {
          data && data.map((article, i) => <li key={i}>{article.title}</li>)
        }
        </div>
      </div>
    );
  }
}

ArticleList.contextTypes = {
  actions: PropTypes.object.isRequired,
};

ArticleList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ArticleList;
