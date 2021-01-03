import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import {
  Column,
  DividerMini,
  Divider,
  Paper,
  Uploader,
} from '../../../../../components';
import { UPDATE_USER_MUTATION } from '../../../../../data/mutations';
import { useMutation } from 'react-apollo';
import { disabled } from 'glamor';

export default function Onboarding({ profile, setProfile }) {
  const classes = useStyles();
  const [updateUser] = useMutation(UPDATE_USER_MUTATION);

  const newProfile =
    !profile.profileBG && !profile.profileImg && !profile.summary;
  const hasBackground = profile.profileBG;
  const hasAvatar = profile.profileImg;
  const hasSummary = profile.summary;
  const displayUploader = !hasBackground;
  const displayAvUploader = !hasAvatar;

  const displayText = {
    newTitle: 'Create a Profile',
    newStr: `Let's creating a profile so people know a bit about you, upload a header image that defines your work it should be 1920x300px and less than 2MB`,
    profileTitle: 'Great! Now add a profile picture',
    profileStr: `Upload a photo, sketch, painting or drawing of yourself.`,
    bgImageTitle: 'Your Header Image',
    bgImage: 'You need to set a background image',
    bgImageTitle: 'About You',
    summaryTitle: 'Describe yourself and how you work',
    summaryStr: '',
  };

  const title = newProfile
    ? displayText.newTitle
    : !hasBackground
    ? displayText.bgImageTitle
    : !hasAvatar
    ? displayText.profileTitle
    : !hasSummary && displayText.summaryTitle;
  const text = newProfile
    ? displayText.newStr
    : !hasBackground
    ? displayText.bgImage
    : !hasAvatar
    ? displayText.profileStr
    : !hasSummary && displayText.summaryStr;

  return (
    <div className={classes.noticeArea}>
      <Column>
        <Typography variant="h4">{title}</Typography>
        <DividerMini />
        <Paper>
          <Typography variant="body1" align="center">
            {text}
          </Typography>
        </Paper>
        {displayUploader && (
          <Column>
            <Divider />
            <Uploader
              cbImage={(url) => {
                updateUser({
                  variables: {
                    ...profile,
                    profileBG: url,
                  },
                });
                setProfile({ ...profile, profileBG: url });
              }}
              cbDelete={() => {
                updateUser({
                  variables: {
                    ...profile,
                    profileBG: null,
                  },
                });
                setProfile({ ...profile, profileBG: null });
              }}
              styleOverride={null}
              hasFile={profile.profileBG ? true : false}
              className={null}
              size="Upload"
            />
          </Column>
        )}
        {displayAvUploader && (
          <Column>
            <Divider />
            <Uploader
              cbImage={(url) => {
                updateUser({
                  variables: {
                    ...profile,
                    profileImg: url,
                  },
                });
                setProfile({ ...profile, profileImg: url });
              }}
              cbDelete={() => {
                updateUser({
                  variables: {
                    ...profile,
                    profileImg: null,
                  },
                });
                setProfile({ ...profile, profileImg: null });
              }}
              styleOverride={null}
              hasFile={profile.profileImg ? true : false}
              className={null}
              size="Upload"
            />
          </Column>
        )}
      </Column>
    </div>
  );
}
