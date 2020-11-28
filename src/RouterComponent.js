import React from 'react';
import { AboutLayout, StripeSuccess } from './layouts';
import AppLayout from './layouts/app';
import PreviewLayout from './layouts/preview';
import { PublicLayout } from './layouts/public';
import MessagesLayout from './layouts/messages';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
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

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_xjjTUtg7riy4i2F9NYvuSkmF00fMcYOlZk');

function RouterComponent(props) {
  const token = Cookies.get('token');

  /*
  const wsLink = new WebSocketLink({
    uri: `${process.env.REACT_APP_API_SHORT}`,
    options: {
      reconnect: false,
      connectionParams: {
        Authorization: `Bearer ${token}`,
        authToken: token,
      },
    },
  });
*/
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
    //wsLink,
    authLink.concat(httpLink)
  );

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
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
    light: '#b5a8f7',
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
  theme.typography.h1 = {
    fontFamily: ['Quicksand'].join(','),
    fontSize: 38,
    margin: 0,
    fontWeight: 200,
  };
  theme.typography.h2 = {
    fontFamily: ['Quicksand'].join(','),
    fontSize: 32,
    margin: 0,
    fontWeight: 200,
  };
  theme.typography.h3 = {
    fontFamily: ['Quicksand'].join(','),
    fontSize: 28,
    margin: 0,
    fontWeight: 200,
  };
  theme.typography.h4 = {
    fontFamily: ['Quicksand'].join(','),
    fontSize: 24,
    margin: 0,
    fontWeight: 200,
  };
  theme.typography.h5 = {
    fontFamily: ['Quicksand'].join(','),
    fontSize: 20,
    margin: 0,
    fontWeight: 200,
  };
  theme.typography.h6 = {
    fontFamily: ['Quicksand'].join(','),
    fontSize: 16,
    margin: 0,
    fontWeight: 200,
  };
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
        <Elements stripe={stripePromise}>
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
            {/*authToken && (
              <Route
                path="/roles/:page/:pathParam?"
                render={(props) => <RolesLayout {...props} theme={theme} />}
              />
            )}
             {( <Route
                path="/message/:page/:pathParam?"
                render={(props) => <MessageLayout {...props} theme={theme} />}
              />
            )*/}
            <Route
              path="/public-preview/:pathParam?"
              render={(props) => (
                <PreviewLayout {...props} theme={theme} publicView={true} />
              )}
            />
            <Route
              path="/onboard-user/refresh/"
              render={(props) => (
                <StripeSuccess {...props} history={props.history} />
              )}
            />

            <Route path="/stripe-success">
              <StripeSuccess history={props.history} />
            </Route>
            <Route path="/about">
              <AboutLayout theme={theme} />
            </Route>
            <Route
              path="/:page/:token"
              render={(props) => <PublicLayout {...props} theme={theme} />}
            />
            <Route
              path="/:page"
              render={(props) => <PublicLayout {...props} theme={theme} />}
            />
            <Route
              path="/"
              render={(props) => <PublicLayout {...props} theme={theme} />}
            />
          </Switch>
        </Elements>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default withRouter(RouterComponent);
