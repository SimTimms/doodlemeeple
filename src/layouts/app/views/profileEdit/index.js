import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { useStyles } from './styles';
import { ContentHeader } from '../../../../components/headers/contentHeader';
import { ProfileHeader } from './components/profileHeader';
import { MediaGallery } from '../../../../components/mediaGallery';
import { creativesTemp } from '../../../../testData/creatives';
import TextField from '@material-ui/core/TextField';
import { AddSection } from '../../../../components/buttons/addSection';

export function EditProfile() {
  const classes = useStyles();
  const creative = creativesTemp[0];
  console.log(creative);
  const [bgImage, setBgImage] = React.useState(creative.profileBG);
  const [userName, setUserName] = React.useState(creative.userName);
  const [summary, setSummary] = React.useState(creative.summary);
  const [gallery, setGallery] = React.useState(creative.gallery);

  const userProfile = {
    userName: userName,
    summary: summary,
    profileImg: creative.profileImg,
    gallery: gallery,
  };
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div>
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
          {creative.sections.map(
            section =>
              section.gallery && (
                <div>
                  <Divider />
                  <CardContent>
                    <TextField
                      id={'summary'}
                      label={'Summary'}
                      value={section.gallery.summary}
                      onChange={e => {
                        setSummary(e.target.value);
                      }}
                      margin="normal"
                      variant="outlined"
                      style={{ width: '100%' }}
                    />
                    <MediaGallery
                      items={section.gallery.images}
                      setItems={setGallery}
                      edit={true}
                    />
                  </CardContent>
                </div>
              ),
          )}
          <AddSection />
        </Card>
      </div>
    </Slide>
  );
}
