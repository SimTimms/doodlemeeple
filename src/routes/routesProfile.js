import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PreviewLayout from '../layouts/preview';

export default function ProfileRoutes({ theme, props: { ...props } }) {
  return (
    <Switch>
      <Route
        path="/user-profile/:pathParam?"
        render={(props) => (
          <PreviewLayout {...props} theme={theme} publicView={true} />
        )}
      />
    </Switch>
  );
}
