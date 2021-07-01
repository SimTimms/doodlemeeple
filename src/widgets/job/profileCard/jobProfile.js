import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import { BgImg } from './components';
import { Row, Column } from '../../../components';

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
          <Row j="flex-start">
            <a
              href={`${job.url}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: '#222', width: '100%' }}
            >
              <Typography
                style={{
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                  textAlign: 'center',
                  fontSize: 16,
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                {job.name}
              </Typography>
            </a>
          </Row>
        </Column>

        {job.summary && (
          <Typography align="center" className={classes.summary}>
            {job.summary}
          </Typography>
        )}
        <div className={classes.divider}></div>
      </Column>
    </div>
  );
}
