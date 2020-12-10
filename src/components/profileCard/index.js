import React, { useEffect } from 'react';

import { Card, Typography, Icon } from '@material-ui/core';
import { useStyles } from './styles';
import { InviteButton, IconButton, Column } from '../';
import { Mutation } from 'react-apollo';
import { ADD_FAVOURITE, CREATE_INVITE } from '../../data/mutations';
import clsx from 'clsx';
import Cookies from 'js-cookie';
import imageOptimiser from '../../utils/imageOptimiser';
import stripeImg from '../../assets/stripe_logo_sm.png';

export default function ProfileCard({
  history,
  creative,
  favourite,
  ...props
}) {
  const classes = useStyles();
  const [isFav, setIsFav] = React.useState(false);
  const [favCount, setFavCount] = React.useState(0);
  const { jobId, invite, updateInviteList, removeInviteList, disabled } = props;

  useEffect(() => {
    setIsFav(favourite);
    setFavCount(creative.likedMe.length);
  }, [favourite, creative]);

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
            creative.profileBG !== '' && creative.profileBG
              ? `url(${imageOptimiser(creative.profileBG)})`
              : '#eee',
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
      <div
        style={{
          width: '100%',
          height: '32px',
          marginTop: '-40px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        {(creative.stripeID || creative.stripeClientId) && (
          <div className={classes.stripeBox}>
            <img
              src={stripeImg}
              style={{ width: '100%' }}
              alt="Stripe Logo"
              title="This creative has completed their payment profile"
            />
          </div>
        )}
        {creative.paymentMethod && (
          <Icon
            className={clsx({
              [classes.favIcon]: true,
              [classes.favIconPrimary]: true,
            })}
            title="This creative has made arrangements to be paid by BACS"
          >
            credit_card
          </Icon>
        )}
        <Mutation
          mutation={ADD_FAVOURITE}
          variables={{
            id: creative._id,
          }}
        >
          {(mutation) => {
            return (
              <div
                className={`${classes.smallActionWrapper} ${classes.top}`}
                onClick={() => {
                  setIsFav(isFav ? false : true);
                  setFavCount(isFav ? favCount - 1 : favCount + 1);
                  mutation();
                }}
              >
                <Icon
                  className={clsx({
                    [classes.favIcon]: true,
                    [classes.favIconDark]: !isFav,
                  })}
                >
                  favorite
                </Icon>
                <Typography
                  className={clsx({
                    [classes.actionText]: true,
                    [classes.actionTextDark]: !isFav,
                  })}
                >
                  {favCount}
                </Typography>
              </div>
            );
          }}
        </Mutation>
      </div>
      <Column j="center" a="center">
        <IconButton
          title={creative.name}
          onClickEvent={() =>
            history.push(`/app/public-preview/${creative._id}`)
          }
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
      {updateInviteList && Cookies.get('userId') !== creative._id && (
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
