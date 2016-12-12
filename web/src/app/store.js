import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import {reduxReactRouter, browserHistory} from 'react-router';
import {syncHistory} from 'react-router-redux';
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


const finalCreateStore = compose(applyMiddleware(
  thunk,
  logger,
))(createStore);

export default finalCreateStore(reducer, {});
