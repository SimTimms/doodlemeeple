import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CreativeRosterHome } from './views';
import { HistoryContext } from '../imports/sharedContext';

export default function CreativeRosterRoutes(props) {
  return (
    <HistoryContext.Consumer>
      {(history) => (
        <Switch>
          <Route
            path="/creative-roster/:jobId/:savedArtist?"
            render={(props) => (
              <CreativeRosterHome history={history} {...props} />
            )}
          />
        </Switch>
      )}
    </HistoryContext.Consumer>
  );
}
