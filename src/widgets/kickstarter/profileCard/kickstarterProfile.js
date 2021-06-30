import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import { BgImg } from './components';
import { Row, Column } from '../../../components';
import kickstarterImage from '../kick.png';

export default function KickstarterProfile({ kickstarter }) {
  const classes = useStyles();
  return (
    <div
      className={clsx({
        [classes.creativeCard]: true,
      })}
    >
      <Column j="space-between" h="100%">
        <Column j="flex-start">
          <BgImg previewImage={kickstarter.featuredImage} onClick={() => {}} />
          <Row j="flex-start">
            <a
              href={`${kickstarter.url}`}
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
                {kickstarter.name}
              </Typography>
            </a>
          </Row>
        </Column>

        {kickstarter.summary && (
          <Typography align="center" className={classes.summary}>
            {kickstarter.summary}
          </Typography>
        )}
        <div className={classes.divider}></div>

        <Column w="120px">
          <Typography>Support us on</Typography>
          <a href={kickstarter.url} style={{ cursor: 'pointer', marginTop: 5 }}>
            <img
              src={kickstarterImage}
              style={{ width: '100%', marginBottom: 5 }}
            />
          </a>
        </Column>
      </Column>
    </div>
  );
}
