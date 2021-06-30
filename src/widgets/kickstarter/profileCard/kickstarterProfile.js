import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import { BgImg } from './components';
import { Row, Column } from '../../../components';
import { nameShortener } from '../../../utils';
import kickstarterImage from '../kick.png';
import ksCheck from '../kscheck.jpg';

export default function KickstarterProfile({ kickstarter }) {
  const classes = useStyles();
  return (
    <div
      className={clsx({
        [classes.creativeCard]: true,
      })}
    >
      <Row>
        <BgImg
          previewImage={kickstarter.featuredImage}
          onClick={() => {
            // setLarge(previewImage);
          }}
        />
      </Row>

      <Row>
        <Column a="center">
          <a
            href={`${process.env.REACT_APP_URL}/public-preview/${kickstarter._id}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: '#222', width: '100%' }}
          >
            <Typography
              style={{
                fontWeight: 'bold',
                textDecoration: 'underline',
                textAlign: 'center',
              }}
            >
              {kickstarter.name}
            </Typography>
          </a>
        </Column>
      </Row>
      <Column a="center" p="0">
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
