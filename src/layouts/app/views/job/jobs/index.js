import React from 'react';
import { Slide, Icon } from '@material-ui/core';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { JOBS } from '../../../../../data/queries';
import {
  Column,
  LoadIcon,
  IconButton,
  FieldTitleDashboard,
  Divider,
  JobComponent,
} from '../../../../../components';
import CreatorJobMenu from './creatorJobMenu';

export default function Jobs({ history, theme }) {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(true);
  const [tabNbr, setTabNbr] = React.useState(1);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <CreatorJobMenu tabNbr={tabNbr} setTabNbr={setTabNbr} />
        {tabNbr === 1 && (
          <Column w={600}>
            <Divider />
            <IconButton
              title="Create a Brief"
              onClickEvent={() => {
                history.push(`/app/edit-job/new`);
              }}
              icon="add"
            />
            <Column a="center" j="flex-start">
              {loading && <LoadIcon />}
              <Query
                query={JOBS}
                fetchPolicy="network-only"
                variables={{ status: ['draft', 'submitted', 'paid'] }}
                onCompleted={() => {
                  setLoading(false);
                }}
              >
                {({ data }) => {
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

                  return activeJobs ? (
                    activeJobs.length > 0 ? (
                      <Column a="center" j="flex-start">
                        <Divider />
                        {activeJobs}
                      </Column>
                    ) : null
                  ) : null;
                }}
              </Query>
            </Column>
            <Column a="center" j="flex-start">
              {loading && <LoadIcon />}
              <Query
                query={JOBS}
                fetchPolicy="network-only"
                variables={{ status: [''] }}
                onCompleted={() => {
                  setLoading(false);
                }}
              >
                {({ data }) => {
                  const activeJobs = data
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

                  return activeJobs ? (
                    activeJobs.length > 0 ? (
                      <Column a="center" j="flex-start">
                        <Divider />
                        <FieldTitleDashboard
                          name="Drafts"
                          inline={false}
                          a="l"
                        />
                        <Divider />
                        {activeJobs}
                      </Column>
                    ) : null
                  ) : null;
                }}
              </Query>
            </Column>
          </Column>
        )}
        {tabNbr === 2 && (
          <Column w={600}>
            <Column a="center" j="flex-start">
              {loading && <LoadIcon />}
              <Query
                query={JOBS}
                fetchPolicy="network-only"
                variables={{ status: ['closed', 'complete'] }}
                onCompleted={() => {
                  setLoading(false);
                }}
              >
                {({ data }) => {
                  const activeJobs = data
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

                  return activeJobs ? (
                    activeJobs.length > 0 ? (
                      <Column a="center" j="flex-start">
                        <Divider />
                        <FieldTitleDashboard
                          name="Closed"
                          inline={false}
                          a="l"
                        />
                        <Divider />
                        <div style={{ width: '100%', opacity: 0.4 }}>
                          {activeJobs}
                        </div>
                      </Column>
                    ) : null
                  ) : null;
                }}
              </Query>
            </Column>
          </Column>
        )}
      </div>
    </Slide>
  );
}
