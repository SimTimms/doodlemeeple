import React from 'react';
import { useStyles } from './styles';
import { useQuery } from '@apollo/client';
import { JOB } from '../../data';
import { ArtistLineup, Creatives, Creative } from './components';
import { FavouritesContext } from '../../imports/sharedContext';

export default function PickArtist({ history, ...props }) {
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
  const jobId = props.match.params.jobId;
  const creativeId = props.match.params.creativeId;
  const { loading, error, data } = useQuery(JOB, {
    variables: { jobId: jobId },
    onCompleted({ jobById }) {
      jobById && setJob({ ...jobById });
      setInviteList(
        jobById.invites.map((invite) => {
          return {
            name: invite.receiver.name,
            img: invite.receiver.profileImg,
            _id: invite.receiver._id,
            inviteId: invite._id,
          };
        })
      );
    },
  });

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
        history={history}
        job={job}
      />

      {creativeId !== 'false' && (
        <FavouritesContext.Consumer>
          {(favourites) => (
            <Creative
              history={history}
              favourites={favourites}
              job={job}
              inviteList={inviteList}
              updateInviteList={updateInviteList}
              removeInviteList={removeInviteList}
              creativeId={creativeId}
            />
          )}
        </FavouritesContext.Consumer>
      )}
      <div style={{ width: '100%' }}>
        <FavouritesContext.Consumer>
          {(favourites) => (
            <Creatives
              history={history}
              favourites={favourites}
              job={job}
              inviteList={inviteList}
              updateInviteList={updateInviteList}
              removeInviteList={removeInviteList}
            />
          )}
        </FavouritesContext.Consumer>
      </div>
    </div>
  );
}
