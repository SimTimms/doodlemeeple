import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { Column, IconButton, Divider, LoadIcon, Row } from '../';
import { Mutation } from 'react-apollo';
import { SET_AS_CREATOR } from '../../data/mutations';
import stripeButton from '../../assets/stripe_button.png';
import stripeLogoSM from '../../assets/stripe_logo_sm.png';
import { Query } from 'react-apollo';
import { PROFILE_FEATURED } from '../../data/queries';
import device from '../../assets/device.svg';

export function FeaturedCreative({ history, featuredArticle }) {
  const classes = useStyles();

  return (
    <Query query={PROFILE_FEATURED} variables={{ userId: featuredArticle.id }}>
      {({ data, loading }) => {
        const linkTo = featuredArticle.article.linkTo;
        const title = featuredArticle.article.title;
        const media = featuredArticle.article.image['wp:featuredmedia']
          ? featuredArticle.article.image['wp:featuredmedia']['0'].source_url
          : null;

        return data ? (
          <Column>
            <div
              className={classes.articlePanel}
              style={{
                backgroundImage: `url(${media})`,
              }}
            ></div>
            <img
              src={data.userById ? data.userById.profileImg : device}
              alt=""
              className={classes.articleAvatar}
            />
            <Typography variant="h6" style={{ color: '#fff' }}>
              {title}
            </Typography>
            <Row>
              <IconButton
                color="text-white-mini"
                disabled={false}
                onClickEvent={() => {
                  history.push(`/app/public-preview/${featuredArticle.id}`);
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
            <Divider />
          </Column>
        ) : loading ? (
          <div className={classes.articlePanel}>addasdas</div>
        ) : (
          <LoadIcon />
        );
      }}
    </Query>
  );
}

export function WelcomeToDM({ profile, history }) {
  const classes = useStyles();

  return (
    <Column>
      <Typography variant="h4" style={{ color: '#fff' }} align="center">
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
          title="Post a Project"
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
  );
}

export function AddASkill({ profile, history, setProfile }) {
  const classes = useStyles();

  return (
    <Column>
      <Typography variant="h5" className={classes.header5}>
        Your profile isn't complete.
      </Typography>
      <Typography variant="h6" className={classes.header6}>
        You'll need to add at least 1 skill section to be listed on the Creative
        Roster.
      </Typography>
      <IconButton
        title="Add a Skill"
        color="text-white"
        icon="brush"
        styleOverride={{ marginBottom: 10 }}
        onClickEvent={() => history.push('/app/edit-profile/')}
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
  );
}

export function StripeRequired() {
  const classes = useStyles();

  return (
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
          <img src={stripeLogoSM} alt="STRIPE" style={{ width: 100 }} />
        </a>{' '}
        account needs validating
      </Typography>
      <Typography variant="h6" style={{ color: '#fff', textAlign: 'center' }}>
        Please login and follow instructions to verify your account
      </Typography>
      {
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
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: 'rgba(255,255,255,0.9)',
              marginTop: 5,
            }}
          >
            <Typography variant="body1">Need Help?</Typography>
          </a>
        </Column>
      }
    </Column>
  );
}

export function StripeError() {
  const classes = useStyles();

  return (
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
          <img src={stripeLogoSM} alt="STRIPE" style={{ width: 100 }} />
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
  );
}

export function NoStripe() {
  const classes = useStyles();

  return (
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
          <img src={stripeLogoSM} alt="STRIPE" style={{ width: 100 }} />
        </a>{' '}
        for payments
      </Typography>
      <Typography variant="h6" style={{ color: '#fff', textAlign: 'center' }}>
        It's simple to do, just click below to begin
      </Typography>
      <Divider />
      {
        <Column>
          <a
            href={`https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_STRIPE_CLIENT}&scope=read_write&redirect_uri=${process.env.REACT_APP_STRIPE_REDIRECT}`}
          >
            <img src={stripeButton} style={{ width: 200 }} alt="" />
          </a>

          <a
            href="https://doodlemeeple.com/connecting-with-stripe"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: 'rgba(255,255,255,0.5)',
              marginTop: 5,
            }}
          >
            <Typography variant="body1">Read More</Typography>
          </a>
        </Column>
      }
    </Column>
  );
}
