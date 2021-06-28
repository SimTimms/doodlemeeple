import React from 'react';
import { Icon } from '@material-ui/core';
import { useStyles } from './styles';
import { useMutation } from '@apollo/client';
import { REMOVE_INVITE } from '../../../data';

export default function Invite({ history, removeInviteList, artist }) {
  const classes = useStyles();

  const [mutation] = useMutation(REMOVE_INVITE, {
    variables: {
      _id: artist.inviteId,
    },
  });

  return (
    <div className={classes.closeWrapper}>
      <Icon
        className={classes.closeIcon}
        onClick={() => {
          removeInviteList(artist);
          mutation();
        }}
      >
        close
      </Icon>

      <div
        onClick={() => {
          history.push(`/public-preview/${artist._id}`);
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
  );
}
