import React from 'react';
import { Link } from 'react-router-dom';
import { Slide, TextField } from '@material-ui/core';
import { useStyles } from './styles';
import { ProfileHeader } from './components/profileHeader';
import {
  AddSection,
  ErrorBox,
  ContentHeader,
  IconTitle,
  InlineHeader,
  FieldTitle,
  Divider,
  DMCard,
  IconButton,
  LoadIcon,
} from '../../../../components';
import { Query, Mutation } from 'react-apollo';
import { PROFILE } from '../../../../data/queries';
import { Section } from './components/section';
import GallerySection from './components/section/gallerySection';
import EditorSection from './components/section/editorSection';
import { UPDATE_USER_MUTATION } from '../../../../data/mutations';
import { readableErrors } from '../../../../utils/readableErrors';
import { toaster } from '../../../../utils/toaster';

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
  const [autosaveIsOn, setAutosaveIsOn] = React.useState(true);
  const [timer, setTimer] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
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
                  subTitleExtra={null}
                  button={null}
                />
                {loading ? (
                  <LoadIcon />
                ) : (
                  <div className={classes.root}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        paddingBottom: 5,
                      }}
                    >
                      <Link
                        to={`/preview/${userId}`}
                        style={{
                          maxWidth: 326,
                          width: '100%',
                          lineHeight: 0.6,
                        }}
                      >
                        <IconButton
                          disabled={false}
                          secondaryColor={true}
                          warning={false}
                          icon="pageview"
                          title="Preview"
                          onClickEvent={() => {}}
                          styleOverride={null}
                        />
                      </Link>
                    </div>
                    <DMCard>
                      <InlineHeader>
                        <IconTitle icon="account_box" title="About Me" />
                      </InlineHeader>
                      <div style={{ padding: 10 }}>
                        <FieldTitle
                          name="Feature Image"
                          description="Use this space to showcase your most impressive artwork, the image should be png or jpg and uner 2MB. 
                    700px x 400px is the optimum size"
                          warning=""
                          inline={false}
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
                          autosaveFunction={
                            autosaveIsOn ? SignupMutation : null
                          }
                        />

                        <ErrorBox errorMsg={errors.name} />
                        <Divider />
                        <FieldTitle
                          name="Summary"
                          description="Tell everyone about yourself. What are your influences? what's your art style? how long have you been working? Make it punchy to grab attention..."
                          warning=""
                          inline={false}
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
                            clearTimeout(timer);
                            setTimer(
                              setTimeout(() => {
                                SignupMutation();
                              }, 1000),
                            );
                            setSummary(
                              e.target.value
                                .substring(0, 256)
                                .replace(/[^A-Za-z0-9 ,\-."'\n]/g, ''),
                            );
                          }}
                          margin="normal"
                          variant="outlined"
                          style={{ width: '100%' }}
                        />
                      </div>
                    </DMCard>
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
                    <DMCard>
                      <InlineHeader>
                        <IconTitle icon="brush" title="Skills" />
                      </InlineHeader>
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
            setLoading(false);
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
          {() => {
            return null;
          }}
        </Query>
      </div>
    </Slide>
  );
}
