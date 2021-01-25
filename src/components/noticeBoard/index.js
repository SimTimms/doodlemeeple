import React from 'react';
import { Typography, useMediaQuery } from '@material-ui/core';
import { useStyles } from './styles';
import { Column, Row, IconButton, Divider } from '../';
import { NoStripe, FeaturedCreative } from './components';

export default function NoticeBoard({
  profile,
  history,
  featuredArticle,
  setProfile,
}) {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');

  return (
    <div className={classes.root}>
      <Row h="100%">
        {!profile.creativeTrue && !profile.creatorTrue ? (
          <Column h="100%">
            <Divider />
            <Typography variant="h5" style={{ color: '#fff' }} align="center">
              Are you here to find work or to post a job?
            </Typography>
            <IconButton
              title="Let us know"
              color="text-white"
              icon="touch_app"
              styleOverride={{ marginBottom: 20, marginTop: 20 }}
              onClickEvent={() => history.push('/app/edit-profile/')}
            />
            <Divider />
          </Column>
        ) : profile.onboarding !== 'complete' &&
          (!profile.profileBG ||
            !profile.profileImg ||
            !profile.summary ||
            profile.sections.length === 0) ? (
          <Column>
            <Divider />
            <Typography variant="h5" className={classes.header5}>
              {profile.sections.length === 0
                ? 'Your profile still needs work'
                : "Let's get your profile ready"}
            </Typography>
            <Typography variant="h6" className={classes.header6}>
              {!profile.profileBG
                ? 'Set a Feature Image to continue'
                : !profile.profileImg
                ? 'Please add a profile image'
                : profile.sections.length === 0
                ? 'Add a skill to your profile'
                : 'Write something about yourself in the summary'}
            </Typography>
            <IconButton
              title="Edit your Profile"
              color="text-white"
              icon="face"
              styleOverride={{ marginBottom: 20, marginTop: 20 }}
              onClickEvent={() => history.push('/app/edit-profile/')}
            />

            <Divider />
          </Column>
        ) : (
          <Row a="flex-start">
            <NoStripe history={history} />

            {featuredArticle.id && (
              <Column bg="#222">
                {!mobile && (
                  <FeaturedCreative
                    featuredArticle={featuredArticle}
                    history={history}
                  />
                )}
              </Column>
            )}
          </Row>
        )}
      </Row>
    </div>
  );
}
