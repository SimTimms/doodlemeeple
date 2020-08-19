import React, { useEffect } from 'react';

import { Card, Typography, Icon } from '@material-ui/core';
import { useStyles } from './styles';
import { InviteButton, IconButton, Row, Column } from '../';
import { Mutation } from 'react-apollo';
import { ADD_FAVOURITE, CREATE_INVITE } from '../../data/mutations';
import clsx from 'clsx';
import Cookies from 'js-cookie';

export default function ProfileCard({
  history,
  creative,
  favourite,
  ...props
}) {
  const classes = useStyles();
  const [isFav, setIsFav] = React.useState(false);
  const [favCount, setFavCount] = React.useState(0);
  const {
    gameId,
    jobId,
    invite,
    updateInviteList,
    removeInviteList,
    disabled,
  } = props;

  useEffect(() => {
    const length = creative.favourites.filter((fav) => {
      return (
        fav.user._id === Cookies.get('userId') &&
        fav.receiver._id === creative._id
      );
    });
    setIsFav(favourite);
    setFavCount(creative.likedMe.length);
  }, [favourite]);

  return (
    <Card
      className={clsx({
        [classes.creativeCard]: true,
        [classes.creativeCardNoShadow]: !creative.profileBG,
        [classes.creativeCardNoShadow]: !creative.profileBG,
        [classes.creativeCardInvited]: invite && invite.length > 0,
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
          position: 'relative',
        }}
        className={clsx({
          [classes.noBG]: !creative.profileBG,
        })}
      ></div>
      <div
        className={clsx({
          [classes.creativeCardBackground]: true,
          [classes.noProfile]: !creative.profileImg,
          [classes.profileNoBG]: !creative.profileBG,
        })}
        style={{
          backgroundImage:
            creative.profileImg !== '' ? `url(${creative.profileImg})` : `#ddd`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          position: 'relative',
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
            <div className={`${classes.smallActionWrapper} ${classes.top}`}>
              <Icon
                onClick={() => {
                  setIsFav(isFav ? false : true);
                  setFavCount(isFav ? favCount - 1 : favCount + 1);
                  mutation();
                }}
                className={classes.favIcon}
              >
                {isFav ? 'favorite' : 'favorite_border'}
              </Icon>
              <Typography className={classes.actionText} style={{}}>
                {favCount}
              </Typography>
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
          icon=""
          styleOverride={{
            color: '#222',
            boxSizing: 'border-box',
            paddingRight: 0,
            paddingLeft: 0,
            textDecoration: 'underline',
            marginTop: 0,
            marginBottom: 0,
          }}
          type="button"
        />
        <div>
          <Icon onClick={() => {}} className={classes.favIconStar}>
            {isFav ? 'star_border' : 'star_border'}
          </Icon>
          <Icon onClick={() => {}} className={classes.favIconStar}>
            {isFav ? 'star_border' : 'star_border'}
          </Icon>
          <Icon onClick={() => {}} className={classes.favIconStar}>
            {isFav ? 'star_border' : 'star_border'}
          </Icon>
          <Icon onClick={() => {}} className={classes.favIconStar}>
            {isFav ? 'star_border' : 'star_border'}
          </Icon>
          <Icon onClick={() => {}} className={classes.favIconStar}>
            {isFav ? 'star_border' : 'star_border'}
          </Icon>
        </div>
      </Column>
      {updateInviteList && (
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
      )}
    </Card>
  );
}
