import React from 'react';
import { Slide, Typography } from '@material-ui/core';
import { useStyles } from '../styles';
import {
  HeaderTwo,
  HeaderThree,
  Column,
  Meta,
  Paper,
  Divider,
  BorderBox,
  IconButton,
} from '../../../../../../components';
import CreativeActions from '../components/creativeActions';
import CreativeActionsTwo from '../components/creativeActionsTwo';
import ClientNotifications from '../components/clientNotifications';
import { timeDifferenceForDate } from '../../../../../../utils/dates';

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
            <ClientNotifications
              jobStatus={job.job.submitted}
              job={job}
              history={history}
            />
            <HeaderTwo str={job.job.name} />
            <Meta
              str={`${timeDifferenceForDate(job.job.createdAt)} | ${
                job.creator.name
              }`}
            />
            <Divider />
            <Typography>{job.job.summary}</Typography>
            <Divider />
            <Divider />
            <HeaderThree str="Creative Summary" />
            <Divider />
            <Typography>{job.job.creativeSummary}</Typography>
            <Divider />
            <Divider />
            {!userContract ? (
              <BorderBox w={300}>
                {invite.data.status === 'declined' ? (
                  <Meta str="You declined this invite" />
                ) : invite.data.status === 'accepted' ? (
                  <Meta str="You have already quoted for this job" />
                ) : closed ? (
                  <Meta str="The Creator closed this job" />
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
                  job.job.submitted !== 'complete' && (
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
