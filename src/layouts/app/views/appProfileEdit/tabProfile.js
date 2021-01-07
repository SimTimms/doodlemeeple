import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { ProfileHeader } from './components/profileHeader';
import {
  AddSection,
  ErrorBox,
  IconTitle,
  InlineHeader,
  FieldTitle,
  DMCard,
  LoadIcon,
  FieldBox,
  IconButton,
  Row,
  Divider,
} from '../../../../components';
import { Mutation } from 'react-apollo';
import GallerySection from './components/section/gallerySection';
import { UPDATE_USER_MUTATION } from '../../../../data/mutations';
import { readableErrors } from '../../../../utils/readableErrors';
import { toaster } from '../../../../utils/toaster';
import autosave from '../../../../utils/autosave';
import RoleObject from './components/roleObject';

export default function AppProfileEdit({
  profile,
  loading,
  setProfile,
  sections,
  setSections,
}) {
  const classes = useStyles();
  const [changes, setChanges] = React.useState(0);
  const [errors, setError] = React.useState({
    name: null,
    email: null,
    password: null,
  });

  function hasNew() {
    const ids = sections.map((item) => item.id);
    const filterIds = ids.filter((item) => item === 'new');
    return filterIds.length;
  }

  function addChanges() {
    setChanges(changes + 1);
  }

  return (
    <Mutation
      mutation={UPDATE_USER_MUTATION}
      variables={{
        ...profile,
      }}
      onCompleted={() => {
        toaster('Autosave');
        setChanges(changes + 1);
      }}
      onError={(error) => {
        toaster('Error');
        setError(readableErrors(error, errors));
      }}
    >
      {(SignupMutation) => {
        return (
          <div className={classes.root}>
            <Divider />

            {loading ? (
              <LoadIcon />
            ) : (profile.creativeTrue === null &&
                profile.creatorTrue === null) ||
              (profile.creativeTrue === false &&
                profile.creatorTrue === false) ? (
              <div className={classes.root}>
                <RoleObject
                  profile={profile}
                  setProfile={setProfile}
                  SignupMutation={SignupMutation}
                />
              </div>
            ) : (
              <div className={classes.root}>
                <DMCard>
                  <InlineHeader>
                    <IconTitle icon="face" title="About Me" />
                  </InlineHeader>
                  <div style={{ padding: 10 }}>
                    <FieldTitle
                      name="Feature Image"
                      description="Use this space to showcase your most impressive artwork, "
                      warning="PNG or JPG | optimum size 1920 x 300px | 2MB Max"
                      inline={false}
                    />
                    <ProfileHeader
                      profile={profile}
                      setProfileImg={(url) => {
                        setProfile({ ...profile, profileImg: url });
                      }}
                      setBgImage={(url) => {
                        setProfile({ ...profile, profileBG: url });
                      }}
                      autosaveFunction={SignupMutation}
                    />
                    <FieldTitle
                      name="About You"
                      description="Your name and a brief summary of what you do"
                      warning=""
                      inline={false}
                    />
                    <FieldBox
                      value={profile.name}
                      title="Name"
                      maxLength={26}
                      onChangeEvent={(e) => {
                        setProfile({ ...profile, name: e });
                        e.length > 5 && autosave(SignupMutation, 'username');
                      }}
                      replaceMode="loose"
                      placeholder="Example: David Jones"
                      info="Your name"
                      warning=""
                      size="s"
                      multiline={false}
                    />
                    <ErrorBox errorMsg={errors.name} />
                    <FieldBox
                      value={profile.summary}
                      title="Summary"
                      maxLength={256}
                      onChangeEvent={(e) => {
                        setProfile({ ...profile, summary: e });
                        autosave(SignupMutation, 'summary');
                      }}
                      replaceMode="loose"
                      placeholder="Example: Digital artist with 12 years experience..."
                      info="Coming Soon"
                      warning=""
                      size="s"
                      multiline={true}
                    />
                    <Divider />
                    <FieldTitle
                      name="Your Role"
                      description="Define what you are looking for on DoodleMeeple"
                      warning=""
                      inline={false}
                    />
                    <Row j="space-between">
                      <Typography>{`You're registered as a ${
                        profile.creativeTrue && profile.creatorTrue
                          ? 'Creative and a Creator'
                          : profile.creativeTrue
                          ? 'Creative'
                          : 'Creator'
                      } `}</Typography>
                      <IconButton
                        title="Change"
                        icon=""
                        iconPos="right"
                        color="primary"
                        onClickEvent={() => {
                          setProfile({
                            ...profile,
                            creativeTrue: false,
                            creatorTrue: false,
                          });
                        }}
                      />
                    </Row>
                  </div>
                </DMCard>
                {sections &&
                  sections.map((section, index) => (
                    <GallerySection
                      key={`section_${index}`}
                      index={index}
                      sections={sections}
                      setSections={setSections}
                      section={section}
                      autosaveIsOn={true}
                      setChanges={addChanges}
                    />
                  ))}
                <DMCard>
                  {sections.length < 3 && hasNew() === 0 && (
                    <InlineHeader>
                      <IconTitle icon="brush" title="Skills" />
                    </InlineHeader>
                  )}
                  {sections.length < 3 && hasNew() === 0 && (
                    <AddSection
                      setSections={setSections}
                      sections={sections}
                      userType={{
                        creative: profile.creativeTrue,
                        creator: profile.creatorTrue,
                      }}
                    />
                  )}
                </DMCard>
              </div>
            )}
          </div>
        );
      }}
    </Mutation>
  );
}
