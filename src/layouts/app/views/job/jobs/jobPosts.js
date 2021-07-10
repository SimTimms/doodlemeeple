import React from 'react';
import { Query } from 'react-apollo';
import { JOBS } from '../../../../../data/queries';
import {
  Column,
  LoadIcon,
  Divider,
  JobComponent,
  DividerWithBorder,
  IconButton,
} from '../../../../../components';

export default function JobPosts({ history }) {
  return (
    <Column w={600}>
      <IconButton
        title="Create a Job"
        onClickEvent={() => {
          history.push(`/app/edit-job/new`);
        }}
        icon="add"
        color="primary"
      />
      <DividerWithBorder />
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
            const activeJobs = data
              ? data.jobsByUser.map((job, index) => {
                  return (
                    job.submitted && (
                      <JobComponent
                        key={`project_${index}`}
                        job={job}
                        game={job.game ? job.game : { name: '' }}
                        history={history}
                      />
                    )
                  );
                })
              : null;

            return loading ? (
              <LoadIcon />
            ) : activeJobs ? (
              activeJobs.length > 0 ? (
                <Column a="center" j="flex-start">
                  {activeJobs}
                </Column>
              ) : null
            ) : null;
          }}
        </Query>
      </Column>
    </Column>
  );
}
