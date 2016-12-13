import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import auth from './reducers/auth';

const reducers = {
  form: formReducer,
  auth,
};

const logger = createLogger();
const reducer = combineReducers({...reducers, routing: routerReducer});

export default browserHistory => {
  const finalCreateStore = compose(applyMiddleware(
    routerMiddleware(browserHistory),
    thunk,
    logger,
  ))(createStore);

  return finalCreateStore(reducer, {});
};
