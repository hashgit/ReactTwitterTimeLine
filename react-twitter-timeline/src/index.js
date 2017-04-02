import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Timeline from './Timeline';
import './index.css';
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./Login";
import { syncHistoryWithStore } from 'react-router-redux';

const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Timeline } />
        <Route path="timeline" component={ Timeline } />
        <Route path="login" component={ Login } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
