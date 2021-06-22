import React from 'react';
import { useMediaQuery } from '@material-ui/core';

//import AppLayout from '../../layouts/app';
import { Switch, Route } from 'react-router-dom';
//import PreviewLayout from '../../layouts/preview';
import { JobRoutes } from '../../modules/jobs';
import { DashboardRoutes } from '../../modules/dashboards';
//import { Query } from 'react-apollo';
import { PROFILE } from '../../data/queries';
import logout from '../../utils/logout';
import { useQuery } from '@apollo/client';
import { StyledNavBar, ContentTop } from '../../components';
import { ToastContainer } from 'react-toastify';
import { useStyles } from './styles';
import LoggedOut from './views';
import AppDrawer from '../../layouts/menus/appDrawer';
import { ProfileContext, HistoryContext } from '../../context';
import { ProfileAvatarButton } from '../../buttons';
import clsx from 'clsx';
export default function RoutesAuth({ theme, props: { ...props } }) {
  const [profile, setProfile] = React.useState(null);
  const { history } = props;
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');

  const { loading, error, data } = useQuery(PROFILE, {
    onCompleted({ profile }) {
      setProfile(profile);
    },
    onError(error) {
      logout(history);
    },
  });

  return (
    <div className={classes.root}>
      <ToastContainer />
      <ProfileContext.Provider value={profile}>
        <HistoryContext.Provider value={history}>
          <StyledNavBar open={true}>
            {!mobile && <ProfileAvatarButton />}
          </StyledNavBar>
          <AppDrawer
            handleDrawerClose={() => null}
            handleDrawerOpen={() => null}
            open={true}
            activeButton={null}
          />
          <main
            className={clsx({
              [classes.content]: true,
              [classes.contentMobile]: mobile,
            })}
          >
            <ContentTop style={{ width: '100%' }}>
              <Switch>
                {JobRoutes(props)}
                {DashboardRoutes(props)}
                {/*
        <Route
          path="/app/:page/:pathParam1?/:pathParam2?"
          render={(props) => (
            <AppLayout
              {...props}
              theme={theme}
              history={history}
              profile={profile}
              setProfile={setProfile}
            />
          )}
        />
        <Route
          path="/preview/:pathParam?"
          render={(props) => (
            <PreviewLayout {...props} theme={theme} publicView={false} />
          )}
        />
        <Route
          path="/register/:pathParam?"
          render={(props) => (
            <Route
              path="/"
              render={() => (
                <Redirect
                  push
                  to={`/app/edit-job/new/${props.match.params.pathParam}`}
                />
              )}
            />
          )}
        />
        <Route
          path="/public-preview/:pathParam?"
          render={(props) => (
            <PreviewLayout {...props} theme={theme} publicView={false} />
          )}
        />
 
        <Route
          path="/"
          exact
          render={() => <Redirect push to="/app/tasks" />}
        />*/}
                <Route
                  path="/logout"
                  exact
                  render={() => <LoggedOut history={history} />}
                />
              </Switch>
            </ContentTop>
          </main>
        </HistoryContext.Provider>
      </ProfileContext.Provider>
    </div>
  );
}
