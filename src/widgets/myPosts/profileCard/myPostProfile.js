import React from 'react';
import { Typography, Icon } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import { BgImg } from './components';
import ReactPlayer from 'react-player';
import {
  Row,
  Column,
  HrefLink,
  DividerMini,
  DividerWithBorder,
  MenuButtonStandard,
  MenuButtonStandardText,
  StatusBadge,
} from '../../../components';
import { timeDifferenceForDate } from '../../../utils/dates';
import { Mutation } from 'react-apollo';
import { REMOVE_MY_POST } from '../data';
import { toaster } from '../../../utils/toaster';
import Cookies from 'js-cookie';
import { randomKey } from '../../../utils';
import { MenuContext } from '../../../context';
import imageOptimiser from '../../../utils/imageOptimiser';
import JobDescriptionButton from '../../job/profileCard/components/jobDescriptionButton';
import { HistoryContext } from '../../../context';

const titleHelper = {
  lastOn: 'This user has been active recently',
  job: 'A new job has been posted',
  jobPrivate: 'This user has posted an invite only job',
  newUser: 'A new user! Welcome',
  game: 'A game has been listed',
  kickstarter: 'A kickstarter has been listed',
  public: 'A post has been created',
};

const headerHelper = {
  lastOn: 'Activity',
  job: 'Job',
  jobPrivate: 'This user has posted an invite only job',
  newUser: 'New',
  game: 'Game',
  kickstarter: 'Kickstarter',
  public: 'Post',
};

const iconHelper = {
  lastOn: 'ads_click',
  job: 'post_add',
  jobPrivate: 'lock',
  newUser: 'person',
  game: 'casino',
  kickstarter: 'view_in_ar',
  public: 'chat',
};

