import React from 'react';
import AppLayout from '../layouts/app';
import { Route, Switch, Redirect } from 'react-router-dom';
import PreviewLayout from '../layouts/preview';
import {
  FeaturedCreativeWidget,
  CreativeRosterWidget,
  FeaturedKickstarters,
  FeaturedCreativeMiniWidget,
  JobDescriptionWidget,
  PublicJobWidget,
} from '../widgets';

export default function AuthRoutes({ theme, props: { ...props } }) {
  return (
    <Switch>
      <Route path="/public-jobs" render={(props) => <PublicJobWidget />} />
      <Route
        path="/featured-creative-widget"
        render={(props) => <FeaturedCreativeWidget />}
      />
      <Route
        path="/featured-creative-mini-widget"
        render={(props) => <FeaturedCreativeMiniWidget />}
      />
      <Route
        path="/creative-roster-widget"
        render={(props) => <CreativeRosterWidget />}
      />
      <Route
        path="/featured-kickstarters"
        render={(props) => <FeaturedKickstarters />}
      />

      <Route
        path="/job-description/:jobId"
        render={(props) => (
          <JobDescriptionWidget jobId={props.match.params.jobId} />
        )}
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
                to={`/app/new-job-post/${props.match.params.pathParam}`}
              />
            )}
          />
        )}
      />

      <Route path="/" exact render={() => <Redirect push to="/app/home" />} />
    </Switch>
  );
}
