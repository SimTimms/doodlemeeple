import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import { BgImg, ProfileImg } from './components';
import { Row, Column } from '../../components';
import * as socials from '../../assets/social';
import { nameShortener } from '../../utils';

export default function ProfileCard({ creative }) {
  const classes = useStyles();
  const allIsNull =
    !creative.facebook &&
    !creative.twitter &&
    !creative.linkedIn &&
    !creative.instagram &&
    !creative.website &&
    !creative.publicEmail;
  return (
    <div
      className={clsx({
        [classes.creativeCard]: true,
      })}
    >
      <a
        href={`${process.env.REACT_APP_URL}/public-preview/${creative._id}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', color: '#222', width: '100%' }}
      >
        <BgImg creative={creative} />
        <Row>
          <ProfileImg creative={creative} />
          <Column a="flex-start">
            <Typography style={{ fontWeight: 'bold' }}>
              {creative.name}
            </Typography>
            <Typography className={classes.types}>
              {creative.sections.map(
                (section, index) => `${index > 0 ? ', ' : ''} ${section.type}`
              )}
            </Typography>
            {creative.publicEmail && (
              <a
                href={`mailto:${creative.publicEmail}`}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.email}
              >
                <Typography className={classes.email}>
                  {`${creative.publicEmail}`}{' '}
                </Typography>
              </a>
            )}
          </Column>
        </Row>
        <div className={classes.divider}></div>
        <Typography align="center" className={classes.summary}>
          {nameShortener(creative.summary ? creative.summary : '', 60)}
        </Typography>
      </a>
      <Column a="center" bg="#333" p="3px 0 3px 0" h={60}>
        <Column w={160}>
          <Row j="space-around">
            {creative.linkedIn && (
              <a
                href={`${
                  creative.linkedin.indexOf('linkedin.com/') === -1
                    ? `https://www.linkedin.com/${creative.linkedin}`
                    : creative.linkedin
                }`}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.social}
                style={{ backgroundImage: `url(${socials.socialLinkedIn})` }}
              ></a>
            )}
            {creative.facebook && (
              <a
                href={`${
                  creative.facebook.indexOf('facebook.com/') === -1
                    ? `https://www.facebook.com/${creative.facebook}`
                    : creative.facebook
                }`}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.social}
                style={{ backgroundImage: `url(${socials.socialFacebook})` }}
              ></a>
            )}
            {creative.twitter && (
              <a
                href={`${
                  creative.twitter.indexOf('twitter.com/') === -1
                    ? `https://www.twitter.com/${creative.twitter}`
                    : creative.twitter
                }`}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.social}
                style={{ backgroundImage: `url(${socials.socialTwitter})` }}
              ></a>
            )}
            {creative.instagram && (
              <a
                href={`${
                  creative.instagram.indexOf('instagram.com/') === -1
                    ? `https://www.instagram.com/${creative.instagram}`
                    : creative.instagram
                }`}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.social}
                style={{ backgroundImage: `url(${socials.socialInstagram})` }}
              ></a>
            )}
          </Row>
        </Column>
        {creative.website && (
          <a
            href={`${
              creative.website.indexOf('http') === -1
                ? `https://${creative.website}`
                : creative.website
            }`}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.website}
          >
            <Typography className={classes.website}>Visit Website</Typography>
          </a>
        )}

        {allIsNull && (
          <a
            href={`${process.env.REACT_APP_URL}/public-preview/${creative._id}`}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.website}
          >
            <Typography>Profile</Typography>
          </a>
        )}
      </Column>
    </div>
  );
}
