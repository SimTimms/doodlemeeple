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
  const stripeStatus = profile.stripeStatus;

  return (
    <div className={classes.root}>
      <Row>
        {!profile.creativeTrue && !profile.creatorTrue ? (
          <Column>
            <Divider />
            <Typography variant="h5" style={{ color: '#fff' }} align="center">
              Are you a Creative or Creator?
            </Typography>
            <IconButton
              title="Update your Profile"
              color="text-white"
              icon="face"
              styleOverride={{ marginBottom: 20, marginTop: 20 }}
              onClickEvent={() => history.push('/app/edit-profile/')}
            />
            <Divider />
          </Column>
        ) : profile.onboarding !== 'complete' &&
          (!profile.profileBG || !profile.profileImg || !profile.summary) ? (
          <Column>
            <Divider />
            <Typography variant="h5" className={classes.header5}>
              Let's get your profile ready
            </Typography>
            <Typography variant="h6" className={classes.header6}>
              {!profile.profileBG
                ? 'Set a Feature Image to continue'
                : !profile.profileImg
                ? 'Please add a profile image'
                : 'Write something about yourself in the summary'}
            </Typography>
            <IconButton
              title="Create a Profile"
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
