import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import { BgImg } from './components';
import {
  Row,
  Column,
  HrefLink,
  DividerMini,
  MenuButtonStandard,
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
            <Row j="space-between">
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
            <Typography
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                marginTop: 5,
              }}
            >
              {myPost.name}
            </Typography>

            {myPost.summary && (
              <Column w="100%">
                <DividerMini />
                <Typography className={classes.summary}>
                  {myPost.summary}
                </Typography>
              </Column>
            )}
            {myPost.url && <HrefLink title={myPost.url} url={myPost.url} />}
            {myPost.featuredImage && (
              <Column w="100%">
                <DividerMini />
                <BgImg previewImage={myPost.featuredImage} onClick={() => {}} />
              </Column>
            )}

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
