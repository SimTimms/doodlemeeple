import React from 'react';
import { Query } from 'react-apollo';
import { JOB_HISTORY } from './data';
import { Column, JobComponent, Divider } from '../../../../../../components';

export default function JobHistory() {
  return (
    <Query query={JOB_HISTORY} fetchPolicy="network-only">
      {({ data }) => {
        const jobHistory = data
          ? data.jobHistory.map((job, index) => {
              return <JobComponent key={`project_${index}`} job={job} />;
            })
          : null;

        return jobHistory ? (
          <Column a="center" j="flex-start">
            <Divider />
            {jobHistory}
          </Column>
        ) : null;
      }}
    </Query>
  );
}
