import React from 'react';
import { Slide, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import {
  LoadIcon,
  FieldTitle,
  UnlockInfo,
  Column,
} from '../../../../components';
import { Query } from 'react-apollo';
import { JOB } from '../../../../data/queries';
import { ArtistLineup, Creatives, SubmitBrief } from './components';

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
    _id: 'new',
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
        _id: newItem._id,
        inviteId: inviteId,
      },
    ]);
  }

  function removeInviteList(newItem) {
    const filteredArray = inviteList.filter((item) => item._id !== newItem._id);
    setInviteList(filteredArray);
  }

  return loading ? (
    <LoadIcon />
  ) : (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <ArtistLineup
          removeInviteList={removeInviteList}
          inviteList={inviteList}
          history={history}
        />

        <Column j="center" a="center">
          <div style={{ marginTop: 80 }}>
            <SubmitBrief job={job} history={history} inviteList={inviteList} />{' '}
            {inviteList.length < 1 && (
              <UnlockInfo str="Please select at least 1 creative" />
            )}
          </div>
        </Column>

        <div style={{ width: '100%', marginTop: 50 }}>
          <FieldTitle
            name="Invite Creatives"
            description=""
            warning=""
            inline={false}
          />
          <Creatives
            history={history}
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
            data.jobById && setJob({ ...data.jobById });
            setInviteList(
              data.jobById.invites.map((invite) => {
                return {
                  name: invite.receiver.name,
                  img: invite.receiver.profileImg,
                  _id: invite.receiver._id,
                  inviteId: invite._id,
                };
              })
            );
          }}
        >
          {({ data }) => {
            return null;
          }}
        </Query>
      </div>
    </Slide>
  );
}
