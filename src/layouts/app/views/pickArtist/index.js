import React from 'react';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { JOB } from '../../../../data/queries';
import { ArtistLineup, Creatives, Creative } from './components';

export function PickArtist({ jobId, favourites, creativeId }) {
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

  return (
    <div className={classes.root}>
      <ArtistLineup
        removeInviteList={removeInviteList}
        inviteList={inviteList}
        job={job}
      />

      {creativeId && (
        <Creative
          favourites={favourites}
          job={job}
          inviteList={inviteList}
          updateInviteList={updateInviteList}
          removeInviteList={removeInviteList}
          creativeId={creativeId}
        />
      )}
      <div style={{ width: '100%' }}>
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
  );
}
