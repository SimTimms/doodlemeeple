import React from 'react';
import { Query } from 'react-apollo';
import { JOBS_BY_USER } from './data';
import { Grid } from '../../../../components';
import { randomKey } from '../../../../utils';
import { JobProfile } from '../../../../widgets/job/profileCard';

export default function JobAdsPage({ userId }) {
  return (
    <Grid>
      <Query
        query={JOBS_BY_USER}
        variables={{ userId }}
        fetchPolicy="network-only"
      >
        {({ data }) => {
          if (data)
            return data.jobMany.map((job) => (
              <JobProfile job={job} key={`jobWidget_${randomKey()}`} />
            ));
          return null;
        }}
      </Query>
    </Grid>
  );
}
