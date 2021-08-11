import React from 'react';
import { Query } from 'react-apollo';
import { WORK_HISTORY } from './data';
import { Column, JobComponent, Divider } from '../../../../../components';

export default function JobHistory() {
  return (
    <Query query={WORK_HISTORY} fetchPolicy="network-only">
      {({ data }) => {
        const workHistory = data
          ? data.workHistory.map((work, index) => {
              return <JobComponent key={`work_${index}`} job={work} />;
            })
          : null;

        return workHistory ? (
          <Column a="center" j="flex-start">
            <Divider />
            {workHistory}
          </Column>
        ) : null;
      }}
    </Query>
  );
}
