import React from 'react';
import {Provider} from 'react-redux';
import {IntlProvider} from 'react-intl';
import {Router, Route, IndexRoute, useRouterHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux'
import {createHistory} from 'history';

import config from './config';
import configurateStore from './store';
import AccessControl from './utils/access-control';
import InitContainer from './containers/init';
import AppContainer from './containers/app';
import LoggedinContainer from './containers/loggedin';
import GeneralContainer from './containers/general';
import SignupContainer from './containers/signup';
import SigninContainer from './containers/signin';
import ArticleListContainer from './containers/loggedin/article-list';
import ArticleCreateContainer from './containers/loggedin/article-create';


const browserHistory = useRouterHistory(createHistory)({basename: '/'});
const store = configurateStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);
const accessControl = new AccessControl(store);

export default (
  <Provider store={store}>
    <IntlProvider locale="en" {...config.intl}>
      <InitContainer>
        <Router history={history}>
          <Route path="/" component={AppContainer}>
            <IndexRoute component={GeneralContainer} />
            <Route path="signup" component={SignupContainer} />
            <Route path="signin" component={SigninContainer} />

            <Route onEnter={accessControl.isLoggedIn}>
              <Route path="article" component={LoggedinContainer}>
                <IndexRoute component={ArticleListContainer} />
                <Route path="create" component={ArticleCreateContainer} />
              </Route>
            </Route>
          </Route>
        </Router>
      </InitContainer>
    </IntlProvider>
  </Provider>
);
