import React from 'react';
import { Link } from 'react-router-dom';
import {
  Icon,
  Card,
  Typography,
  Slide,
  TextField,
  Button,
} from '@material-ui/core';
import { useStyles } from './styles';
import { ProfileHeader } from './components/profileHeader';

import {
  AddSection,
  LoadIcon,
  ErrorBox,
  ContentHeader,
  IconTitle,
  InlineHeader,
  FieldTitle,
} from '../../../../components';
import { Query, Mutation } from 'react-apollo';
import { PROFILE } from '../../../../data/queries';
import { UpdateUserButton } from './components/updateUserButton';
import { Section } from './components/section';
import GallerySection from './components/section/gallerySection';
import EditorSection from './components/section/editorSection';
import { UPDATE_USER_MUTATION } from '../../../../data/mutations';
import { readableErrors } from '../../../../utils/readableErrors';
import { toaster } from '../../../../utils/toaster';
import Switch from 'react-switch';

export function EditProfile({ theme }) {
  const classes = useStyles();
  const [bgImage, setBgImage] = React.useState(null);
  const [profileImgStyle, setProfileImgStyle] = React.useState([0, 0]);
  const [userName, setUserName] = React.useState('');
  const [userId, setUserId] = React.useState('');
  const [summary, setSummary] = React.useState('');
  const [sections, setSections] = React.useState([]);
  const [profileImg, setProfileImg] = React.useState(null);
  const [profileBGStyle, setProfileBGStyle] = React.useState([0, 0]);
  const [disabledValue, setDisabledValue] = React.useState(false);
  const [autosaveIsOn, setAutosaveIsOn] = React.useState(true);
  const [timer, setTimer] = React.useState(null);

  const [errors, setError] = React.useState({
    name: null,
    email: null,
    password: null,
  });

  const userProfile = {
    userName,
    summary,
    profileImg,
    bgImage,
    sections,
    profileImgStyle,
    profileBGStyle,
    autosave: true,
  };

  function hasNew() {
    const ids = sections.map((item) => item.id);
    const filterIds = ids.filter((item) => item === 'new');
    return filterIds.length;
  }

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <Mutation
          mutation={UPDATE_USER_MUTATION}
          variables={{
            name: userProfile.userName,
            summary: userProfile.summary,
            profileBG: userProfile.bgImage,
            profileBGStyle: userProfile.profileBGStyle.join(':'),
            profileImg: userProfile.profileImg,
            profileImgStyle: userProfile.profileImgStyle.join(':'),
            autosave: userProfile.autosave,
            sections: [],
          }}
          update={(store, { data: { updateUser } }) => {
            const data = store.readQuery({ query: PROFILE });
            toaster('Saved');

            const profile = data.profile;
            profile.name = updateUser.name;
            profile.summary = updateUser.summary;

            store.writeQuery({ query: PROFILE, data });
          }}
          onError={(error) => {
            setError(readableErrors(error, errors));
          }}
        >
          {(SignupMutation) => {
            return (
              <div className={classes.root}>
                <ContentHeader
                  title="Profile"
                  subTitle="Tell everyone about yourself, showcase the best examples of
                    your work"
                  button={null}
                />
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingBottom: 5,
                  }}
                >
                  <Link
                    to={`/preview/${userId}`}
                    style={{ maxWidth: 326, width: '100%', lineHeight: 0.6 }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ width: 100, marginLeft: 10 }}
                    >
                      <Icon
                        style={{ fontSize: 18, color: '#fff', marginRight: 10 }}
                      >
                        pageview
                      </Icon>
                      Preview
                    </Button>
                  </Link>
                </div>
                <Card className={classes.card}>
                  <InlineHeader>
                    <IconTitle icon="account_box" title="About Me" />
                  </InlineHeader>
                  <div style={{ padding: 10 }}>
                    <FieldTitle
                      name="Feature Image"
                      description="Use this space to showcase your most impressive artwork, the image should be png or jpg and uner 2MB. 
                    700px x 400px is the optimum size"
                      warning=""
                    />

                    <ProfileHeader
                      profile={userProfile}
                      setProfileImg={setProfileImg}
                      setProfileImgStyle={setProfileImgStyle}
                      setBgImage={setBgImage}
                      profileBGStyle={profileBGStyle}
                      setProfileBGStyle={setProfileBGStyle}
                      profileImgStyle={profileImgStyle}
                      setUserName={setUserName}
                      setDisabledValue={setDisabledValue}
                      autosaveFunction={autosaveIsOn ? SignupMutation : null}
                    />

                    <ErrorBox errorMsg={errors.name} />

                    <FieldTitle
                      name="Summary"
                      description="Tell everyone about yourself. What are your influences? what's your art style? how long have you been working? Make it punchy to grab attention..."
                      warning=""
                    />
                    <TextField
                      id={'summary'}
                      label={`About Me ${
                        userProfile.summary
                          ? `(${256 - userProfile.summary.length})`
                          : ''
                      }`}
                      inputProps={{ maxLength: 256 }}
                      multiline
                      type="text"
                      value={userProfile.summary}
                      onChange={(e) => {
                        setDisabledValue(true);
                        clearTimeout(timer);
                        setTimer(
                          setTimeout(() => {
                            SignupMutation();
                          }, 1000),
                        );
                        setSummary(
                          e.target.value.replace(/[^A-Za-z0-9 ,\-."'\n]/g, ''),
                        );
                      }}
                      margin="normal"
                      variant="outlined"
                      style={{ width: '100%' }}
                    />
                  </div>
                </Card>{' '}
                {sections &&
                  sections.map((section, index) =>
                    section.type === 'artist' ||
                    section.type === 'graphic-artist' ||
                    section.type === '3d-artist' ? (
                      <GallerySection
                        key={`section_${index}`}
                        index={index}
                        sections={sections}
                        setSections={setSections}
                        section={section}
                        autosaveIsOn={autosaveIsOn}
                      />
                    ) : section.type === 'rulebook-editor' ? (
                      <EditorSection
                        key={`section_${index}`}
                        index={index}
                        sections={sections}
                        setSections={setSections}
                        section={section}
                        autosaveIsOn={autosaveIsOn}
                      />
                    ) : section.summary !== null ? (
                      <Section
                        key={`section_${index}`}
                        index={index}
                        sections={sections}
                        setSections={setSections}
                        section={section}
                      />
                    ) : null,
                  )}
                <Card className={classes.card}>
                  <InlineHeader>
                    <IconTitle icon="brush" title="Skills" />
                  </InlineHeader>
                  {sections.length < 3 && hasNew() === 0 && (
                    <AddSection setSections={setSections} sections={sections} />
                  )}
                </Card>
              </div>
            );
          }}
        </Mutation>
        <Query
          query={PROFILE}
          fetchPolicy="network-only"
          onCompleted={(data) => {
            setSections(data.profile.sections);
            setUserName(data.profile.name);
            setSummary(data.profile.summary);
            setBgImage(data.profile.profileBG);
            setUserId(data.profile.id);
            setAutosaveIsOn(data.profile.autosave);
            setProfileBGStyle(
              data.profile.profileBGStyle
                ? data.profile.profileBGStyle.split(':')
                : [0, 0],
            );
            setProfileImg(data.profile.profileImg);
            setProfileImgStyle(
              data.profile.profileImgStyle
                ? data.profile.profileImgStyle.split(':')
                : [0, 0],
            );
          }}
        >
          {({ loading, error, data }) => {
            if (loading) return <LoadIcon />;
            if (error) return <div>Error</div>;
            return <div></div>;
          }}
        </Query>
      </div>
    </Slide>
  );
}
