import React from 'react';
import { Typography } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { useStyles } from './styles';
import clsx from 'clsx';
import { BgImg } from './components';
import { Column, Row } from '../../../components';
import { nameShortener } from '../../../utils';
import Cookies from 'js-cookie';
import PublicProfileButton from './components/publicProfileButton';
import JobDescriptionButton from './components/jobDescriptionButton';
import dmDevice from '../../../assets/dmDevice.png';

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
          <Row a="center" j="center" mt={5}>
            {job.isExternal ? (
              <Row className={classes.external} mr={5}>
                <Icon>link</Icon>
              </Row>
            ) : (
              <div
                className={classes.externalDm}
                style={{ backgroundImage: `url(${dmDevice})` }}
              ></div>
            )}
            <Typography className={classes.jobName}>{job.name}</Typography>
          </Row>

          {job.isExternal ? (
            <a href={job.sourceLink} target="_blank" rel="noopener noreferrer">
              <Typography align="center" className={classes.meta}>
                {`Source: ${job.externalSource}`}
              </Typography>
            </a>
          ) : (
            job.genre && (
              <Typography align="center" className={classes.meta}>
                {`Genre: ${job.genre}`}
              </Typography>
            )
          )}
        </Column>
        {job.summary && (
          <Typography align="center" className={classes.summary}>
            {nameShortener(job.summary, 120)}
          </Typography>
        )}

        <div className={classes.divider}></div>
        {!userId && !job.isExternal ? (
          <PublicProfileButton jobId={job._id} />
        ) : userId && !job.isExternal ? (
          <JobDescriptionButton jobId={job._id} history={history} />
        ) : (
          job.isExternal && (
            <Column>
              <Typography align="center" className={classes.meta}>
                <a
                  href={job.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Job
                </a>
              </Typography>
            </Column>
          )
        )}
      </Column>
    </div>
  );
}
