import React from 'react';
import { Query } from 'react-apollo';
import { JOB_HISTORY } from './data';
import {
  Column,
  FieldTitleDashboard,
  Divider,
  JobComponent,
} from '../../../../../../components';

export default function JobHistory({ history, tab }) {
  return (
    <Query
      query={JOB_HISTORY}
      fetchPolicy="network-only"
      variables={{ status: ['closed', 'complete'] }}
    >
      {({ data }) => {
        const activeJobs = data
          ? data.jobHistory.map((job, index) => {
              return (
                <JobComponent
                  key={`project_${index}`}
                  job={job}
                  history={history}
                />
              );
            })
          : null;

        return activeJobs ? (
          activeJobs.length > 0 ? (
            <Column a="center" j="flex-start">
              <Divider />
              <FieldTitleDashboard name="Closed" inline={false} a="l" />
              <Divider />
              <div style={{ width: '100%', opacity: 0.4 }}>{activeJobs}</div>
            </Column>
          ) : null
        ) : null;
      }}
    </Query>
  );
}
