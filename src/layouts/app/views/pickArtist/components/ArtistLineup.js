import React from 'react';
import { Icon } from '@material-ui/core';
import { useStyles } from './styles';
import { Mutation } from 'react-apollo';
import { REMOVE_INVITE } from '../../../../../data/mutations';

export default function ArtistLineup({
  history,
  removeInviteList,
  inviteList,
}) {
  const classes = useStyles();

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
  );
}
