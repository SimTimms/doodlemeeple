import React from 'react';
import { PublicLayoutFrame, RegisterLayoutFrame } from './layouts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <RegisterLayoutFrame />
        </Route>
        <Route path="/devlogout">Dev Logout</Route>
        <Route path="/devlogin">Dev Login</Route>
        <Route path="/">
          <PublicLayoutFrame />;
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
