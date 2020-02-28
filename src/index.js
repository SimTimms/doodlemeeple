import React from 'react';
import ReactDOM from 'react-dom';
import RouterComponent from './RouterComponent';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
//import * as serviceWorker from './serviceWorker';
import Cookies from 'js-cookie';
import { BrowserRouter as Router } from 'react-router-dom';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API,
});

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <RouterComponent />
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
);

//serviceWorker.unregister();
