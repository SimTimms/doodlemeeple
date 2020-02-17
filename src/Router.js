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
        <Route
          path="/app/:page/:pathParam?"
          render={props => <AppLayout {...props} />}
        />
        <Route
          path="/messages/:page/:pathParam?"
          render={props => <MessagesLayout {...props} />}
        />
        <Route
          path="/roles/:page/:pathParam?"
          render={props => <RolesLayout {...props} />}
        />
        <Route
          path="/message/:page/:pathParam?"
          render={props => <MessageLayout {...props} />}
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
