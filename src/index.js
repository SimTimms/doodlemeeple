import React from 'react';
import ReactDOM from 'react-dom';
import RouterComponent from './RouterComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactGA from 'react-ga';

const trackingId = 'UA-193139614'; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <Router>
    <RouterComponent />
  </Router>,
  document.getElementById('root')
);

//serviceWorker.unregister();
