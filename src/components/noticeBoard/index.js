import React from 'react';
import { useMediaQuery, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { Column, Row, IconButton, LoadIcon } from '../';
import { Mutation, Query } from 'react-apollo';
import { SKIP_ONBOARDING, SET_AS_CREATOR } from '../../data/mutations';
import { PROFILE_FEATURED } from '../../data/queries';
import device from '../../assets/device.svg';

export default function NoticeBoard({
  profile,
  history,
  featuredArticle,
  setProfile,
}) {
  const mobile = useMediaQuery('(max-width:800px)');
  const classes = useStyles();
  console.log(featuredArticle);
  return (
    <div className={classes.root}>
      <Row>
        {profile.onboarding !== 'complete' && !profile.profileBG ? (
          <Column>
            <Typography variant="h5" style={{ color: '#fff' }}>
              Welcome to DoodleMeeple, let's get started
            </Typography>
            <IconButton
              title="Create a Profile"
              color="text-white"
              icon="contact_mail"
              styleOverride={{ marginBottom: 0 }}
              onClickEvent={() => history.push('/app/edit-profile/')}
            />
            <Mutation mutation={SKIP_ONBOARDING}>
              {(mutation) => {
                return (
                  <IconButton
                    title="skip"
                    color="text-white-mini"
                    icon=""
                    onClickEvent={() => mutation()}
                  />
                );
              }}
            </Mutation>
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
                        <Typography
                          variant="h5"
                          style={{
                            color: '#fff',
                            textAlign: 'center',
                            paddingLeft: 20,
                            paddingRight: 20,
                            marginBottom: 10,
                          }}
                        >
                          Your profile isn't complete.
                        </Typography>
                        <Typography
                          variant="h6"
                          style={{
                            color: '#fff',
                            textAlign: 'center',
                            paddingLeft: 20,
                            paddingRight: 20,
                            marginBottom: 10,
                            maxWidth: 300,
                          }}
                        >
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
                    ) : (
                      <Column>
                        <Typography variant="h4" style={{ color: '#fff' }}>
                          Welcome to DoodleMeeple
                        </Typography>
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
                        <IconButton
                          color="text-white-mini"
                          disabled={false}
                          onClickEvent={() => {
                            history.push(`/app/creative-roster`);
                          }}
                          icon=""
                          title="Browse"
                          styleOverride={null}
                          type="button"
                          iconPos="right"
                        />
                      </Column>
                    )}

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
                        src={data.userById ? data.userById.profileImg : device}
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
