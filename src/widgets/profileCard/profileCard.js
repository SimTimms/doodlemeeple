import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import { BgImg, ProfileImg } from './components';
import { Row, Column } from '../../components';
import * as socials from '../../assets/social';
import dmDevice from '../../assets/dmDevice.png';
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

  const linkedIn = !creative.linkedIn ? null : creative.linkedIn;
  const twitter = !creative.twitter ? null : creative.twitter;
  const facebook = !creative.facebook ? null : creative.facebook;
  const instagram = !creative.instagram ? null : creative.instagram;
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
          <Row j="center">
            <a
              href={`${process.env.REACT_APP_URL}/public-preview/${creative._id}`}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.social}
            >
              <img
                src={dmDevice}
                className={classes.socialImg}
                alt="Doodle Meeple"
              />
            </a>
            {linkedIn && (
              <a
                href={`${
                  linkedIn.indexOf('linkedin.com/') === -1
                    ? `https://www.linkedin.com/${linkedIn}`
                    : linkedIn
                }`}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.social}
              >
                <img
                  src={socials.socialLinkedIn}
                  className={classes.socialImg}
                  alt="LinkedIn"
                />
              </a>
            )}
            {facebook && (
              <a
                href={`${
                  facebook.indexOf('facebook.com/') === -1
                    ? `https://www.facebook.com/${facebook}`
                    : facebook
                }`}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.social}
              >
                <img
                  src={socials.socialFacebook}
                  className={classes.socialImg}
                  alt="Facebook"
                />
              </a>
            )}
            {twitter && (
              <a
                href={`${
                  twitter.indexOf('twitter.com/') === -1
                    ? `https://www.twitter.com/${twitter}`
                    : twitter
                }`}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.social}
              >
                <img
                  src={socials.socialTwitter}
                  className={classes.socialImg}
                  alt="Twitter"
                />
              </a>
            )}
            {instagram && (
              <a
                href={`${
                  instagram.indexOf('instagram.com/') === -1
                    ? `https://www.instagram.com/${instagram}`
                    : instagram
                }`}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.social}
              >
                <img
                  src={socials.socialInstagram}
                  className={classes.socialImg}
                  alt="Instagram"
                />
              </a>
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
            <Typography className={classes.website}>Website</Typography>
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
