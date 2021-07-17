import React from 'react';
import { Query } from 'react-apollo';
import { JOBS } from '../../../../../data/queries';
import { Column, LoadIcon, JobComponent } from '../../../../../components';

export default function JobPosts() {
  return (
    <Column w={600} m="10px 0 0 0">
      <Column a="center" j="flex-start">
        <Query
          query={JOBS}
          fetchPolicy="network-only"
          variables={{
            status: [
              'draft',
              'submitted',
              'totalDecline',
              'paid',
              'accepted',
              '',
            ],
          }}
        >
          {({ data, loading }) => {
            return loading ? (
              <LoadIcon />
            ) : data ? (
              <Column a="center" j="flex-start">
                {data.jobsByUser.map((job, index) => {
                  return (
                    job.submitted && (
                      <JobComponent key={`project_${index}`} job={job} />
                    )
                  );
                })}
              </Column>
            ) : null;
          }}
        </Query>
      </Column>
    </Column>
  );
}
