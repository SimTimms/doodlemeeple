import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import { BgImg } from './components';
import ReactPlayer from 'react-player';
import {
  Row,
  Column,
  HrefLink,
  DividerMini,
  MenuButtonStandard,
  StatusBadge,
} from '../../../components';
import { timeDifferenceForDate } from '../../../utils/dates';
import { Mutation } from 'react-apollo';
import { REMOVE_MY_POST } from '../data';
import { toaster } from '../../../utils/toaster';
import Cookies from 'js-cookie';

export default function MyPostProfile({ myPost, onDeleteEvent }) {
  const classes = useStyles();
  const userId = Cookies.get('userId');

  return (
    <div
      className={clsx({
        [classes.postCard]: true,
      })}
    >
      <Row j="space-between" a="flex-start" pt={10} pr={10}>
        <Column a="flex-start" w="60px">
          <div
            className={classes.avatar}
            style={{ backgroundImage: `url(${myPost.user.profileImg})` }}
          ></div>
        </Column>

        <Column a="flex-start">
          <Column a="flex-start">
            <Row j="space-between" a="flex-start" h={20}>
              <HrefLink
                title={myPost.user.name}
                url={`/user-profile/${myPost.user._id}`}
              />
              {userId === myPost.user._id && (
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
            <Typography style={{ fontSize: '0.8rem' }}>
              {timeDifferenceForDate(myPost.createdAt)}
            </Typography>
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
                myPost.tags.map((tag) => <StatusBadge status={tag} />)}
            </Row>
            {myPost.featuredImage && (
              <Column w="100%">
                <DividerMini />
                <BgImg previewImage={myPost.featuredImage} onClick={() => {}} />
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
          <a
            href={myPost.url}
            style={{ cursor: 'pointer', marginTop: 5 }}
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </Column>
      </Row>
    </div>
  );
}
