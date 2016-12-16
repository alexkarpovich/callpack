import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import ArticleCreate from '../../components/loggedin/article/article-create';

class ArticleCreateContainer extends Component {
  render() {
    return (
      <div className="article-create-container">
        <ArticleCreate />
      </div>
    )
  }
}

export default connect(
  state => state,
  dispatch => ({}),
)(ArticleCreateContainer);
