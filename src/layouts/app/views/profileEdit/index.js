import React from 'react';
import { Slide, Icon, Typography } from '@material-ui/core';
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
  FieldTitleDashboard,
  IconButton,
  Row,
  Divider,
  Column,
  MenuButton,
} from '../../../../components';
import { Query, Mutation } from 'react-apollo';
import { PROFILE } from '../../../../data/queries';
import GallerySection from './components/section/gallerySection';
import { UPDATE_USER_MUTATION } from '../../../../data/mutations';
import { readableErrors } from '../../../../utils/readableErrors';
import { toaster } from '../../../../utils/toaster';
import autosave from '../../../../utils/autosave';

export function EditProfile({ theme, history }) {
  const classes = useStyles();
  const [profile, setProfile] = React.useState({
    name: '',
    summary: '',
    profileBG: '',
    profileImg: '',
    creativeTrue: false,
    creatorTrue: false,
  });
  const [userId, setUserId] = React.useState('');
  const [sections, setSections] = React.useState([]);
  const [profileImg, setProfileImg] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
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
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <Mutation
          mutation={UPDATE_USER_MUTATION}
          variables={{
            name: profile.name,
            summary: profile.summary,
            profileBG: profile.profileBG,
            profileImg: profile.profileImg,
            creativeTrue: profile.creativeTrue,
            creatorTrue: profile.creatorTrue,
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
                <FieldTitleDashboard
                  name="Profile"
                  inline={false}
                  a="l"
                  menu={
                    <MenuButton
                      text={{
                        name: '',
                        color: theme.palette.primary.main,
                        icon: <Icon>preview</Icon>,
                        count: changes,
                      }}
                      onClickEvent={() => {
                        history.push(`/preview/${userId}`);
                      }}
                    />
                  }
                />

                {loading ? (
                  <LoadIcon />
                ) : (profile.creativeTrue === null &&
                    profile.creatorTrue === null) ||
                  (profile.creativeTrue === false &&
                    profile.creatorTrue === false) ? (
                  <div className={classes.root}>
                    <DMCard>
                      <InlineHeader>
                        <IconTitle icon="help" title="What are you here for?" />
                      </InlineHeader>
                      <Column>
                        <div style={{ width: 300 }}>
                          <IconButton
                            title="I'm here to offer my skills"
                            icon="brush"
                            styleOverride={{ width: '100%' }}
                            iconPos="right"
                            onClickEvent={() => {
                              setProfile({
                                ...profile,
                                creativeTrue: true,
                                creatorTrue: false,
                              });
                              autosave(SignupMutation, 'username');
                            }}
                          />
                          <IconButton
                            title="I'm here to hire professionals"
                            icon="work"
                            iconPos="right"
                            styleOverride={{ width: '100%' }}
                            onClickEvent={() => {
                              setProfile({
                                ...profile,
                                creativeTrue: false,
                                creatorTrue: true,
                              });
                              autosave(SignupMutation, 'username');
                            }}
                          />
                          <IconButton
                            title="Both"
                            icon="work"
                            iconPos="right"
                            styleOverride={{ width: '100%' }}
                            onClickEvent={() => {
                              setProfile({
                                ...profile,
                                creativeTrue: true,
                                creatorTrue: true,
                              });
                              autosave(SignupMutation, 'username');
                            }}
                          />
                        </div>
                      </Column>
                    </DMCard>
                  </div>
                ) : (
                  <div className={classes.root}>
                    <DMCard>
                      <InlineHeader>
                        <IconTitle icon="account_box" title="About Me" />
                      </InlineHeader>
                      <div style={{ padding: 10 }}>
                        <FieldTitle
                          name="Feature Image"
                          description="Use this space to showcase your most impressive artwork, "
                          warning="PNG, GIF or JPG | optimum size 1920 x 300px | 1MB Max"
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
                            autosave(SignupMutation, 'username');
                          }}
                          replaceMode="loose"
                          placeholder="Example: David Jones"
                          info="Your name, callsign, company name, handle, alias or whatever else you want to be know as."
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
                              autosave(SignupMutation, 'username');
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
                        />
                      )}
                    </DMCard>
                  </div>
                )}
              </div>
            );
          }}
        </Mutation>
        <Query
          query={PROFILE}
          fetchPolicy="network-only"
          onCompleted={(data) => {
            setProfile({ ...data.profile });
            setLoading(false);
            /*
            setSections(data.profile.sections);
            setUserName(data.profile.name);
            setSummary(data.profile.summary);
            setBgImage(data.profile.profileBG);
            setUserId(data.profile._id);
            setProfileImg(data.profile.profileImg);*/
          }}
        >
          {() => {
            return null;
          }}
        </Query>
      </div>
    </Slide>
  );
}
