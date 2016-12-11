import React from 'react';
import {Provider} from 'react-redux';
import {IntlProvider} from 'react-intl';
import {Router, Route, IndexRoute, useRouterHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux'
import {createHistory} from 'history';

import config from './config';
import store from './store';
import AuthContainer from './containers/authentication';
import AppContainer from './containers/app';
import GeneralContainer from './containers/general';
import SignupContainer from './containers/signup';


const browserHistory = useRouterHistory(createHistory)({basename: '/'});
const history = syncHistoryWithStore(browserHistory, store);

export default (
  <Provider store={store}>
    <IntlProvider locale="en" {...config.intl}>
      <AuthContainer>
        <Router history={history}>
          <Route path="/" component={AppContainer}>
            <IndexRoute component={GeneralContainer} />
            <Route path="/signup" component={SignupContainer} />
          </Route>
        </Router>
      </AuthContainer>
    </IntlProvider>
  </Provider>
);
