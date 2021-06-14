import React from 'react';
import AppLayout from '../../layouts/app';
import { Route, Switch, Redirect } from 'react-router-dom';
import PreviewLayout from '../../layouts/preview';
import { JobRoutes } from '../../modules/jobs';
import { Query } from 'react-apollo';
import { PROFILE } from '../../data/queries';
import logout from '../../utils/logout';
import { gql, useQuery } from '@apollo/client';

export default function RoutesAuth({ theme, props: { ...props } }) {
  const { loading, data } = useQuery(PROFILE);
  const [profile, setProfile] = React.useState(null);
  const { history } = props;

  return (
    <div>
      <Switch>
        {JobRoutes(props)}
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
        />
      </Switch>
      <Query
        query={PROFILE}
        onCompleted={(data) => {
          setProfile(data.profile);
        }}
        fetchPolicy="network-only"
        onError={(error) => {
          logout(history);
        }}
      >
        {({ data }) => {
          return null;
        }}
      </Query>
    </div>
  );
}
