import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import themeDesigner from './theme';
//import RoutesAuth from './routes/routesAuth';
import PublicRoutes from './routes/routesPublic';

function RouterComponent(props) {
  const authToken = null;
  //const authToken = Cookies.get('token');
  const theme = themeDesigner();

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: authToken ? `Bearer ${authToken}` : '',
      },
    };
  });

  const client = new ApolloClient({
    uri: process.env.REACT_APP_API,
    cache: new InMemoryCache(),
  });

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        {authToken}
        {/*authToken && <RoutesAuth props={props} theme={theme} />*/}
        {!authToken && <PublicRoutes props={props} theme={theme} />}
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default withRouter(RouterComponent);
