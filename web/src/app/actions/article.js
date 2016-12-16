import api from '../utils/api';
import ArticleConst from '../constants/article';


export function create(params) {
  return dispatch => {
    dispatch({type: ArticleConst.CREATE_ARTICLE_REQUEST});

    api({url: `article/`, method: 'post', data: params}).then(res => {
      dispatch({type: ArticleConst.CREATE_ARTICLE_SUCCESS, data: res.data});
    }, error => {
      dispatch({type: ArticleConst.CREATE_ARTICLE_REQUEST, error});
    });
  }
}

export function page() {
  return dispatch => {
    dispatch({type: ArticleConst.PAGE_ARTICLE_REQUEST});

    api({url: `article/`, method: 'get'}).then(res => {
      dispatch({type: ArticleConst.PAGE_ARTICLE_SUCCESS, data: res.data});
    }, error => {
      dispatch({type: ArticleConst.PAGE_ARTICLE_REQUEST, error});
    });
  }
}