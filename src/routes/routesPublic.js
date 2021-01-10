import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AboutLayout, StripeSuccess } from '../layouts';
import PreviewLayout from '../layouts/preview';
import { PublicLayout } from '../layouts/public';

export default function PublicRoutes({ theme, props: { ...props } }) {
  return (
    <Switch>
      <Route
        path="/public-preview/:pathParam?"
        render={(props) => (
          <PreviewLayout {...props} theme={theme} publicView={true} />
        )}
      />
      <Route
        path="/onboard-user/refresh/"
        render={(props) => <StripeSuccess {...props} history={props.history} />}
      />
      <Route path="/stripe-success">
        <StripeSuccess history={props.history} />
      </Route>
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
