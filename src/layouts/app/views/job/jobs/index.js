import React, { useState } from 'react';
import Slide from '@material-ui/core/Slide';
import { JobComponent, EmptyJobComponent } from './components/jobComponent';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { JOBS } from '../../../../../data/queries';
import {
  Column,
  LoadIcon,
  FieldTitleDashboard,
  Divider,
} from '../../../../../components';

export default function Jobs({ history }) {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(true);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <Column a="center" j="flex-start">
          <Divider />
          <FieldTitleDashboard name="Active Projects" inline={false} a="c" />
          <Divider />
          {loading && <LoadIcon />}
          <Query
            query={JOBS}
            fetchPolicy="network-only"
            variables={{ status: 'paid' }}
            onCompleted={() => setLoading(false)}
          >
            {({ data }) => {
              return data
                ? data.jobsByUser.map((job, index) => {
                    return (
                      <JobComponent
                        key={`project_${index}`}
                        job={job}
                        game={job.game ? job.game : { name: '' }}
                        history={history}
                      />
                    );
                  })
                : null;
            }}
          </Query>
          <Divider />
          <FieldTitleDashboard name="Waiting Payment" inline={false} a="c" />
          <Divider />
          {loading && <LoadIcon />}
          <Query
            query={JOBS}
            fetchPolicy="network-only"
            variables={{ status: 'accepted' }}
            onCompleted={() => setLoading(false)}
          >
            {({ data }) => {
              return data
                ? data.jobsByUser.map((job, index) => {
                    return (
                      <JobComponent
                        key={`project_${index}`}
                        job={job}
                        game={job.game ? job.game : { name: '' }}
                        history={history}
                      />
                    );
                  })
                : null;
            }}
          </Query>
          <Divider />
          <FieldTitleDashboard name="Invites" inline={false} a="c" />{' '}
          <Divider />
          <Query
            query={JOBS}
            fetchPolicy="network-only"
            variables={{ status: 'submitted' }}
            onCompleted={() => setLoading(false)}
          >
            {({ data }) => {
              return data
                ? data.jobsByUser.map((job, index) => {
                    return (
                      <JobComponent
                        key={`project_${index}`}
                        job={job}
                        game={job.game ? job.game : { name: '' }}
                        history={history}
                      />
                    );
                  })
                : null;
            }}
          </Query>
          <EmptyJobComponent key={`project_empty`} />
        </Column>
      </div>
    </Slide>
  );
}
