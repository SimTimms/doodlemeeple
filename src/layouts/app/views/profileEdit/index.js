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
} from '../../../../components';
import { Query, Mutation } from 'react-apollo';
import { PROFILE, SECTIONS } from '../../../../data/queries';
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
    autosave: autosaveIsOn,
  };

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <Query
          query={PROFILE}
          onCompleted={(data) => {
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
                <ContentHeader>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                    }}
                  >
                    <Typography variant="h1" color="textPrimary">
                      Profile
                    </Typography>
                  </div>
                  <Typography color="textSecondary" component="p">
                    Tell everyone about yourself, showcase the best examples of
                    your work
                  </Typography>
                </ContentHeader>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingBottom: 5,
                  }}
                >
                  <label
                    htmlFor="material-switch"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      color="textSecondary"
                      component="p"
                      style={{ marginTop: -2, paddingRight: 5 }}
                    >
                      AUTOSAVE
                    </Typography>
                    <Switch
                      checked={autosaveIsOn}
                      onChange={(checked) => {
                        setAutosaveIsOn(checked);
                        userProfile.autosave = checked;
                        SignupMutation();
                      }}
                      onColor={theme.palette.primary.main}
                      handleDiameter={30}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      offColor="#ddd"
                      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                      height={20}
                      width={48}
                      id="material-switch"
                    />
                  </label>
                  {!autosaveIsOn && (
                    <UpdateUserButton
                      profile={userProfile}
                      setError={setError}
                      errors={errors}
                      disabledValue={disabledValue}
                      setDisabledValue={setDisabledValue}
                      toast={() => {
                        toaster('Saved');
                      }}
                    />
                  )}
                  <Link
                    to={`/preview/${userId}`}
                    style={{ maxWidth: 326, width: '100%', lineHeight: 0.6 }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ width: 60, marginLeft: 10 }}
                    >
                      <Icon style={{ fontSize: 18, color: '#fff' }}>
                        pageview
                      </Icon>
                    </Button>
                  </Link>
                </div>
                <Card className={classes.card}>
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
                  <div style={{ padding: 10 }}>
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
                          e.target.value.replace(
                            /[^A-Za-z0-9 ,\-\.\"\'\n]/g,
                            '',
                          ),
                        );
                      }}
                      margin="normal"
                      variant="outlined"
                      style={{ width: '100%' }}
                    />
                  </div>
                  <Query
                    query={SECTIONS}
                    onCompleted={(data) => {
                      setSections(data.getSections);
                    }}
                    fetchPolicy="network-only"
                  >
                    {({ loading, error, data }) => {
                      if (loading) return <div>Fetching</div>;
                      if (error) return <div>Error</div>;
                      return null;
                    }}
                  </Query>
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
                  {sections.length < 3 && (
                    <AddSection setSections={setSections} sections={sections} />
                  )}
                </Card>
              </div>
            );
          }}
        </Mutation>
      </div>
    </Slide>
  );
}
