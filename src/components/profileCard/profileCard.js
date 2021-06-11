import React from 'react';
import { useStyles } from './styles';
import clsx from 'clsx';
import { FavouriteButton } from '../';
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
    setFullProfile,
  } = props;

  console.log(setFullProfile);

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
      <BgImg
        history={history}
        creative={creative}
        setFullProfile={setFullProfile ? setFullProfile : null}
      />
      <ProfileImg
        history={history}
        creative={creative}
        setFullProfile={setFullProfile ? setFullProfile : null}
      />

      <div className={classes.favWrapper}>
        <Badges creative={creative} />
        <FavouriteButton favourite={favourite} creative={creative} />
      </div>
      <ProfileName
        creative={creative}
        favourite={favourite}
        history={history}
        setFullProfile={props.setFullProfile ? props.setFullProfile : null}
      />
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
