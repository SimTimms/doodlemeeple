import React, { useEffect } from 'react';
import { useStyles } from './styles';
import { ProfileHeader } from './components/profileHeader';
import {
  AddSection,
  IconTitle,
  InlineHeader,
  FieldBox,
  DMCard,
  LoadIcon,
  InputLabel,
  Row,
  Divider,
  RoleObject,
} from '../../../../components';
import { Mutation } from 'react-apollo';
import GallerySection from './components/section/gallerySection';
import { UPDATE_USER_MUTATION } from '../../../../data/mutations';
import { readableErrors } from '../../../../utils/readableErrors';
import { toaster } from '../../../../utils/toaster';
import autosave from '../../../../utils/autosave';
import * as social from '../../../../assets/social';
import SocialHeader from './socialHeader';

export default function TabProfile({
  profile,
  loading,
  setProfile,
  sections,
  setSections,
  ...props
}) {
  const classes = useStyles();
  const [changes, setChanges] = React.useState(0);
  const [showRole, setShowRole] = React.useState(false);
  const [visible, setVisible] = React.useState({
    publicEmail: false,
    website: false,
    skype: false,
    facebook: false,
    twitter: false,
    linkedIn: false,
    instagram: false,
  });
  const [errors, setError] = React.useState({
    name: null,
    email: null,
    password: null,
  });
  const { badges } = props;
  const maxSkill = badges
    ? badges.filter((badge) => badge.badgeType === 'golden').length > 0
      ? 6
      : 3
    : 3;

  useEffect(() => {
    setVisible({
      publicEmail: profile.publicEmail,
      website: profile.website,
      skype: profile.skype,
      facebook: profile.facebook,
      twitter: profile.twitter,
      linkedIn: profile.linkedIn,
      instagram: profile.instagram,
    });
  }, [profile]);

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
            ) : showRole ? (
              <RoleObject
                profile={profile}
                setProfile={setProfile}
                SignupMutation={SignupMutation}
                onClickEvent={() => setShowRole(false)}
              />
            ) : (
              <div className={classes.root}>
                <DMCard>
                  <InlineHeader>
                    <IconTitle icon="face" title="About Me" />
                  </InlineHeader>
                  <div style={{ padding: 10 }}>
                    <InputLabel
                      title="Feature Image"
                      info="Use this space to showcase your most impressive artwork, "
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
                  </div>
                </DMCard>
                {/*
                <DMCard>
                  <InlineHeader>
                    <IconTitle icon="work" title="My Roles" />
                  </InlineHeader>
                  <div style={{ padding: 10 }}>
                    <Row j="space-between">
                      <Typography>{`You're registered as a ${
                        profile.creativeTrue && profile.creatorTrue
                          ? 'Creative and a Client'
                          : profile.creativeTrue
                          ? 'Creative'
                          : 'Client'
                      } `}</Typography>
                      <IconButton
                        title="Change"
                        icon=""
                        iconPos="right"
                        color="primary"
                        onClickEvent={() => {
                          setShowRole(true);
                        }}
                      />
                    </Row>
                  </div>
                      </DMCard>*/}
                <DMCard>
                  <InlineHeader>
                    <IconTitle icon="mail" title="Contact" />
                  </InlineHeader>
                  <div style={{ padding: 10 }}>
                    <Row mb={10}>
                      <FieldBox
                        value={profile.publicEmail}
                        title="Public Email"
                        maxLength={256}
                        onChangeEvent={(e) => {
                          setProfile({ ...profile, publicEmail: e });
                          autosave(SignupMutation, 'publicEmail');
                        }}
                        replaceMode="loose"
                        placeholder="my.email@hotmail.com"
                        info="This will be displayed to all users, both registered and those that visit the site as guests."
                        warning="We won't use this to contact you but others may, we'd recommend leaving this blank if you don't want unsolicited contact"
                        size="s"
                      />
                    </Row>
                    <Row mb={10}>
                      <FieldBox
                        value={profile.website}
                        title="Website"
                        maxLength={256}
                        onChangeEvent={(e) => {
                          setProfile({ ...profile, website: e });
                          autosave(SignupMutation, 'website');
                        }}
                        replaceMode="loose"
                        placeholder="https://mywebsite.com"
                        info="Your website, or social media page"
                        warning=""
                        size="s"
                      />
                    </Row>
                    <Row mb={10}>
                      <FieldBox
                        value={profile.skype}
                        title="Skype"
                        maxLength={86}
                        onChangeEvent={(e) => {
                          setProfile({ ...profile, skype: e });
                          autosave(SignupMutation, 'skype');
                        }}
                        replaceMode="loose"
                        placeholder=""
                        info="Your Skype ID, this will be visible to all users."
                        warning="We won't use this to contact you but others may, we'd recommend leaving this blank if you don't want unsolicited contact"
                        size="s"
                      />
                    </Row>
                  </div>
                </DMCard>
                <DMCard>
                  <InlineHeader>
                    <IconTitle icon="link" title="Social" />
                  </InlineHeader>
                  <div style={{ padding: 10 }}>
                    <SocialHeader
                      profile={profile}
                      visible={visible}
                      setVisible={setVisible}
                    />
                    <Divider />

                    <Row v={!visible.facebook && 'none'} mb={10}>
                      <FieldBox
                        value={profile.facebook}
                        title="Facebook"
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
                        icon={social.socialFacebook}
                      />
                    </Row>
                    <Row v={!visible.twitter && 'none'} mb={10}>
                      <FieldBox
                        value={profile.twitter}
                        title="Twitter"
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
                        icon={social.socialTwitter}
                      />
                    </Row>
                    <Row v={!visible.instagram && 'none'} mb={10}>
                      <FieldBox
                        value={profile.instagram}
                        title="Instagram"
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
                        icon={social.socialInstagram}
                      />
                    </Row>
                    <Row v={!visible.linkedIn && 'none'} mb={10}>
                      <FieldBox
                        value={profile.linkedIn}
                        title="LinkedIn"
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
                        icon={social.socialLinkedIn}
                      />
                    </Row>
                  </div>
                </DMCard>
                {sections &&
                  sections.map((section, index) => (
                    <DMCard>
                      <GallerySection
                        key={`section_${index}`}
                        index={index}
                        sections={sections}
                        setSections={setSections}
                        section={section}
                        autosaveIsOn={true}
                        setChanges={addChanges}
                        badges={profile.badges}
                      />
                    </DMCard>
                  ))}
                <DMCard>
                  {sections.length < maxSkill && hasNew() === 0 && (
                    <InlineHeader>
                      <IconTitle icon="brush" title="Skills" />
                    </InlineHeader>
                  )}
                  {sections.length < maxSkill && hasNew() === 0 && (
                    <AddSection
                      setSections={setSections}
                      sections={sections}
                      userType={{
                        creative: profile.creativeTrue,
                        creator: profile.creatorTrue,
                      }}
                      badges={profile.badges}
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
