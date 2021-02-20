import React from 'react';
import { useStyles } from './styles';
import { Uploader } from '../../../../../components';

export default function FeatureComponent({
  profile,
  setProfile,
  autosave,
  SignupMutation,
}) {
  const classes = useStyles();

  return (
    <div
      className={classes.feature}
      style={{ backgroundImage: `url(${profile.profileBG})` }}
    >
      <Uploader
        cbImage={(url) => {
          setProfile({ ...profile, profileBG: url });
          autosave(SignupMutation, 'image');
        }}
        cbDelete={() => {
          setProfile({ ...profile, profileBG: null });
          autosave(SignupMutation, 'image');
        }}
        styleOverride={null}
        hasFile={profile.profileBG ? true : false}
        className={null}
        size="1920 x 300"
      />
    </div>
  );
}
