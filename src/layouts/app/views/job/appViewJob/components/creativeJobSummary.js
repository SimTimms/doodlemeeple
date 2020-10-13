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
} from '../../../../../../components';
import CreativeActions from '../components/creativeActions';
import ClientNotifications from '../components/clientNotifications';
import { timeDifferenceForDate } from '../../../../../../utils/dates';

export default function CreativeJobSummary({
  job,
  history,
  setTabNbr,
  invite,
}) {
  const classes = useStyles();

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

            <BorderBox w={300}>
              {invite.data.status === 'declined' ? (
                <Meta str="You declined this invite" />
              ) : invite.data.status === 'accepted' ? (
                <Meta str="You have already quoted for this job" />
              ) : (
                <Meta str="Choose to quote for this job or decline" />
              )}
              {invite.data.status !== 'declined' &&
                invite.data.status !== 'accepted' && (
                  <CreativeActions
                    inviteId={invite.data._id}
                    onClickEvent={() => {
                      invite.setData({ ...invite, status: 'accepted' });
                      setTabNbr(6);
                    }}
                    onDeclineEvent={() => {
                      invite.setData({ ...invite, status: 'declined' });
                      setTabNbr(-1);
                    }}
                  />
                )}
            </BorderBox>
          </Column>
        </Paper>
      </div>
    </Slide>
  );
}
