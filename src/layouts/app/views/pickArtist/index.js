// @ts-nocheck
import React from 'react';
import { Slide, Button, Icon, Card, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import {
  LoadIcon,
  ContentHeader,
  FieldTitle,
  IconButton,
} from '../../../../components';
import { Query, Mutation } from 'react-apollo';
import { JOB, CREATIVES } from '../../../../data/queries';
import { SUBMIT_BRIEF } from '../../../../data/mutations';
import { ArtistLineup, Creatives } from './components';

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
  const [loading, setLoading] = React.useState(false);

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

  return loading ? (
    <LoadIcon />
  ) : (
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
          <ArtistLineup
            removeInviteList={removeInviteList}
            inviteList={inviteList}
            history={history}
          />
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
                  onCompleted={() => {
                    history.push('/app/submitted');
                  }}
                >
                  {(mutation) => {
                    return (
                      <IconButton
                        onClickEvent={() => {
                          setLoading(true);
                          mutation();
                        }}
                        disabled={inviteList.length > 0 ? false : true}
                        icon="keyboard_arrow_right"
                      />
                    );
                  }}
                </Mutation>
              </div>
            </div>
          </div>
        </Card>
        <div style={{ width: '100%', marginTop: 50 }}>
          <FieldTitle name="Invite Artists" description="" warning="" />
          <Creatives
            favourites={favourites}
            job={job}
            inviteList={inviteList}
            updateInviteList={updateInviteList}
            removeInviteList={removeInviteList}
          />
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
