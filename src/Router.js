import React from 'react';
import { AboutLayoutFrame } from './layouts';
import AppLayout from './layouts/app';
import { PublicLayout } from './layouts/public';
import MessagesLayout from './layouts/messages';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import MessageLayout from './layouts/message';
import RolesLayout from './layouts/roles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cookies from 'js-cookie';

function App() {
  const authToken = Cookies.get('token');
  const theme = createMuiTheme({
    typography: {
      fontFamily: ['Quicksand'].join(','),
      fontSize: 12,
    },
  });

  theme.typography.h1 = { fontFamily: ['Quicksand'].join(','), fontSize: 30 };
  theme.typography.h2 = { fontFamily: ['Quicksand'].join(','), fontSize: 18 };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          {authToken && (
            <Route
              path="/app/:page/:pathParam?"
              render={props => <AppLayout {...props} />}
            />
          )}
          {authToken && (
            <Route
              path="/messages/:page/:pathParam?"
              render={props => <MessagesLayout {...props} />}
            />
          )}
          {authToken && (
            <Route
              path="/roles/:page/:pathParam?"
              render={props => <RolesLayout {...props} />}
            />
          )}
          {authToken && (
            <Route
              path="/message/:page/:pathParam?"
              render={props => <MessageLayout {...props} />}
            />
          )}
          <Route path="/about">
            <AboutLayoutFrame />
          </Route>
          <Route
            path="/:page/:token"
            render={props => <PublicLayout {...props} />}
          />
          <Route path="/:page" render={props => <PublicLayout {...props} />} />
          <Route path="/" render={props => <PublicLayout {...props} />} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
