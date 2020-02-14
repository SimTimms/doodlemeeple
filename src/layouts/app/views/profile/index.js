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
          <CardContent>
            <Typography color="textSecondary" component="p">
              {creative.summary}
            </Typography>
          </CardContent>

          {creative.gallery && (
            <div>
              <Divider />
              <CardContent>
                <ContentHeader>TEST</ContentHeader>
                <MediaGallery
                  items={creative.gallery}
                  sketches={null}
                  setSketches={null}
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
