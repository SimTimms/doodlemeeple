import React from 'react';
import MessagesLayout from '../layouts/messages';
import AppLayout from '../layouts/app';
import { Route, Switch, Redirect } from 'react-router-dom';
import PreviewLayout from '../layouts/preview';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

export default function AuthRoutes({ theme, props: { ...props } }) {
  const stripePromise = loadStripe(
    'pk_test_xjjTUtg7riy4i2F9NYvuSkmF00fMcYOlZk'
  );

  return (
    <Switch>
      <Elements stripe={stripePromise}>
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
          path="/messages/:page/:pathParam?"
          render={(props) => <MessagesLayout {...props} theme={theme} />}
        />
        <Route
          path="/"
          exact
          render={() => <Redirect push to="/app/tasks" />}
        />
      </Elements>
    </Switch>
  );
}
