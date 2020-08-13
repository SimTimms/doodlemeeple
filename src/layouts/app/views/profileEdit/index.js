import React from 'react';
import { Link } from 'react-router-dom';
import { Slide } from '@material-ui/core';
import { useStyles } from './styles';
import { ProfileHeader } from './components/profileHeader';
import {
  AddSection,
  ErrorBox,
  ContentHeader,
  IconTitle,
  InlineHeader,
  FieldTitle,
  DMCard,
  IconButton,
  LoadIcon,
  FieldBox,
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
  const [bgImage, setBgImage] = React.useState(null);
  const [profileImgStyle, setProfileImgStyle] = React.useState([0, 0]);
  const [userName, setUserName] = React.useState('');
  const [userId, setUserId] = React.useState('');
  const [summary, setSummary] = React.useState('');
  const [sections, setSections] = React.useState([]);
  const [profileImg, setProfileImg] = React.useState(null);
  const [profileBGStyle, setProfileBGStyle] = React.useState([0, 0]);
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
            profileImg: userProfile.profileImg,
          }}
          onCompleted={() => {
            toaster('Autosave');
          }}
          update={(store, { data: { updateUser } }) => {
            const data = store.readQuery({ query: PROFILE });
            const profile = data.profile;
            profile.name = updateUser.name;
            profile.summary = updateUser.summary;

            store.writeQuery({ query: PROFILE, data });
          }}
          onError={(error) => {
            toaster('Error');
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
                      <IconButton
                        disabled={false}
                        color="secondary"
                        icon="pageview"
                        title="Preview"
                        onClickEvent={() => {
                          history.push(`/preview/${userId}`);
                        }}
                        styleOverride={null}
                        type="button"
                        iconPos="right"
                      />
                    </div>
                    <DMCard>
                      <InlineHeader>
                        <IconTitle icon="account_box" title="About Me" />
                      </InlineHeader>
                      <div style={{ padding: 10 }}>
                        <FieldTitle
                          name="Feature Image"
                          description="Use this space to showcase your most impressive artwork, "
                          warning="PNG or JPG | optimum size 1920 x 300px | 1MB Max"
                          inline={false}
                        />
                        <ProfileHeader
                          profile={userProfile}
                          setProfileImg={setProfileImg}
                          setBgImage={setBgImage}
                          autosaveFunction={SignupMutation}
                        />
                        <FieldTitle
                          name="About You"
                          description="Your name and a brief summary of what you do"
                          warning=""
                          inline={false}
                        />
                        <FieldBox
                          value={userProfile.userName}
                          title="Name"
                          maxLength={26}
                          onChangeEvent={(e) => {
                            autosave(SignupMutation, 'username');
                            setUserName(e);
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
                          value={userProfile.summary}
                          title="Summary"
                          maxLength={256}
                          onChangeEvent={(e) => {
                            autosave(SignupMutation, 'summary');
                            setSummary(e);
                          }}
                          replaceMode="loose"
                          placeholder="Example: Digital artist with 12 years experience..."
                          info="Coming Soon"
                          warning=""
                          size="s"
                          multiline={true}
                        />
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
            setLoading(false);
            setSections(data.profile.sections);
            setUserName(data.profile.name);
            setSummary(data.profile.summary);
            setBgImage(data.profile.profileBG);
            setUserId(data.profile._id);
            setProfileImg(data.profile.profileImg);
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