export default function MyPostProfile({ myPost, onDeleteEvent }) {
  const classes = useStyles();
  const userId = Cookies.get('DMuserId');
  return (
    <Row a="flex-start">
      <div
        style={{
          width: 100,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <div
          className={clsx({
            [classes.postType]: true,
          })}
        >
          <Typography>{headerHelper[myPost.type]}</Typography>

          <Icon
            style={{ fontSize: '1rem', marginLeft: 5 }}
            title={titleHelper[myPost.type]}
            className={clsx({
              [classes.publicIcon]: true,
              [classes.public]: myPost.type === 'public',
              [classes.kickstarter]: myPost.type === 'kickstarter',
              [classes.game]: myPost.type === 'game',
              [classes.newUser]: myPost.type === 'newUser',
              [classes.lastOn]: myPost.type === 'lastOn',
              [classes.job]: myPost.type === 'job',
            })}
          >
            {iconHelper[myPost.type]}
          </Icon>
        </div>
        <Typography style={{ fontSize: '0.8rem', color: 'rgba(0,0,0,0.5)' }}>
          {timeDifferenceForDate(myPost.createdAt)}
        </Typography>
      </div>
      {myPost.type === 'job' ? (
        <div
          className={clsx({
            [classes.postCard]: true,
          })}
        >
          <div
            className={clsx({
              [classes.job]: myPost.type === 'job',
            })}
            style={{ width: '100%', height: 10 }}
          ></div>
          <Typography
            style={{
              fontWeight: 'bold',
              marginTop: 5,
            }}
          >
            Job Post
          </Typography>
          <HrefLink
            title={`Posted by: ${myPost.user.name}`}
            url={`/user-profile/${myPost.user._id}`}
            underline={true}
          />
          <DividerWithBorder />
          <Typography style={{}}>{myPost.summary}</Typography>

          {userId === myPost.job.user._id ? (
            <MenuContext.Consumer>
              {(menuContext) => {
                return (
                  <MenuButtonStandardText
                    title="Edit"
                    onClickEvent={() =>
                      menuContext.updateMenuContext({
                        ...menuContext,
                        primaryPage: 'jobs',
                        jobPage: {
                          ...menuContext.jobPage,
                          primaryPage: 'editing_job',
                          secondaryPage: 'edit_job',
                          jobId: myPost.job._id,
                        },
                      })
                    }
                  />
                );
              }}
            </MenuContext.Consumer>
          ) : (
            <HistoryContext.Consumer>
              {(history) => (
                <JobDescriptionButton
                  jobId={myPost.job._id}
                  history={history}
                />
              )}
            </HistoryContext.Consumer>
          )}
        </div>
      ) : myPost.type === 'lastOn' ? (
        <div
          className={clsx({
            [classes.postCard]: true,
            [classes.postCardBG]: true,
          })}
          style={{
            backgroundImage: `url(${imageOptimiser(myPost.user.profileBG)})`,
          }}
        >
          <HrefLink
            title={myPost.user.name}
            url={`/user-profile/${myPost.user._id}`}
            onBlack={true}
            underline={true}
          />
        </div>
      ) : myPost.type === 'newUser' ? (
        <div
          className={clsx({
            [classes.postCard]: true,
          })}
        >
          <Column>
            <div
              className={clsx({
                [classes.postCardBGKick]: true,
              })}
              style={{
                backgroundImage: `url(${imageOptimiser(
                  myPost.user.profileBG
                )})`,
                height: 80,
                width: '100%',
              }}
            ></div>
            <Row j="space-between" a="flex-start" pt={10} pr={10}>
              <Column a="flex-start" w="60px">
                <div
                  className={classes.avatar}
                  style={{
                    backgroundImage: `url(${imageOptimiser(
                      myPost.user.profileImg
                    )})`,
                  }}
                ></div>
              </Column>

              <Column a="flex-start">
                <Column a="flex-start">
                  <Row j="space-between" a="flex-start" h={20}>
                    <HrefLink
                      title={myPost.user.name}
                      url={`/user-profile/${myPost.user._id}`}
                    />
                  </Row>

                  <Row j="space-between">
                    <Typography
                      style={{
                        fontSize: 16,
                        marginTop: 5,
                      }}
                    >
                      {myPost.user.summary}
                    </Typography>
                  </Row>

                  <DividerMini />
                </Column>
              </Column>
            </Row>
          </Column>
        </div>
      ) : myPost.type === 'kickstarter' ? (
        <div
          className={clsx({
            [classes.postCard]: true,
            [classes.postCardBGKick]: true,
          })}
          style={{
            backgroundImage: `url(${imageOptimiser(myPost.featuredImage)})`,
          }}
        >
          <div
            style={{
              width: '100%',
              backgroundColor: 'rgba(255,255,255,0.8)',
              marginTop: 160,
              padding: 5,
              boxSizing: 'border-box',
            }}
          >
            <HrefLink
              title={`${myPost.name}`}
              url={`${myPost.url}`}
              underline={true}
            />
            <Typography variant="body1">{myPost.summary}</Typography>
          </div>
        </div>
      ) : myPost.type === 'game' ? (
        <div
          className={clsx({
            [classes.postCard]: true,
          })}
        >
          <Column>
            <div
              className={clsx({
                [classes.postCardBGKick]: true,
              })}
              style={{
                backgroundImage: `url(${imageOptimiser(myPost.featuredImage)})`,
                height: 80,
                width: '100%',
              }}
            >
              <MenuContext.Consumer>
                {(menuContext) => {
                  return (
                    <div
                      style={{
                        background: 'rgba(0,0,0,0.3)',
                        color: '#fff',
                        padding: 3,
                        width: '100%',
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        '&:hover': { color: '#ddd' },
                      }}
                      onClick={() =>
                        menuContext.updateMenuContext({
                          ...menuContext,
                          homePage: {
                            ...menuContext.homePage,
                            secondaryPage: 'game_profile',
                            gameId: myPost.game._id,
                          },
                        })
                      }
                    >
                      <Typography variant="body1"> {myPost.name}</Typography>
                    </div>
                  );
                }}
              </MenuContext.Consumer>
            </div>
            <Row j="space-between" a="flex-start" pt={10} pr={10}>
              <Column a="flex-start" w="60px">
                <div
                  className={classes.avatar}
                  style={{
                    backgroundImage: `url(${imageOptimiser(
                      myPost.featuredImage
                    )})`,
                  }}
                ></div>
              </Column>

              <Column a="flex-start">
                <Column a="flex-start">
                  <Row j="space-between">
                    <Typography variant="body1">{myPost.summary}</Typography>
                  </Row>

                  <DividerMini />
                </Column>
              </Column>
            </Row>
          </Column>
        </div>
      ) : (
        <div
          className={clsx({
            [classes.postCard]: true,
          })}
        >
          <Row j="space-between" a="flex-start" pt={10} pr={10}>
            <Column a="flex-start" w="60px">
              <div
                className={classes.avatar}
                style={{
                  backgroundImage: `url(${imageOptimiser(
                    myPost.user.profileImg
                  )})`,
                }}
              ></div>
            </Column>

            <Column a="flex-start">
              <Column a="flex-start">
                <Row j="space-between" a="flex-start" h={20}>
                  <HrefLink
                    title={myPost.user.name}
                    url={`/user-profile/${myPost.user._id}`}
                  />
                  {userId === myPost.user._id && myPost.type === 'public' && (
                    <Mutation
                      mutation={REMOVE_MY_POST}
                      variables={{
                        _id: myPost._id,
                      }}
                      onCompleted={() => {
                        toaster('Deleted');
                        onDeleteEvent && onDeleteEvent();
                      }}
                    >
                      {(mutation) => {
                        return (
                          <MenuButtonStandard
                            type="delete"
                            icon="delete"
                            onClickEvent={() => mutation()}
                          />
                        );
                      }}
                    </Mutation>
                  )}
                </Row>

                <Row j="space-between">
                  <Typography
                    style={{
                      fontWeight: 'bold',
                      fontSize: 16,
                      marginTop: 5,
                    }}
                  >
                    {myPost.name}
                  </Typography>
                  {myPost.tags &&
                    myPost.tags.map((tag) => (
                      <StatusBadge status={tag} key={randomKey()} />
                    ))}
                </Row>
                {myPost.featuredImage && (
                  <Column w="100%">
                    <DividerMini />
                    <BgImg
                      previewImage={myPost.featuredImage}
                      onClick={() => {}}
                    />
                  </Column>
                )}
                {myPost.showreel && (
                  <Column w="100%">
                    <DividerMini />
                    <ReactPlayer
                      url={myPost.showreel}
                      playing
                      controls={true}
                      muted={true}
                      style={{
                        background: '#333',
                        width: '100%',
                      }}
                      config={{
                        youtube: {
                          embedOptions: { modestbranding: 1, autoplay: 0 },
                          playerVars: { modestbranding: 1, autoplay: 0 },
                        },
                      }}
                      height={120}
                      width="100%"
                    />
                  </Column>
                )}
                {myPost.summary && (
                  <Column w="100%">
                    <DividerMini />
                    <Typography className={classes.summary}>
                      {myPost.summary}
                    </Typography>
                  </Column>
                )}
                {myPost.url && <HrefLink title={myPost.url} url={myPost.url} />}

                <DividerMini />
              </Column>
            </Column>
          </Row>
        </div>
      )}
    </Row>
  );
}
