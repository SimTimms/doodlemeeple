import React from 'react';
import {
  Card,
  CardContent,
  Divider,
  Typography,
  Slide,
} from '@material-ui/core';
import { useStyles } from './styles';
import { ContentHeader } from '../../../../components';
import { ProfileHeader } from './components/profileHeader';
import { MediaGallery } from '../../../../components';
import { creativesTemp } from '../../../../testData/creatives';

export function Profile() {
  const classes = useStyles();
  const creative = creativesTemp[0];
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
          <ProfileHeader bgImage={creative.profileBG} profile={creative} />

          {creative.gallery && (
            <div>
              <Divider />
              <CardContent>
                <ContentHeader>TEST</ContentHeader>
                <MediaGallery
                  items={creative.gallery}
                  setItems={null}
                  edit={true}
                />
              </CardContent>
            </div>
          )}
        </Card>
      </div>
    </Slide>
  );
}
