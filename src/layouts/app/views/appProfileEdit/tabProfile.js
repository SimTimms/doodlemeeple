import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { ProfileHeader } from './components/profileHeader';
import {
  AddSection,
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
import socialTwitter from '../../../../assets/socialTwitter.svg';
import socialFacebook from '../../../../assets/socialFacebook.png';
import socialInstagram from '../../../../assets/socialInstagram.png';
import socialLinkedIn from '../../../../assets/socialLinkedIn.png';

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
                      setProfile={setProfile}
                      errors={errors}
                      setProfileImg={(url) => {
                        setProfile({ ...profile, profileImg: url });
                      }}
                      setBgImage={(url) => {
                        setProfile({ ...profile, profileBG: url });
                      }}
                      autosaveFunction={SignupMutation}
                    />
                    <Divider />
                    <FieldTitle
                      name="Social"
                      description=""
                      warning=""
                      inline={false}
                    />
                    <Row>
                      <img
                        src={socialFacebook}
                        className={classes.socialIcon}
                      />
                      <FieldBox
                        value={profile.facebook}
                        title=""
                        maxLength={256}
                        onChangeEvent={(e) => {
                          setProfile({ ...profile, facebook: e });
                          autosave(SignupMutation, 'facebook');
                        }}
                        replaceMode="loose"
                        placeholder=""
                        info=""
                        warning=""
                        size="s"
                      />
                    </Row>
                    <Row>
                      <img src={socialTwitter} className={classes.socialIcon} />
                      <FieldBox
                        value={profile.twitter}
                        title=""
                        maxLength={256}
                        onChangeEvent={(e) => {
                          setProfile({ ...profile, twitter: e });
                          autosave(SignupMutation, 'twitter');
                        }}
                        replaceMode="loose"
                        placeholder=""
                        info=""
                        warning=""
                        size="s"
                      />
                    </Row>
                    <Row>
                      <img
                        src={socialInstagram}
                        className={classes.socialIcon}
                      />
                      <FieldBox
                        value={profile.instagram}
                        title=""
                        maxLength={256}
                        onChangeEvent={(e) => {
                          setProfile({ ...profile, instagram: e });
                          autosave(SignupMutation, 'instagram');
                        }}
                        replaceMode="loose"
                        placeholder=""
                        info=""
                        warning=""
                        size="s"
                      />
                    </Row>
                    <Row>
                      <img
                        src={socialLinkedIn}
                        className={classes.socialIcon}
                      />
                      <FieldBox
                        value={profile.linkedIn}
                        title=""
                        maxLength={256}
                        onChangeEvent={(e) => {
                          setProfile({ ...profile, linkedIn: e });
                          autosave(SignupMutation, 'linkedIn');
                        }}
                        replaceMode="loose"
                        placeholder=""
                        info=""
                        warning=""
                        size="s"
                      />
                    </Row>
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
