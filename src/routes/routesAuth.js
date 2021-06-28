import React from 'react';
import AppLayout from '../layouts/app';
import { Route, Switch, Redirect } from 'react-router-dom';
import PreviewLayout from '../layouts/preview';
import { FeaturedCreativeWidget, CreativeRosterWidget } from '../widgets';

export default function AuthRoutes({ theme, props: { ...props } }) {
  return (
    <Switch>
      <Route
        path="/featured-creative-widget"
        render={(props) => <FeaturedCreativeWidget />}
      />
      <Route
        path="/creative-roster-widget"
        render={(props) => <CreativeRosterWidget />}
      />
      <Route
        path="/app/:page/:pathParam?/:pathParam2?"
        render={(props) => <AppLayout {...props} theme={theme} />}
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
      <Route path="/" exact render={() => <Redirect push to="/app/tasks" />} />
    </Switch>
  );
}
