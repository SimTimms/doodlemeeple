import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import { BgImg } from './components';
import { Row, Column } from '../../../components';

export default function MyPostProfile({ myPost }) {
  const classes = useStyles();
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
            <Typography>{myPost.user.name}</Typography>
            <a
              href={`${myPost.url}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: '#222', width: '100%' }}
            >
              <Typography
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                {myPost.name}
              </Typography>
            </a>
            <BgImg previewImage={myPost.featuredImage} onClick={() => {}} />

            {myPost.summary && (
              <Typography className={classes.summary}>
                {myPost.summary}
              </Typography>
            )}
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
