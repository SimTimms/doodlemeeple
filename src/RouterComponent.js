import React from 'react';
import { AboutLayoutFrame } from './layouts';
import AppLayout from './layouts/app';
import PreviewLayout from './layouts/preview';
import { PublicLayout } from './layouts/public';
import MessagesLayout from './layouts/messages';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import MessageLayout from './layouts/message';
import RolesLayout from './layouts/roles';
import { Switch, Route, withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';

function RouterComponent(props) {
  const authToken = Cookies.get('token');
  const theme = createMuiTheme({
    typography: {
      fontFamily: ['Quicksand'].join(','),
      fontSize: 12,
    },
  });

  theme.typography.h1 = { fontFamily: ['Quicksand'].join(','), fontSize: 30 };
  theme.typography.h2 = { fontFamily: ['Quicksand'].join(','), fontSize: 18 };

  theme.palette.primary = {
    ...theme.palette.primary,
    main: '#57499e',
    light: '#8474d3',
    dark: '#433878',
  };
  theme.palette.secondary = {
    ...theme.palette.secondary,
    main: '#34BEB1',
    light: '#6aebde',
    dark: '#248c82',
  };
  theme.palette.error = {
    ...theme.palette.error,
    main: '#ff4081',
    dark: '#d81b60',
  };

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        {authToken && (
          <Route
            path="/app/:page/:pathParam?"
            render={(props) => <AppLayout {...props} theme={theme} />}
          />
        )}
        {authToken && (
          <Route
            path="/preview/:pathParam?"
            render={(props) => <PreviewLayout {...props} theme={theme} />}
          />
        )}
        {authToken && (
          <Route
            path="/messages/:page/:pathParam?"
            render={(props) => <MessagesLayout {...props} />}
          />
        )}
        {authToken && (
          <Route
            path="/roles/:page/:pathParam?"
            render={(props) => <RolesLayout {...props} />}
          />
        )}
        {authToken && (
          <Route
            path="/message/:page/:pathParam?"
            render={(props) => <MessageLayout {...props} />}
          />
        )}
        <Route path="/about">
          <AboutLayoutFrame />
        </Route>
        <Route
          path="/:page/:token"
          render={(props) => <PublicLayout {...props} />}
        />
        <Route path="/:page" render={(props) => <PublicLayout {...props} />} />
        <Route path="/" render={(props) => <PublicLayout {...props} />} />
      </Switch>
    </ThemeProvider>
  );
}

export default withRouter(RouterComponent);
