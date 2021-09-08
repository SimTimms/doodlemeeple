import React from 'react';
import { Query } from 'react-apollo';
import { JOBS } from '../../../../../../data/queries';
import {
  Column,
  LoadIcon,
  JobComponent,
  Divider,
  Grid,
} from '../../../../../../components';
import { Typography } from '@material-ui/core';

export default function JobPosts() {
  return (
    <Query
      query={JOBS}
      fetchPolicy="network-only"
      variables={{
        status: ['accepted', 'draft', 'submitted', 'totalDecline', ''],
      }}
    >
      {({ data, loading }) => {
        return loading ? (
          <LoadIcon />
        ) : data ? (
          data.jobsByUser.length === 0 ? (
            <Column>
              <Divider />
              <Typography>
                Nothing Here - Click "Create Ad" to build a job post
              </Typography>
            </Column>
          ) : (
            <Grid cols={3}>
              <Divider />
              {data.jobsByUser.map((job, index) => {
                return (
                  job.submitted && (
                    <JobComponent key={`project_${index}`} job={job} />
                  )
                );
              })}
            </Grid>
          )
        ) : null;
      }}
    </Query>
  );
}
