import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HistoryContext } from '../imports/sharedContext';
import EditJob from './views';

export default function JobRoutes(props) {
  return (
    <HistoryContext.Consumer>
      {(history) => (
        <Switch>
          <Route
            path="/job/dashboard"
            render={(props) => (
              <div onClick={() => history.push('/job/new')}> Job</div>
            )}
          />
          <Route
            path="/job/new"
            render={(props) => <EditJob>New Job</EditJob>}
          />
        </Switch>
      )}
    </HistoryContext.Consumer>
  );
}
