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
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
//import * as serviceWorker from './serviceWorker';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

function RouterComponent(props) {
  const token = Cookies.get('token');

  const wsLink = new WebSocketLink({
    uri: `${process.env.REACT_APP_API_SHORT}`,
    options: {
      reconnect: true,
      connectionParams: {
        Authorization: `Bearer ${token}`,
        authToken: token,
      },
    },
  });

  const httpLink = createHttpLink({
    uri: process.env.REACT_APP_API,
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const link = split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    wsLink,
    authLink.concat(httpLink),
  );

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache({ addTypename: false }),
  });

  const authToken = Cookies.get('token');
  const theme = createMuiTheme({
    typography: {
      fontFamily: ['Quicksand'].join(','),
      fontSize: 12,
    },
  });
  theme.palette.primary = {
    ...theme.palette.primary,
    main: '#57499e',
    light: '#8474d3',
    dark: '#433878',
  };
  theme.palette.secondary = {
    ...theme.palette.secondary,
    main: '#34BEB1',
    light: '#79D1CB',
    dark: '#248c82',
  };
  theme.palette.error = {
    ...theme.palette.error,
    main: '#ff4081',
    dark: '#d81b60',
  };
  theme.typography.h1 = { fontFamily: ['Quicksand'].join(','), fontSize: 30 };
  theme.typography.h2 = { fontFamily: ['Quicksand'].join(','), fontSize: 18 };
  theme.typography.button = {
    fontFamily: ['Quicksand'].join(','),
    fontSize: 14,
    fontWeight: 900,
    color: theme.palette.primary.main,
    borderRadius: 4,
  };

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Switch>
          {authToken && (
            <Route
              path="/app/:page/:pathParam?/:pathParam2?"
              render={(props) => <AppLayout {...props} theme={theme} />}
            />
          )}
          {authToken && (
            <Route
              path="/preview/:pathParam?"
              render={(props) => (
                <PreviewLayout {...props} theme={theme} publicView={false} />
              )}
            />
          )}
          {authToken && (
            <Route
              path="/messages/:page/:pathParam?"
              render={(props) => <MessagesLayout {...props} theme={theme} />}
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
          <Route
            path="/public-preview/:pathParam?"
            render={(props) => (
              <PreviewLayout {...props} theme={theme} publicView={true} />
            )}
          />
          <Route path="/about">
            <AboutLayoutFrame />
          </Route>
          <Route
            path="/:page/:token"
            render={(props) => <PublicLayout {...props} />}
          />
          <Route
            path="/:page"
            render={(props) => <PublicLayout {...props} />}
          />
          <Route path="/" render={(props) => <PublicLayout {...props} />} />
        </Switch>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default withRouter(RouterComponent);
