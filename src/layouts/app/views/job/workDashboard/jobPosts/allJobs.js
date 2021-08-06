import React from 'react';
import { Query } from 'react-apollo';
import { JOBS } from '../../../../../../data/queries';
import { Column, LoadIcon, JobComponent } from '../../../../../../components';

export default function AllJobs({ setJobId }) {
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
          <Column a="center" j="flex-start">
            {data.jobsByUser.map((job, index) => {
              return (
                job.submitted && (
                  <JobComponent
                    key={`project_${index}`}
                    job={job}
                    setJobId={setJobId}
                  />
                )
              );
            })}
          </Column>
        ) : null;
      }}
    </Query>
  );
}
