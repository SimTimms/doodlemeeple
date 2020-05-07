import React from 'react';
import { Card, Typography, Button, Icon } from '@material-ui/core';
import { useStyles } from './styles';
import { FavouriteButton, InviteButton } from '../';
import { Mutation } from 'react-apollo';
import { ADD_FAVOURITE, CREATE_INVITE } from '../../data/mutations';

import { Link } from 'react-router-dom';

export default function ProfileCard({ item, favourite, gameId, jobId }) {
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
      <div className={classes.actionsWrapper}>
        <div className={classes.actions}>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginRight: 10, padding: 0, textAlign: 'center' }}
          >
            <Link
              to={`/app/prei-profile`}
              style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Icon style={{ fontSize: 20, color: '#fff', margin: 'auto' }}>
                more_horiz
              </Icon>
            </Link>
          </Button>

          <Mutation
            mutation={ADD_FAVOURITE}
            variables={{
              id: item.id,
              addRemove: favourite ? 'remove' : 'add',
            }}
          >
            {(mutation) => {
              return (
                <FavouriteButton
                  styleAdd={{ marginRight: 10 }}
                  mutation={mutation}
                  favourite={favourite}
                />
              );
            }}
          </Mutation>
        </div>
        <Mutation
          mutation={CREATE_INVITE}
          variables={{
            id: item.id,
            invite: {
              gameId: gameId,
              jobId: jobId,
              userId: item.id,
              title: '',
              message: '',
            },
          }}
        >
          {(mutation) => {
            return <InviteButton mutation={mutation} invite="" />;
          }}
        </Mutation>
      </div>
    </Card>
  );
}
