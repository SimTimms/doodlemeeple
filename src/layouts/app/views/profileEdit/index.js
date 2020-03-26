import React from 'react';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './styles';
import { ContentHeader } from '../../../../components/headers/contentHeader';
import { ProfileHeader } from './components/profileHeader';
import { AddSection } from '../../../../components/buttons/addSection';
import { Query } from 'react-apollo';
import { PROFILE, SECTIONS } from '../../../../data/queries';
import { ErrorBox } from '../../../../components/pageElements';
import { UpdateUserButton } from './components/updateUserButton';
import { Section, GallerySection, EditorSection } from './components/section';
import Button from '@material-ui/core/Button';

export function EditProfile() {
  const classes = useStyles();
  const [bgImage, setBgImage] = React.useState(null);
  const [profileImgStyle, setProfileImgStyle] = React.useState([0, 0]);
  const [userName, setUserName] = React.useState('');
  const [summary, setSummary] = React.useState('');
  const [sections, setSections] = React.useState([]);
  const [profileImg, setProfileImg] = React.useState(null);
  const [profileBGStyle, setProfileBGStyle] = React.useState([0, 0]);
  const [disabledValue, setDisabledValue] = React.useState(false);
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
  };

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <Query
          query={PROFILE}
          onCompleted={data => {
            setUserName(data.profile.name);
            setSummary(data.profile.summary);
            setBgImage(data.profile.profileBG);
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
            if (loading) return <div>Fetching</div>;
            if (error) return <div>Error</div>;
            return <div></div>;
          }}
        </Query>
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
            Tell everyone about yourself, showcase the best examples of your
            work
          </Typography>
        </ContentHeader>
        {/*}
        <Button
          variant="contained"
          color="primary"
          style={{ width: 60, margin: 10 }}
        >
          <Icon style={{ fontSize: 18, color: '#fff' }}>pageview</Icon>
          </Button>*/}
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
              onChange={e => {
                setDisabledValue(true);
                setSummary(e.target.value.replace(/[^A-Za-z0-9 \n]/g, ''));
              }}
              margin="normal"
              variant="outlined"
              style={{ width: '100%' }}
            />
            <UpdateUserButton
              profile={userProfile}
              setError={setError}
              errors={errors}
              disabledValue={disabledValue}
              setDisabledValue={setDisabledValue}
            />
          </div>
          <Query
            query={SECTIONS}
            onCompleted={data => {
              setSections(data.getSections);
            }}
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
                />
              ) : section.type === 'rulebook-editor' ? (
                <EditorSection
                  key={`section_${index}`}
                  index={index}
                  sections={sections}
                  setSections={setSections}
                  section={section}
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
    </Slide>
  );
}
