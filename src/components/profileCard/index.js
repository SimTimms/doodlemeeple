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
import clsx from 'clsx';

export default function ProfileCard({
  history,
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
      className={clsx({
        [classes.creativeCard]: true,
      })}
    >
      <div
        style={{
          backgroundImage:
            creative.profileBG !== '' ? `url(${creative.profileBG})` : '#eee',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          boxShadow:
            creative.profileBG !== ''
              ? '10px 10px 10px rgba(0,0,0,0.2)'
              : 'none',
          height: 100,
          width: '100%',
        }}
        className={clsx({
          [classes.noBG]: !creative.profileBG,
        })}
      ></div>
      <div
        className={clsx({
          [classes.creativeCardBackground]: true,
          [classes.noProfile]: !creative.profileImg,
        })}
        style={{
          backgroundImage:
            creative.profileImg !== '' ? `url(${creative.profileImg})` : `#ddd`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      ></div>
      <div className={classes.creativeCardWrapper}>
        <div className={classes.creativeCardDetails}>
          <Typography variant="h6" component="h6">
            {creative.name}
          </Typography>
        </div>
      </div>
      <div className={classes.actionsWrapper}>
        <div className={classes.actions}>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginRight: 10, padding: 0, textAlign: 'center' }}
            onClick={() => history.push(`/public-preview/${creative._id}`)}
          >
            <Icon style={{ fontSize: 20, color: '#fff', margin: 'auto' }}>
              pageview
            </Icon>
          </Button>

          <Mutation
            mutation={ADD_FAVOURITE}
            variables={{
              id: creative._id,
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
              userId: creative._id,
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
