import React from 'react';
import { Card, Typography, Button, Icon } from '@material-ui/core';
import { useStyles } from './styles';
import { FavouriteButton, InviteButton } from '../';
import { Mutation } from 'react-apollo';
import {
  ADD_FAVOURITE,
  CREATE_INVITE,
  REMOVE_INVITE,
} from '../../data/mutations';

import { Link } from 'react-router-dom';

export default function ProfileCard({
  creative,
  favourite,
  gameId,
  jobId,
  invite,
  updateInviteList,
  removeInviteList,
  disabled,
}) {
  const classes = useStyles();

  return (
    <Card
      className={classes.creativeCard}
      style={{
        background:
          creative.profileBG !== '' ? `url(${creative.profileBG})` : '#eee',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        boxShadow:
          creative.profileBG !== '' ? '10px 10px 10px rgba(0,0,0,0.2)' : 'none',
      }}
    >
      <div
        className={classes.creativeCardWrapper}
        style={{ marginTop: creative.profileBG !== '' ? 160 : 0 }}
      >
        <div
          className={classes.creativeCardBackground}
          style={{
            backgroundImage:
              creative.profileImg !== ''
                ? `url(${creative.profileImg})`
                : `#ddd`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
        <div className={classes.creativeCardDetails}>
          <Typography variant="h2" component="h2">
            {creative.name}
          </Typography>
          <Typography variant="body1" component="p">
            {creative.summary.substring(0, 60)}
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
              to={`/public-preview/${creative.id}`}
              style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                textDecoration: 'none',
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
              id: creative.id,
              addRemove: favourite ? 'remove' : 'add',
            }}
          >
            {(mutation) => {
              return (
                <FavouriteButton
                  styleAdd={{ marginRight: 10 }}
                  mutation={() => {
                    mutation();
                  }}
                  favourite={favourite}
                />
              );
            }}
          </Mutation>
        </div>
        <Mutation
          mutation={invite.length === 0 ? CREATE_INVITE : REMOVE_INVITE}
          variables={{
            id: invite.length === 0 ? 'new' : invite[0].inviteId,
            invite: {
              gameId: gameId,
              jobId: jobId,
              userId: creative.id,
              title: '',
              message: '',
            },
          }}
          onCompleted={(data) => {
            invite.length === 0
              ? updateInviteList(creative, data.createInvite)
              : removeInviteList(creative);
          }}
        >
          {(mutation) => {
            return (
              <div>
                <InviteButton
                  mutation={() => {
                    !disabled
                      ? mutation()
                      : disabled && invite.length > 0 && mutation();
                  }}
                  invite={invite.length > 0 ? true : false}
                  disabled={disabled}
                />
              </div>
            );
          }}
        </Mutation>
      </div>
    </Card>
  );
}
