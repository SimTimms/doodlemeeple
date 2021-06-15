import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage } from './views';

export default function LoginRoutes(props) {
  console.log(props.location);
  return (
    <Switch>
      <Route
        path="/login"
        exact
        render={(props) => (
          <LoginPage history={props.history} forwardTo={props.location} />
        )}
      />
    </Switch>
  );
}
