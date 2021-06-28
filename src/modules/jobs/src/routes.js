import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HistoryContext } from '../imports/sharedContext';
import { EditJob, NewJob } from './views';
import PickArtist from '../components/pickArtist';

export default function JobRoutes(props) {
  return (
    <HistoryContext.Consumer>
      {(history) => (
        <Switch>
          <Route
            path="/job/dashboard"
            render={(props) => (
              <div onClick={() => history.push('/job/new')}>Create Job</div>
            )}
          />
          <Route
            path="/job/new"
            render={(props) => <NewJob history={history} />}
          />
          <Route
            path="/job/edit/:jobId"
            render={(props) => <EditJob {...props} history={history} />}
          />
          <Route
            path="/job/pick-artist/:jobId/:creativeId?"
            render={(props) => <PickArtist {...props} history={history} />}
          />
        </Switch>
      )}
    </HistoryContext.Consumer>
  );
}
