import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import { createHistory } from 'history';

import config from './config';
import reducers from './reducers';

import App from './containers/app';
import Authentication from './containers/authentication';

const browserHistory = useRouterHistory(createHistory)({basename: '/'});
const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routerReducer,
}));
const store = createStore(
  reducer,
  compose(
    applyMiddleware(routerMiddleware(browserHistory)), //, thunk),
  )
);
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <IntlProvider locale="en" {...config.intl}>
      <Authentication>
        <Router history={history}>
          <Route path="/" component={App}></Route>
        </Router>
      </Authentication>
    </IntlProvider>
  </Provider>,
  document.getElementById('app')
);
