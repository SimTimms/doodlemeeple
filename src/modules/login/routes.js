import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage, PasswordForgot } from './views';
import {
  Footer,
  PublicFooterMenu,
  StyledNavBar,
} from './components/sharedComponents';
import { styles } from './styles';

export default function LoginRoutes(props) {
  const classes = styles();

  return (
    <div className={classes.root}>
      <StyledNavBar
        open={false}
        history={props.history}
        center={true}
        sidebarMissing={true}
      >
        <img
          src={process.env.REACT_APP_DEVICE}
          style={{ maxHeight: 40 }}
          alt={`${process.env.REACT_APP_COMPANY_PUBLIC_NAME} Logo`}
        />
      </StyledNavBar>
      <Switch>
        <Route
          path="/login"
          exact
          render={(props) => (
            <LoginPage history={props.history} forwardTo={props.location} />
          )}
        />
        <Route
          path="/new-password"
          exact
          render={(props) => (
            <PasswordForgot
              history={props.history}
              forwardTo={props.location}
            />
          )}
        />
      </Switch>
      <Footer>
        <PublicFooterMenu />
      </Footer>
    </div>
  );
}
