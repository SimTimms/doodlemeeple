import React from 'react';
import { Card } from '@material-ui/core';
import { useStyles } from './styles';
import { IconButton, Column } from '../';
import clsx from 'clsx';
import {
  FavMenu,
  BgImg,
  ProfileImg,
  ProfileName,
  Badges,
  InviteMenu,
} from './components';

export default function ProfileCard({
  history,
  creative,
  favourite,
  ...props
}) {
  const classes = useStyles();
  const { jobId, invite, updateInviteList, removeInviteList, disabled } = props;

  return (
    <Card
      className={clsx({
        [classes.creativeCard]: true,
        [classes.creativeCardNoShadow]: !creative.profileBG,
        [classes.creativeCardNoShadow]: !creative.profileBG,
        [classes.creativeCardInvited]: invite && invite.length > 0,
      })}
    >
      <BgImg history={history} creative={creative} />
      <ProfileImg history={history} creative={creative} />
      <FavMenu creative={creative} favourite={favourite} />
      <Column j="center" a="center">
        <ProfileName creative={creative} favourite={favourite} />
        <Badges creative={creative} />
      </Column>
      <InviteMenu
        history={history}
        creative={creative}
        favourite={favourite}
        jobId={jobId}
        invite={invite}
        updateInviteList={updateInviteList}
        removeInviteList={removeInviteList}
        disabled={disabled}
      />
    </Card>
  );
}
