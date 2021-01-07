import React, { useEffect } from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import {
  AddSection,
  Column,
  DividerMini,
  Divider,
  CardComponent,
  Uploader,
  FieldBox,
  IconButton,
  UnlockInfo,
} from '../../../../../components';
import { UPDATE_USER_MUTATION } from '../../../../../data/mutations';
import { useMutation } from 'react-apollo';
import autosave from '../../../../../utils/autosave';
import { toaster } from '../../../../../utils/toaster';

export default function Onboarding({
  profile,
  setProfile,
  sections,
  setSections,
}) {
  const classes = useStyles();
  const [updateUser] = useMutation(UPDATE_USER_MUTATION);
  const [summary, setSummary] = React.useState('');
  const [invisible, setInvisible] = React.useState(true);

  useEffect(() => {
    setSummary(profile.summary);
    setInvisible(
      profile.profileBG &&
        profile.profileImg &&
        profile.summary &&
        profile.summary !== '' &&
        profile.sections.length > 0
    );
  }, [profile]);

  const newProfile =
    !profile.profileBG && !profile.profileImg && !profile.summary;
  const hasBackground = profile.profileBG;
  const hasAvatar = profile.profileImg;
  const hasSummary =
    profile.summary !== '' && profile.summary !== null ? true : false;
  const hasSection = profile.sections.length > 0;

  const displayUploader = !hasBackground;
  const displaySummary = !hasSummary && hasBackground && hasAvatar;
  const displayAvUploader = !hasAvatar && hasBackground;
  const displaySection =
    hasSummary && hasBackground && hasAvatar && !hasSection;
  const displayText = {
    newTitle: 'Create a Profile',
    newStr: `Let's creating a profile so people can get to know you. Upload a header image that defines your work it should be 1920x300px and less than 2MB`,
    profileTitle: 'Great! Now add a profile picture',
    profileStr: `Upload a photo, sketch, painting or drawing of yourself.`,
    bgImageTitle:
      'You need to upload a header image, it should be 1920x300px and less than 2MB',
    bgImage: '',
    summaryTitle: 'Describe yourself and how you work',
    summaryStr: `Tell people about yourself; How long have you been working in your profession? What are your influences? What projects are you most proud of?`,
    sectionTitle: 'Add a Skill',
    sectionStr: 'Expand your profile by describing your skills and experience',
  };

  const title = newProfile
    ? displayText.newTitle
    : !hasBackground
    ? displayText.bgImageTitle
    : !hasAvatar
    ? displayText.profileTitle
    : !hasSummary
    ? displayText.summaryTitle
    : displaySection && displayText.sectionTitle;
  const text = newProfile
    ? displayText.newStr
    : !hasBackground
    ? displayText.bgImage
    : !hasAvatar
    ? displayText.profileStr
    : !hasSummary
    ? displayText.summaryStr
    : displaySection && displayText.sectionStr;

  return invisible ? null : (
    <div className={classes.noticeArea}>
      <Column w={500} p={10}>
        <Typography variant="h4" align="center">
          {title}
        </Typography>
        <DividerMini />
        {text !== '' && (
          <CardComponent>
            <Typography variant="body1" align="center">
              {text}
            </Typography>
          </CardComponent>
        )}
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
        {displaySummary && (
          <Column>
            <CardComponent>
              <FieldBox
                value={summary}
                title="Summary"
                maxLength={256}
                onChangeEvent={(e) => {
                  autosave(() => {
                    updateUser({
                      variables: {
                        ...profile,
                        summary: e,
                      },
                    });
                    toaster('Saved');
                  }, null);
                  setSummary(e);
                }}
                replaceMode="loose"
                placeholder=""
                info="This is an opportunity for you to shout about yourself! Describe your
                  best genres, what it's like working with you, your work ethic,
                  successes, and process. "
                warning=""
                size="s"
                multiline={true}
              />
            </CardComponent>
            {30 - summary.length <= 0 ? (
              <IconButton
                title="Continue"
                icon="chevron_right"
                iconPos="right"
                color="text-white"
                onClickEvent={() => {
                  setProfile({ ...profile, summary: summary });
                  setInvisible(true);
                }}
              />
            ) : (
              <UnlockInfo
                str={`Enter ${
                  30 - summary.length
                } more characters to continue summary`}
                c="#fff"
              />
            )}
          </Column>
        )}
        {displaySection && (
          <AddSection
            setSections={setSections}
            sections={sections}
            userType={{
              creative: profile.creativeTrue,
              creator: profile.creatorTrue,
            }}
          />
        )}
      </Column>
    </div>
  );
}
