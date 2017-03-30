import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Timeline from './Timeline';
import './index.css';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Timeline } />
    </Route>
  </Router>,
  document.getElementById('root')
);
