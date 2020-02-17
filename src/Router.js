import React from 'react';
import { PublicLayoutFrame, AboutLayoutFrame } from './layouts';
import AppLayout from './layouts/app';
import MessagesLayout from './layouts/messages';
import MessageLayout from './layouts/message';
import RolesLayout from './layouts/roles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" render={props => <PublicLayoutFrame {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
