import React from 'react';
import { useStyles } from './styles';
import { Uploader } from '../../../../../components';

export default function AvatarComponent({
  profile,
  setProfile,
  autosave,
  SignupMutation,
}) {
  const classes = useStyles();

  return (
    <div
      className={classes.avatar}
      style={{ backgroundImage: `url(${profile.profileImg})` }}
    >
      <Uploader
        cbImage={(url) => {
          setProfile({ ...profile, profileImg: url });
          autosave(SignupMutation, 'image');
        }}
        cbDelete={() => {
          setProfile({ ...profile, profileImg: null });
          autosave(SignupMutation, 'image');
        }}
        styleOverride={null}
        hasFile={profile.profileImg ? true : false}
        className={null}
        size="1920 x 300"
      />
    </div>
  );
}
