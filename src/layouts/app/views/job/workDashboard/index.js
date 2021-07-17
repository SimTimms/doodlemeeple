import React, { useEffect } from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from './styles';
import { Column, TabPage, IconButton } from '../../../../../components';
import CreatorJobMenu from './creatorJobMenu';
import JobPosts from './jobPosts';
import InviteDashboard from '../../../views/inviteDashboard';
import { QuoteOutWidget, EditJob } from '../../../../../widgets';
import JobHistory from './jobHistory';

export default function WorkDashboard({ history, tab }) {
  const classes = useStyles();
  const [tabNbr, setTabNbr] = React.useState(1);

  useEffect(() => {
    setTabNbr(
      tab === 'quotes'
        ? 4
        : tab === 'invites'
        ? 3
        : tab === 'jobs'
        ? 1
        : tab === 'history'
        ? 2
        : 1
    );
  }, [tab]);

  return (
    <div className={classes.root}>
      <CreatorJobMenu tabNbr={tabNbr} setTabNbr={setTabNbr} />
      {tabNbr === 1 && (
        <TabPage
          title="Job Posts"
          menu={
            <IconButton
              title="New Job Post"
              onClickEvent={() => {
                history.push('/app/new-job-post');
              }}
              icon="add"
              color="primary"
            />
          }
        >
          <JobPosts history={history} />
        </TabPage>
      )}
      {tabNbr === 5 && (
        <TabPage
          title="New Job Post"
          menu={
            <IconButton
              title="Back"
              onClickEvent={() => {
                setTabNbr(1);
              }}
              icon="chevron_left"
              color="primary"
            />
          }
        >
          <EditJob jobId={'new'} history={history} />
        </TabPage>
      )}
      {tabNbr === 3 && (
        <InviteDashboard history={history} setTabNbr={setTabNbr} />
      )}
      {tabNbr === 4 && <QuoteOutWidget history={history} />}
      {tabNbr === 2 && (
        <Column w={600}>
          <Column a="center" j="flex-start">
            <JobHistory />
          </Column>
        </Column>
      )}
    </div>
  );
}
