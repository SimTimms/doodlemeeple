import React, { useEffect } from 'react';

import { Card, Typography, Icon } from '@material-ui/core';
import { useStyles } from './styles';
import { InviteButton, IconButton, Column, Row } from '../';
import { Mutation } from 'react-apollo';
import { ADD_FAVOURITE, CREATE_INVITE } from '../../data/mutations';
import clsx from 'clsx';
import Cookies from 'js-cookie';
import imageOptimiser from '../../utils/imageOptimiser';
import badgeFeatured from '../../assets/badgeFeatured.png';
import badgeBird from '../../assets/badgeBird.png';
import badgeFlower from '../../assets/badgeFlower.png';
import badgeFlowerPink from '../../assets/badgeFlowerPink.png';
import badgeStar from '../../assets/badgeStar.png';
import badgeFirst from '../../assets/badgeFirst.png';

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
          boxShadow:
            creative.profileBG !== ''
              ? '10px 10px 10px rgba(0,0,0,0.2)'
              : 'none',
        }}
        className={clsx({
          [classes.background]: true,
          [classes.noBG]: !creative.profileBG,
        })}
        onClick={() => history.push(`/app/public-preview/${creative._id}`)}
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
        }}
        onClick={() => history.push(`/app/public-preview/${creative._id}`)}
      ></div>
      <div
        style={{
          width: '100%',
          height: '32px',
          marginTop: '-40px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Row j="flex-start" w="100px" paddingLeft={5}>
          {/*creative.badges.map((badge, index) => {
            const badgeArr = [];
            badge.badgeType === 'featured' &&
              badgeArr.push(
                <img
                  src={badgeStar}
                  title="This creative has been featured!"
                  key={`badge_${index}_${creative._id}`}
                  style={{ maxHeight: 16, maxWidth: 16, margin: 2 }}
                />
              );
            badge.badgeType === 'early' &&
              badgeArr.push(
                <img
                  src={badgeFirst}
                  title="This creative was one of the first to join!"
                  key={`badge_${index}_${creative._id}`}
                  style={{ maxHeight: 16, maxWidth: 16, margin: 2 }}
                />
              );

            return badgeArr;
          })*/}
        </Row>
        <Row j="flex-end" w="100px">
          <div
            className={`${classes.smallActionWrapper} ${classes.top}`}
            title={
              creative.responsePercent === ''
                ? `This creative has not yet been invited to provide a quote.`
                : `This creative has replied to ${creative.responsePercent}% of invites.`
            }
            style={{ marginRight: 0, marginLeft: 3 }}
          >
            <Icon
              className={clsx({
                [classes.favIconNull]: true,
                [classes.favIconBad]: creative.responsePercent > 0,
                [classes.favIconMed]: creative.responsePercent > 50,
                [classes.favIconGood]: creative.responsePercent > 90,
              })}
            >
              chat_bubble
            </Icon>
            <Typography
              className={clsx({
                [classes.actionText]: true,
              })}
              style={{ paddingTop: 0, marginTop: -3 }}
            >
              {creative.responsePercent ? creative.responsePercent : 0}
            </Typography>
          </div>
          <div
            className={`${classes.smallActionWrapper} ${classes.top}`}
            title={
              creative.viewCount === 1
                ? `1 person has looked at this creative`
                : `${creative.viewCount} people have looked at this creative`
            }
            style={{ marginRight: 0, marginLeft: 3 }}
          >
            <Icon
              className={clsx({
                [classes.favIconNull]: true,
                [classes.countIcon]: creative.viewCount > 0,
              })}
            >
              brightness_1
            </Icon>
            <Typography
              className={clsx({
                [classes.actionText]: true,
              })}
              style={{ paddingTop: 2 }}
            >
              {creative.viewCount ? creative.viewCount : 0}
            </Typography>
          </div>

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
                  title={
                    favCount === 1
                      ? `1 person has liked this creative`
                      : `${favCount} people have liked this creative`
                  }
                  style={{ marginRight: 3 }}
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
        </Row>
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
      </Column>
      {updateInviteList && Cookies.get('userId') !== creative._id ? (
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
      ) : (
        <IconButton
          title="Hire"
          color="text-dark"
          icon=""
          iconPos="right"
          styleOverride={{
            paddingTop: 3,
            paddingBottom: 3,
            paddingLeft: 5,
            paddingRight: 5,
          }}
          onClickEvent={() => history.push(`/app/edit-job/new/${creative._id}`)}
        />
      )}
    </Card>
  );
}
