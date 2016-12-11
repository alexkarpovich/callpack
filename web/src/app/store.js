import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {routerReducer} from 'react-router-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {reducer as formReducer} from 'redux-form';

const reducers = {
  form: formReducer,
};

const logger = createLogger();
const reducer = combineReducers({...reducers, routing: routerReducer});

const finalCreateStore = compose(applyMiddleware(
  thunk,
  logger,
))(createStore);

export default finalCreateStore(reducer, {});
