import React from 'react';
import { AboutLayoutFrame } from './layouts';
import AppLayout from './layouts/app';
import { PublicLayout } from './layouts/public';
import MessagesLayout from './layouts/messages';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import MessageLayout from './layouts/message';
import RolesLayout from './layouts/roles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
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
          <Route path="/:page" render={props => <PublicLayout {...props} />} />
          <Route path="/">
            <PublicLayout />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
