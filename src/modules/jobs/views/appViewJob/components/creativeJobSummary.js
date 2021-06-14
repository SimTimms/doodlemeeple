import React from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from '../styles';
import {
  Column,
  Meta,
  Paper,
  BorderBox,
  IconButton,
} from '../../../components/sharedComponents';
import CreativeActions from '../components/creativeActions';
import CreativeActionsTwo from '../components/creativeActionsTwo';
import JobSummaryComponent from './jobSummaryComponent';

export default function CreativeJobSummary({
  job,
  history,
  setTabNbr,
  invite,
  userContract,
  userContractStatus,
}) {
  const classes = useStyles();
  const closed = job.job.submitted === 'closed';
  const complete = job.job.submitted === 'complete';

  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <Paper pt={16}>
          <Column>
            {/*
            <ClientNotification
              jobStatus={job.job.submitted}
              job={job}
              history={history}
          />*/}
            <JobSummaryComponent job={job.job} />
            {!userContract ? (
              <BorderBox w={300}>
                {invite.data.status === 'declined' ? (
                  <Meta str="You declined this invite" />
                ) : invite.data.status === 'accepted' ? (
                  <Meta str="You have already quoted for this job" />
                ) : closed ? (
                  <Meta str="The Client closed this job" />
                ) : complete ? (
                  <Meta str="This job is complete" />
                ) : (
                  <Meta str="Choose to quote for this job or decline" />
                )}
                {invite.data.status !== 'declined' &&
                  invite.data.status !== 'accepted' &&
                  !complete &&
                  !closed && (
                    <CreativeActions
                      inviteId={invite.data._id}
                      onClickEvent={() => {
                        invite.setData({ ...invite, status: null });
                        setTabNbr(6);
                      }}
                      onDeclineEvent={() => {
                        invite.setData({ ...invite, status: 'declined' });
                        setTabNbr(-1);
                      }}
                    />
                  )}
              </BorderBox>
            ) : !userContractStatus ? (
              <CreativeActionsTwo
                inviteId={invite.data._id}
                onClickEvent={() => {
                  invite.setData({ ...invite, status: null });
                  setTabNbr(6);
                }}
                onDeclineEvent={() => {
                  invite.setData({ ...invite, status: 'declined' });
                  setTabNbr(-1);
                }}
              />
            ) : (
              <BorderBox w={300}>
                <Meta str="You've quoted for this job" />
                {job.job.submitted !== 'closed' &&
                  job.job.submitted !== 'complete' &&
                  job.job.submitted !== 'accepted' &&
                  job.job.submitted !== 'paid' && (
                    <IconButton
                      title="View Quote"
                      onClickEvent={() => {
                        setTabNbr(6);
                      }}
                      color="primary"
                      icon=""
                      styleOverride={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}
                    />
                  )}
              </BorderBox>
            )}
          </Column>
        </Paper>
      </div>
    </Slide>
  );
}
