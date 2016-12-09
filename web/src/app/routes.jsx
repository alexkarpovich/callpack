import React from 'react';
import {Provider} from 'react-redux';
import {IntlProvider} from 'react-intl';
import {Router, Route, IndexRoute, useRouterHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer, routerMiddleware} from 'react-router-redux'
import {createHistory} from 'history';

import config from './config';
import store from './store';
import Authentication from './containers/authentication';
import App from './containers/app';
import General from './containers/general';


const browserHistory = useRouterHistory(createHistory)({basename: '/'});
const history = syncHistoryWithStore(browserHistory, store);

export default (
  <Provider store={store}>
    <IntlProvider locale="en" {...config.intl}>
      <Authentication>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={General} />
          </Route>
        </Router>
      </Authentication>
    </IntlProvider>
  </Provider>
);
