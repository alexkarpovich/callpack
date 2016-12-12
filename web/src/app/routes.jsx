import React from 'react';
import {Provider} from 'react-redux';
import {IntlProvider} from 'react-intl';
import {Router, Route, IndexRoute, useRouterHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux'
import {createHistory} from 'history';

import config from './config';
import store from './store';
import AccessControl from './utils/access-control';
import AppContainer from './containers/app';
import LoggedinContainer from './containers/loggedin';
import GeneralContainer from './containers/general';
import SignupContainer from './containers/signup';


const browserHistory = useRouterHistory(createHistory)({basename: '/'});
const history = syncHistoryWithStore(browserHistory, store);
const accessControl = new AccessControl(store);

export default (
  <Provider store={store}>
    <IntlProvider locale="en" {...config.intl}>
      <Router history={history}>
        <Route path="/" component={AppContainer}>
          <IndexRoute component={GeneralContainer} />
          <Route path="/signup" component={SignupContainer} />

          <Route path="/" component={LoggedinContainer} onEnter={accessControl.isLoggedIn}>

          </Route>
        </Route>
      </Router>
    </IntlProvider>
  </Provider>
);
