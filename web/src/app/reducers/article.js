import {combineReducers} from 'redux';
import ArticleConst from '../constants/article';


function item(state = {}, action) {
    switch(action.type) {
        case ArticleConst.CREATE_ARTICLE_REQUEST:
            return {...state, isFetching: true, error: null};

        case ArticleConst.CREATE_ARTICLE_SUCCESS:
            return {...state, ...action.data, isFetching: false};

        case ArticleConst.CREATE_ARTICLE_FAILURE:
            return {...state, error: action.error, isFetching: false};

        default:
            return state;
    }
}

function page(state = {}, action) {
    switch(action.type) {
        case ArticleConst.PAGE_ARTICLE_REQUEST:
            return {...state, isFetching: true, error: null};

        case ArticleConst.PAGE_ARTICLE_SUCCESS:
            return {...state, ...action.data, isFetching: false, error: null};

        case ArticleConst.PAGE_ARTICLE_FAILURE:
            return {...state, error: action.error, isFetching: false};

        default:
            return state;
    }
}

export default combineReducers({
    item, page,
});