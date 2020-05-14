import React from 'react';
import { Card, CardContent, Divider, Slide } from '@material-ui/core';
import { useStyles } from './styles';
import {
  ContentHeader,
  LoadIcon,
  IconTitle,
  InlineHeader,
  IconButton,
} from '../../../../components';

import { ProfileHeader } from './components/profileHeader';
import { MediaGallery } from '../../../../components';
import { creativesTemp } from '../../../../testData/creatives';

export function Profile() {
  const classes = useStyles();
  const creative = creativesTemp[0];
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div>
        <ContentHeader
          title="Prosfile"
          subTitle="Tell everyone about yourself, showcase the best examples of your
            work"
          button={null}
        />

        <Card className={classes.card}>
          <InlineHeader>
            <IconTitle icon="casino" title="Game Details" />
          </InlineHeader>
          <ProfileHeader bgImage={creative.profileBG} profile={creative} />
          {creative.gallery && (
            <div>
              <Divider />
              <CardContent>
                <MediaGallery
                  items={creative.gallery}
                  setImages={null}
                  setBgImage={null}
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
