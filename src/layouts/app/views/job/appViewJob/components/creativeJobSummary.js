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
  GalleryCard,
  BorderBox,
  IconButton,
} from '../../../../../../components';
import CreativeActions from '../components/creativeActions';
import CreativeActionsTwo from '../components/creativeActionsTwo';
import ClientNotifications from '../components/clientNotifications';
import { timeDifferenceForDate } from '../../../../../../utils/dates';
import { nameShortener } from '../../../../../../utils';
import ReactPlayer from 'react-player';

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
            <HeaderTwo str={nameShortener(job.job.name, 30)} />
            <Meta
              str={`${timeDifferenceForDate(job.job.createdAt)} | ${
                job.creator.name
              }`}
            />
            <Divider />
            <Typography noWrap={false}>{job.job.summary}</Typography>
            <Divider />
            <Divider />
            <HeaderThree str="Creative Summary" />
            <Divider />
            <Typography>{job.job.creativeSummary}</Typography>
            <Divider />
            <Divider />
            {job.job.gallery && (
              <Column>
                <HeaderThree str="Reference Images" />
                <Divider />

                <Column>
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      paddingLeft: 40,
                      paddingRight: 40,
                      boxSizing: 'border-box',
                    }}
                  >
                    {job.job.gallery.images.map((item, index) => {
                      return <GalleryCard img={`${item.img}`} />;
                    })}
                  </div>
                </Column>

                <Divider />
                <Divider />
              </Column>
            )}
            {job.job.mechanics !== '' && (
              <Column>
                <HeaderThree str="Mechanics" />
                <Divider />
                <Typography>{job.job.mechanics}</Typography>
                <Divider />
                <Divider />
              </Column>
            )}
            {job.job.timeframe !== '' && (
              <Column>
                <HeaderThree str="Timeframe" />
                <Divider />
                <Typography>{job.job.timeframe}</Typography>
                <Divider />
                <Divider />
              </Column>
            )}
            {job.job.budget !== '' && (
              <Column>
                <HeaderThree str="Budget" />
                <Divider />
                <Typography>{job.job.budget}</Typography>
                <Divider />
                <Divider />
              </Column>
            )}
            {job.job.extra !== '' && (
              <Column>
                <HeaderThree str="Extra" />
                <Divider />
                <Typography>{job.job.extra}</Typography>
                <Divider />
                <Divider />
              </Column>
            )}
            {job.job.showreel !== '' && (
              <Column>
                <HeaderThree str="Showreel" />
                <ReactPlayer
                  url={job.job.showreel}
                  playing
                  controls={true}
                  muted={true}
                  style={{
                    width: '100%',
                    padding: 10,
                    boxSizing: 'border-box',
                    background: '#ddd',
                    marginTop: 20,
                  }}
                  width="100%"
                />
                <Divider />
                <Divider />
              </Column>
            )}
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
