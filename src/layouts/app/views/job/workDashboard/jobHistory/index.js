import React from 'react';
import { Query } from 'react-apollo';
import { JOB_HISTORY } from './data';
import {
  Column,
  FieldTitleDashboard,
  Divider,
  JobComponent,
} from '../../../../../../components';

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
            <FieldTitleDashboard name="Job History" inline={false} a="l" />
            <Divider />
            <div style={{ width: '100%', opacity: 0.4 }}>{jobHistory}</div>
          </Column>
        ) : null;
      }}
    </Query>
  );
}
