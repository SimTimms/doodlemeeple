import React from 'react';
import { Slide, Icon } from '@material-ui/core';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { JOBS } from '../../../../../data/queries';
import {
  Column,
  LoadIcon,
  FieldTitleDashboard,
  MenuButton,
  Divider,
  JobComponent,
} from '../../../../../components';

export default function Jobs({ history, theme }) {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(true);
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <Divider />
        <FieldTitleDashboard
          name="Projects"
          inline={false}
          a="l"
          menu={
            <MenuButton
              text={{
                name: '',
                color: theme.palette.primary.main,
                icon: <Icon>add</Icon>,
                count: 0,
              }}
              onClickEvent={() => {
                history.push(`/app/edit-job/new`);
              }}
            />
          }
        />
        <Column a="center" j="flex-start">
          {loading && <LoadIcon />}
          <Query
            query={JOBS}
            fetchPolicy="network-only"
            variables={{ status: '' }}
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
            variables={{ status: null }}
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
                    <FieldTitleDashboard name="Drafts" inline={false} a="l" />
                    <Divider />
                    {activeJobs}
                  </Column>
                ) : null
              ) : null;
            }}
          </Query>
        </Column>
      </div>
    </Slide>
  );
}
