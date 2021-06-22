import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage, PasswordResetPage } from './views';
import { FooterWrapper, NavBar, RootWrapper } from './views/components/';

export default function LoginRoutes(props) {
  return (
    <RootWrapper>
      <NavBar history={props.history} />
      <Switch>
        <Route
          path="/login"
          exact
          render={(props) => <LoginPage history={props.history} />}
        />
        <Route
          path="/new-password"
          exact
          render={(props) => (
            <PasswordResetPage
              history={props.history}
              forwardTo={props.location}
            />
          )}
        />
      </Switch>
      <FooterWrapper />
    </RootWrapper>
  );
}
