import React from 'react';
import { useStyles } from './styles';
import { Column } from '../';
import clsx from 'clsx';
import { FavouriteButton, CardComponent } from '../';
import {
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
  const {
    jobId,
    invite,
    updateInviteList,
    removeInviteList,
    disabled,
    loading,
  } = props;

  return loading ? (
    <div className={classes.loading}></div>
  ) : (
    <div
      className={clsx({
        [classes.creativeCard]: true,
        [classes.creativeCardNoShadow]: !creative.profileBG,
        [classes.creativeCardNoShadow]: !creative.profileBG,
        [classes.creativeCardInvited]: invite && invite.length > 0,
      })}
    >
      <BgImg history={history} creative={creative} />
      <ProfileImg history={history} creative={creative} />

      <div className={classes.favWrapper}>
        <Badges creative={creative} />
        <FavouriteButton favourite={favourite} creative={creative} />
      </div>
      <Column j="center" a="center">
        <ProfileName
          creative={creative}
          favourite={favourite}
          history={history}
        />
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
    </div>
  );
}
