import React from 'react';
import { PublicLayoutFrame, AboutLayoutFrame } from './layouts';
import AppLayout from './layouts/app';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/app/:page/:pathParam?"
          render={props => <AppLayout {...props} />}
        />

        <Route path="/about">
          <AboutLayoutFrame />
        </Route>
        <Route
          path="/:page"
          render={props => <PublicLayoutFrame {...props} />}
        />

        <Route path="/">
          <PublicLayoutFrame />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
