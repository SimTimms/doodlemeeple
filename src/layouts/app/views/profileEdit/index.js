import React from 'react';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './styles';
import { ContentHeader } from '../../../../components/headers/contentHeader';
import { ProfileHeader } from './components/profileHeader';
import { creativesTemp } from '../../../../testData/creatives';
import { AddSection } from '../../../../components/buttons/addSection';
import { Query } from 'react-apollo';
import { PROFILE, SECTIONS } from '../../../../data/queries';
import { ErrorBox } from '../../../../components/pageElements';
import { UpdateUserButton } from './components/updateUserButton';
import { Section, GallerySection } from './components/section';

export function EditProfile() {
  const classes = useStyles();
  const creative = creativesTemp[0];
  const [bgImage, setBgImage] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [summary, setSummary] = React.useState('');
  const [sections, setSections] = React.useState([]);
  const [errors, setError] = React.useState({
    name: null,
    email: null,
    password: null,
  });

  const userProfile = {
    userName: userName,
    summary: summary,
    profileImg: creative.profileImg,
    sections: sections,
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
          }}
        >
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>;
            if (error) return <div>Error</div>;
            return <div></div>;
          }}
        </Query>
        <ContentHeader>
          <Typography variant="h1" color="textPrimary">
            Profile
          </Typography>
          <Typography color="textSecondary" component="p">
            Tell everyone about yourself, showcase the best examples of your
            work
          </Typography>
        </ContentHeader>

        <Card className={classes.card}>
          <ProfileHeader
            bgImage={bgImage}
            profile={userProfile}
            setBgImage={setBgImage}
            setUserName={setUserName}
          />
          <UpdateUserButton
            userName={userName}
            summary={summary}
            bgImage={bgImage}
            setError={setError}
            errors={errors}
          />
          <ErrorBox errorMsg={errors.name} />
          <div style={{ padding: 10 }}>
            <TextField
              id={'summary'}
              label={'Summary'}
              value={userProfile.summary}
              onChange={e => {
                setSummary(e.target.value);
              }}
              margin="normal"
              variant="outlined"
              style={{ width: '100%' }}
            />
          </div>
          <Query
            query={SECTIONS}
            onCompleted={data => {
              console.log(data);
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
              section.gallery ? (
                <GallerySection
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
          <AddSection setSections={setSections} sections={sections} />
        </Card>
      </div>
    </Slide>
  );
}
