// @ts-nocheck
import React, { useEffect } from 'react';
import { Slide, Button, Icon, Card, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import {
  LoadIcon,
  ContentHeader,
  FieldTitle,
  ProfileCard,
} from '../../../../components';
import { Link } from 'react-router-dom';
import { Query, Mutation } from 'react-apollo';
import { JOB, CREATIVES } from '../../../../data/queries';
import clsx from 'clsx';
import { REMOVE_INVITE, SUBMIT_BRIEF } from '../../../../data/mutations';

export function PickArtist({
  theme,
  jobId,
  autosaveIsOn,
  history,
  favourites,
}) {
  const classes = useStyles();
  const [job, setJob] = React.useState({
    name: '',
    img: '',
    summary: '',
    location: '',
    gallery: {
      images: [],
    },
    showreel: '',
    type: 'job',
    creativeSummary: '',
    id: 'new',
    gameId: '',
    submitted: false,
  });
  const [inviteList, setInviteList] = React.useState([]);

  function updateInviteList(newItem, inviteId) {
    setInviteList([
      ...inviteList,
      {
        name: newItem.name,
        img: newItem.profileImg,
        id: newItem.id,
        inviteId: inviteId,
      },
    ]);
  }

  function removeInviteList(newItem) {
    const filteredArray = inviteList.filter((item) => item.id !== newItem.id);
    setInviteList(filteredArray);
  }

  function Fillers({ count }) {
    let returnArr = [];
    for (let i = count * 1; i < 5; i++) {
      returnArr.push(
        <div className={classes.closeWrapper} key={`artist_blank_${i}`}>
          <div className={classes.button}>
            <div className={classes.miniProfileBlank}></div>
          </div>
        </div>,
      );
    }
    return returnArr;
  }

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <ContentHeader
          title="Invite Artists"
          subTitle="Invite Artists"
          button={
            <Button
              onClick={() => {
                history.goBack();
              }}
            >
              <Icon>chevron_left</Icon>
              Back
            </Button>
          }
        />
        <Card className={classes.card} style={{ marginTop: 50 }}>
          <FieldTitle
            name="Your Picks (5 Maximum)"
            description="Pick up to 5 creatives that you would like to work with"
            warning=""
          />
          <div className={classes.miniProfileActionWrapper}>
            <div className={classes.miniProfileWrapper}>
              {inviteList.map((artist, index) => (
                <div className={classes.closeWrapper} key={`artist_${index}`}>
                  <Mutation
                    mutation={REMOVE_INVITE}
                    variables={{
                      id: artist.inviteId,
                      invite: {
                        gameId: '',
                        jobId: '',
                        userId: '',
                        title: '',
                        message: '',
                      },
                    }}
                  >
                    {(mutation) => {
                      return (
                        <Icon
                          className={classes.closeIcon}
                          onClick={() => {
                            removeInviteList(artist);
                            mutation();
                          }}
                        >
                          close
                        </Icon>
                      );
                    }}
                  </Mutation>
                  <div
                    onClick={() => {
                      history.push(`/public-preview/${artist.id}`);
                    }}
                    className={classes.button}
                  >
                    <div
                      className={classes.miniProfile}
                      style={{
                        backgroundImage: `url(${artist.img})`,
                      }}
                      title={artist.name}
                    ></div>
                  </div>
                </div>
              ))}
              <Fillers count={inviteList.length} />
            </div>
          </div>
        </Card>
        <Card className={classes.card} style={{ marginTop: 20 }}>
          <FieldTitle
            name="Submit Brief"
            description="When you submit a brief your chosen creatives will be invited to quote for the work"
            warning=""
          />
          <div className={classes.miniProfileActionWrapper}>
            <div className={classes.miniProfileWrapper}>
              <div style={{ textAlign: 'center' }}>
                <Typography
                  variant="h2"
                  component="p"
                  style={{ marginTop: 10 }}
                >
                  {inviteList.length > 0
                    ? `Submit this brief and we'll notify your chosen creatives`
                    : `Please select at least 1 creative`}
                </Typography>

                <Mutation
                  mutation={SUBMIT_BRIEF}
                  variables={{
                    jobId: job.id,
                  }}
                >
                  {(mutation) => {
                    return (
                      <Button
                        className={clsx({
                          [classes.iconButton]: true,
                          [classes.iconButtonDisabled]:
                            inviteList.length > 0 ? false : true,
                        })}
                        disabled={inviteList.length > 0 ? false : true}
                        onClick={() => mutation()}
                      >
                        Submit
                        <Icon className={classes.iconButtonIcon}>
                          keyboard_arrow_right
                        </Icon>
                      </Button>
                    );
                  }}
                </Mutation>
              </div>
            </div>
          </div>
        </Card>
        <div style={{ width: '100%', marginTop: 50 }}>
          <FieldTitle name="Invite Artists" description="" warning="" />
          <Query
            query={CREATIVES}
            fetchPolicy="network-only"
            onCompleted={(data) => {}}
          >
            {({ loading, error, data }) => {
              if (loading) return <LoadIcon />;
              if (error) return <div>Error</div>;

              return (
                <div className={classes.creativeWrapper}>
                  {data.getCreatives.map((creative, index) => {
                    return (
                      <ProfileCard
                        creative={creative}
                        favourite={
                          favourites.indexOf(creative.id) > -1 ? true : false
                        }
                        gameId={job.gameId}
                        jobId={jobId}
                        invite={inviteList.filter(
                          (filterItem) => filterItem.id === creative.id,
                        )}
                        key={`creative_${index}`}
                        updateInviteList={updateInviteList}
                        removeInviteList={removeInviteList}
                        disabled={inviteList.length >= 5 ? true : false}
                      />
                    );
                  })}
                </div>
              );
            }}
          </Query>
        </div>
        <Query
          query={JOB}
          variables={{ jobId: jobId }}
          fetchPolicy="network-only"
          onCompleted={(data) => {
            data.getJob &&
              setJob({ ...data.getJob, gameId: data.getJob.game.id });
            setInviteList(
              data.getJob.invite.map((item) => {
                return {
                  name: item.receiver.name,
                  img: item.receiver.profileImg,
                  id: item.receiver.id,
                  inviteId: item.id,
                };
              }),
            );
          }}
        >
          {({ loading, error, data }) => {
            if (loading) return <LoadIcon />;
            if (error) return <div>Error</div>;
            return <div></div>;
          }}
        </Query>
      </div>
    </Slide>
  );
}
