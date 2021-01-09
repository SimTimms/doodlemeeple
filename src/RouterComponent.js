import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import themeDesigner from './theme';
import AuthRoutes from './routes/routesAuth';
import PublicRoutes from './routes/routesPublic';

function RouterComponent(props) {
  const authToken = Cookies.get('token');
  const theme = themeDesigner();

  const httpLink = createHttpLink({
    uri: process.env.REACT_APP_API,
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: authToken ? `Bearer ${authToken}` : '',
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({ addTypename: false }),
  });
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        {authToken && <AuthRoutes props={props} theme={theme} />}
        {!authToken && <PublicRoutes props={props} theme={theme} />}
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default withRouter(RouterComponent);
