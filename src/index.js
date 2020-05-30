import React from 'react';
import ReactDOM from 'react-dom';
import RouterComponent from './RouterComponent';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <RouterComponent />
  </Router>,
  document.getElementById('root'),
);

//serviceWorker.unregister();
