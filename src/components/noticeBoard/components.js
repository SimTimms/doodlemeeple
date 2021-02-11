import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { Column, IconButton, LoadIcon, Row } from '../';
import { Mutation, Query } from 'react-apollo';
import { SET_AS_CREATOR } from '../../data/mutations';
import stripeLogoSM from '../../assets/stripe_logo_sm.png';
import { PROFILE_FEATURED } from '../../data/queries';
import device from '../../assets/device.svg';
import { excerptReplace } from '../../utils/excerptReplace';
import miniOne from '../../assets/miniOne.jpg';
import { CategoryBox, CategoryBoxMini } from './categoryBox';

export function FeaturedCreative({ history, featuredArticle }) {
  const classes = useStyles();

  return (
    <Query query={PROFILE_FEATURED} variables={{ userId: featuredArticle.id }}>
      {({ data, loading }) => {
        const linkTo = featuredArticle.article.linkTo;
        const title = featuredArticle.article.title;
        const excerpt = excerptReplace(featuredArticle.article.excerpt);
        const media = featuredArticle.article.image['wp:featuredmedia']
          ? featuredArticle.article.image['wp:featuredmedia']['0'].source_url
          : null;
        return loading ? null : data ? (
          <Column>
            <div
              className={classes.articlePanel}
              style={{
                backgroundImage: `url(${media})`,
              }}
            ></div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                flexDirection: 'column',
              }}
            >
              <div className={classes.excerptBack}>
                <Row pb={10} pt={10}>
                  <img
                    src={data.userById ? data.userById.profileImg : device}
                    alt=""
                    className={classes.articleAvatar}
                  />
                  <Column a="flex-end" p="0 10px 0 0 ">
                    <Typography variant="h6" style={{ color: '#fff' }}>
                      {excerpt}
                    </Typography>
                    <Typography variant="body1" style={{ color: '#fff' }}>
                      {title}
                    </Typography>
                  </Column>
                </Row>
              </div>
              <Row>
                <div className={classes.options}>
                  <IconButton
                    color="text-white-mini"
                    disabled={false}
                    onClickEvent={() => {
                      history.push(`/app/public-preview/${featuredArticle.id}`);
                    }}
                    icon="face"
                    title="View Profile"
                    styleOverride={null}
                    type="button"
                    iconPos="left"
                  />
                  <div
                    style={{
                      height: 20,
                      borderLeft: '1px solid rgba(255,255,255,0.4)',
                    }}
                  ></div>
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
                      icon="article"
                      title="Read Article"
                      styleOverride={null}
                      type="button"
                      iconPos="right"
                    />
                  </a>
                </div>
              </Row>
            </div>
          </Column>
        ) : loading ? (
          <div className={classes.articlePanel}>Loading</div>
        ) : (
          <LoadIcon />
        );
      }}
    </Query>
  );
}

export function WelcomeToDM({ profile, history }) {
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
      <Typography variant="h6" className={classes.header5}>
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

export function NoStripe({ history }) {
  const classes = useStyles();

  return (
    <Column a="space-between" j="space-between" h={300}>
      <Column h="100%" a="center" j="center" bg="#111">
        <Row>
          <CategoryBox
            title="Miniature Painters"
            type="mini-painter"
            history={history}
          />
          <CategoryBox
            img={miniOne}
            title="Artists"
            type="artist"
            history={history}
          />
          <CategoryBox
            title="Graphic Artists"
            type="graphic-artist"
            history={history}
          />
        </Row>
        <Row o={0.8}>
          <CategoryBoxMini type="reviewer" title="Reviewer" history={history} />
          <CategoryBoxMini type="voice-actor" title="Voice" history={history} />
          <CategoryBoxMini
            type="video-editor"
            title="Video"
            history={history}
          />
          <CategoryBoxMini
            type="marketing"
            title="Marketing"
            history={history}
          />
        </Row>
        <Row o={0.6}>
          <CategoryBoxMini
            type="games-developer"
            title="Developer"
            history={history}
          />
          <CategoryBoxMini
            type="proof-reader"
            title="Proof Reader"
            history={history}
          />
          <CategoryBoxMini
            type="translator"
            title="Translator"
            history={history}
          />
          <CategoryBoxMini
            type="play-tester"
            img={miniOne}
            title="Play Tester"
            history={history}
          />
        </Row>
      </Column>

      <Column>
        <IconButton
          color="text-white-mini"
          disabled={false}
          onClickEvent={() => {
            history.push('/app/creative-roster');
          }}
          icon="chevron_right"
          title="All Categories"
          styleOverride={null}
          type="button"
          iconPos="right"
        />
      </Column>
    </Column>
  );
}
