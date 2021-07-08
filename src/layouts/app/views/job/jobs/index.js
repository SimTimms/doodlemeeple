import React, { useEffect } from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { JOBS } from '../../../../../data/queries';
import {
  Column,
  LoadIcon,
  FieldTitleDashboard,
  Divider,
  JobComponent,
} from '../../../../../components';
import CreatorJobMenu from './creatorJobMenu';
import JobPosts from './jobPosts';
import AppInvites from '../../../views/appInvites';
import { QuoteOutWidget } from '../../../../../widgets';

export default function Jobs({ history, tab }) {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(true);
  const [tabNbr, setTabNbr] = React.useState(1);

  useEffect(() => {
    setTabNbr(
      tab === 'quotes' ? 4 : tab === 'invites' ? 3 : tab === 'jobs' ? 1 : 1
    );
  }, [tab]);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <CreatorJobMenu tabNbr={tabNbr} setTabNbr={setTabNbr} />
        {tabNbr === 1 && <JobPosts history={history} />}
        {tabNbr === 3 && <AppInvites history={history} setTabNbr={setTabNbr} />}
        {tabNbr === 4 && <QuoteOutWidget history={history} />}
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
