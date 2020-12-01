import React from 'react';
import { Typography, useMediaQuery } from '@material-ui/core';
import { useStyles } from './styles';
import { Column, Row, IconButton, LoadIcon, Divider } from '../';
import { Mutation, Query } from 'react-apollo';
import { SKIP_ONBOARDING, SET_AS_CREATOR } from '../../data/mutations';
import { PROFILE_FEATURED } from '../../data/queries';
import device from '../../assets/device.svg';
import stripeButton from '../../assets/stripe_button.png';
import stripeLogoSM from '../../assets/stripe_logo_sm.png';
import { requestStripe } from '../../utils/stripe';

export default function NoticeBoard({
  profile,
  history,
  featuredArticle,
  setProfile,
}) {
  const classes = useStyles();
  const [loadingStripe, setLoadingStripe] = React.useState(false);
  const [skip, setSkip] = React.useState(false);
  const mobile = useMediaQuery('(max-width:800px)');

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
          featuredArticle.id && (
            <Query
              query={PROFILE_FEATURED}
              variables={{ userId: featuredArticle.id }}
              fetchPolicy="network-only"
            >
              {({ data }) => {
                const linkTo = featuredArticle.article.linkTo;
                const title = featuredArticle.article.title;
                const media = featuredArticle.article.image['wp:featuredmedia']
                  ? featuredArticle.article.image['wp:featuredmedia']['0']
                      .source_url
                  : null;

                return data ? (
                  <Row>
                    {profile.sections.length === 0 &&
                    profile.creatorTrue !== true ? (
                      <Column>
                        <Typography variant="h5" className={classes.header5}>
                          Your profile isn't complete.
                        </Typography>
                        <Typography variant="h6" className={classes.header6}>
                          You'll need to add at least 1 skill section to be
                          listed on the Creative Roster.
                        </Typography>
                        <IconButton
                          title="Add a Skill"
                          color="text-white"
                          icon="brush"
                          styleOverride={{ marginBottom: 10 }}
                          onClickEvent={() =>
                            history.push('/app/edit-profile/')
                          }
                        />
                        <Mutation
                          mutation={SET_AS_CREATOR}
                          variables={{ creatorTrue: true }}
                          onCompleted={(data) => {
                            setProfile({ ...profile, creatorTrue: true });
                          }}
                        >
                          {(mutation) => {
                            return (
                              <IconButton
                                title="I'm a CREATOR"
                                color="text-white-mini"
                                icon=""
                                onClickEvent={() => mutation()}
                              />
                            );
                          }}
                        </Mutation>
                      </Column>
                    ) : profile.stripeID &&
                      (profile.stripeStatus === 'false' ||
                        profile.stripeStatus === 'error') ? (
                      profile.stripeStatus === 'false' ? (
                        <Column>
                          <Typography variant="h4" className={classes.header4}>
                            Your{' '}
                            <a
                              href="https://stripe.com"
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <img
                                src={stripeLogoSM}
                                alt="STRIPE"
                                style={{ width: 100 }}
                              />
                            </a>{' '}
                            account needs validating
                          </Typography>
                          <Typography
                            variant="h6"
                            style={{ color: '#fff', textAlign: 'center' }}
                          >
                            Please login and follow instructions to verify your
                            account
                          </Typography>
                          {loadingStripe ? (
                            <Typography
                              variant="h6"
                              style={{ color: '#fff', marginTop: 20 }}
                            >
                              Please Wait
                            </Typography>
                          ) : (
                            <Column>
                              <a
                                href="https://dashboard.stripe.com/login"
                                style={{
                                  textDecoration: 'none',
                                  color: 'rgba(255,255,255,0.5)',
                                  marginTop: 5,
                                }}
                              >
                                <IconButton
                                  title="Visit Stripe"
                                  icon="chevron_right"
                                  iconPos="right"
                                  color="stripe"
                                  onClickEvent={() => {}}
                                />
                              </a>
                              <a
                                href="https://doodlemeeple.com/activate-stripe"
                                target="_blank"
                                style={{
                                  textDecoration: 'none',
                                  color: 'rgba(255,255,255,0.9)',
                                  marginTop: 5,
                                }}
                              >
                                <Typography variant="body1">
                                  Need Help?
                                </Typography>
                              </a>
                            </Column>
                          )}
                        </Column>
                      ) : (
                        <Column>
                          <Typography variant="h4" className={classes.header4}>
                            Your{' '}
                            <a
                              href="https://stripe.com"
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <img
                                src={stripeLogoSM}
                                alt="STRIPE"
                                style={{ width: 100 }}
                              />
                            </a>{' '}
                            account has an error
                          </Typography>

                          <Column>
                            <a
                              href="mailto:support@doodlemeeple.com"
                              style={{
                                textDecoration: 'none',
                                color: 'rgba(255,255,255,0.5)',
                                marginTop: 5,
                              }}
                            >
                              <IconButton
                                title="Contact support@doodlemeeple.com"
                                icon="mail"
                                iconPos="right"
                                color="stripe"
                                onClickEvent={() => {}}
                              />
                            </a>
                          </Column>
                        </Column>
                      )
                    ) : !profile.stripeID && profile.creativeTrue ? (
                      <Column>
                        <Typography variant="h4" className={classes.header4}>
                          Connect to{' '}
                          <a
                            href="https://stripe.com"
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <img
                              src={stripeLogoSM}
                              alt="STRIPE"
                              style={{ width: 100 }}
                            />
                          </a>{' '}
                          for payments
                        </Typography>
                        <Typography
                          variant="h6"
                          style={{ color: '#fff', textAlign: 'center' }}
                        >
                          It's simple to do, just click below to begin
                        </Typography>
                        {loadingStripe ? (
                          <Typography
                            variant="h6"
                            style={{ color: '#fff', marginTop: 20 }}
                          >
                            Please Wait
                          </Typography>
                        ) : (
                          <Column>
                            <a
                              href={`https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_STRIPE_CLIENT}&scope=read_write&redirect_uri=${process.env.REACT_APP_STRIPE_REDIRECT}`}
                            >
                              <img
                                src={stripeButton}
                                style={{ width: 200 }}
                                alt=""
                              />
                            </a>

                            <a
                              href="https://doodlemeeple.com/connecting-with-stripe"
                              target="_blank"
                              style={{
                                textDecoration: 'none',
                                color: 'rgba(255,255,255,0.5)',
                                marginTop: 5,
                              }}
                            >
                              <Typography variant="body1">Read More</Typography>
                            </a>
                          </Column>
                        )}
                      </Column>
                    ) : (
                      <Column>
                        <Typography
                          variant="h4"
                          style={{ color: '#fff' }}
                          align="center"
                        >
                          Welcome to DoodleMeeple
                        </Typography>
                        {profile.creatorTrue && (
                          <IconButton
                            color="text-white"
                            disabled={false}
                            onClickEvent={() => {
                              history.push(`/app/jobs`);
                            }}
                            icon=""
                            title="Post a Job"
                            styleOverride={null}
                            type="button"
                            iconPos="right"
                          />
                        )}
                        <IconButton
                          color="text-white-mini"
                          disabled={false}
                          onClickEvent={() => {
                            history.push(`/app/creative-roster`);
                          }}
                          icon=""
                          title="View the Creative Roster"
                          styleOverride={null}
                          type="button"
                          iconPos="right"
                        />
                      </Column>
                    )}
                    {!mobile && (
                      <Column>
                        <div
                          style={{
                            minWidth: 300,
                            maxWidth: 300,
                            minHeight: 300,
                            maxHeight: 300,
                            background: `url(${media})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                          }}
                        ></div>
                        <img
                          src={
                            data.userById ? data.userById.profileImg : device
                          }
                          alt=""
                          style={{
                            minWidth: 80,
                            maxWidth: 80,
                            minHeight: 80,
                            maxHeight: 80,
                            padding: 3,
                            marginTop: -120,
                            borderRadius: '50%',
                            backgroundColor: '#fff',
                            boxShadow: '5px 5px 10px rgba(0,0,0,0.2)',
                          }}
                        />
                        <Typography variant="h6" style={{ color: '#fff' }}>
                          {title}
                        </Typography>
                        <Row>
                          <IconButton
                            color="text-white-mini"
                            disabled={false}
                            onClickEvent={() => {
                              history.push(
                                `/app/public-preview/${featuredArticle.id}`
                              );
                            }}
                            icon=""
                            title="profile"
                            styleOverride={null}
                            type="button"
                            iconPos="right"
                          />
                          <a
                            href={linkTo}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                          >
                            <IconButton
                              color="text-white-mini"
                              disabled={false}
                              onClickEvent={() => {}}
                              icon=""
                              title="article"
                              styleOverride={null}
                              type="button"
                            />
                          </a>
                        </Row>
                      </Column>
                    )}
                  </Row>
                ) : (
                  <LoadIcon />
                );
              }}
            </Query>
          )
        )}
      </Row>
    </div>
  );
}
