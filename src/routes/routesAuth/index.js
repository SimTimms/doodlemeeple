import React, { useEffect } from 'react';
//import AppLayout from '../../layouts/app';
import { Switch } from 'react-router-dom';
//import PreviewLayout from '../../layouts/preview';
import { JobRoutes } from '../../modules/jobs';
import { DashboardRoutes } from '../../modules/dashboards';
//import { Query } from 'react-apollo';
import { PROFILE } from '../../data/queries';
import logout from '../../utils/logout';
import { useQuery } from '@apollo/client';

export default function RoutesAuth({ theme, props: { ...props } }) {
  const [profile, setProfile] = React.useState(null);
  const { history } = props;
  const { loading, error, data } = useQuery(PROFILE, {
    onCompleted({ profile }) {
      setProfile(profile);
    },
    onError(error) {
      console.log(error);
      logout(history);
    },
  });
  return (
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
    </Switch>
  );
}
