import React from 'react';

import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';

import { useStyles } from './styles';
import { ContentHeader } from '../../../../components/headers/contentHeader';
import { ProfileHeader } from './components/profileHeader';
import { creativesTemp } from '../../../../testData/creatives';
import { AddSection } from '../../../../components/buttons/addSection';
import { MediaGalleryObject } from './components/mediaGalleryOject';

export function EditProfile() {
  const classes = useStyles();
  const creative = creativesTemp[0];
  const [bgImage, setBgImage] = React.useState(creative.profileBG);
  const [userName, setUserName] = React.useState(creative.userName);
  const [summary, setSummary] = React.useState(creative.summary);
  const [sections, setSections] = React.useState(creative.sections);

  const userProfile = {
    userName: userName,
    summary: summary,
    profileImg: creative.profileImg,
    sections: sections,
  };

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
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
          {userProfile.sections.map((section, index) =>
            section.gallery ? (
              <div key={`gallery_${index}`}>
                <Divider />
                <MediaGalleryObject
                  gallery={section.gallery}
                  sections={sections}
                  setSections={setSections}
                  index={index}
                />
              </div>
            ) : section.graphicArtist ? (
              <div key={`graphic_${index}`}>
                <Divider />
                <MediaGalleryObject
                  gallery={section.graphicArtist}
                  sections={sections}
                  setSections={setSections}
                  index={index}
                />
              </div>
            ) : null,
          )}
          <AddSection setSections={setSections} sections={sections} />
        </Card>
      </div>
    </Slide>
  );
}
