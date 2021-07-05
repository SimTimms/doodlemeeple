import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import { BgImg } from './components';
import { Row, Column, IconButton } from '../../../components';
import { nameShortener } from '../../../utils';

export default function JobProfile({ job }) {
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
        <a
          href={`/job-description/${job._id}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            color: '#222',
            textAlign: 'center',
          }}
        >
          <IconButton
            color="text-dark"
            title="Full Description"
            icon=""
            styleOverride={{ marginTop: 0 }}
            onClickEvent={() => {}}
          />
        </a>
      </Column>
    </div>
  );
}
