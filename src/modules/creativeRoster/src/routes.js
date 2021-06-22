import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CreativeRosterHome } from './views';

export default function CreativeRosterRoutes({ history, pathParams }) {
  return (
    <Switch>
      <Route
        path="/creative-roster"
        exact
        render={(props) => (
          <CreativeRosterHome
            history={history}
            groupIn={pathParams.pathParam1 && pathParams.pathParam1}
          />
        )}
      />
    </Switch>
  );
}
