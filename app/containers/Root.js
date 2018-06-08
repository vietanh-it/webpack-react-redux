import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../components/App';

export default function Root({ store, history }) {
  return (
    <Provider store={ store }>
      <div>
        <BrowserRouter history={ history }>
          <Switch>
            <Route path="/" component={ App } />
            <Route path="/detail" component={ App } />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
