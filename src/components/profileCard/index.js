import React from 'react';
import { Card, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { FavouriteButton, InviteButton } from '../';

export default function ProfileCard({ item }) {
  const classes = useStyles();
  return (
    <Card
      className={classes.creativeCard}
      style={{
        background: item.profileBG !== '' ? `url(${item.profileBG})` : '#eee',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        boxShadow:
          item.profileBG !== '' ? '10px 10px 10px rgba(0,0,0,0.2)' : 'none',
      }}
    >
      <div
        className={classes.creativeCardWrapper}
        style={{ marginTop: item.profileBG !== '' ? 160 : 0 }}
      >
        <div
          className={classes.creativeCardBackground}
          style={{
            backgroundImage:
              item.profileImg !== '' ? `url(${item.profileImg})` : `#ddd`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
        <div className={classes.creativeCardDetails}>
          <Typography variant="h2" component="h2">
            {item.name}
          </Typography>
          <Typography variant="body1" component="p">
            {item.summary.substring(0, 130)}
          </Typography>
        </div>
      </div>
      <div className={classes.actions}>
        <FavouriteButton styleAdd={{ marginRight: 10 }} />
        <InviteButton />
      </div>
    </Card>
  );
}
