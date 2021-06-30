import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AboutLayout } from '../layouts';
import PreviewLayout from '../layouts/preview';
import { PublicLayout } from '../layouts/public';
import {
  FeaturedCreativeWidget,
  CreativeRosterWidget,
  KickstarterWidget,
} from '../widgets';

export default function PublicRoutes({ theme, props: { ...props } }) {
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
        path="/featured-kickstarters"
        render={(props) => <KickstarterWidget />}
      />
      <Route
        path="/public-preview/:pathParam?"
        render={(props) => (
          <PreviewLayout {...props} theme={theme} publicView={true} />
        )}
      />
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
  );
}
