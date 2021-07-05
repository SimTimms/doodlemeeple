import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import { BgImg } from './components';
import { Column, IconButton } from '../../../components';
import { nameShortener } from '../../../utils';
import Cookies from 'js-cookie';
import PublicProfileButton from './components/publicProfileButton';
import AppProfileButton from './components/appProfileButton';

export default function JobProfile({ job, history }) {
  const userId = Cookies.get('userId');

  const classes = useStyles();
  return (
    <div
      className={clsx({
        [classes.creativeCard]: true,
      })}
    >
      <Column j="space-between" h="100%">
        <Column j="flex-start">
          <BgImg previewImage={job.backgroundImg} onClick={() => {}} />
          <Typography
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
              marginTop: 5,
            }}
          >
            {job.name}
          </Typography>
          {job.genre && (
            <Typography align="center" className={classes.meta}>
              {`Genre: ${job.genre}`}
            </Typography>
          )}
        </Column>
        {job.summary && (
          <Typography align="center" className={classes.summary}>
            {nameShortener(job.summary, 120)}
          </Typography>
        )}

        <div className={classes.divider}></div>
        {!userId ? (
          <PublicProfileButton jobId={job._id} />
        ) : (
          <AppProfileButton jobId={job._id} history={history} />
        )}
      </Column>
    </div>
  );
}
