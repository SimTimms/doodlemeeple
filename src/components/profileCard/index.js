import React, { useEffect } from 'react';

import { Card, Typography, Button, Icon } from '@material-ui/core';
import { useStyles } from './styles';
import { FavouriteButton, InviteButton, IconButton, Row, Column } from '../';
import { Mutation } from 'react-apollo';
import { ADD_FAVOURITE, CREATE_INVITE } from '../../data/mutations';
import clsx from 'clsx';
import Cookies from 'js-cookie';

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
  const [isFav, setIsFav] = React.useState(false);
  const [favCount, setFavCount] = React.useState(0);

  useEffect(() => {
    const length = creative.favourites.filter((fav) => {
      return (
        fav.user._id === Cookies.get('userId') &&
        fav.receiver._id === creative._id
      );
    });
    setIsFav(length.length > 0);
    setFavCount(creative.likedMe.length);
  }, [creative]);

  return (
    <Card
      className={clsx({
        [classes.creativeCard]: true,
        [classes.creativeCardNoShadow]: !creative.profileBG,
        [classes.creativeCardNoShadow]: !creative.profileBG,
        [classes.creativeCardInvited]: invite.length > 0,
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
      <Mutation
        mutation={ADD_FAVOURITE}
        variables={{
          id: creative._id,
        }}
      >
        {(mutation) => {
          return (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 5,
                position: 'absolute',
                right: 0,
                top: 0,
                background: 'rgba(255,255,255,0.4)',
                paddingLeft: 5,
              }}
            >
              <Icon
                onClick={() => {
                  setIsFav(isFav ? false : true);
                  setFavCount(isFav ? favCount - 1 : favCount + 1);
                  mutation();
                }}
                style={{
                  fontSize: 12,
                  padding: 10,
                  paddingTop: 3,
                  paddingBottom: 3,
                  margin: 0,
                  marginLeft: -10,
                  cursor: 'pointer',
                }}
              >
                {isFav ? 'favorite' : 'favorite_border'}
              </Icon>
              <div style={{ fontSize: 10, marginRight: 10, marginTop: 2 }}>
                {favCount}
              </div>
            </div>
          );
        }}
      </Mutation>
      <Column j="center" a="center">
        <IconButton
          title={creative.name}
          onClickEvent={() => history.push(`/public-preview/${creative._id}`)}
          color="text-dark"
          disabled={false}
          iconPos="right"
          icon="chevron_right"
          styleOverride={{
            color: '#222',
            boxSizing: 'border-box',
            paddingRight: 0,
            paddingLeft: 0,
          }}
          type="button"
        />
      </Column>
      <div className={classes.actionsWrapper}>
        <Mutation
          mutation={CREATE_INVITE}
          variables={{
            _id: invite._id,
            jobId: jobId,
            receiverId: creative._id,
            title: '',
            message: '',
          }}
          onCompleted={(data, error) => {
            invite.length === 0
              ? updateInviteList(creative, data.inviteCreateOne.recordId)
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
                  disabled={invite.length > 0 ? false : disabled}
                />
              </div>
            );
          }}
        </Mutation>
      </div>
    </Card>
  );
}
