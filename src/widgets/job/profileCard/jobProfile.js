import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { BgImg } from './components';
import { Column, Row, DividerWithBorder } from '../../../components';
import { nameShortener } from '../../../utils';
import Cookies from 'js-cookie';
import PublicProfileButton from './components/publicProfileButton';
import JobDescriptionButton from './components/jobDescriptionButton';

export default function JobProfile({ job, history }) {
  const userId = Cookies.get('userId');

  const classes = useStyles();
  return (
    <div className={classes.creativeCard}>
      <Column j="space-between" a="flex-start" h="100%">
        <Column j="flex-start" a="flex-start">
          <BgImg previewImage={job.backgroundImg} onClick={() => {}} />
          <Row a="flex-start" j="flex-start" mt={5}>
            <Typography className={classes.jobName}>{job.name}</Typography>
          </Row>
          {job.isExternal ? (
            <a href={job.sourceLink} target="_blank" rel="noopener noreferrer">
              <Typography className={classes.meta}>
                {`Source: ${job.externalSource}`}
              </Typography>
            </a>
          ) : (
            job.genre && (
              <Typography className={classes.meta}>
                {`Genre: ${job.genre}`}
              </Typography>
            )
          )}
        </Column>
        {job.summary && (
          <Typography className={classes.summary}>
            {nameShortener(job.summary, 320)}
          </Typography>
        )}

        <DividerWithBorder />
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
