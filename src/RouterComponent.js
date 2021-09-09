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
import ProfileRoutes from './routes/routesProfile';
import { MenuContext } from './context';

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
  const [pageValues, setPageValues] = React.useState({
    primaryPage: 'home',
    homePage: {
      primaryPage: 'community',
      secondaryPage: 'dashboard',
      kickstarterId: null,
      myPostId: null,
      gameId: null,
      userId: null,
    },
    workPage: {
      primaryPage: 'my_work',
      secondaryPage: 'active_work',
      jobId: null,
      inviteId: null,
      contractId: null,
    },
    jobPage: {
      primaryPage: 'job_board',
      secondaryPage: 'dashboard',
      jobId: null,
      contractId: null,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <MenuContext.Provider
          value={{
            primaryPage: pageValues.primaryPage,
            homePage: {
              primaryPage: pageValues.homePage.primaryPage,
              secondaryPage: pageValues.homePage.secondaryPage,
              kickstarterId: pageValues.homePage.kickstarterId,
              myPostId: pageValues.homePage.myPostId,
              gameId: pageValues.homePage.gameId,
              userId: pageValues.homePage.userId,
            },
            jobPage: {
              primaryPage: pageValues.jobPage.primaryPage,
              secondaryPage: pageValues.jobPage.secondaryPage,
              jobId: pageValues.jobPage.jobId,
              contractId: pageValues.jobPage.contractId,
            },
            workPage: {
              primaryPage: pageValues.workPage.primaryPage,
              secondaryPage: pageValues.workPage.secondaryPage,
              jobId: pageValues.workPage.jobId,
              inviteId: pageValues.workPage.inviteId,
              contractId: pageValues.workPage.contractId,
            },
            updateMenuContext: setPageValues,
          }}
        >
          {authToken && <AuthRoutes props={props} theme={theme} />}
        </MenuContext.Provider>
        <ProfileRoutes props={props} />
        <MenuContext.Provider
          value={{
            primaryPage: pageValues.primaryPage,
            homePage: {
              primaryPage: pageValues.homePage.primaryPage,
              secondaryPage: pageValues.homePage.secondaryPage,
              kickstarterId: pageValues.homePage.kickstarterId,
              myPostId: pageValues.homePage.myPostId,
              gameId: pageValues.homePage.gameId,
              userId: pageValues.homePage.userId,
            },
            jobPage: {
              primaryPage: pageValues.jobPage.primaryPage,
              secondaryPage: pageValues.jobPage.secondaryPage,
              jobId: pageValues.jobPage.jobId,
              contractId: pageValues.jobPage.contractId,
            },
            workPage: {
              primaryPage: pageValues.workPage.primaryPage,
              secondaryPage: pageValues.workPage.secondaryPage,
              jobId: pageValues.workPage.jobId,
              inviteId: pageValues.workPage.inviteId,
              contractId: pageValues.workPage.contractId,
            },
            updateMenuContext: setPageValues,
          }}
        >
          {!authToken && <PublicRoutes props={props} theme={theme} />}
        </MenuContext.Provider>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default withRouter(RouterComponent);
